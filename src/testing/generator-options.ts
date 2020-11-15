import { GeneratorOptions } from '@prisma/generator-helper';
import { exec } from 'child_process';
import crypto from 'crypto';
import findCacheDir from 'find-cache-dir';
import fs from 'fs';

import { GeneratorConfigurationOptions, PrismaDMMF } from '../types';

const {
    dependencies: { '@prisma/generator-helper': generatorVersion },
} = require('../../package.json');

const cachePath: string = findCacheDir({ name: 'createGeneratorOptions', create: true });

/**
 * Get generator options after run prisma generate.
 */
export async function generatorOptions(
    schema: string,
    options?: GeneratorConfigurationOptions,
): Promise<GeneratorOptions & { prismaClientDmmf: PrismaDMMF.Document }> {
    // eslint-disable-next-line prefer-rest-params
    const data = JSON.stringify([generatorVersion, arguments]);
    const hash = crypto.createHash('md5').update(data).digest('hex');
    const optionsCacheFile = `${cachePath}/options-${hash}.js`;
    if (!fs.existsSync(optionsCacheFile)) {
        const schemaFile = `${cachePath}/schema-${hash}.prisma`;
        const schemaData = `
            datasource database {
                provider = "postgresql"
                url = env("DATABASE_URL")
            }
            generator client {
                provider = "prisma-client-js"
                previewFeatures = ["nativeTypes"]
            }
            generator proxy {
                provider = "node -r ts-node/register/transpile-only src/testing/proxy-generator.ts"
                output = "."
                hash = "${hash}"
                outputFilePattern = "${options?.outputFilePattern || ''}"
                combineScalarFilters = ${JSON.stringify(options?.combineScalarFilters ?? true)}
                atomicNumberOperations = ${JSON.stringify(options?.atomicNumberOperations ?? false)}
                customPropertyTypes = "${options?.customPropertyTypes || ''}"
            }
            ${schema}
        `;
        fs.writeFileSync(schemaFile, schemaData);

        await new Promise((resolve, reject) => {
            const proc = exec(
                `node node_modules/@prisma/cli/build/index.js generate --schema=${schemaFile}`,
            );
            if (!proc.stderr) {
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
