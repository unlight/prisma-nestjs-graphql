import { SourceFile } from 'ts-morph';

type GenerateGraphqlImportArgs = {
    name: string;
    sourceFile: SourceFile;
    importType?: { name: string; moduleSpecifier?: string };
};

export function generateGraphqlImport(args: GenerateGraphqlImportArgs) {
    const { sourceFile, importType } = args;
    let moduleSpecifier = '@nestjs/graphql';
    let name = args.name;
    if (importType) {
        name = importType.name;
        if (!importType.moduleSpecifier) {
            return importType.name;
        }
        if (importType.moduleSpecifier) {
            moduleSpecifier = importType.moduleSpecifier;
        }
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
