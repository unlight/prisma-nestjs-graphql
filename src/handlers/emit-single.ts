import AwaitEventEmitter from 'await-event-emitter';
import { PropertyDeclarationStructure } from 'ts-morph';

import { DMMF } from '../types';

export function emitSingle(emitter: AwaitEventEmitter) {
    emitter.on('ClassProperty', classProperty);
}

function classProperty(
    property: PropertyDeclarationStructure,
    eventArguments: { location: DMMF.FieldLocation; isList: boolean },
) {
    const { location, isList } = eventArguments;
    if (['inputObjectTypes', 'outputObjectTypes'].includes(location) && !isList) {
        property.type = `InstanceType<typeof ${String(property.type)}>`;
    }
}
