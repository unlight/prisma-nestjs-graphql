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
        isNullable,
        propertyType,
        name,
        isList,
        hasQuestionToken,
        hasExclamationToken,
    } = args;
    const type = propertyType
        .map(type => (isList ? `Array<${type}>` : type))
        .join(' | ');

    return {
        kind: StructureKind.Property,
        name,
        type,
        hasQuestionToken: hasQuestionToken ?? isNullable,
        hasExclamationToken: hasExclamationToken ?? !isNullable,
        decorators: [],
        leadingTrivia: '\n',
    };
}
