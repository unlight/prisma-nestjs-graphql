import { ok } from 'assert';
import JSON5 from 'json5';
import { castArray, last } from 'lodash';
import pupa from 'pupa';
import { ClassDeclarationStructure, StructureKind } from 'ts-morph';

import { getGraphqlImport } from '../helpers/get-graphql-import';
import { getGraphqlInputType } from '../helpers/get-graphql-input-type';
import { getPropertyType } from '../helpers/get-property-type';
import { ImportDeclarationMap } from '../helpers/import-declaration-map';
import { propertyStructure } from '../helpers/property-structure';
import { EventArguments, InputType } from '../types';

export function inputType(
    args: EventArguments & {
        inputType: InputType;
        fileType: string;
        classDecoratorName: string;
    },
) {
    const {
        inputType,
        fileType,
        getSourceFile,
        config,
        eventEmitter,
        classDecoratorName,
        fieldSettings,
        getModelName,
        models,
        removeTypes,
        typeNames,
    } = args;

    typeNames.add(inputType.name);

    const importDeclarations = new ImportDeclarationMap();
    const sourceFile = getSourceFile({
        name: inputType.name,
        type: fileType,
    });
    const classStructure: ClassDeclarationStructure = {
        kind: StructureKind.Class,
        isExported: true,
        name: inputType.name,
        decorators: [
            {
                name: classDecoratorName,
                arguments: [],
            },
        ],
        properties: [],
    };
    const modelName = getModelName(inputType.name) || '';
    const model = models.get(modelName);
    const modelFieldSettings = model && fieldSettings.get(model.name);
    const moduleSpecifier = '@nestjs/graphql';

    // console.log('sourceFile.getBaseName()', sourceFile.getBaseName());

    importDeclarations
        .set('Field', {
            namedImports: [{ name: 'Field' }],
            moduleSpecifier,
        })
        .set(classDecoratorName, {
            namedImports: [{ name: classDecoratorName }],
            moduleSpecifier,
        });

    const useInputType = config.useInputType.find(x =>
        inputType.name.includes(x.typeName),
    );

    for (const field of inputType.fields) {
        field.inputTypes = field.inputTypes.filter(
            t => !removeTypes.has(String(t.type)),
        );
        eventEmitter.emitSync('BeforeGenerateField', field, args);

        const { inputTypes, isRequired, name } = field;

        if (inputTypes.length === 0) {
            // No types
            continue;
        }

        const usePattern = useInputType?.ALL || useInputType?.[name];
        const graphqlInputType = getGraphqlInputType(inputTypes, usePattern);
        const { isList, location, type } = graphqlInputType;
        const typeName = String(type);
        const settings = modelFieldSettings?.get(name);
        const propertySettings = settings?.getPropertyType({
            name: inputType.name,
            input: true,
        });
        const isCustomsApplicable =
            typeName === model?.fields.find(f => f.name === name)?.type;
        const propertyType = castArray(
            propertySettings?.name ||
                getPropertyType({
                    location,
                    type: typeName,
                }),
        );
        const property = propertyStructure({
            name,
            isNullable: !isRequired,
            propertyType,
            isList,
        });
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        classStructure.properties!.push(property);

        if (propertySettings) {
            importDeclarations.create({ ...propertySettings });
        } else if (propertyType.includes('Decimal')) {
            importDeclarations.add('Decimal', '@prisma/client/runtime');
        }

        // Get graphql type
        let graphqlType: string;
        const shouldHideField =
            settings?.shouldHideField({
                name: inputType.name,
                input: true,
            }) ||
            config.decorate.some(
                d =>
                    d.name === 'HideField' &&
                    d.from === '@nestjs/graphql' &&
                    d.isMatchField(name) &&
                    d.isMatchType(inputType.name),
            );

        const fieldType = settings?.getFieldType({
            name: inputType.name,
            input: true,
        });

        if (fieldType && isCustomsApplicable && !shouldHideField) {
            graphqlType = fieldType.name;
            importDeclarations.create({ ...fieldType });
        } else {
            // Import property type class
            const graphqlImport = getGraphqlImport({
                config,
                sourceFile,
                location,
                typeName,
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
                graphqlImport.name !== inputType.name
                // ((graphqlImport.name !== inputType.name && !shouldHideField) ||
                //     (shouldHideField && referenceName === graphqlImport.name))
            ) {
                importDeclarations.set(graphqlImport.name, {
                    namedImports: [{ name: graphqlImport.name }],
                    moduleSpecifier: graphqlImport.specifier,
                });
            }
        }

        ok(property.decorators, 'property.decorators is undefined');

        if (shouldHideField) {
            importDeclarations.add('HideField', '@nestjs/graphql');
            property.decorators.push({ name: 'HideField', arguments: [] });
        } else {
            // Generate `@Field()` decorator
            property.decorators.push({
                name: 'Field',
                arguments: [
                    isList ? `() => [${graphqlType}]` : `() => ${graphqlType}`,
                    JSON5.stringify({
                        ...settings?.fieldArguments(),
                        nullable: !isRequired,
                    }),
                ],
            });

            if (isCustomsApplicable) {
                for (const options of settings || []) {
                    if (
                        (options.kind === 'Decorator' &&
                            options.input &&
                            options.match?.(name)) ??
                        true
                    ) {
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

            for (const decorate of config.decorate) {
                if (
                    decorate.isMatchField(name) &&
                    decorate.isMatchType(inputType.name)
                ) {
                    property.decorators.push({
                        name: decorate.name,
                        arguments: decorate.arguments?.map(x =>
                            pupa(x, { propertyType }),
                        ),
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

    sourceFile.set({
        statements: [...importDeclarations.toStatements(), classStructure],
    });
}
