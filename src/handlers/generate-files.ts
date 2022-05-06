import { ok } from 'assert';
import {
  ClassDeclarationStructure,
  ImportSpecifierStructure,
  StatementStructures,
  StructureKind,
} from 'ts-morph';

import { ImportDeclarationMap } from '../helpers/import-declaration-map';
import { EventArguments } from '../types';

export async function generateFiles(args: EventArguments) {
  const { project, config, output, eventEmitter } = args;

  if (config.emitSingle) {
    const rootDirectory =
      project.getDirectory(output) || project.createDirectory(output);
    const sourceFile =
      rootDirectory.getSourceFile('index.ts') ||
      rootDirectory.createSourceFile('index.ts', undefined, { overwrite: true });
    const statements = project.getSourceFiles().flatMap(s => {
      if (s === sourceFile) {
        return [];
      }
      const classDeclaration = s.getClass(() => true);
      const statements = s.getStructure().statements;
      // Reget decorator full name
      // TODO: Check possible bug of ts-morph
      if (Array.isArray(statements)) {
        for (const statement of statements) {
          if (
            !(typeof statement === 'object' && statement.kind === StructureKind.Class)
          ) {
            continue;
          }
          for (const property of statement.properties || []) {
            for (const decorator of property.decorators || []) {
              const fullName = classDeclaration
                ?.getProperty(property.name)
                ?.getDecorator(decorator.name)
                ?.getFullName();
              ok(
                fullName,
                `Cannot get full name of decorator of class ${statement.name!}`,
              );
              decorator.name = fullName;
            }
          }
        }
      }

      project.removeSourceFile(s);
      return statements;
    });
    const imports = new ImportDeclarationMap();
    const enums: (StatementStructures | string)[] = [];
    const classes: ClassDeclarationStructure[] = [];
    for (const statement of statements as (StatementStructures | string)[]) {
      if (typeof statement === 'string') {
        if (statement.startsWith('registerEnumType')) {
          enums.push(statement);
        }
        continue;
      }
      switch (statement.kind) {
        case StructureKind.ImportDeclaration:
          if (
            statement.moduleSpecifier.startsWith('./') ||
            statement.moduleSpecifier.startsWith('..')
          ) {
            continue;
          }
          for (const namedImport of statement.namedImports as ImportSpecifierStructure[]) {
            const name = namedImport.alias || namedImport.name;
            imports.add(name, statement.moduleSpecifier);
          }
          if (statement.defaultImport) {
            imports.create({
              from: statement.moduleSpecifier,
              name: statement.defaultImport,
              defaultImport: statement.defaultImport,
            });
          }
          if (statement.namespaceImport) {
            imports.create({
              from: statement.moduleSpecifier,
              name: statement.namespaceImport,
              namespaceImport: statement.namespaceImport,
            });
          }
          break;
        case StructureKind.Enum:
          enums.unshift(statement);
          break;
        case StructureKind.Class:
          classes.push(statement);
          break;
      }
    }
    sourceFile.set({
      kind: StructureKind.SourceFile,
      statements: [...imports.toStatements(), ...enums, ...classes],
    });
  }

  if (config.emitCompiled) {
    project.compilerOptions.set({
      declaration: true,
      declarationDir: output,
      rootDir: output,
      outDir: output,
      emitDecoratorMetadata: false,
      skipLibCheck: true,
    });
    const emitResult = await project.emit();
    const errors = emitResult.getDiagnostics().map(d => String(d.getMessageText()));
    if (errors.length > 0) {
      eventEmitter.emitSync('Warning', errors);
    }
  } else {
    await project.save();
  }
}
