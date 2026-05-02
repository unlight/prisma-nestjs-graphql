import type { GeneratorOptions } from '@prisma/generator-helper';
import { ok } from 'assert';
import { exec, execSync } from 'child_process';
import crypto from 'crypto';
import fs from 'graceful-fs';
import { castArray, uniq } from 'lodash';
import { normalize } from 'path';
import { ImportSpecifierStructure, Project } from 'ts-morph';

import { generate } from '../generate.ts';
import { generateFileName } from '../helpers/generate-file-name.ts';
import type { DMMF, EventArguments, TAwaitEventEmitter } from '../types.ts';

async function getGeneratorVersion() {
  // @ts-expect-error No types
  const { dependencies } = await import(
    '@prisma/generator-helper/package.json',
    {
      with: { type: 'json' },
    }
  );
  const generatorVersion = dependencies['@prisma/generator-helper'];

  return generatorVersion;
}

type TestGenerateArgs = {
  schema: string;
  options?: string[] | string;
  provider?: 'postgresql' | 'mongodb';
  createSouceFile?: {
    text: string;
    name: string;
    type: string;
  };
  onConnect?: (emitter: TAwaitEventEmitter) => void;
};

export async function testGenerate(args: TestGenerateArgs) {
  const { createSouceFile, onConnect, options, provider, schema } = args;
  let project: Project | undefined;
  const connectCallback = (emitter: TAwaitEventEmitter) => {
    onConnect?.(emitter);
    if (createSouceFile) {
      emitter.on(
        'PostBegin',
        ({ config, getModelName, output, project }: EventArguments) => {
          const filePath = generateFileName({
            getModelName,
            name: createSouceFile.name,
            template: config.outputFilePattern,
            type: createSouceFile.type,
          });
          project.createSourceFile(
            `${output}/${filePath}`,
            createSouceFile.text,
            {
              overwrite: true,
            },
          );
        },
      );
    }
    emitter.on('End', (args: { project: Project }) => {
      ({ project } = args);
    });
  };

  await generate({
    ...(await createGeneratorOptions(schema, options, provider)),
    connectCallback,
    skipAddOutputSourceFiles: true,
  });

  ok(project, 'Project is not defined');
  const sourceFiles = project.getSourceFiles();
  const emptyFieldsFiles: string[] = [];

  for (const sourceFile of sourceFiles) {
    const filePath = sourceFile.getFilePath();
    const text = sourceFile.getText();
    if (!text) {
      let message = `Project should not contain empty files: ${filePath}`;
      const fileLower = sourceFile
        .getBaseNameWithoutExtension()
        .replaceAll('-', '')
        .split('.')[0];
      const sources = sourceFiles.filter(s =>
        s
          .getClass(() => true)
          ?.getProperties()
          .find(p =>
            String(p.getStructure().type).toLowerCase().includes(fileLower),
          ),
      );
      if (sources.length > 0) {
        message += `, reference: ${sources.map(s => s.getBaseName()).join(', ')}`;
      }
      throw new Error(message);
    }
    const imports = sourceFile
      .getImportDeclarations()
      .map(d => d.getStructure())
      .flatMap(s => {
        return [
          ...((s.namedImports || []) as ImportSpecifierStructure[]).map(
            x => x.name,
          ),
          s.namespaceImport,
        ].filter(Boolean);
      });
    if (uniq(imports).length !== imports.length) {
      throw new Error(
        `Duplicated import in ${filePath}: ${imports.toString()}`,
      );
    }
    // Find classes without @Field() (must define one or more fields)
    const properties = sourceFile.getClass(() => true)?.getProperties();
    if (properties && !properties.some(p => p.getDecorator('Field'))) {
      emptyFieldsFiles.push(sourceFile.getBaseName());
    }
  }
  if (emptyFieldsFiles.length > 0) {
    throw new Error(`No defined fields in ${emptyFieldsFiles.join(', ')}`);
  }

  return { project, sourceFiles };
}

async function prepareCachePath(): Promise<string> {
  const base = process.env.CI
    ? process.cwd()
    : await import('temp-dir').then(x => x.default);

  const result = `${base}/~prisma-test`;

  if (!fs.existsSync(result)) {
    fs.mkdirSync(result, { recursive: true });
  }

  return result;
}

/**
 * Get generator options after run prisma generate.
 */
async function createGeneratorOptions(
  schema: string,
  options?: string[] | string,
  provider: 'postgresql' | 'mongodb' = 'postgresql',
  previewFeatures: string[] = [],
): Promise<GeneratorOptions & { prismaClientDmmf: DMMF.Document }> {
  const schemaHeader = `
        datasource db {
            provider = "${provider}"
        }
        generator client {
            provider        = "prisma-client-js"
            previewFeatures = ${JSON.stringify(previewFeatures)}
        }
    `;

  const generatorVersion = await getGeneratorVersion();
  // eslint-disable-next-line prefer-rest-params
  const hash = createHash(generatorVersion, schemaHeader, arguments);
  const prismaTestPath = await prepareCachePath();
  const cacheFile = `${prismaTestPath}/options-${hash}.mjs`;
  if (!fs.existsSync(cacheFile)) {
    const proxyGeneratorPath = normalize(
      process.cwd() + '/src/test/proxy-generator.ts',
    ).replaceAll('\\', '/');
    const schemaFile = `${prismaTestPath}/schema-${hash}.prisma`;
    const schemaContent = `
            ${schemaHeader}
            generator proxy {
                provider = "node --import=@poppinss/ts-exec ${proxyGeneratorPath}"
                output = "."
                hash = "${hash}"
                ${castArray(options).join('\n')}
            }
            ${schema}
        `;
    fs.writeFileSync(schemaFile, schemaContent);

    await new Promise((resolve, reject) => {
      const proc = exec(
        `node node_modules/prisma/build/index.js generate --no-hints --schema=${schemaFile}`,
      );
      if (!proc.stderr) {
        throw new Error('Generate error');
      }
      proc.stdout?.pipe(process.stdout);
      proc.stderr.pipe(process.stdout);
      proc.on('error', reject);
      proc.on('exit', code => {
        code === 0 ? resolve(0) : reject(code);
      });
    });
  }

  if (!fs.existsSync(`${prismaTestPath}/package.json`)) {
    fs.writeFileSync(
      `${prismaTestPath}/package.json`,
      JSON.stringify(
        {
          devDependencies: {
            '@prisma/client': '7',
          },
        },
        undefined,
        2,
      ),
    );
  }

  if (!fs.existsSync(`${prismaTestPath}/node_modules/@prisma/client`)) {
    execSync('yarn', { cwd: prismaTestPath, stdio: 'inherit' });
  }

  return import(cacheFile).then(x => x.default);
}

function createHash(...data: unknown[]) {
  return crypto.createHash('md5').update(JSON.stringify(data)).digest('hex');
}
