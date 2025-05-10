import { EnumDeclarationStructure, StructureKind } from 'ts-morph';

import { ImportDeclarationMap } from '../helpers/import-declaration-map';
import { EventArguments, SchemaEnum } from '../types';
import { extractEnumValueDocs } from './prisma-enum-doc';

export function registerEnum(enumType: SchemaEnum, args: EventArguments) {
  const { config, enums, getSourceFile } = args;

  if (!config.emitBlocks.prismaEnums && !enums[enumType.name]) return;

  const dataModelEnum = enums[enumType.name];
  const enumTypesData = dataModelEnum?.values || [];
  console.log('enumTypesData', enumTypesData);
  const sourceFile = getSourceFile({
    name: enumType.name,
    type: 'enum',
  });

  const importDeclarations = new ImportDeclarationMap();

  importDeclarations.set('registerEnumType', {
    moduleSpecifier: '@nestjs/graphql',
    namedImports: [{ name: 'registerEnumType' }],
  });

  // Create valuesMap based on documentation
  const valuesMap = extractEnumValueDocs(enumTypesData);

  const valuesMapString =
    Object.keys(valuesMap).length > 0
      ? `, valuesMap: ${JSON.stringify(valuesMap, null, 2).replace(/"([^"]+)":/g, '$1:')}`
      : '';

  // Filter out empty entries (those that don't have description or deprecationReason)
  const filteredValuesMap = Object.fromEntries(
    Object.entries(valuesMap).filter(([key, value]) => Object.keys(value).length > 0),
  );

  // Format valuesMap for the final output
  const formattedValuesMap = JSON.stringify(filteredValuesMap, null, 2).replace(
    /"([^"]+)":/g,
    '$1:',
  );

  const enumStructure: EnumDeclarationStructure = {
    isExported: true,
    kind: StructureKind.Enum,
    members: enumType.values.map(v => ({
      initializer: JSON.stringify(v),
      name: v,
    })),
    name: enumType.name,
  };

  sourceFile.set({
    statements: [
      ...importDeclarations.toStatements(),
      enumStructure,
      '\n',
      `registerEnumType(${enumType.name}, { name: '${
        enumType.name
      }', description: ${JSON.stringify(dataModelEnum?.documentation)}, valuesMap: ${formattedValuesMap} })`,
    ],
  });
}
