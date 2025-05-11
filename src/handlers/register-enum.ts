import { EnumDeclarationStructure, StructureKind } from 'ts-morph';

import { ImportDeclarationMap } from '../helpers/import-declaration-map';
import { EventArguments, SchemaEnum } from '../types';
import { extractEnumValueDocs } from './prisma-enum-doc';

export function registerEnum(enumType: SchemaEnum, args: EventArguments) {
  const { config, enums, getSourceFile } = args;

  if (!config.emitBlocks.prismaEnums && !enums[enumType.name]) return;

  const dataModelEnum = enums[enumType.name];
  const enumTypesData = dataModelEnum?.values || [];
  const sourceFile = getSourceFile({
    name: enumType.name,
    type: 'enum',
  });

  const importDeclarations = new ImportDeclarationMap();

  importDeclarations.set('registerEnumType', {
    moduleSpecifier: '@nestjs/graphql',
    namedImports: [{ name: 'registerEnumType' }],
  });

  // Extract valuesMap from enum documentation
  const valuesMap = extractEnumValueDocs(enumTypesData);

  // Remove entries with no description or deprecationReason
  const filteredValuesMap = Object.fromEntries(
    Object.entries(valuesMap).filter(([_, v]) => Object.keys(v).length > 0),
  );

  // Format only if needed
  const hasValuesMap = Object.keys(filteredValuesMap).length > 0;
  const formattedValuesMap = hasValuesMap
    ? JSON.stringify(filteredValuesMap, null, 2).replace(/"([^"]+)":/g, '$1:')
    : '';
  const valuesMapEntry = hasValuesMap ? `, valuesMap: ${formattedValuesMap}` : '';

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
      `registerEnumType(${enumType.name}, { name: '${enumType.name}', description: ${JSON.stringify(
        dataModelEnum?.documentation,
      )}${valuesMapEntry} })`,
    ],
  });
}
