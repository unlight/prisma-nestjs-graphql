import { ok } from 'assert';
import JSON5 from 'json5';
import { castArray } from 'lodash';
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
        const usePattern = useInputType?.ALL || useInputType?.[name];
        const graphqlInputType = getGraphqlInputType(inputTypes, usePattern);
        const { isList, location, type } = graphqlInputType;
        const typeName = String(type);
        const settings = modelFieldSettings?.get(name);
        const propertySettings = settings?.getPropertyType();
        const isCustomsApplicable =
            typeName === model?.fields.find(f => f.name === name)?.type;
        const propertyType = castArray(
            propertySettings?.name ||
                getPropertyType({
                    location,
                    type: typeName,
                }),
        );
        // 'UserCreateInput'
        // if (['CreateOneUserArgs'].includes(inputType.name)) {
        //     console.log('field', field);
        //     console.log('inputType', inputType);
        //     console.log('settings', settings);
        //     console.log('propertyType', propertyType);
        //     console.log('typeName', typeName);
        //     console.log('settings', settings);
        // }
        const property = propertyStructure({
            name,
            isNullable: !isRequired,
            propertyType,
            isList,
        });

        classStructure.properties?.push(property);

        if (propertySettings) {
            importDeclarations.create({ ...propertySettings });
        }

        let graphqlType: string;
        const fieldType = settings?.getFieldType();

        if (fieldType && fieldType.input && isCustomsApplicable) {
            graphqlType = fieldType.name;
            importDeclarations.create({ ...fieldType });
        } else {
            const graphqlImport = getGraphqlImport({
                sourceFile,
                location,
                typeName,
                getSourceFile,
            });

            graphqlType = graphqlImport.name;

            if (
                graphqlImport.name !== inputType.name &&
                graphqlImport.specifier &&
                !importDeclarations.has(graphqlImport.name)
            ) {
                importDeclarations.set(graphqlImport.name, {
                    namedImports: [{ name: graphqlImport.name }],
                    moduleSpecifier: graphqlImport.specifier,
                });
            }
        }

        if (settings?.shouldHideField({ name: inputType.name, input: true })) {
            importDeclarations.add('HideField', '@nestjs/graphql');
            property.decorators?.push({ name: 'HideField', arguments: [] });
        } else {
            ok(property.decorators);
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            property.decorators.push({
                name: 'Field',
                arguments: [
                    `() => ${isList ? `[${graphqlType}]` : graphqlType}`,
                    JSON5.stringify({
                        nullable: !isRequired,
                    }),
                ],
            });

            if (isCustomsApplicable) {
                for (const options of settings || []) {
                    if (!options.input || options.kind !== 'Decorator') {
                        continue;
                    }
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    property.decorators.push({
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

        eventEmitter.emitSync('ClassProperty', property, { location, isList });
    }

    sourceFile.set({
        statements: [...importDeclarations.toStatements(), classStructure],
    });
}
