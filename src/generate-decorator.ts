import assert from 'assert';
import {
    ClassDeclaration,
    Node,
    ObjectLiteralExpression,
    PropertyDeclaration,
    SourceFile,
} from 'ts-morph';

import { generateGraphqlImport } from './generate-graphql-import';
import { generateProjectImport } from './generate-project-import';
import { setObjectProperty } from './set-object-property';
import { toGraphqlImportType } from './to-graphql-import-type';
import { toPropertyType } from './to-property-type';

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
    setObjectProperty({
        expression: optionsExpression,
        name: 'nullable',
        value: nullable,
    });
    if (['number', 'string', 'boolean'].includes(typeof defaultValue)) {
        const value = defaultValue as number | string | boolean;
        setObjectProperty({
            expression: optionsExpression,
            name: 'defaultValue',
            value,
        });
    }
    setObjectProperty({
        expression: optionsExpression,
        name: 'description',
        value: description,
    });
}
