import lodash from 'lodash';

export const {
  camelCase,
  castArray,
  cloneDeep,
  countBy,
  first,
  isEqual,
  isObject,
  kebabCase,
  keyBy,
  last,
  mapKeys,
  memoize,
  merge,
  omit,
  partition,
  remove,
  startCase,
  trim,
  uniq,
  uniqWith,
} = lodash;

export function pascalCase(string: string) {
  return startCase(camelCase(string)).replaceAll(' ', '');
}
