import AwaitEventEmitter from 'await-event-emitter';

import { EventArguments, InputType } from '../types';

export function noAtomicOperations(eventEmitter: AwaitEventEmitter) {
    eventEmitter.on('BeforeInputType', beforeInputType);
    eventEmitter.on('BeforeGenerateFiles', beforeGenerateFiles);
}

function beforeInputType(args: EventArguments & { inputType: InputType }) {
    const { inputType } = args;

    for (const field of inputType.fields) {
        field.inputTypes = field.inputTypes.filter(inputType => {
            if (isAtomicOperation(String(inputType.type))) {
                return false;
            }
            return true;
        });
    }
}

function beforeGenerateFiles(args: EventArguments) {
    const { project } = args;

    for (const sourceFile of project.getSourceFiles()) {
        const className = sourceFile.getClass(() => true)?.getName();
        if (className && isAtomicOperation(className)) {
            project.removeSourceFile(sourceFile);
        }
    }
}

function isAtomicOperation(name: string) {
    return name.endsWith('FieldUpdateOperationsInput');
}
