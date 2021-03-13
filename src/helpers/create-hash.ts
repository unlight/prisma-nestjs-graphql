import crypto from 'crypto';

export function createHash(...data: unknown[]) {
    return crypto.createHash('sha1').update(JSON.stringify(data)).digest('hex');
}
