import AwaitEventEmitter from 'await-event-emitter';
import {
    Directory,
    ExportDeclarationStructure,
    SourceFile,
    StructureKind,
} from 'ts-morph';

import { EventArguments } from '../types';

export enum ReExport {
    None = 'None',
    Directories = 'Directories',
    Single = 'Single',
    All = 'All',
}

export function reExport(emitter: AwaitEventEmitter) {
    emitter.on('BeforeGenerateFiles', beforeGenerateFiles);
}

function beforeGenerateFiles(args: EventArguments) {
    const { project, output, config } = args;
    const rootDirectory = project.getDirectoryOrThrow(output);

    if ([ReExport.Directories, ReExport.All].includes(config.reExport)) {
        for (const directory of rootDirectory.getDirectories()) {
            const exportDeclarations: ExportDeclarationStructure[] = directory
                .getSourceFiles()
                .filter(sourceFile => {
                    return sourceFile.getBaseName() !== 'index.ts';
                })
                .map(sourcesFile => getExportDeclaration(directory, sourcesFile));
            directory.createSourceFile(
                'index.ts',
                {
                    statements: exportDeclarations,
                },
                {
                    overwrite: true,
                },
            );
        }
    }
    if (config.reExport === ReExport.Single) {
        const exportDeclarations: ExportDeclarationStructure[] = project
            .getSourceFiles()
            .filter(sourceFile => {
                return sourceFile.getBaseName() !== 'index.ts';
            })
            .map(sourceFile => getExportDeclaration(rootDirectory, sourceFile));
        rootDirectory.createSourceFile(
            'index.ts',
            {
                statements: exportDeclarations,
            },
            {
                overwrite: true,
            },
        );
    }
    if (config.reExport === ReExport.All) {
        const exportDeclarations: ExportDeclarationStructure[] = [];
        for (const directory of rootDirectory.getDirectories()) {
            const sourceFile = directory.getSourceFileOrThrow('index.ts');
            exportDeclarations.push(getExportDeclaration(rootDirectory, sourceFile));
        }
        rootDirectory.createSourceFile(
            'index.ts',
            {
                statements: exportDeclarations,
            },
            {
                overwrite: true,
            },
        );
    }
}

function getExportDeclaration(
    directory: Directory,
    sourceFile: SourceFile,
): ExportDeclarationStructure {
    return {
        kind: StructureKind.ExportDeclaration,
        namedExports: sourceFile.getExportSymbols().map(s => ({ name: s.getName() })),
        moduleSpecifier: directory.getRelativePathAsModuleSpecifierTo(sourceFile),
    };
}
