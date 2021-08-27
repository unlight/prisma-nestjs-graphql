import { EnumDeclarationStructure, StructureKind } from 'ts-morph';

import { ImportDeclarationMap } from '../helpers/import-declaration-map';
import { EventArguments, SchemaEnum } from '../types';

export function registerEnum(enumType: SchemaEnum, args: EventArguments) {
    const { getSourceFile, enums } = args;
    const dataModelEnum = enums[enumType.name];
    const sourceFile = getSourceFile({
        name: enumType.name,
        type: 'enum',
    });

    const importDeclarations = new ImportDeclarationMap();

    importDeclarations.set('registerEnumType', {
        namedImports: [{ name: 'registerEnumType' }],
        moduleSpecifier: '@nestjs/graphql',
    });

    const enumStructure: EnumDeclarationStructure = {
        kind: StructureKind.Enum,
        isExported: true,
        name: enumType.name,
        members: enumType.values.map(v => ({
            name: v,
            initializer: JSON.stringify(v),
        })),
    };

    sourceFile.set({
        statements: [
            ...importDeclarations.toStatements(),
            enumStructure,
            '\n',
            `registerEnumType(${enumType.name}, { name: '${
                enumType.name
            }', description: ${JSON.stringify(dataModelEnum?.documentation)} })`,
        ],
    });
}
