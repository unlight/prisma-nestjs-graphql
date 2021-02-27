import { DMMF } from '../types';

/**
 * Find input type for graphql field decorator.
 */
export function getGraphqlInputType(inputTypes: DMMF.SchemaArgInputType[]) {
    if (inputTypes.length === 0) {
        throw new TypeError('Cannot get matching input type from empty array');
    }
    if (inputTypes.length === 1) {
        return inputTypes[0];
    }
    inputTypes = inputTypes.filter(t => !['null', 'Null'].includes(String(t.type)));

    let result: DMMF.SchemaArgInputType | undefined;
    const isAllObjects = inputTypes.every(x => x.location === 'inputObjectTypes');

    if (isAllObjects) {
        result = inputTypes.find(x => x.isList);
        if (result) {
            return result;
        }
    }

    if (inputTypes.length === 1) {
        return inputTypes[0];
    }

    const isAllEnums = inputTypes.every(x => x.location === 'enumTypes');

    if (isAllEnums) {
        result = inputTypes.find(x => x.isList);
        if (result) {
            return result;
        }
    }

    result = inputTypes.find(x => x.location === 'inputObjectTypes');
    if (result) {
        return result;
    }

    throw new TypeError(
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `Cannot get matching input type from ${inputTypes.map(x => x.type)}`,
    );
}
