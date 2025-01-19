import { ok } from 'assert';
import JSON5 from 'json5';
import { castArray } from 'lodash';
import { ClassDeclarationStructure, StructureKind } from 'ts-morph';

import { getEnumName } from '../helpers/get-enum-name';
import { getGraphqlImport } from '../helpers/get-graphql-import';
import { getOutputTypeName } from '../helpers/get-output-type-name';
import { getPropertyType } from '../helpers/get-property-type';
import { ImportDeclarationMap } from '../helpers/import-declaration-map';
import { propertyStructure } from '../helpers/property-structure';
import { EventArguments, OutputType } from '../types';

const nestjsGraphql = '@nestjs/graphql';

export function outputType(outputType: OutputType, args: EventArguments) {
  const { config, eventEmitter, fieldSettings, getModelName, getSourceFile, models } =
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

  if (!config.emitBlocks.outputs && !isCountOutput) return;

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

  importDeclarations.add('Field', nestjsGraphql);
  importDeclarations.add('ObjectType', nestjsGraphql);

  for (const field of outputType.fields) {
    const { isList, location, type } = field.outputType;
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
      hasQuestionToken: isCountOutput ? true : undefined,
      isList,
      isNullable: field.isNullable,
      name: field.name,
      propertyType,
    });

    classStructure.properties?.push(property);

    if (propertySettings) {
      importDeclarations.create({ ...propertySettings });
    } else if (propertyType.includes('Decimal')) {
      importDeclarations.add('Decimal', `${config.prismaClientImport}/runtime/library`);
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
        fileType,
        getSourceFile,
        isId: false,
        location,
        sourceFile,
        typeName: outputTypeName,
      });
      const referenceName =
        location === 'enumTypes' ? getEnumName(propertyType[0]) : propertyType[0];

      graphqlType = graphqlImport.name;

      if (
        graphqlImport.specifier &&
        !importDeclarations.has(graphqlImport.name) &&
        ((graphqlImport.name !== outputType.name && !shouldHideField) ||
          (shouldHideField && referenceName === graphqlImport.name))
      ) {
        importDeclarations.set(graphqlImport.name, {
          moduleSpecifier: graphqlImport.specifier,
          namedImports: [{ name: graphqlImport.name }],
        });
      }
    }

    ok(property.decorators, 'property.decorators is undefined');

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
            nullable: Boolean(field.isNullable),
          }),
        ],
        name: 'Field',
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
              arguments: options.arguments as string[],
              name: options.name,
            });
            ok(options.from, "Missed 'from' part in configuration or field setting");
            importDeclarations.create(options);
          }
        }
      }
    }

    eventEmitter.emitSync('ClassProperty', property, {
      isList,
      location,
      propertyType,
    });
  }

  sourceFile.set({
    statements: [...importDeclarations.toStatements(), classStructure],
  });
}
