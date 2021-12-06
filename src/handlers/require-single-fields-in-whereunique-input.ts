import AwaitEventEmitter from 'await-event-emitter';

import { EventArguments, InputType } from '../types';

export function requireSingleFieldsInWhereUniqueInput(eventEmitter: AwaitEventEmitter) {
    eventEmitter.on('BeforeInputType', beforeInputType);
}

function beforeInputType(args: EventArguments & { inputType: InputType }) {
    const { inputType } = args;

    if (!isWhereUniqueInputType(inputType.name) || inputType.fields.length !== 1) {
        return;
    }

    for (const field of inputType.fields) {
        field.isRequired = true;
        field.isNullable = false;
    }
}

function isWhereUniqueInputType(name: string) {
    return name.endsWith('WhereUniqueInput');
}
