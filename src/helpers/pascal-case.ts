import { camelCase, startCase } from 'lodash';

export function pascalCase(string: string) {
    return startCase(camelCase(string)).replace(/ /g, '');
}
