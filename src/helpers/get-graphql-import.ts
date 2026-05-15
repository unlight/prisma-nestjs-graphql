import { SourceFile } from 'ts-morph';

import type { Configuration } from '../configuration.class.ts';
import type { FieldLocation } from '../types.ts';
import { adjustModuleSpecifier } from './adjust-module-specifier.ts';
import { fileTypeByLocation } from './file-type-by-location.ts';
import { relativePath } from './relative-path.ts';

export function getGraphqlImport(args: {
  sourceFile: SourceFile;
  typeName: string;
  location: FieldLocation;
  isId?: boolean;
  fileType?: string;
  getSourceFile(args: { type: string; name: string }): SourceFile;
  config: Configuration;
}): { name: string; specifier?: string } {
  const {
    config,
    fileType,
    getSourceFile,
    isId,
    location,
    sourceFile,
    typeName,
  } = args;

  if (location === 'scalar') {
    if (isId && !config.noTypeId) {
      return { name: 'ID', specifier: '@nestjs/graphql' };
    }

    const graphqlType = config.getGraphqlScalar(typeName);

    if (graphqlType) {
      return { name: graphqlType.name, specifier: graphqlType.specifier };
    }

    switch (typeName) {
      case 'Float':
      case 'Int': {
        return { name: typeName, specifier: '@nestjs/graphql' };
      }
      case 'DateTime': {
        return { name: 'Date', specifier: undefined };
      }
      case 'true':
      case 'Boolean': {
        return { name: 'Boolean', specifier: undefined };
      }
      case 'Decimal': {
        return {
          name: 'GraphQLDecimal',
          specifier: 'prisma-graphql-type-decimal',
        };
      }
      case 'Json': {
        return { name: 'GraphQLJSON', specifier: 'graphql-type-json' };
      }
    }

    return { name: 'String', specifier: undefined };
  }

  let sourceFileType = fileTypeByLocation(location);
  if (sourceFileType === 'output' && fileType === 'model') {
    sourceFileType = 'model';
  }

  const specifier = adjustModuleSpecifier(
    relativePath(
      sourceFile.getFilePath(),
      getSourceFile({
        name: typeName,
        type: sourceFileType,
      }).getFilePath(),
    ),
    config.importExtension,
  );

  return { name: typeName, specifier };
}
