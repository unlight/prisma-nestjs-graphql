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

  const type = propertyType
    .map(type => {
      if (isList) return `Array<${type}>`;
      if (type.startsWith('Prisma.')) return type;

      if (
        !['null'].includes(type) &&
        ['inputObjectTypes', 'outputObjectTypes'].includes(location)
      ) {
        return `Identity<${type}>`;
      }

      return type;
    })
    .join(' | ');

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
