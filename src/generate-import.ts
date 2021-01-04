import getRelativePath from 'get-relative-path';
import { SourceFile } from 'ts-morph';

type GenerateGraphqlImportArgs = {
    name: string;
    sourceFile: SourceFile;
    moduleSpecifier: string | undefined;
};

export function generateImport(args: GenerateGraphqlImportArgs) {
    const { moduleSpecifier, name, sourceFile } = args;
    // console.log('name', name, moduleSpecifier);
    if (!moduleSpecifier) {
        return name;
    }
    let importDeclaration = sourceFile.getImportDeclaration(
        importDeclaration =>
            importDeclaration.getModuleSpecifier().getLiteralValue() ===
            moduleSpecifier,
    );
    if (!importDeclaration) {
        importDeclaration = sourceFile.addImportDeclaration({
            moduleSpecifier,
        });
    }
    let importSpecifier = importDeclaration
        .getNamedImports()
        .find(importSpecifier => importSpecifier.getName() === name);

    if (!importSpecifier) {
        importSpecifier = importDeclaration.addNamedImport({
            name,
        });
    }
    return importSpecifier.getName();
}

type GenerateProjectImportArgs = {
    name: string;
    type: string;
    sourceFile: SourceFile;
    projectFilePath(data: { name: string; type: string }): string;
};

export function generateProjectImport(args: GenerateProjectImportArgs) {
    const { name, type, sourceFile, projectFilePath } = args;
    const filePath = relativePath(
        sourceFile.getFilePath(),
        projectFilePath({ name, type }),
    );
    let importDeclaration = sourceFile.getImportDeclaration(
        importDeclaration =>
            importDeclaration.getModuleSpecifier().getLiteralValue() === filePath,
    );
    if (!importDeclaration) {
        importDeclaration = sourceFile.addImportDeclaration({
            moduleSpecifier: filePath,
        });
    }
    let importSpecifier = importDeclaration
        .getNamedImports()
        .find(importSpecifier => importSpecifier.getName() === name);
    if (!importSpecifier) {
        importSpecifier = importDeclaration.addNamedImport({
            name,
        });
    }
    return importSpecifier.getName();
}

function relativePath(from: string, to: string) {
    if (!from.startsWith('/')) {
        from = `/${from}`;
    }
    if (!to.startsWith('/')) {
        to = `/${to}`;
    }
    let result = getRelativePath(from, to);
    if (!result.startsWith('.')) {
        result = `./${result}`;
    }
    if (result.endsWith('.ts')) {
        result = result.slice(0, -3);
    }
    return result;
}
