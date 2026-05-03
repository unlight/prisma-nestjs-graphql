import { camelCase, startCase } from './lodash.ts';

export function pascalCase(string: string) {
  return startCase(camelCase(string)).replaceAll(' ', '');
}
