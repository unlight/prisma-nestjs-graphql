import {
    ClassDeclarationStructure,
    ImportSpecifierStructure,
    ScriptKind,
    StatementStructures,
    StructureKind,
} from 'ts-morph';

import { ImportDeclarationMap } from '../helpers/import-declaration-map';
import { EventArguments } from '../types';

export function beforeGenerateFiles(args: EventArguments) {
    const { config, project, output } = args;

    if (config.emitSingle) {
        const rootDirectory =
            project.getDirectory(output) || project.createDirectory(output);
        const sourceFile =
            rootDirectory.getSourceFile('index.ts') ||
            rootDirectory.createSourceFile('index.ts');
        const statements = project.getSourceFiles().flatMap(s => {
            if (s === sourceFile) {
                return [];
            }
            const statements = s.getStructure().statements;
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
                        imports.add(namedImport.name, statement.moduleSpecifier);
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
}

export async function generateFiles(args: EventArguments) {
    const { project, config, output, eventEmitter } = args;

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
