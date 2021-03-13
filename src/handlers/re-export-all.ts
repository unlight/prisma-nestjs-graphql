import assert from 'assert';
import AwaitEventEmitter from 'await-event-emitter';

import { EventArguments } from '../types';

export function reExportAll(emitter: AwaitEventEmitter) {
    emitter.on('BeforeGenerateFiles', beforeGenerateFiles);
}

function beforeGenerateFiles(args: EventArguments) {
    const { project, output } = args;

    for (const rootDirectory of project.getRootDirectories()) {
        const sourcesFiles = rootDirectory.getSourceFiles();
        const sourceIndexFile = rootDirectory.createSourceFile('index.ts', '', {
            overwrite: true,
        });
        const exportDeclarations = sourcesFiles.flatMap(s => ({
            namedExports: s
                .getExportSymbols()
                .flatMap(s => s.getName())
                .map(name => ({ name })),
            moduleSpecifier: rootDirectory.getRelativePathAsModuleSpecifierTo(s),
        }));
        sourceIndexFile.addExportDeclarations(exportDeclarations);
    }

    const rootDirectory = project.getDirectory(output);
    assert(rootDirectory, 'Cannot get project output directory');
    const sourceIndexFile = rootDirectory.createSourceFile('index.ts', '', {
        overwrite: true,
    });
    const exportDeclarations = project
        .getRootDirectories()
        .map(directory => directory.getSourceFile('index.ts'))
        .map(sourcesFile => {
            assert(sourcesFile, 'Just created index source file not found');
            return {
                namedExports: sourcesFile
                    .getExportSymbols()
                    .map(s => ({ name: s.getName() })),
                moduleSpecifier: rootDirectory.getRelativePathAsModuleSpecifierTo(
                    sourcesFile,
                ),
            };
        });
    sourceIndexFile.addExportDeclarations(exportDeclarations);
}
