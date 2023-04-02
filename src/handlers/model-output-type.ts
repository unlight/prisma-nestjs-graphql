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
import {
  createObjectSettings,
  ObjectSetting,
  ObjectSettings,
} from '../helpers/object-settings';
import { propertyStructure } from '../helpers/property-structure';
import { EventArguments, OutputType } from '../types';

const nestjsGraphql = '@nestjs/graphql';

export function modelOutputType(outputType: OutputType, args: EventArguments) {
  const { getSourceFile, models, config, modelFields, fieldSettings, eventEmitter } =
    args;
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
    kind: StructureKind.Class,
    isExported: true,
    name: outputType.name,
    decorators: [
      {
        name: 'ObjectType',
        arguments: [],
      },
    ],
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
      text: model.documentation,
      config,
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
    let fileType = 'model';
    const { location, isList, type, namespace } = field.outputType;

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
        sourceFile,
        fileType,
        location,
        isId: modelField?.isId,
        noTypeId: config.noTypeId,
        typeName: outputTypeName,
        getSourceFile,
      });

      graphqlType = graphqlImport.name;

      if (graphqlImport.name !== outputType.name && graphqlImport.specifier) {
        importDeclarations.add(graphqlImport.name, graphqlImport.specifier);
      }
    }

    const property = propertyStructure({
      name: field.name,
      isNullable: field.isNullable,
      hasExclamationToken: true,
      hasQuestionToken: location === 'outputObjectTypes',
      propertyType,
      isList,
    });

    if (typeof property.leadingTrivia === 'string' && modelField?.documentation) {
      property.leadingTrivia += createComment(modelField.documentation, settings);
    }

    classStructure.properties?.push(property);

    if (propertySettings) {
      importDeclarations.create({ ...propertySettings });
    } else if (propertyType.includes('Decimal')) {
      importDeclarations.add('Decimal', '@prisma/client/runtime/library');
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
      property.decorators.push({ name: 'HideField', arguments: [] });
    } else {
      // Generate `@Field()` decorator
      property.decorators.push({
        name: 'Field',
        arguments: [
          isList ? `() => [${graphqlType}]` : `() => ${graphqlType}`,
          JSON5.stringify({
            ...settings?.fieldArguments(),
            nullable: Boolean(field.isNullable),
            defaultValue: ['number', 'string', 'boolean'].includes(
              typeof modelField?.default,
            )
              ? modelField?.default
              : undefined,
            description: modelField?.documentation,
          }),
        ],
      });

      for (const setting of settings || []) {
        if (shouldBeDecorated(setting) && (setting.match?.(field.name) ?? true)) {
          property.decorators.push({
            name: setting.name,
            arguments: setting.arguments as string[],
          });
          ok(setting.from, "Missed 'from' part in configuration or field setting");
          importDeclarations.create(setting);
        }
      }

      for (const decorate of config.decorate) {
        if (decorate.isMatchField(field.name) && decorate.isMatchType(outputTypeName)) {
          property.decorators.push({
            name: decorate.name,
            arguments: decorate.arguments?.map(x => pupa(x, { propertyType })),
          });
          importDeclarations.create(decorate);
        }
      }
    }

    eventEmitter.emitSync('ClassProperty', property, {
      location,
      isList,
      propertyType,
    });
  }

  // Generate class decorators from model settings
  for (const setting of modelSettings || []) {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    if (shouldBeDecorated(setting)) {
      classStructure.decorators.push({
        name: setting.name,
        arguments: setting.arguments as string[],
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
