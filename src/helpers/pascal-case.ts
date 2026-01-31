import lodash from 'lodash';

export const { camelCase, startCase } = lodash;

export function pascalCase(string: string) {
  return startCase(camelCase(string)).replaceAll(' ', '');
}
