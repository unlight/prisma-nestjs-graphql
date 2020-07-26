import assert from 'assert';
import { Decorator, Node, ObjectLiteralExpression, SourceFile } from 'ts-morph';

import { generateGraphqlImport } from './generate-graphql-import';
import { setObjectProperty } from './set-object-property';

type GenerateClassArgs = {
    sourceFile: SourceFile;
    name: string;
    decoratorName: string; //todo :rename
    properties: {
        name: string;
        value: string | undefined;
    }[];
};

export function generateClass(args: GenerateClassArgs) {
    const { name, sourceFile, decoratorName, properties } = args;

    generateGraphqlImport({ sourceFile, name: decoratorName });

    let classDeclaration = sourceFile
        .getClasses()
        .find((classDeclaration) => classDeclaration.getName() === name);
    if (!classDeclaration) {
        classDeclaration = sourceFile.addClass({
            name,
            isExported: true,
            decorators: [{ name: decoratorName, arguments: ['{}'] }],
        });
    }
    let decorator = classDeclaration
        .getDecorators()
        .find((decorator) => decorator.getName() === decoratorName);
    if (!decorator) {
        generateGraphqlImport({ name: decoratorName, sourceFile });
        decorator = classDeclaration.addDecorator({
            name: decoratorName,
            arguments: ['{}'],
        });
    }
    assert(decorator);
    const callExpression = decorator.getCallExpression();
    assert(callExpression);
    let objectExpression = callExpression
        .getArguments()
        .find((node) => Node.isObjectLiteralExpression(node)) as
        | ObjectLiteralExpression
        | undefined;
    if (!objectExpression) {
        [objectExpression] = callExpression.addArguments(['{}']) as ObjectLiteralExpression[];
    }

    for (const property of properties) {
        setObjectProperty({
            expression: objectExpression,
            name: property.name,
            value: property.value,
        });
    }

    return classDeclaration;
}
