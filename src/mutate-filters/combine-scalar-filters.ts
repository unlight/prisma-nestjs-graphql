import { PrismaDMMF } from '../types';

export function replacementTypeName(name: string) {
    const pattern = /^(Nested|Nullable)?(String|Int|Float|DateTime|Boolean|Decimal|Json|BigInt|Bytes|Enum\w+?)(Nullable)?(Filter|Input)$/;
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
    }
    return name;
}

export function combineScalarFilters(inputTypes: PrismaDMMF.InputType[]) {
    const replacements = Object.fromEntries(
        inputTypes
            .map(t => [t.name, replacementTypeName(t.name)])
            .filter(({ 0: a, 1: b }) => a !== b),
    ) as Record<string, string>;

    return (inputType: PrismaDMMF.InputType) => {
        const newTypeName = replacements[inputType.name];
        if (newTypeName) {
            inputType.name = newTypeName;
        }

        inputType.fields.forEach(field => {
            field.inputTypes = field.inputTypes.filter(input => input.type !== 'Null');
            field.inputTypes.forEach(input => {
                const name = String(input.type);
                const newTypeName = replacements[name];
                if (newTypeName) {
                    input.type = newTypeName;
                }
            });
        });

        return inputType;
    };
}
