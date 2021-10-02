import { trim } from 'lodash';

export function stringToArray(string: string) {
    return string
        .split(',')
        .map(s => trim(s))
        .filter(Boolean);
}
