import { type PropertyDeclarationStructure, StructureKind } from 'ts-morph';

import type { FieldLocation } from '../types.ts';

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
  location: FieldLocation;
}): PropertyDeclarationStructure {
  const {
    hasExclamationToken,
    hasQuestionToken,
    isList,
    isNullable,
    location,
    name,
    propertyType,
  } = args;

  const type = createProperyType({ isList, location, propertyType });

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

export function createProperyType(args: {
  isList: boolean;
  propertyType: string[];
  location: FieldLocation;
}): string {
  const { isList, location, propertyType } = args;

  return propertyType
    .map(type => {
      if (isList) return `Array<${type}>`;
      if (type.startsWith('Prisma.')) return type;
      if (type === 'null') return type;

      if (['inputObjectTypes', 'outputObjectTypes'].includes(location)) {
        return `Identity<${type}>`;
      }

      return type;
    })
    .join(' | ');
}
