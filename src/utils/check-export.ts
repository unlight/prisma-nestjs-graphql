import { ClassDeclaration, SourceFile } from 'ts-morph';

type CommentArgs = {
    sourceFile: SourceFile;
    name: string;
    classDeclaration: ClassDeclaration;
};

export function checkExport(args: CommentArgs) {
    const { sourceFile, name, classDeclaration } = args;
    const exportDeclaration = sourceFile.getExportDeclaration((d) => {
        return Boolean(d.getNamedExports().find((x) => x.getNameNode().getText() === name));
    });
    if (exportDeclaration) {
        const commentedText = classDeclaration
            .getText()
            .split('\n')
            .map((x) => `// ${x}`);
        classDeclaration.remove();
        sourceFile.addStatements(['\n', ...commentedText]);
    }
}
