import { SourceFile } from 'ts-morph';

type GenerateGraphqlImportArgs = {
    name: string;
    sourceFile: SourceFile;
    moduleSpecifier: string | undefined;
};

export function generateGraphqlImport(args: GenerateGraphqlImportArgs) {
    const { moduleSpecifier, name, sourceFile } = args;
    // console.log('name', name, moduleSpecifier);
    if (!moduleSpecifier) {
        return name;
    }
    let importDeclaration = sourceFile.getImportDeclaration(
        (importDeclaration) =>
            importDeclaration.getModuleSpecifier().getLiteralValue() === moduleSpecifier,
    );
    if (!importDeclaration) {
        importDeclaration = sourceFile.addImportDeclaration({
            moduleSpecifier,
        });
    }
    let importSpecifier = importDeclaration
        .getNamedImports()
        .find((importSpecifier) => importSpecifier.getName() === name);

    if (!importSpecifier) {
        importSpecifier = importDeclaration.addNamedImport({
            name,
        });
    }
    return importSpecifier.getName();
}
