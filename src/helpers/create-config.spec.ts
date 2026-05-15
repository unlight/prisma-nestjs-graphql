import fs from 'node:fs';
import path from 'node:path';

import { expect, it } from 'vitest';

import {
  Configuration,
  type ConfigurationCreateArgs,
} from '../configuration.class.ts';
import { ReExport } from '../handlers/re-export.ts';

const createConfig = async (config?: ConfigurationCreateArgs['config']) => {
  return Configuration.create({
    config: config || {},
    output: '.',
    sourceFilePath: path.resolve('./prisma/schema.prisma'),
  });
};

it('smoke', async () => {
  const config = await createConfig();
  expect(config).toBeTruthy();
  expect(config.warnings).toHaveLength(0);
});

it('default values', async () => {
  const config = await createConfig();
  expect(config.warnings).toEqual(new Set());
  expect(config.combineScalarFilters).toEqual(true);
  expect(config.noAtomicOperations).toEqual(true);
  expect(config.reExport).toEqual(ReExport.None);
  expect(config.prismaClientImport).toEqual('@prisma/client');
  expect(config.importExtension).toEqual('');
  expect(config.noTypeId).toEqual(false);
  expect(config.typeListNullable).toEqual(false);
  expect(config.output).toEqual('.');
});

it('outputFilePattern normalization', async () => {
  const config = await createConfig({
    outputFilePattern: 'output?/{model}/{name}.{type}.ts',
  });
  expect(config.outputFilePattern).toEqual('output/{model}/{name}.{type}.ts');
  expect(config.warnings).toHaveLength(1);
  expect(config.warnings.values().toArray().at(0)).toEqual(
    'outputFilePattern changed to output/{model}/{name}.{type}.ts',
  );
});

it('reExport', async () => {
  const config = await createConfig({ reExport: 'Single' });
  expect(config.reExport).toEqual(ReExport.Single);
});

it('useInputType from schema legacy config', async () => {
  const config = await createConfig({
    useInputType_CreateInput_ALL: 'WhereInput',
    useInputType_CreateInput_author: 'WhereInput',
  });
  expect(config.warnings).toHaveLength(1);
  expect(config.warnings.values().toArray().at(0)).toEqual(
    'Generator options in schema (useInputType) are deprecated, prefer config file',
  );
});

it('decorate from object keys', async () => {
  const config = await createConfig({
    decorate_1_arguments: '[]',
    decorate_1_field: 'data',
    decorate_1_from: 'class-validator',
    decorate_1_name: 'ValidateNested',
    decorate_1_type: 'CreateOneUserArgs',
    decorate_2_arguments: '[]',
    decorate_2_field: 'data',
    decorate_2_from: 'class-transformer',
    decorate_2_name: 'Type',
    decorate_2_namedImport: 'true',
    decorate_2_type: 'CreateOneUserArgs',
  });
  expect(config.decorate).toHaveLength(2);
  expect(config.decorate[0]).toMatchObject({
    from: 'class-validator',
    name: 'ValidateNested',
    namedImport: false,
  });
  expect(config.decorate[1]).toMatchObject({
    from: 'class-transformer',
    name: 'Type',
    namedImport: true,
  });
});

it('decorate from object keys (alphabetical)', async () => {
  const config = await createConfig({
    decorate_a_arguments: '[]',
    decorate_a_field: 'data',
    decorate_a_from: 'class-validator',
    decorate_a_name: 'ValidateNested',
    decorate_a_type: 'CreateOneUserArgs',
    decorate_b_arguments: '[]',
    decorate_b_field: 'data',
    decorate_b_from: 'class-transformer',
    decorate_b_name: 'Type',
    decorate_b_namedImport: 'true',
    decorate_b_type: 'CreateOneUserArgs',
  });
  expect(config.decorate).toHaveLength(2);
});

