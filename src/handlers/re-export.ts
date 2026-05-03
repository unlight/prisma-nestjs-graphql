import type { ExportDeclarationStructure } from 'ts-morph';
import { Directory, SourceFile, StructureKind } from 'ts-morph';
import type { ValueOf } from 'type-fest';

import { adjustModuleSpecifier } from '../helpers/adjust-module-specifier.ts';
import type { EventArguments, TAwaitEventEmitter } from '../types.ts';

export const ReExport = {
  All: 'All',
  Directories: 'Directories',
  None: 'None',
  Single: 'Single',
} as const;

export type ReExportType = ValueOf<typeof ReExport>;

export function reExport(emitter: TAwaitEventEmitter) {
  emitter.on('BeforeGenerateFiles', beforeGenerateFiles);
}

function beforeGenerateFiles(args: EventArguments) {
  const { config, output, project } = args;
  const rootDirectory = project.getDirectoryOrThrow(output);
  const { importExtension, reExport } = config;

  if (
    ([ReExport.Directories, ReExport.All] as ReExportType[]).includes(reExport)
  ) {
    for (const directory of rootDirectory.getDescendantDirectories()) {
      let indexSourceFile: SourceFile | undefined;

      const exportDeclarations: ExportDeclarationStructure[] = directory
        .getSourceFiles()
        .filter(sourceFile => {
          return sourceFile.getBaseName() !== 'index.ts';
        })
        .map(sourcesFile =>
          getExportDeclaration(directory, sourcesFile, importExtension),
        );

      if (exportDeclarations.length > 0) {
        indexSourceFile = directory.createSourceFile(
          'index.ts',
          { statements: exportDeclarations },
          { overwrite: true },
        );
      }

      if (indexSourceFile) {
        continue;
      }

      const namespaceExportDeclarations: ExportDeclarationStructure[] =
        directory
          .getDirectories()
          .map(sourceDirectory =>
            getNamespaceExportDeclaration(
              directory,
              sourceDirectory,
              importExtension,
            ),
          );

      project.createSourceFile(
        `${directory.getPath()}/index.ts`,
        { statements: namespaceExportDeclarations },
        { overwrite: true },
      );
    }
  }
  if (reExport === ReExport.Single) {
    const exportDeclarations: ExportDeclarationStructure[] = project
      .getSourceFiles()
      .filter(sourceFile => {
        return sourceFile.getBaseName() !== 'index.ts';
      })
      .map(sourceFile =>
        getExportDeclaration(rootDirectory, sourceFile, importExtension),
      );
    rootDirectory.createSourceFile(
      'index.ts',
      { statements: exportDeclarations },
      { overwrite: true },
    );
  }
  if (reExport === ReExport.All) {
    const exportDeclarations: ExportDeclarationStructure[] = [];
    for (const directory of rootDirectory.getDirectories()) {
      if (directory.getBaseName() === 'node_modules') continue;
      const sourceFile = directory.getSourceFileOrThrow('index.ts');
      exportDeclarations.push(
        getExportDeclaration(rootDirectory, sourceFile, importExtension),
      );
    }
    rootDirectory.createSourceFile(
      'index.ts',
      { statements: exportDeclarations },
      { overwrite: true },
    );
  }
}

function getExportDeclaration(
  directory: Directory,
  sourceFile: SourceFile,
  importExtension: string,
): ExportDeclarationStructure {
  const moduleSpecifier = adjustModuleSpecifier(
    directory.getRelativePathAsModuleSpecifierTo(sourceFile),
    importExtension,
  );
  return {
    kind: StructureKind.ExportDeclaration,
    moduleSpecifier,
    namedExports: sourceFile
      .getExportSymbols()
      .map(s => ({ name: s.getName() })),
  };
}

function getNamespaceExportDeclaration(
  directory: Directory,
  sourceDirectory: Directory,
  importExtension: string,
): ExportDeclarationStructure {
  const moduleSpecifier = adjustModuleSpecifier(
    directory.getRelativePathAsModuleSpecifierTo(sourceDirectory),
    importExtension,
  );
  return {
    kind: StructureKind.ExportDeclaration,
    moduleSpecifier,
  };
}
