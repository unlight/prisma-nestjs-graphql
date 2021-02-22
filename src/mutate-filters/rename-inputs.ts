import { InputType } from '../types';

export function renameInputs(replacements: Record<string, string>) {
    return (inputType: InputType) => {
        const newTypeName = replacements[inputType.name];
        if (newTypeName) {
            inputType.name = newTypeName;
        }

        for (const field of inputType.fields) {
            field.inputTypes = field.inputTypes.filter(input => input.type !== 'Null');
            for (const input of field.inputTypes) {
                const name = String(input.type);
                const newTypeName = replacements[name];
                if (newTypeName) {
                    input.type = newTypeName;
                }
            }
        }

        return inputType;
    };
}
