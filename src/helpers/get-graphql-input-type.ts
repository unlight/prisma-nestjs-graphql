import { countBy, isEqual, uniqWith } from 'lodash';
import outmatch from 'outmatch';

import { DMMF } from '../types';

/**
 * Find input type for graphql field decorator.
 */
export function getGraphqlInputType(inputTypes: DMMF.InputTypeRef[], pattern?: string) {
  let result: DMMF.InputTypeRef | undefined;

  inputTypes = inputTypes.filter(t => !['null', 'Null'].includes(String(t.type)));
  inputTypes = uniqWith(inputTypes, isEqual);

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

  if (
    (countTypes.scalar >= 1 || countTypes.enumTypes >= 1) &&
    countTypes.fieldRefTypes === 1
  ) {
    result = inputTypes.find(
      x => (x.location === 'scalar' || x.location === 'enumTypes') && x.isList,
    );

    if (result) {
      return result;
    }

    result = inputTypes.find(
      x => x.location === 'scalar' || x.location === 'enumTypes',
    );

    if (result) {
      return result;
    }
  }

  throw new TypeError(
    `Cannot get matching input type from ${
      inputTypes.map(x => x.type).join(', ') || 'zero length inputTypes'
    }`,
  );
}
