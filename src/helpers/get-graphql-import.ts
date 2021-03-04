import { SourceFile } from 'ts-morph';

import { FieldLocation, TypeRecord } from '../types';
import { fileTypeByLocation } from './file-type-by-location';
import { relativePath } from './relative-path';

export function getGraphqlImport(args: {
    sourceFile: SourceFile;
    isId?: boolean;
    name: string;
    location: FieldLocation;
    fileType?: string;
    customType?: TypeRecord | null;
    getSourceFile(args: { type: string; name: string }): SourceFile;
}): { name: string; specifier?: string } {
    const {
        fileType,
        location,
        isId,
        name,
        customType,
        sourceFile,
        getSourceFile,
    } = args;

    if (customType && customType.graphqlType) {
        return {
            name: customType.graphqlType,
            specifier: customType.graphqlModule,
        };
    }

    if (location === 'scalar') {
        if (isId) {
            return { name: 'ID', specifier: '@nestjs/graphql' };
        }
        if (['Int', 'Float'].includes(name)) {
            return { name, specifier: '@nestjs/graphql' };
        }
        if (['true', 'Boolean'].includes(name)) {
            return { name: 'Boolean', specifier: undefined };
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
            name,
        }).getFilePath(),
    );

    if (specifier.includes('output-count-aggregate.model')) {
        console.trace('wrong name');
        throw 1;
    }

    return { name, specifier };
}
