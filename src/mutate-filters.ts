import { PrismaDMMF } from './types';

type MutateFiltersOptions = {
    atomicNumberOperations?: boolean;
    combineScalarFilters?: boolean;
};

export function mutateFilters(inputTypes: PrismaDMMF.InputType[], options: MutateFiltersOptions) {
    const mutations = [
        options.combineScalarFilters && [
            combineScalarFilters(inputTypes, [
                'StringFilter',
                'NullableStringFilter',
                'StringNullableFilter',
                'NestedStringNullableFilter',
                'NestedStringFilter',
            ]),
            combineScalarFilters(inputTypes, [
                'BooleanFilter',
                'NullableBooleanFilter',
                'BoolNullableFilter',
                'NestedBoolNullableFilter',
            ]),
            combineScalarFilters(inputTypes, [
                'IntFilter',
                'NullableIntFilter',
                'IntNullableFilter',
                'NestedIntNullableFilter',
                'NestedIntFilter',
            ]),
            combineScalarFilters(inputTypes, [
                'FloatFilter',
                'NullableFloatFilter',
                'FloatNullableFilter',
                'NestedFloatNullableFilter',
                'NestedFloatFilter',
            ]),
            combineScalarFilters(inputTypes, [
                'DateTimeFilter',
                'NullableDateTimeFilter',
                'DateTimeNullableFilter',
                'NestedDateTimeNullableFilter',
                'NestedDateTimeFilter',
            ]),
            combineScalarFilters(inputTypes, [
                'StringFieldUpdateOperationsInput',
                'NullableStringFieldUpdateOperationsInput',
            ]),
            combineScalarFilters(inputTypes, [
                'IntFieldUpdateOperationsInput',
                'NullableIntFieldUpdateOperationsInput',
            ]),
            combineScalarFilters(inputTypes, [
                'FloatFieldUpdateOperationsInput',
                'NullableFloatFieldUpdateOperationsInput',
            ]),
            combineScalarFilters(inputTypes, [
                'BoolFieldUpdateOperationsInput',
                'NullableBoolFieldUpdateOperationsInput',
            ]),
            combineScalarFilters(inputTypes, [
                'DateTimeFieldUpdateOperationsInput',
                'NullableDateTimeFieldUpdateOperationsInput',
            ]),
        ],
        !options.atomicNumberOperations &&
            noAtomicNumberOperations([
                'StringFieldUpdateOperationsInput',
                'NullableStringFieldUpdateOperationsInput',
                'IntFieldUpdateOperationsInput',
                'NullableIntFieldUpdateOperationsInput',
                'FloatFieldUpdateOperationsInput',
                'NullableFloatFieldUpdateOperationsInput',
                'BoolFieldUpdateOperationsInput',
                'NullableBoolFieldUpdateOperationsInput',
                'DateTimeFieldUpdateOperationsInput',
                'NullableDateTimeFieldUpdateOperationsInput',
            ]),
    ];

    return function (inputType: PrismaDMMF.InputType) {
        for (const mutation of mutations.filter(Boolean).flat()) {
            const result = mutation && mutation(inputType);
            if (!result) {
                return false;
            }
            inputType = result;
        }
        return inputType;
    };
}

function combineScalarFilters(inputTypes: PrismaDMMF.InputType[], names: string[]) {
    let counter = 0;
    let type: PrismaDMMF.InputType | undefined;
    const [main] = names;
    for (const name of names) {
        type = inputTypes.find((t) => t.name === name);
        if (type) {
            type = mutateFieldsType(type, names);
            break;
        }
    }

    return (inputType: PrismaDMMF.InputType) => {
        if (!type) {
            return inputType;
        }
        if (names.includes(inputType.name)) {
            counter++;
            if (counter > 1) {
                return false;
            }
            inputType.name = main;
            inputType.fields = type.fields;
            return inputType;
        }
        inputType = mutateFieldsType(inputType, names);
        return inputType;
    };

    function mutateFieldsType(inputType: PrismaDMMF.InputType, names: string[]) {
        const [main] = names;
        inputType.fields.forEach((field) => {
            field.inputTypes.forEach((input) => {
                if (names.includes(String(input.type))) {
                    input.type = main;
                }
            });
        });
        return inputType;
    }
}

function noAtomicNumberOperations(names: string[]) {
    return (inputType: PrismaDMMF.InputType) => {
        if (names.includes(inputType.name)) {
            return false;
        }
        inputType.fields = inputType.fields.map((field) => {
            field.inputTypes = field.inputTypes.filter((inputType) => {
                return !names.includes(String(inputType.type));
            });
            return field;
        });
        return inputType;
    };
}
