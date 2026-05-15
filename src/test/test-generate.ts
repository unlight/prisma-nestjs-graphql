import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';

import type { GeneratorOptions } from '@prisma/generator-helper';
import { exec, execSync } from 'child_process';
import crypto from 'crypto';
import serialize from 'serialize-javascript';
import { ImportSpecifierStructure, Project } from 'ts-morph';

import { generate } from '../generate.ts';
import { generateFileName } from '../helpers/generate-file-name.ts';
import { castArray, once, uniq } from '../helpers/utils.ts';
import type {
  Document,
  EventArguments,
  ExternalConfig,
  TAwaitEventEmitter,
} from '../types.ts';

const getGeneratorVersion = once(async () => {
  // @ts-expect-error No types
  const { version } = await import('@prisma/generator-helper/package.json', {
    with: { type: 'json' },
  });

  return version;
});

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
  externalConfig?: ExternalConfig;
};

export async function testGenerate(args: TestGenerateArgs) {
  const {
    createSouceFile,
    externalConfig,
    onConnect,
    options,
    provider,
    schema,
  } = args;
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
            { overwrite: true },
          );
        },
      );
    }
    emitter.on('End', (args: { project: Project }) => {
      ({ project } = args);
    });
  };

  await generate({
    ...(await generatorOptions({ externalConfig, options, provider, schema })),
    connectCallback,
    skipAddOutputSourceFiles: true,
  });

  assert.ok(project, 'Project is not defined');
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
  const base = await import('temp-dir').then(x => x.default);
  const result = `${base}/~prisma-test`;

  if (!fs.existsSync(result)) {
    fs.mkdirSync(result, { recursive: true });
  }

  return result;
}

/**
 * Get generator options after run prisma generate.
 */
async function generatorOptions(args: {
  schema: string;
  options?: string[] | string;
  provider?: 'postgresql' | 'mongodb';
  previewFeatures?: string[];
  externalConfig?: ExternalConfig;
}): Promise<GeneratorOptions & { prismaClientDmmf: Document }> {
  const {
    externalConfig,
    options,
    previewFeatures = [],
    provider = 'postgresql',
    schema,
  } = args;
  const generatorVersion = await getGeneratorVersion();
  // eslint-disable-next-line prefer-rest-params
  const hash = createHash(generatorVersion, arguments);
  const prismaTestPath = await prepareCachePath();
  const cacheFile = `${prismaTestPath}/options-${hash}.mjs`;

  if (!fs.existsSync(cacheFile)) {
    if (!fs.existsSync(`${prismaTestPath}/package.json`)) {
      await createPackageJson(prismaTestPath);
    }

    if (!fs.existsSync(`${prismaTestPath}/node_modules/@prisma/client`)) {
      execSync('yarn', { cwd: prismaTestPath, stdio: 'ignore' });
    }

    const proxyGeneratorPath = path
      .normalize(`${process.cwd()}/src/test/proxy-generator.ts`)
      .replaceAll('\\', '/');
    let configFileLine = '';
    if (externalConfig) {
      fs.writeFileSync(
        `${prismaTestPath}/config-${hash}.mjs`,
        `export default ${serialize(externalConfig, { space: 2 })}`,
      );
      configFileLine = `configFile = "./config-${hash}.mjs"`;
    }

    const schemaFile = `${prismaTestPath}/schema-${hash}.prisma`;
    const schemaContent = `
      datasource db {
        provider = "${provider}"
      }
      generator client {
        provider = "prisma-client-js"
        previewFeatures = ${JSON.stringify(previewFeatures)}
      }
      generator proxy {
        provider = "node --import=@poppinss/ts-exec ${proxyGeneratorPath}"
        output = "."
        hash = "${hash}"
        ${configFileLine}
        ${castArray(options).join('\n')}
      }
      ${schema}
    `;
    fs.writeFileSync(schemaFile, schemaContent);

    await new Promise((resolve, reject) => {
      const proc = exec(
        `npx prisma generate --no-hints --schema=${schemaFile}`,
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

  return import(cacheFile).then(x => x.default);
}

async function createPackageJson(prismaTestPath: string) {
  const version = await getGeneratorVersion();
  fs.writeFileSync(
    `${prismaTestPath}/package.json`,
    JSON.stringify(
      { devDependencies: { '@prisma/client': version } },
      undefined,
      2,
    ),
  );
}

function createHash(...data: unknown[]) {
  const hashHex = crypto
    .createHash('md5')
    .update(JSON.stringify(data))
    .digest('hex');
  const hashBase36 = BigInt('0x' + hashHex).toString(36);

  return hashBase36;
}
