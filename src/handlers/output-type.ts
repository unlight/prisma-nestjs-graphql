import { ok } from 'assert';
import JSON5 from 'json5';
import { castArray, last } from 'lodash';
import { ClassDeclarationStructure, StructureKind } from 'ts-morph';

import { getGraphqlImport } from '../helpers/get-graphql-import';
import { getOutputTypeName } from '../helpers/get-output-type-name';
import { getPropertyType } from '../helpers/get-property-type';
import { ImportDeclarationMap } from '../helpers/import-declaration-map';
import { propertyStructure } from '../helpers/property-structure';
import { EventArguments, OutputType } from '../types';

const nestjsGraphql = '@nestjs/graphql';

export function outputType(outputType: OutputType, args: EventArguments) {
  const { getSourceFile, models, eventEmitter, fieldSettings, getModelName, config } =
    args;
  const importDeclarations = new ImportDeclarationMap();

  const fileType = 'output';
  const modelName = getModelName(outputType.name) || '';
  const model = models.get(modelName);
  const isAggregateOutput =
    model &&
    /(?:Count|Avg|Sum|Min|Max)AggregateOutputType$/.test(outputType.name) &&
    String(outputType.name).startsWith(model.name);
  const isCountOutput =
    model?.name && outputType.name === `${model.name}CountOutputType`;
  // Get rid of bogus suffixes
  outputType.name = getOutputTypeName(outputType.name);

  if (isAggregateOutput) {
    eventEmitter.emitSync('AggregateOutput', { ...args, outputType });
  }

  const sourceFile = getSourceFile({
    name: outputType.name,
    type: fileType,
  });

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

  importDeclarations.add('Field', nestjsGraphql);
  importDeclarations.add('ObjectType', nestjsGraphql);

  for (const field of outputType.fields) {
    const { location, isList, type } = field.outputType;
    const outputTypeName = getOutputTypeName(String(type));
    const settings = isCountOutput
      ? undefined
      : model && fieldSettings.get(model.name)?.get(field.name);
    const propertySettings = settings?.getPropertyType({
      name: outputType.name,
      output: true,
    });
    const isCustomsApplicable =
      outputTypeName === model?.fields.find(f => f.name === field.name)?.type;

    field.outputType.type = outputTypeName;

    const propertyType = castArray(
      propertySettings?.name ||
        getPropertyType({
          location,
          type: outputTypeName,
        }),
    );

    const property = propertyStructure({
      name: field.name,
      isNullable: field.isNullable,
      hasQuestionToken: isCountOutput ? true : undefined,
      propertyType,
      isList,
    });

    classStructure.properties?.push(property);

    if (propertySettings) {
      importDeclarations.create({ ...propertySettings });
    } else if (propertyType.includes('Decimal')) {
      importDeclarations.add('Decimal', '@prisma/client/runtime/library');
    }

    // Get graphql type
    let graphqlType: string;
    const shouldHideField =
      settings?.shouldHideField({
        name: outputType.name,
        output: true,
      }) ||
      config.decorate.some(
        d =>
          d.name === 'HideField' &&
          d.from === '@nestjs/graphql' &&
          d.isMatchField(field.name) &&
          d.isMatchType(outputTypeName),
      );

    const fieldType = settings?.getFieldType({
      name: outputType.name,
      output: true,
    });

    if (fieldType && isCustomsApplicable && !shouldHideField) {
      graphqlType = fieldType.name;
      importDeclarations.create({ ...fieldType });
    } else {
      const graphqlImport = getGraphqlImport({
        config,
        sourceFile,
        fileType,
        location,
        isId: false,
        typeName: outputTypeName,
        getSourceFile,
      });

      graphqlType = graphqlImport.name;
      let referenceName = propertyType[0];
      if (location === 'enumTypes') {
        referenceName = last(referenceName.split(' ')) as string;
      }

      if (
        graphqlImport.specifier &&
        !importDeclarations.has(graphqlImport.name) &&
        ((graphqlImport.name !== outputType.name && !shouldHideField) ||
          (shouldHideField && referenceName === graphqlImport.name))
      ) {
        importDeclarations.set(graphqlImport.name, {
          namedImports: [{ name: graphqlImport.name }],
          moduleSpecifier: graphqlImport.specifier,
        });
      }
    }

    ok(property.decorators, 'property.decorators is undefined');

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
          }),
        ],
      });

      if (isCustomsApplicable) {
        for (const options of settings || []) {
          if (
            (options.kind === 'Decorator' &&
              options.output &&
              options.match?.(field.name)) ??
            true
          ) {
            property.decorators.push({
              name: options.name,
              arguments: options.arguments as string[],
            });
            ok(options.from, "Missed 'from' part in configuration or field setting");
            importDeclarations.create(options);
          }
        }
      }
    }

    eventEmitter.emitSync('ClassProperty', property, {
      location,
      isList,
      propertyType,
    });
  }

  sourceFile.set({
    statements: [...importDeclarations.toStatements(), classStructure],
  });
}
