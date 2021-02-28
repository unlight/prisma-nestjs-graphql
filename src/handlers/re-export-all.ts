import AwaitEventEmitter from 'await-event-emitter';
import { SourceFile } from 'ts-morph';

import { EventArguments } from '../types';

export function reExportAll(emitter: AwaitEventEmitter) {
    emitter.on('beforeGenerateFiles', beforeGenerateFiles);
}

function beforeGenerateFiles(args: EventArguments) {
    const { project } = args;
    const nextFiles = new Set<SourceFile>();

    for (const sourceFile of project.getSourceFiles()) {
        const directoryPath = sourceFile.getDirectory().getPath();
        const testIndexFile = `${directoryPath}/index.ts`;
        const sourceIndexFile =
            project.getSourceFile(testIndexFile) ||
            project.createSourceFile(testIndexFile);
        sourceIndexFile.addExportDeclaration({
            namedExports: sourceFile
                .getExportSymbols()
                .map(s => ({ name: s.getName() })),
            moduleSpecifier: `./${sourceFile.getBaseNameWithoutExtension()}`,
        });

        nextFiles.add(sourceIndexFile);
    }

    const sourceIndexFile = project.createSourceFile('/index.ts');

    for (const sourceFile of nextFiles) {
        const moduleSpecifier = `.${sourceFile.getDirectory().getPath()}`;
        sourceIndexFile.addExportDeclaration({
            namedExports: sourceFile
                .getExportSymbols()
                .map(s => ({ name: s.getName() })),
            moduleSpecifier,
        });
    }
}
