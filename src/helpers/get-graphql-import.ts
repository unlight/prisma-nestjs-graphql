import { SourceFile } from 'ts-morph';

import { FieldLocation } from '../types';
import { fileTypeByLocation } from './file-type-by-location';
import { relativePath } from './relative-path';

export function getGraphqlImport(args: {
    sourceFile: SourceFile;
    typeName: string;
    location: FieldLocation;
    isId?: boolean;
    fileType?: string;
    getSourceFile(args: { type: string; name: string }): SourceFile;
}): { name: string; specifier?: string } {
    const { fileType, location, typeName, isId, sourceFile, getSourceFile } = args;

    if (location === 'scalar') {
        if (isId) {
            return { name: 'ID', specifier: '@nestjs/graphql' };
        }

        switch (typeName) {
            case 'Float':
            case 'Int':
                return { name: typeName, specifier: '@nestjs/graphql' };
            case 'DateTime':
                return { name: 'Date', specifier: undefined };
            case 'true':
            case 'Boolean':
                return { name: 'Boolean', specifier: undefined };
            case 'Decimal':
                return {
                    name: 'GraphQLDecimal',
                    specifier: 'prisma-graphql-type-decimal',
                };
            case 'Json':
                return { name: 'GraphQLJSON', specifier: 'graphql-type-json' };
        }

        return { name: 'String', specifier: undefined };
    }

    let sourceFileType = fileTypeByLocation(location);
    if (sourceFileType === 'output' && fileType === 'model') {
        sourceFileType = 'model';
    }

    const specifier = relativePath(
        sourceFile.getFilePath(),
        getSourceFile({
            type: sourceFileType,
            name: typeName,
        }).getFilePath(),
    );

    return { name: typeName, specifier };
}
