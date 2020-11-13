import { PrismaDMMF } from '../types';

export function noAtomicNumberOperations(names: string[]) {
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
