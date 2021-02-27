import assert from 'assert';
import { Node, ObjectLiteralExpression, PropertyDeclaration } from 'ts-morph';

import { updateObjectProperty } from './update-object-property';

/**
 * Generates `@Field()` decorator.
 */
export function generateDecorator(args: {
    propertyDeclaration: PropertyDeclaration;
    graphqlType: string;
    isList: boolean;
    isNullable?: boolean;
    defaultValue?: unknown;
    description?: string;
}) {
    const {
        graphqlType,
        description,
        isNullable,
        defaultValue,
        propertyDeclaration,
        isList,
    } = args;

    const decorator = propertyDeclaration.addDecorator({
        name: 'Field',
        arguments: [`() => ${isList ? `[${graphqlType}]` : graphqlType}`, '{}'],
    });
    const callExpression = decorator.getCallExpression();
    assert(callExpression);
    const optionsExpression = callExpression
        .getArguments()
        .find(node => Node.isObjectLiteralExpression(node)) as
        | ObjectLiteralExpression
        | undefined;
    assert(optionsExpression);
    updateObjectProperty({
        expression: optionsExpression,
        name: 'nullable',
        value: isNullable,
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