it('tsConfigFilePath explicit value', async () => {
  const config = await createConfig({
    tsConfigFilePath: 'x.json',
  });
  expect(config.warnings).toEqual(new Set());
  expect(config.tsConfigFilePath).toEqual('x.json');
});

it('tsConfigFilePath default', async () => {
  const config = await createConfig();
  expect(config.warnings).toEqual(new Set());
  expect(config.tsConfigFilePath).toEqual('tsconfig.json');
});

it('emitBlocks defaults', async () => {
  const config = await createConfig();
  expect(config.warnings).toHaveLength(0);
  expect(config.emitBlocksArgs).toEqual(true);
  expect(config.emitBlocksModels).toEqual(true);
  expect(config.emitBlocksInputs).toEqual(true);
  expect(config.emitBlocksOutputs).toEqual(true);
  expect(config.emitBlocksPrismaEnums).toEqual(true);
  expect(config.emitBlocksSchemaEnums).toEqual(true);
});

it('emitBlocks with models only', async () => {
  const config = await createConfig({
    emitBlocks: ['models'],
  });
  expect(config.emitBlocksArgs).toBeUndefined();
  expect(config.emitBlocksModels).toEqual(true);
  expect(config.emitBlocksInputs).toBeUndefined();
  expect(config.emitBlocksOutputs).toBeUndefined();
  expect(config.emitBlocksPrismaEnums).toBeUndefined();
  expect(config.emitBlocksSchemaEnums).toEqual(true);
});

it('emitBlocks with inputs only', async () => {
  const config = await createConfig({
    emitBlocks: ['inputs'],
  });
  expect(config.emitBlocksArgs).toBeUndefined();
  expect(config.emitBlocksModels).toBeUndefined();
  expect(config.emitBlocksInputs).toEqual(true);
  expect(config.emitBlocksOutputs).toBeUndefined();
  expect(config.emitBlocksPrismaEnums).toEqual(true);
  expect(config.emitBlocksSchemaEnums).toBeUndefined();
});

it('emitBlocks with enums only', async () => {
  const config = await createConfig({
    emitBlocks: ['enums'],
  });
  expect(config.emitBlocksArgs).toBeUndefined();
  expect(config.emitBlocksModels).toBeUndefined();
  expect(config.emitBlocksInputs).toBeUndefined();
  expect(config.emitBlocksOutputs).toBeUndefined();
  expect(config.emitBlocksPrismaEnums).toEqual(true);
  expect(config.emitBlocksSchemaEnums).toEqual(true);
});

it('unsafeCompatibleWhereUniqueInput', async () => {
  const config = await createConfig({
    unsafeCompatibleWhereUniqueInput: 'true',
  });
  expect(config.unsafeCompatibleWhereUniqueInput).toEqual(true);
});

it('prismaClientImport', async () => {
  const config = await createConfig({
    prismaClientImport: '@prisma/client/testing',
  });
  expect(config.prismaClientImport).toEqual('@prisma/client/testing');
});

it('importExtension', async () => {
  const config = await createConfig({ importExtension: 'js' });
  expect(config.importExtension).toEqual('js');
});

it('with configFile option', async () => {
  const temporary = await import('temp-dir').then(m => m.default);
  const filePath = `${temporary}/prisma-nestjs-graphql-test-config.mjs`;
  fs.writeFileSync(
    filePath,
    `export default { output: './generated', combineScalarFilters: false }`,
  );
  try {
    const config = await createConfig({
      configFile: filePath,
      sourceFilePath: path.resolve('./prisma/schema.prisma'),
    });
    expect(config.output).toEqual(path.resolve(temporary, './generated'));
    expect(config.combineScalarFilters).toEqual(false);
  } finally {
    fs.unlinkSync(filePath);
  }
});

