import { SourceFile } from 'ts-morph';

export function generateImport(args: {
    name: string;
    sourceFile: SourceFile;
    moduleSpecifier: string | undefined;
}) {
    const { moduleSpecifier, name, sourceFile } = args;
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
