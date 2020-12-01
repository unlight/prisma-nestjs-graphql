import assert from 'assert';
import { ClassDeclaration, Node, ObjectLiteralExpression, SourceFile } from 'ts-morph';

import { generateImport } from './generate-import';
import { updateObjectProperty } from './utils';

export type DecoratorPropertyType = {
    name: string;
    properties?: {
        name: string;
        value?: string;
    }[];
};

type GenerateClassArgs = {
    sourceFile: SourceFile;
    name: string;
    decorator: DecoratorPropertyType;
};

export function generateClass(args: GenerateClassArgs) {
    const { name, sourceFile, decorator } = args;

    generateImport({
        name: decorator.name,
        sourceFile,
        moduleSpecifier: '@nestjs/graphql',
    });

    let classDeclaration = sourceFile
        .getClasses()
        .find((classDeclaration) => classDeclaration.getName() === name);

    if (classDeclaration) {
        classDeclaration.remove();
    }

    classDeclaration = sourceFile.addClass({
        name,
        isExported: true,
        decorators: [{ name: decorator.name, arguments: [] }],
    });

    const decoratorDeclaration = classDeclaration
        .getDecorators()
        .find((d) => d.getName() === decorator.name);

    assert(decoratorDeclaration);

    const callExpression = decoratorDeclaration.getCallExpression();
    assert(callExpression);
    if (decorator.properties) {
        let objectExpression = callExpression
            .getArguments()
            .find((node) => Node.isObjectLiteralExpression(node)) as
            | ObjectLiteralExpression
            | undefined;
        if (!objectExpression) {
            [objectExpression] = callExpression.addArguments(['{}']) as ObjectLiteralExpression[];
        }

        for (const property of decorator.properties) {
            updateObjectProperty({
                expression: objectExpression,
                name: property.name,
                value: property.value,
            });
        }
    }

    return classDeclaration;
}

type GenerateClassProperty = {
    classDeclaration: ClassDeclaration;
    name: string;
    type: string;
    isRequired: boolean;
    isReadOnly?: boolean;
};

export function generateClassProperty(args: GenerateClassProperty) {
    const { type, isRequired, name, classDeclaration, isReadOnly } = args;
    return classDeclaration.addProperty({
        leadingTrivia: '\n',
        name,
        type,
        hasQuestionToken: !isRequired,
        hasExclamationToken: isRequired,
        isReadonly: isReadOnly,
    });
}
