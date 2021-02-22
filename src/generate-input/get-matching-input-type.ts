import { DMMF } from '../types';
import { fieldLocationToKind } from '../utils';

/**
 * Find input type for graphql field decorator.
 */
export function getMatchingInputType(inputTypes: DMMF.SchemaArgInputType[]) {
    if (inputTypes.length === 0) {
        throw new Error('Cannot get matching input type from empty array');
    }
    if (inputTypes.length === 1) {
        return inputTypes[0];
    }
    inputTypes = inputTypes.filter(t => !['null', 'Null'].includes(String(t.type)));
    let result: false | DMMF.SchemaArgInputType | undefined;
    result =
        inputTypes.every(x => fieldLocationToKind(x.location) === 'object') &&
        (inputTypes.find(
            x => fieldLocationToKind(x.location) === 'object' && x.isList,
        ) ||
            inputTypes.find(x => String(x.type).endsWith('WhereInput')));
    if (result) {
        return result;
    }
    if (inputTypes.length === 1) {
        return inputTypes[0];
    }

    result =
        inputTypes.every(x => fieldLocationToKind(x.location) === 'enum') &&
        inputTypes.find(x => fieldLocationToKind(x.location) === 'enum' && x.isList);
    if (result) {
        return result;
    }
    result = inputTypes.find(x => fieldLocationToKind(x.location) === 'object');
    if (result) {
        return result;
    }
    throw new TypeError(
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `Cannot get matching input type from ${inputTypes.map(x => x.type)}`,
    );
}
