import { FieldLocation } from '../types';

/**
 * Returns typescript property type.
 */
export function getPropertyType(args: {
    type: string;
    location: FieldLocation;
}): string[] {
    const { type, location } = args;
    switch (type) {
        case 'Float':
        case 'Int':
            return ['number'];
        case 'String':
            return ['string'];
        case 'Boolean':
            return ['boolean'];
        case 'DateTime':
            return ['Date', 'string'];
        case 'Json':
            return ['any'];
        case 'Null':
            return ['null'];
        case 'Decimal':
            return ['string'];
        case 'Bytes':
            return ['Buffer'];
        case 'BigInt':
            return ['BigInt'];
    }
    if (['inputObjectTypes', 'outputObjectTypes', 'enumTypes'].includes(location)) {
        return [type];
    }
    if (location === 'scalar') {
        return [type];
    }

    return ['unknown'];
}
