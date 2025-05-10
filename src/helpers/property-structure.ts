import { PropertyDeclarationStructure, StructureKind } from 'ts-morph';

/**
 * Get property structure (field) for class.
 */
export function propertyStructure(args: {
  propertyType: string[];
  isList: boolean;
  name: string;
  isNullable?: boolean;
  hasQuestionToken?: boolean;
  hasExclamationToken?: boolean;
}): PropertyDeclarationStructure {
  const {
    hasExclamationToken,
    hasQuestionToken,
    isList,
    isNullable,
    name,
    propertyType,
  } = args;
  const type = propertyType.map(type => (isList ? `Array<${type}>` : type)).join(' | ');

  return {
    decorators: [],
    hasExclamationToken: hasExclamationToken ?? !isNullable,
    hasQuestionToken: hasQuestionToken ?? isNullable,
    kind: StructureKind.Property,
    leadingTrivia: '\n',
    name,
    type,
  };
}
