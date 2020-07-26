import assert from 'assert';
export { generatorOptions } from './generator-options';

export function stringContains(expected: string, actual: string) {
    expected = expected.replace(/\s+/g, ' ');
    assert(actual.replace(/\s+/g, ' ').includes(expected), `Missing ${expected} in:\n${actual}`);
}

export function stringNotContains(expected: string, actual: string) {
    expected = expected.replace(/\s+/g, ' ');
    assert(
        actual.replace(/\s+/g, ' ').includes(expected) === false,
        `Exists ${expected} in:\n${actual}`,
    );
}
