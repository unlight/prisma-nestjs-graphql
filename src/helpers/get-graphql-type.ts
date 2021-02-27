import { FieldLocation } from '../types';

/**
 * Return type for `Field` decorator
 */
export function getGraphqlType(args: {
    type: string;
    location: FieldLocation;
    isId?: boolean;
}) {
    const { type, location, isId } = args;

    if (['inputObjectTypes', 'outputObjectTypes', 'enumTypes'].includes(location)) {
        return type;
    }

    if (isId) {
        return 'ID';
    }

    let result = 'String';
    switch (type) {
        case 'Float':
        case 'Int':
        case 'Boolean':
        case 'String':
            result = type;
            break;
        case 'DateTime':
            result = 'Date';
            break;
        case 'true':
            result = 'Boolean';
            break;
    }

    return result;
}
