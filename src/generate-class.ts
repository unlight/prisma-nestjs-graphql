import assert from 'assert';
import { Decorator, Node, ObjectLiteralExpression, SourceFile } from 'ts-morph';

import { generateGraphqlImport } from './generate-graphql-import';
import { setObjectProperty } from './set-object-property';

type GenerateClassArgs = {
    sourceFile: SourceFile;
    name: string;
    decorator: {
        name: string;
        properties?: {
            name: string;
            value?: string;
        }[];
    };
};

export function generateClass(args: GenerateClassArgs) {
    const { name, sourceFile, decorator } = args;

    generateGraphqlImport({ sourceFile, name: decorator.name });

    let classDeclaration = sourceFile
        .getClasses()
        .find((classDeclaration) => classDeclaration.getName() === name);
    if (!classDeclaration) {
        classDeclaration = sourceFile.addClass({
            name,
            isExported: true,
            decorators: [{ name: decorator.name, arguments: ['{}'] }],
        });
    }
    let decoratorDeclaration = classDeclaration
        .getDecorators()
        .find((d) => d.getName() === decorator.name);
    if (!decoratorDeclaration) {
        generateGraphqlImport({ name: decorator.name, sourceFile });
        decoratorDeclaration = classDeclaration.addDecorator({
            name: decorator.name,
            arguments: ['{}'],
        });
    }
    assert(decoratorDeclaration);
    const callExpression = decoratorDeclaration.getCallExpression();
    assert(callExpression);
    let objectExpression = callExpression
        .getArguments()
        .find((node) => Node.isObjectLiteralExpression(node)) as
        | ObjectLiteralExpression
        | undefined;
    if (!objectExpression) {
        [objectExpression] = callExpression.addArguments(['{}']) as ObjectLiteralExpression[];
    }

    for (const property of decorator.properties || []) {
        setObjectProperty({
            expression: objectExpression,
            name: property.name,
            value: property.value,
        });
    }

    return classDeclaration;
}
