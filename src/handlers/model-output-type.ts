import { ok } from 'assert';
import JSON5 from 'json5';
import { castArray } from 'lodash';
import pupa from 'pupa';
import { PlainObject } from 'simplytyped';
import {
  ClassDeclarationStructure,
  ExportSpecifierStructure,
  StatementStructures,
  StructureKind,
} from 'ts-morph';

import { createComment } from '../helpers/create-comment';
import { getGraphqlImport } from '../helpers/get-graphql-import';
import { getOutputTypeName } from '../helpers/get-output-type-name';
import { getPropertyType } from '../helpers/get-property-type';
import { ImportDeclarationMap } from '../helpers/import-declaration-map';
import { isManyAndReturnOutputType } from '../helpers/is-many-and-return';
import {
  createObjectSettings,
  ObjectSetting,
  ObjectSettings,
} from '../helpers/object-settings';
import { propertyStructure } from '../helpers/property-structure';
import { EventArguments, OutputType } from '../types';

const nestjsGraphql = '@nestjs/graphql';

export function modelOutputType(outputType: OutputType, args: EventArguments) {
  const { config, eventEmitter, fieldSettings, getSourceFile, modelFields, models } =
    args;

  if (isManyAndReturnOutputType(outputType.name)) return;

  const model = models.get(outputType.name);
  ok(model, `Cannot find model by name ${outputType.name}`);

  const sourceFile = getSourceFile({
    name: outputType.name,
    type: 'model',
  });
  const sourceFileStructure = sourceFile.getStructure();
  const exportDeclaration = getExportDeclaration(
    model.name,
    sourceFileStructure.statements as StatementStructures[],
  );
  const importDeclarations = new ImportDeclarationMap();
  const classStructure: ClassDeclarationStructure = {
    decorators: [
      {
        arguments: [],
        name: 'ObjectType',
      },
    ],
    isExported: true,
    kind: StructureKind.Class,
    name: outputType.name,
    properties: [],
  };
  (sourceFileStructure.statements as StatementStructures[]).push(classStructure);
  ok(classStructure.decorators, 'classStructure.decorators is undefined');
  const decorator = classStructure.decorators.find(d => d.name === 'ObjectType');
  ok(decorator, 'ObjectType decorator not found');

  let modelSettings: ObjectSettings | undefined;
  // Get model settings from documentation
  if (model.documentation) {
    const objectTypeOptions: PlainObject = {};
    const { documentation, settings } = createObjectSettings({
      config,
      text: model.documentation,
    });
    if (documentation) {
      if (!classStructure.leadingTrivia) {
        classStructure.leadingTrivia = createComment(documentation);
      }
      objectTypeOptions.description = documentation;
    }
    decorator.arguments = settings.getObjectTypeArguments(objectTypeOptions);
    modelSettings = settings;
  }

  importDeclarations.add('Field', nestjsGraphql);
  importDeclarations.add('ObjectType', nestjsGraphql);

  for (const field of outputType.fields) {
    if (config.omitModelsCount && field.name === '_count') continue;

    let fileType = 'model';
    const { isList, location, namespace, type } = field.outputType;

    let outputTypeName = String(type);
    if (namespace !== 'model') {
      fileType = 'output';
      outputTypeName = getOutputTypeName(outputTypeName);
    }
    const modelField = modelFields.get(model.name)?.get(field.name);
    const settings = fieldSettings.get(model.name)?.get(field.name);
    const fieldType = settings?.getFieldType({
      name: outputType.name,
      output: true,
    });
    const propertySettings = settings?.getPropertyType({
      name: outputType.name,
      output: true,
    });

    const propertyType = castArray(
      propertySettings?.name ||
        getPropertyType({
          location,
          type: outputTypeName,
        }),
    );

    // For model we keep only one type
    propertyType.splice(1, propertyType.length);

    if (field.isNullable && !isList) {
      propertyType.push('null');
    }

    let graphqlType: string;

    if (fieldType) {
      graphqlType = fieldType.name;
      importDeclarations.create({ ...fieldType });
    } else {
      const graphqlImport = getGraphqlImport({
        config,
        fileType,
        getSourceFile,
        isId: modelField?.isId,
        location,
        noTypeId: config.noTypeId,
        sourceFile,
        typeName: outputTypeName,
      });

      graphqlType = graphqlImport.name;

      if (graphqlImport.name !== outputType.name && graphqlImport.specifier) {
        importDeclarations.add(graphqlImport.name, graphqlImport.specifier);
      }
    }

    const property = propertyStructure({
      hasExclamationToken: true,
      hasQuestionToken: location === 'outputObjectTypes',
      isList,
      isNullable: field.isNullable,
      name: field.name,
      propertyType,
    });

    if (typeof property.leadingTrivia === 'string' && modelField?.documentation) {
      property.leadingTrivia += createComment(modelField.documentation, settings);
    }

    classStructure.properties?.push(property);

    if (propertySettings) {
      importDeclarations.create({ ...propertySettings });
    } else if (propertyType.includes('Decimal')) {
      importDeclarations.add('Decimal', `${config.prismaClientImport}/runtime/library`);
    }

    ok(property.decorators, 'property.decorators is undefined');

    const shouldHideField =
      settings?.shouldHideField({ name: outputType.name, output: true }) ||
      config.decorate.some(
        d =>
          d.name === 'HideField' &&
          d.from === '@nestjs/graphql' &&
          d.isMatchField(field.name) &&
          d.isMatchType(outputTypeName),
      );

    if (shouldHideField) {
      importDeclarations.add('HideField', nestjsGraphql);
      property.decorators.push({ arguments: [], name: 'HideField' });
    } else {
      // Generate `@Field()` decorator
      property.decorators.push({
        arguments: [
          isList ? `() => [${graphqlType}]` : `() => ${graphqlType}`,
          JSON5.stringify({
            ...settings?.fieldArguments(),
            defaultValue: ['number', 'string', 'boolean'].includes(
              typeof modelField?.default,
            )
              ? modelField?.default
              : undefined,
            description: modelField?.documentation,
            nullable: Boolean(field.isNullable),
          }),
        ],
        name: 'Field',
      });

      for (const setting of settings || []) {
        if (shouldBeDecorated(setting) && (setting.match?.(field.name) ?? true)) {
          property.decorators.push({
            arguments: setting.arguments as string[],
            name: setting.name,
          });
          ok(setting.from, "Missed 'from' part in configuration or field setting");
          importDeclarations.create(setting);
        }
      }

      for (const decorate of config.decorate) {
        if (decorate.isMatchField(field.name) && decorate.isMatchType(outputTypeName)) {
          property.decorators.push({
            arguments: decorate.arguments?.map(x => pupa(x, { propertyType })),
            name: decorate.name,
          });
          importDeclarations.create(decorate);
        }
      }
    }

    eventEmitter.emitSync('ClassProperty', property, {
      isList,
      location,
      propertyType,
    });
  }

  // Generate class decorators from model settings
  for (const setting of modelSettings || []) {
    if (shouldBeDecorated(setting)) {
      classStructure.decorators.push({
        arguments: setting.arguments as string[],
        name: setting.name,
      });
      importDeclarations.create(setting);
    }
  }

  if (exportDeclaration) {
    sourceFile.set({
      statements: [exportDeclaration, '\n', classStructure],
    });
    const classDeclaration = sourceFile.getClassOrThrow(model.name);
    const commentedText = classDeclaration
      .getText()
      .split('\n')
      .map(x => `// ${x}`);
    classDeclaration.remove();
    sourceFile.addStatements(['\n', ...commentedText]);
  } else {
    sourceFile.set({
      statements: [...importDeclarations.toStatements(), classStructure],
    });
  }
}

function shouldBeDecorated(setting: ObjectSetting) {
  return (
    setting.kind === 'Decorator' &&
    (setting.output || setting.model) &&
    !(setting.output && setting.model)
  );
}

function getExportDeclaration(name: string, statements: StatementStructures[]) {
  return statements.find(structure => {
    return (
      structure.kind === StructureKind.ExportDeclaration &&
      (structure.namedExports as ExportSpecifierStructure[]).some(
        o => (o.alias || o.name) === name,
      )
    );
  });
}
