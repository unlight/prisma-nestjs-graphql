import { GeneratorOptions } from '@prisma/generator-helper';
import { exec } from 'child_process';
import findCacheDir from 'find-cache-dir';
import fs from 'fs';

import { createHash } from '../helpers/create-hash';
import { DMMF } from '../types';

const {
    dependencies: { '@prisma/generator-helper': generatorVersion },
    // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require('../../package.json');

const cachePath: string = findCacheDir({
    name: 'createGeneratorOptions',
    create: true,
}) as string;

/**
 * Get generator options after run prisma generate.
 */
export async function createGeneratorOptions(
    schema: string,
    options?: string[],
): Promise<GeneratorOptions & { prismaClientDmmf: DMMF.Document }> {
    // eslint-disable-next-line prefer-rest-params
    const hash = createHash(generatorVersion, arguments);
    const cacheFile = `${cachePath}/options-${hash}.js`;
    if (!fs.existsSync(cacheFile)) {
        const schemaFile = `${cachePath}/schema-${hash}.prisma`;
        const schemaData = `
            datasource database {
                provider = "postgresql"
                url = env("DATABASE_URL")
            }
            generator client {
                provider = "prisma-client-js"
                previewFeatures = ["groupBy", "createMany", "orderByRelation"]
            }
            generator proxy {
                provider = "node -r ts-node/register/transpile-only src/testing/proxy-generator.ts"
                output = "."
                hash = "${hash}"
                ${options?.join('\n') || ''}
            }
            ${schema}
        `;
        fs.writeFileSync(schemaFile, schemaData);

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
