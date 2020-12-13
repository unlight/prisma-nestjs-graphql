import assert from 'assert';
import {
  ClassDeclaration,
  Node,
  ObjectLiteralExpression,
  SourceFile,
} from 'ts-morph';

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

  // Check if decorator exists, if class exists but no decorator,
  // it means it is a base class - do not add decorator.
  const isBaseClass =
    classDeclaration &&
    classDeclaration.getDecorator(decorator.name) === undefined;

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

    classDeclaration
      .getProperties()
      .filter((p) => Boolean(p.getDecorator('Field')))
      .forEach((p) => {
        p.remove();
      });

    const properties = decorator.properties?.filter(
      (p) => p.value !== undefined,
    );

    if (properties && properties.length > 0) {
      const callExpression = decoratorDeclaration.getCallExpression();
      assert(callExpression);
      let objectExpression = callExpression
        .getArguments()
        .find((node) => Node.isObjectLiteralExpression(node)) as
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
