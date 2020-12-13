import { PrismaDMMF } from '../types';
import { fieldLocationToKind } from '../utils';

/**
 * Find input type for graphql field decorator.
 */
export function getMatchingInputType(
  inputTypes: PrismaDMMF.SchemaArgInputType[],
) {
  if (inputTypes.length === 1) {
    return inputTypes[0];
  }
  inputTypes = inputTypes.filter(
    (t) => !['null', 'Null'].includes(String(t.type)),
  );
  let result =
    inputTypes.every((x) => fieldLocationToKind(x.location) === 'object') &&
    (inputTypes.find(
      (x) => fieldLocationToKind(x.location) === 'object' && x.isList,
    ) ||
      inputTypes.find((x) => String(x.type).endsWith('WhereInput')));
  if (result) {
    return result;
  }
  if (inputTypes.length === 1) {
    return inputTypes[0];
  }
  result = inputTypes.find((x) => fieldLocationToKind(x.location) === 'object');
  if (result) {
    return result;
  }
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  throw new TypeError(
    `Cannot get matching input type from ${inputTypes.map((x) => x.type)}`,
  );
}