it('configFile takes precedence over schema config', async () => {
  const temporary = await import('temp-dir').then(m => m.default);
  const filePath = `${temporary}/prisma-nestjs-graphql-test-precedence.mjs`;
  fs.writeFileSync(
    filePath,
    `export default { combineScalarFilters: false, noAtomicOperations: false }`,
  );
  try {
    const config = await createConfig({
      combineScalarFilters: 'true',
      configFile: filePath,
      noAtomicOperations: 'true',
      sourceFilePath: path.resolve('./prisma/schema.prisma'),
    });
    expect(config.combineScalarFilters).toEqual(false);
    expect(config.noAtomicOperations).toEqual(false);
  } finally {
    fs.unlinkSync(filePath);
  }
});

it('loads a config file', async () => {
  const temporary = await import('temp-dir').then(m => m.default);
  const configFile = `${temporary}/prisma-nestjs-graphql-load-test.mjs`;
  fs.writeFileSync(
    configFile,
    `export default { output: './output', noTypeId: false,
     graphqlScalars: { BigInt: { name: 'GraphQLBigInt', specifier: 'graphql-scalars' } }
    }`,
  );
  const config = await createConfig({
    configFile,
    sourceFilePath: path.resolve('./prisma/schema.prisma'),
  });
  expect(config.output).toEqual(path.resolve(temporary, './output'));
  expect(config.noTypeId).toEqual(false);
  expect(config.getGraphqlScalar('BigInt')).toEqual({
    name: 'GraphQLBigInt',
    specifier: 'graphql-scalars',
  });
  fs.unlinkSync(configFile);
});

it('loadConfig validates decorators elements', async () => {
  const temporary = await import('temp-dir').then(m => m.default);
  const configFile = `${temporary}/prisma-nestjs-graphql-invalid-decorate.mjs`;
  fs.writeFileSync(
    configFile,
    `export default { decorators: [{ from: 'class-validator' }] }`,
  );
  try {
    await expect(
      createConfig({
        configFile,
        sourceFilePath: path.resolve('./prisma/schema.prisma'),
      }),
    ).rejects.toThrow("Each 'decorators' element missing 'name'");
  } finally {
    fs.unlinkSync(configFile);
  }
});

it('loadConfig validates non-object export', async () => {
  const temporary = await import('temp-dir').then(m => m.default);
  const configFile = `${temporary}/prisma-nestjs-graphql-nonobj.mjs`;
  fs.writeFileSync(configFile, `export default 'invalid'`);
  try {
    await expect(
      createConfig({
        configFile,
        sourceFilePath: path.resolve('./prisma/schema.prisma'),
      }),
    ).rejects.toThrow('Config file must export a non-null object');
  } finally {
    fs.unlinkSync(configFile);
  }
});

it('loadConfig validates customImports elements', async () => {
  const temporary = await import('temp-dir').then(m => m.default);
  const configFile = `${temporary}/prisma-nestjs-graphql-invalid-custom.mjs`;
  fs.writeFileSync(
    configFile,
    `export default { customImports: [{ from: 'lib' }] }`,
  );
  try {
    await expect(
      createConfig({
        configFile,
        sourceFilePath: path.resolve('./prisma/schema.prisma'),
      }),
    ).rejects.toThrow("Each 'customImports' element missing 'name'");
  } finally {
    fs.unlinkSync(configFile);
  }
});

it('customImport from schema config', async () => {
  const config = await createConfig({
    customImport_1_from: 'lib',
    customImport_1_name: 'custom',
    customImport_1_namedImport: 'true',
  });
  expect(config.customImports).toHaveLength(1);
  expect(config.customImports[0]).toEqual(
    expect.objectContaining({
      from: 'lib',
      name: 'custom',
      namedImport: true,
    }),
  );
});

it('graphqlScalars legacy', async () => {
  const config = await createConfig({
    graphqlScalars_DateTime_name: 'DateTime',
  });
  expect(config.getGraphqlScalar('DateTime')?.name).toEqual('DateTime');
  expect(config.warnings).toHaveLength(1);
  expect(config.warnings.values().toArray().at(0)).toEqual(
    'Generator options in schema (graphqlScalars) are deprecated, prefer config file',
  );
});
