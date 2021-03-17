import assert from 'assert';
import { Node, ObjectLiteralExpression, SourceFile } from 'ts-morph';

import { generateImport } from './generate-import';
import { updateObjectProperty } from './update-object-property';

type DecoratorPropertyType = {
    name: string;
    properties?: {
        name: string;
        value?: string;
    }[];
};

export function generateClass(args: {
    sourceFile: SourceFile;
    name: string;
    decorator: DecoratorPropertyType;
}) {
    const { name, sourceFile, decorator } = args;

    generateImport({
        name: decorator.name,
        sourceFile,
        moduleSpecifier: '@nestjs/graphql',
    });

    let classDeclaration = sourceFile
        .getClasses()
        .find(classDeclaration => classDeclaration.getName() === name);

    // Check if decorator exists, if class exists but no decorator,
    // it means it is a base class - do not add decorator.
    const isBaseClass =
        classDeclaration && classDeclaration.getDecorator(decorator.name) === undefined;

    if (!classDeclaration) {
        classDeclaration = sourceFile.addClass({
            name,
            isExported: true,
        });
    }

    assert(classDeclaration);

    if (!isBaseClass) {
        const decoratorDeclaration =
            classDeclaration.getDecorator(decorator.name) ??
            classDeclaration.addDecorator({
                name: decorator.name,
                arguments: [],
            });

        while (decoratorDeclaration.getArguments().length > 0) {
            decoratorDeclaration.removeArgument(0);
        }

        for (const p of classDeclaration
            .getProperties()
            .filter(p => Boolean(p.getDecorator('Field')))) {
            p.remove();
        }

        const properties = decorator.properties?.filter(p => p.value !== undefined);

        if (properties && properties.length > 0) {
            const callExpression = decoratorDeclaration.getCallExpression();
            assert(callExpression);
            let objectExpression = callExpression
                .getArguments()
                .find(node => Node.isObjectLiteralExpression(node)) as
                | ObjectLiteralExpression
                | undefined;
            if (!objectExpression) {
                [objectExpression] = callExpression.addArguments([
                    '{}',
                ]) as ObjectLiteralExpression[];
            }

            for (const property of properties) {
                updateObjectProperty({
                    expression: objectExpression,
                    name: property.name,
                    value: property.value,
                });
            }
        }
    }

    return classDeclaration;
}
