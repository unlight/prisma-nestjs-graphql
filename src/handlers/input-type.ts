import JSON5 from 'json5';
import { ClassDeclarationStructure, StructureKind } from 'ts-morph';

import { getGraphqlImport } from '../helpers/get-graphql-import';
import { getGraphqlInputType } from '../helpers/get-graphql-input-type';
import { getGraphqlType } from '../helpers/get-graphql-type';
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
    } = args;
    const importDeclarations = new ImportDeclarationMap();
    const sourceFile = getSourceFile({
        name: inputType.name,
        type: fileType,
    });
    const classStructure = {
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
    } as ClassDeclarationStructure;

    importDeclarations
        .set('Field', {
            namedImports: [{ name: 'Field' }],
            moduleSpecifier: '@nestjs/graphql',
        })
        .set(classDecoratorName, {
            namedImports: [{ name: classDecoratorName }],
            moduleSpecifier: '@nestjs/graphql',
        });

    for (const field of inputType.fields) {
        eventEmitter.emitSync('BeforeGenerateField', field, args);

        const { inputTypes, isRequired } = field;
        const graphqlInputType = getGraphqlInputType(inputTypes);
        const { isList, location, type } = graphqlInputType;
        const typeName = String(type);
        const customType = config.types[typeName];

        const propertyType = getPropertyType({
            location,
            type: typeName,
        });

        const property = propertyStructure({
            name: field.name,
            isNullable: !isRequired,
            propertyType,
            isList,
        });

        classStructure.properties?.push(property);

        const graphqlType = getGraphqlType({
            location,
            type: typeName,
        });

        const graphqlImport = getGraphqlImport({
            sourceFile,
            location,
            name: graphqlType,
            customType,
            getSourceFile,
        });

        // if (inputType.name === 'JsonFilter') {
        //     console.log({
        //         'inputType.name': inputType.name,
        //         'field.name': field.name,
        //         typeName,
        //         field,
        //         graphqlInputType,
        //         propertyType,
        //         graphqlType,
        //         graphqlImport,
        //     });
        // }

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

        // Generate `@Field()` decorator
        property.decorators?.push({
            name: 'Field',
            arguments: [
                `() => ${isList ? `[${graphqlType}]` : graphqlType}`,
                JSON5.stringify({
                    nullable: !isRequired,
                }),
            ],
        });
    }

    sourceFile.set({
        statements: [...importDeclarations.toStatements(), classStructure],
    });
}
