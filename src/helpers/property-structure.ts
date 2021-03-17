import { OptionalKind, PropertyDeclarationStructure } from 'ts-morph';

/**
 * Get property structure (field) for class.
 */
export function propertyStructure(args: {
    propertyType: string[];
    isList: boolean;
    name: string;
    isNullable?: boolean;
}): OptionalKind<PropertyDeclarationStructure> {
    const { isNullable, propertyType, name, isList } = args;
    const type = propertyType
        .map(type => (isList ? `Array<${type}>` : type))
        .join(' | ');

    return {
        name,
        type,
        hasQuestionToken: isNullable,
        hasExclamationToken: !isNullable,
        decorators: [],
        trailingTrivia: '\n',
    };
}
