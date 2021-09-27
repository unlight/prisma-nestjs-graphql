import AwaitEventEmitter from 'await-event-emitter';
import { PropertyDeclarationStructure } from 'ts-morph';

import { DMMF } from '../types';

export function emitSingle(emitter: AwaitEventEmitter) {
    emitter.on('ClassProperty', classProperty);
}

function classProperty(
    property: PropertyDeclarationStructure,
    eventArguments: {
        location: DMMF.FieldLocation;
        isList: boolean;
        propertyType: string[];
    },
) {
    const { location, isList, propertyType } = eventArguments;
    if (['inputObjectTypes', 'outputObjectTypes'].includes(location) && !isList) {
        const types = propertyType.filter(t => t !== 'null');
        property.type = types.map(t => `InstanceType<typeof ${t}>`).join(' | ');
        if (types.length !== propertyType.length) {
            // If null was removed
            property.type += ' | null';
        }
    }
}
