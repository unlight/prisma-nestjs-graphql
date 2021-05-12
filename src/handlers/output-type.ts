import { ok } from 'assert';
import JSON5 from 'json5';
import { castArray, trim } from 'lodash';
import { ClassDeclarationStructure, StructureKind } from 'ts-morph';

import { getGraphqlImport } from '../helpers/get-graphql-import';
import { getOutputTypeName } from '../helpers/get-output-type-name';
import { getPropertyType } from '../helpers/get-property-type';
import { ImportDeclarationMap } from '../helpers/import-declaration-map';
import { propertyStructure } from '../helpers/property-structure';
import { EventArguments, OutputType } from '../types';

const nestjsGraphql = '@nestjs/graphql';

export function outputType(outputType: OutputType, args: EventArguments) {
    const {
        getSourceFile,
        models,
        config,
        eventEmitter,
        fieldSettings,
        getModelName,
    } = args;
    const importDeclarations = new ImportDeclarationMap();

    const fileType = 'output';
    const modelName = getModelName(outputType.name) || '';
    const model = models.get(modelName);
    const shouldEmitAggregateOutput =
        model &&
        /(Count|Avg|Sum|Min|Max)AggregateOutputType$/.test(outputType.name) &&
        String(outputType.name).startsWith(model.name);
    // Get rid of bogus suffixes
    outputType.name = getOutputTypeName(outputType.name);

    if (shouldEmitAggregateOutput) {
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
        const settings = model && fieldSettings.get(model.name)?.get(field.name);
        const propertySettings = settings?.getPropertyType();
        // const isCustomsApplicable =
        //     outputTypeName === model?.fields.find(f => f.name === field.name)?.type;
        // todo: remove
        const customType = config.types[outputTypeName];

        // console.log({
        //     'field.outputType': field.outputType,
        //     'outputType.name': outputType.name,
        //     outputTypeName,
        //     'field.name': field.name,
        //     fieldMeta,
        // });

        field.outputType.type = outputTypeName;

        const propertyType = castArray(
            propertySettings?.name ||
                customType?.fieldType?.split('|').map(trim) ||
                getPropertyType({
                    location,
                    type: outputTypeName,
                }),
        );

        const property = propertyStructure({
            name: field.name,
            isNullable: field.isNullable,
            propertyType,
            isList,
        });

        classStructure.properties?.push(property);

        if (propertySettings) {
            importDeclarations.create({ ...propertySettings });
        }

        const graphqlImport = getGraphqlImport({
            sourceFile,
            fileType,
            location,
            isId: false,
            typeName: outputTypeName,
            customType,
            getSourceFile,
        });

        const graphqlType = graphqlImport.name;

        if (graphqlImport.name !== outputType.name && graphqlImport.specifier) {
            importDeclarations.add(graphqlImport.name, graphqlImport.specifier);
        }

        // Create import for typescript field/property type
        if (customType && customType.fieldModule && customType.fieldType) {
            importDeclarations.add(customType.fieldType, customType.fieldModule);
        }

        if (settings?.hideOutput) {
            importDeclarations.add('HideField', nestjsGraphql);
            property.decorators?.push({ name: 'HideField', arguments: [] });
        } else {
            // Generate `@Field()` decorator
            property.decorators?.push({
                name: 'Field',
                arguments: [
                    `() => ${isList ? `[${graphqlType}]` : graphqlType}`,
                    JSON5.stringify({
                        nullable: Boolean(field.isNullable),
                    }),
                ],
            });

            for (const options of settings || []) {
                if (!options.output || options.kind !== 'Decorator') {
                    continue;
                }
                property.decorators?.push({
                    name: options.name,
                    arguments: options.arguments,
                });
                ok(
                    options.from,
                    "Missed 'from' part in configuration or field setting",
                );
                importDeclarations.create(options);
            }
        }

        eventEmitter.emitSync('ClassProperty', property, { location, isList });
    }

    sourceFile.set({
        statements: [...importDeclarations.toStatements(), classStructure],
    });
}
