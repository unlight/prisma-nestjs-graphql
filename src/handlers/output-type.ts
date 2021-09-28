import { ok } from 'assert';
import JSON5 from 'json5';
import { castArray } from 'lodash';
import { ClassDeclarationStructure, StructureKind } from 'ts-morph';

import { getGraphqlImport } from '../helpers/get-graphql-import';
import { getOutputTypeName } from '../helpers/get-output-type-name';
import { getPropertyType } from '../helpers/get-property-type';
import { ImportDeclarationMap } from '../helpers/import-declaration-map';
import { propertyStructure } from '../helpers/property-structure';
import { EventArguments, OutputType } from '../types';

const nestjsGraphql = '@nestjs/graphql';

export function outputType(outputType: OutputType, args: EventArguments) {
    const { getSourceFile, models, eventEmitter, fieldSettings, getModelName } = args;
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
            propertyType,
            isList,
        });

        classStructure.properties?.push(property);

        if (propertySettings) {
            importDeclarations.create({ ...propertySettings });
        }

        ok(property.decorators, 'property.decorators is undefined');

        if (settings?.shouldHideField({ name: outputType.name, output: true })) {
            importDeclarations.add('HideField', nestjsGraphql);
            property.decorators.push({ name: 'HideField', arguments: [] });
        } else {
            let graphqlType: string;
            const fieldType = settings?.getFieldType({
                name: outputType.name,
                output: true,
            });

            if (fieldType && isCustomsApplicable) {
                graphqlType = fieldType.name;
                importDeclarations.create({ ...fieldType });
            } else {
                const graphqlImport = getGraphqlImport({
                    sourceFile,
                    fileType,
                    location,
                    isId: false,
                    typeName: outputTypeName,
                    getSourceFile,
                });

                graphqlType = graphqlImport.name;

                if (
                    graphqlImport.name !== outputType.name &&
                    graphqlImport.specifier &&
                    !importDeclarations.has(graphqlImport.name)
                ) {
                    importDeclarations.set(graphqlImport.name, {
                        namedImports: [{ name: graphqlImport.name }],
                        moduleSpecifier: graphqlImport.specifier,
                    });
                }
            }

            // Generate `@Field()` decorator
            property.decorators.push({
                name: 'Field',
                arguments: [
                    isList ? `() => [${graphqlType}]` : `() => ${graphqlType}`,
                    JSON5.stringify({
                        nullable: Boolean(field.isNullable),
                    }),
                ],
            });

            if (isCustomsApplicable) {
                for (const options of settings || []) {
                    if (!options.output || options.kind !== 'Decorator') {
                        continue;
                    }
                    property.decorators.push({
                        name: options.name,
                        arguments: options.arguments as string[],
                    });
                    ok(
                        options.from,
                        "Missed 'from' part in configuration or field setting",
                    );
                    importDeclarations.create(options);
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
