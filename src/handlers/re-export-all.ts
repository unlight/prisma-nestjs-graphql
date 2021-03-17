import AwaitEventEmitter from 'await-event-emitter';

import { EventArguments } from '../types';

export function reExportAll(emitter: AwaitEventEmitter) {
    emitter.on('BeforeGenerateFiles', beforeGenerateFiles);
}

function beforeGenerateFiles(args: EventArguments) {
    const { project, output } = args;
    const rootDirectory = project.getDirectoryOrThrow(output);

    for (const directory of project.getRootDirectories()) {
        if (directory === rootDirectory) {
            continue;
        }
        const sourcesFiles = directory.getSourceFiles();
        const sourceIndexFile = directory.createSourceFile('index.ts', '', {
            overwrite: true,
        });
        const exportDeclarations = sourcesFiles.flatMap(s => ({
            namedExports: s
                .getExportSymbols()
                .flatMap(s => s.getName())
                .map(name => ({ name })),
            moduleSpecifier: directory.getRelativePathAsModuleSpecifierTo(s),
        }));
        sourceIndexFile.addExportDeclarations(exportDeclarations);
    }

    const sourceIndexFile = rootDirectory.createSourceFile('index.ts', '', {
        overwrite: true,
    });
    const exportDeclarations = project
        .getDirectories()
        .filter(d => d !== rootDirectory)
        .map(directory => {
            return directory.getSourceFileOrThrow('index.ts');
        })
        .map(sourcesFile => {
            return {
                namedExports: sourcesFile
                    .getExportSymbols()
                    .map(s => ({ name: s.getName() })),
                moduleSpecifier: rootDirectory.getRelativePathAsModuleSpecifierTo(
                    sourcesFile,
                ),
            };
        });
    if (exportDeclarations.length > 0) {
        sourceIndexFile.addExportDeclarations(exportDeclarations);
    }
}
