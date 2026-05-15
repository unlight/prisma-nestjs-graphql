import type { Configuration } from '../configuration.class.ts';
import type { InputTypeRef, SchemaArg } from '../types.ts';
import { chain, countBy, isEqual } from './utils.ts';

/**
 * Find input type for graphql field decorator.
 */
export function getGraphqlInputType(
  field: SchemaArg,
  inputTypeName: string,
  config: Configuration,
) {
  let result: InputTypeRef | undefined;

  const inputTypes = chain(field.inputTypes)
    .filter(t => !['null', 'Null'].includes(String(t.type)))
    .uniqWith(isEqual)
    .value();

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

  result = config.getInputType({
    fieldInputTypes: inputTypes,
    fieldName: field.name,
    inputTypeName,
  });

  if (result) {
    return result;
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
