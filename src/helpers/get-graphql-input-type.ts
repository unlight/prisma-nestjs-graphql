import { countBy } from 'lodash';
import outmatch from 'outmatch';

import { DMMF } from '../types';

/**
 * Find input type for graphql field decorator.
 */
// eslint-disable-next-line sonarjs/cognitive-complexity
export function getGraphqlInputType(
    inputTypes: DMMF.SchemaArgInputType[],
    pattern?: string,
) {
    let result: DMMF.SchemaArgInputType | undefined;

    inputTypes = inputTypes.filter(t => !['null', 'Null'].includes(String(t.type)));

    if (inputTypes.length === 1) {
        return inputTypes[0];
    }

    const countTypes = countBy(inputTypes, x => x.location);
    const isOneType = Object.keys(countTypes).length === 1;

    if (isOneType) {
        result = inputTypes.find(x => x.isList);
        if (result) {
            return result;
        }
    }

    if (pattern) {
        if (pattern.startsWith('matcher:') || pattern.startsWith('match:')) {
            const { 1: patternValue } = pattern.split(':', 2);
            const isMatch = outmatch(patternValue, { separator: false });
            result = inputTypes.find(x => isMatch(String(x.type)));
            if (result) {
                return result;
            }
        }
        result = inputTypes.find(x => String(x.type).includes(pattern));
        if (result) {
            return result;
        }
    }

    result = inputTypes.find(x => x.location === 'inputObjectTypes');
    if (result) {
        return result;
    }

    if (
        countTypes.enumTypes &&
        countTypes.scalar &&
        inputTypes.some(x => x.type === 'Json' && x.location === 'scalar')
    ) {
        result = inputTypes.find(x => x.type === 'Json' && x.location === 'scalar');
        if (result) {
            return result;
        }
    }

    throw new TypeError(
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `Cannot get matching input type from ${
            inputTypes.map(x => x.type).join(', ') || 'zero length inputTypes'
        }`,
    );
}
