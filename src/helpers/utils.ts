import lodash from 'lodash';

export const {
  camelCase,
  castArray,
  chain,
  cloneDeep,
  countBy,
  find,
  first,
  isEmpty,
  isEqual,
  isObject,
  kebabCase,
  keyBy,
  last,
  mapKeys,
  memoize,
  merge,
  omit,
  once,
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

export function toBoolean(value: unknown) {
  return ['true', '1', 'on'].includes(String(value));
}
