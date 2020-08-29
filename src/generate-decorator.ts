import assert from 'assert';
import { Node, ObjectLiteralExpression, PropertyDeclaration } from 'ts-morph';

import { updateObjectProperty } from './update-object-property';

type GenerateDecoratorArgs = {
    propertyDeclaration: PropertyDeclaration;
    /**
     * GraphQL return type.
     */
    fieldType: string;
    nullable: boolean;
    defaultValue?: unknown;
    description?: string;
};

export function generateDecorator(args: GenerateDecoratorArgs) {
    const { description, nullable, defaultValue, fieldType, propertyDeclaration } = args;
    let decorator = propertyDeclaration.getDecorator('Field');
    if (!decorator) {
        decorator = propertyDeclaration.addDecorator({
            name: 'Field',
            arguments: [`() => ${fieldType}`, '{}'],
        });
    }
    assert(decorator);
    const callExpression = decorator.getCallExpression();
    assert(callExpression);
    let optionsExpression = callExpression
        .getArguments()
        .find((node) => Node.isObjectLiteralExpression(node)) as
        | ObjectLiteralExpression
        | undefined;
    if (!optionsExpression) {
        [optionsExpression] = callExpression.addArguments(['{}']) as ObjectLiteralExpression[];
    }
    updateObjectProperty({
        expression: optionsExpression,
        name: 'nullable',
        value: nullable,
    });
    if (['number', 'string', 'boolean'].includes(typeof defaultValue)) {
        const value = defaultValue as number | string | boolean;
        updateObjectProperty({
            expression: optionsExpression,
            name: 'defaultValue',
            value,
        });
    }
    updateObjectProperty({
        expression: optionsExpression,
        name: 'description',
        value: description,
    });
}
