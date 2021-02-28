import { EventArguments, InputType } from '../types';

export function noAtomicOperations(args: EventArguments & { inputType: InputType }) {
    const { config, inputType } = args;
    if (!config.noAtomicOperations) {
        return;
    }

    for (const field of inputType.fields) {
        field.inputTypes = field.inputTypes.filter(inputType => {
            if (isAtomicOperation(String(inputType.type))) {
                return false;
            }
            return true;
        });
    }
}

function isAtomicOperation(name: string) {
    return name.endsWith('FieldUpdateOperationsInput');
}

export function noAtomicBeforeGenerateFiles(args: EventArguments) {
    const { config, project } = args;
    if (!config.noAtomicOperations) {
        return;
    }
    for (const sourceFile of project.getSourceFiles()) {
        const className = sourceFile.getClass(() => true)?.getName();
        if (className && isAtomicOperation(className)) {
            project.removeSourceFile(sourceFile);
        }
    }
}
