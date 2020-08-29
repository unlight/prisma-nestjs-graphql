import { DMMF as PrismaDMMF } from '@prisma/client/runtime/dmmf-types';

export function transformNullableInput(inputTypes: PrismaDMMF.InputType[]) {
    const intMutation = createMutation(inputTypes, [
        'IntFilter',
        'NullableIntFilter',
        'IntNullableFilter',
        'NestedIntNullableFilter',
        'NestedIntFilter',
    ]);
    const booleanMutation = createMutation(inputTypes, [
        'BooleanFilter',
        'NullableBooleanFilter',
        'BoolNullableFilter',
        'NestedBoolNullableFilter',
    ]);
    const stringMutation = createMutation(inputTypes, [
        'StringFilter',
        'NullableStringFilter',
        'StringNullableFilter',
        'NestedStringNullableFilter',
        'NestedStringFilter',
    ]);
    const dateTimeMutation = createMutation(inputTypes, [
        'DateTimeFilter',
        'NullableDateTimeFilter',
        'DateTimeNullableFilter',
        'NestedDateTimeNullableFilter',
        'NestedDateTimeFilter',
    ]);
    return function (inputType: PrismaDMMF.InputType) {
        return (
            booleanMutation(inputType) &&
            intMutation(inputType) &&
            stringMutation(inputType) &&
            dateTimeMutation(inputType)
        );
    };
}

function createMutation(inputTypes: PrismaDMMF.InputType[], names: string[]) {
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
}

function mutateFieldsType(inputType: PrismaDMMF.InputType, names: string[]) {
    const [main] = names;
    inputType.fields.forEach((field) => {
        field.inputType.forEach((input) => {
            if (names.includes(String(input.type))) {
                input.type = main;
            }
        });
    });
    return inputType;
}
