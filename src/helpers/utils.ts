import JSON5 from 'json5';
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

/**
 * Stringify field decorator options, handling `middleware` specially.
 * Middleware values are emitted as identifiers (not string literals) since they
 * are references to imported middleware functions.
 */
export function stringifyFieldOptions(
  options: Record<string, unknown>,
): string {
  const { middleware, ...rest } = options;

  // Stringify non-middleware options
  const baseString = JSON5.stringify(rest);

  // If no middleware, return the base string
  if (!middleware) {
    return baseString;
  }

  // Convert middleware to array of identifiers (unquoted)
  const middlewareArray = Array.isArray(middleware) ? middleware : [middleware];
  const middlewareString = `[${middlewareArray.join(',')}]`;

  // If base is empty object, just return middleware
  if (baseString === '{}') {
    return `{middleware:${middlewareString}}`;
  }

  // Insert middleware into the object string (before closing brace)
  return baseString.replace(/\}$/, `,middleware:${middlewareString}}`);
}
