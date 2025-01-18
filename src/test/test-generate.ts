import { GeneratorOptions } from '@prisma/generator-helper';
import { ok } from 'assert';
import AwaitEventEmitter from 'await-event-emitter/types';
import { exec } from 'child_process';
import crypto from 'crypto';
import fs from 'graceful-fs';
import { castArray, uniq } from 'lodash';
import { ImportSpecifierStructure, Project } from 'ts-morph';

import { generate } from '../generate';
import { generateFileName } from '../helpers/generate-file-name';
import { DMMF, EventArguments } from '../types';

const { '@prisma/generator-helper': generatorVersion } =
  // eslint-disable-next-line unicorn/prefer-module
  require('../../package.json').dependencies;

export async function testGenerate(args: {
  schema: string;
  options?: string[] | string;
  provider?: 'postgresql' | 'mongodb';
  createSouceFile?: {
    text: string;
    name: string;
    type: string;
  };
  onConnect?: (emitter: AwaitEventEmitter) => void;
}) {
  const { schema, options, provider, createSouceFile, onConnect } = args;
  let project: Project | undefined;
  const connectCallback = (emitter: AwaitEventEmitter) => {
    onConnect && onConnect(emitter);
    if (createSouceFile) {
      emitter.on(
        'PostBegin',
        ({ config, project, output, getModelName }: EventArguments) => {
          const filePath = generateFileName({
            type: createSouceFile.type,
            name: createSouceFile.name,
            getModelName,
            template: config.outputFilePattern,
          });
          project.createSourceFile(`${output}/${filePath}`, createSouceFile.text, {
            overwrite: true,
          });
        },
      );
    }
    emitter.on('End', (args: { project: Project }) => {
      ({ project } = args);
    });
  };
  await generate({
    ...(await createGeneratorOptions(schema, options, provider)),
    skipAddOutputSourceFiles: true,
    connectCallback,
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
          .find(p => String(p.getStructure().type).toLowerCase().includes(fileLower)),
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
          ...((s.namedImports || []) as ImportSpecifierStructure[]).map(x => x.name),
          s.namespaceImport,
        ].filter(Boolean);
      });
    if (uniq(imports).length !== imports.length) {
      throw new Error(`Duplicated import in ${filePath}: ${imports.toString()}`);
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
): Promise<GeneratorOptions & { prismaClientDmmf: DMMF.Document }> {
  const schemaHeader = `
        datasource db {
            provider = "${provider}"
            url = env("DATABASE_URL")
        }
        generator client {
            provider        = "prisma-client-js"
            previewFeatures = ["fullTextSearchPostgres", "fullTextIndex"]
        }
    `;
  // eslint-disable-next-line prefer-rest-params
  const hash = createHash(generatorVersion, schemaHeader, arguments);
  const prismaTestPath = await prepareCachePath();
  const cacheFile = `${prismaTestPath}/options-${hash}.js`;
  if (!fs.existsSync(cacheFile)) {
    const schemaFile = `${prismaTestPath}/schema-${hash}.prisma`;
    const schemaContent = `
            ${schemaHeader}
            generator proxy {
                provider = "node -r ts-node/register/transpile-only src/test/proxy-generator.ts"
                output = "."
                hash = "${hash}"
                ${castArray(options).join('\n')}
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
      proc.stderr.pipe(process.stdout);
      proc.on('error', reject);
      proc.on('exit', code => {
        code === 0 ? resolve(0) : reject(code);
      });
    });
  }
  // eslint-disable-next-line unicorn/prefer-module
  return require(cacheFile);
}

function createHash(...data: unknown[]) {
  return crypto.createHash('md5').update(JSON.stringify(data)).digest('hex');
}
