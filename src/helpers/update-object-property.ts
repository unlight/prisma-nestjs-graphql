import { ObjectLiteralExpression, PropertyAssignment, StructureKind } from 'ts-morph';

export function updateObjectProperty(args: {
  expression: ObjectLiteralExpression;
  name: string;
  value: string | number | boolean | undefined;
}) {
  const { expression, name, value } = args;
  let propertyAssignment = expression.getProperty(name) as
    | PropertyAssignment
    | undefined;

  if (value === undefined) {
    if (propertyAssignment) {
      propertyAssignment.remove();
    }
    return;
  }

  if (!propertyAssignment) {
    propertyAssignment = expression.addProperty({
      initializer: 'undefined',
      kind: StructureKind.PropertyAssignment,
      name,
    }) as PropertyAssignment;
  }

  propertyAssignment.setInitializer(JSON.stringify(value));
}
