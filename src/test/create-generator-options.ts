import { GeneratorOptions } from '@prisma/generator-helper';
import { exec } from 'child_process';
import crypto from 'crypto';
import fs from 'fs';
import cachePath from 'temp-dir';

import { DMMF } from '../types';

const {
    dependencies: { '@prisma/generator-helper': generatorVersion },
    // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require('../../package.json');

/**
 * Get generator options after run prisma generate.
 */
export async function createGeneratorOptions(
    schema: string,
    options?: string[],
): Promise<GeneratorOptions & { prismaClientDmmf: DMMF.Document }> {
    const schemaHeader = `
        datasource db {
            provider = "postgresql"
            url = env("DATABASE_URL")
        }
        generator client {
            provider        = "prisma-client-js"
            previewFeatures = ["filterJson"]
        }
    `;
    // eslint-disable-next-line prefer-rest-params
    const hash = createHash(generatorVersion, schemaHeader, arguments);
    const cacheFile = `${cachePath}/options-${hash}.js`;
    if (!fs.existsSync(cacheFile)) {
        const schemaFile = `${cachePath}/schema-${hash}.prisma`;
        const schemaContent = `
            ${schemaHeader}
            generator proxy {
                provider = "node -r ts-node/register/transpile-only src/test/proxy-generator.ts"
                output = "."
                hash = "${hash}"
                ${options?.join('\n') || ''}
            }
            ${schema}
        `;
        fs.writeFileSync(schemaFile, schemaContent);

        await new Promise((resolve, reject) => {
            const proc = exec(
                `node node_modules/prisma/build/index.js generate --schema=${schemaFile}`,
            );
            if (!proc.stderr) {
                throw new Error('Generate error');
            }
            proc.stdout?.pipe(process.stdout);
            proc.stderr.on('data', data => {
                reject(String(data));
            });
            proc.on('error', reject);
            proc.on('exit', code => {
                code === 0 ? resolve(0) : reject();
            });
        });
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return require(cacheFile);
}

function createHash(...data: unknown[]) {
    return crypto.createHash('md5').update(JSON.stringify(data)).digest('hex');
}
