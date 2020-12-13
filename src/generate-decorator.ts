import assert from 'assert';
import { Node, ObjectLiteralExpression, PropertyDeclaration } from 'ts-morph';

import { updateObjectProperty } from './utils';

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

/**
 * Generates `@Field` decorator.
 */
export function generateDecorator(args: GenerateDecoratorArgs) {
  const {
    description,
    nullable,
    defaultValue,
    fieldType,
    propertyDeclaration,
  } = args;
  const decorator = propertyDeclaration.addDecorator({
    name: 'Field',
    arguments: [`() => ${fieldType}`, '{}'],
  });
  const callExpression = decorator.getCallExpression();
  assert(callExpression);
  const optionsExpression = callExpression
    .getArguments()
    .find((node) => Node.isObjectLiteralExpression(node)) as
    | ObjectLiteralExpression
    | undefined;
  assert(optionsExpression);
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
