import { DMMF as PrismaDMMF } from '@prisma/client/runtime/dmmf-types';
import { GeneratorOptions } from '@prisma/generator-helper';
import { exec } from 'child_process';
import crypto from 'crypto';
import fs from 'fs';
import { resolve } from 'path';

const cachePath = resolve('node_modules/.cache/createGeneratorOptions');

/**
 * Get generator options after run prisma generate.
 */
export async function generatorOptions(
    schema: string,
    options?: Record<string, any>,
): Promise<GeneratorOptions & { prismaClientDmmf: PrismaDMMF.Document }> {
    // eslint-disable-next-line prefer-rest-params
    const data = JSON.stringify(arguments);
    const hash = crypto.createHash('md5').update(data).digest('hex');
    const optionsCacheFile = `${cachePath}/options-${hash}.js`;
    if (!fs.existsSync(optionsCacheFile)) {
        const schemaFile = `${cachePath}/schema-${hash}.prisma`;
        const schemaData = `
            generator client {
                provider = "prisma-client-js"
            }
            generator proxy {
                provider = "node -r ts-node/register/transpile-only src/testing/proxy-generator.ts"
                output = "."
                hash = "${hash}"
                outputFilePattern = "${options?.outputFilePattern || ''}"
            }
            ${schema}
        `;
        try {
            fs.writeFileSync(schemaFile, schemaData);
        } catch {
            fs.mkdirSync(cachePath, { recursive: true });
            fs.writeFileSync(schemaFile, schemaData);
        }

        await new Promise((resolve, reject) => {
            const proc = exec(
                `node node_modules/@prisma/cli/build/index.js generate --schema=${schemaFile}`,
            );
            if (!proc || !proc.stderr) {
                throw new Error('Generate error');
            }
            proc.stderr.on('data', (data) => {
                reject(String(data));
            });
            proc.on('error', reject);
            proc.on('exit', (code) => {
                code === 0 ? resolve() : reject();
            });
        });
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return require(optionsCacheFile);
}
