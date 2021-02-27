import getRelativePath from 'get-relative-path';

export function relativePath(from: string, to: string) {
    if (!from.startsWith('/')) {
        from = `/${from}`;
    }
    if (!to.startsWith('/')) {
        to = `/${to}`;
    }
    let result = getRelativePath(from, to);
    if (!result.startsWith('.')) {
        result = `./${result}`;
    }
    if (result.endsWith('.ts')) {
        result = result.slice(0, -3);
    }
    return result;
}
