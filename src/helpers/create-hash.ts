import crypto from 'crypto';

export function createHash(...data: any[]) {
    return crypto.createHash('sha1').update(JSON.stringify(data)).digest('hex');
}
