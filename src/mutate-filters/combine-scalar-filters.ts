import { PrismaDMMF } from '../types';
import { renameInputs } from './rename-inputs';

export function replacementTypeName(name: string) {
    // Scalar filters
    const pattern = /^(Nested|Nullable)?(String|Int|Float|DateTime|Boolean|Decimal|Json|BigInt|Bytes|Enum\w+?)(Nullable)?(Filter|WithAggregatesFilter|Input)$/;
    const match = pattern.exec(name);
    if (match) {
        return match
            .slice(1)
            .filter(x => x && !['Nullable', 'Nested'].includes(x))
            .join('');
    }
    switch (name) {
        case 'NestedBoolFilter':
        case 'NestedBoolNullableFilter':
        case 'BoolNullableFilter':
            return 'BooleanFilter';
        case 'NestedBoolNullableWithAggregatesFilter':
        case 'BoolNullableWithAggregatesFilter':
        case 'NestedBoolWithAggregatesFilter':
            return 'BooleanWithAggregatesFilter';
    }

    return name;
}

export function combineScalarFilters(inputTypes: PrismaDMMF.InputType[]) {
    const replacements = Object.fromEntries(
        inputTypes
            .map(t => [t.name, replacementTypeName(t.name)])
            .filter(({ 0: a, 1: b }) => a !== b),
    ) as Record<string, string>;

    return renameInputs(replacements);
}
