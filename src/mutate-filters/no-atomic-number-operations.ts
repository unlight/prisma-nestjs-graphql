import { InputType } from '../types';

export function noAtomicNumberOperations() {
    return (inputType: InputType) => {
        if (isAtomicOperation(inputType.name)) {
            return false;
        }
        inputType.fields = inputType.fields.map(field => {
            field.inputTypes = field.inputTypes.filter(inputType => {
                return !isAtomicOperation(String(inputType.type));
            });
            return field;
        });
        return inputType;
    };
}

function isAtomicOperation(name: string) {
    return name.endsWith('FieldUpdateOperationsInput');
}
