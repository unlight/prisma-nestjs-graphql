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

// type GenerateProjectImportArgs = {
//     name: string;
//     type: string;
//     sourceFile: SourceFile;
//     projectFilePath(data: { name: string; type: string }): string;
// };

// export function generateProjectImport(args: GenerateProjectImportArgs) {
//     const { name, type, sourceFile, projectFilePath } = args;
//     const filePath = relativePath(
//         sourceFile.getFilePath(),
//         projectFilePath({ name, type }),
//     );
//     let importDeclaration = sourceFile.getImportDeclaration(
//         importDeclaration =>
//             importDeclaration.getModuleSpecifier().getLiteralValue() === filePath,
//     );
//     if (!importDeclaration) {
//         importDeclaration = sourceFile.addImportDeclaration({
//             moduleSpecifier: filePath,
//         });
//     }
//     let importSpecifier = importDeclaration
//         .getNamedImports()
//         .find(importSpecifier => importSpecifier.getName() === name);
//     if (!importSpecifier) {
//         importSpecifier = importDeclaration.addNamedImport({
//             name,
//         });
//     }
//     return importSpecifier.getName();
// }
