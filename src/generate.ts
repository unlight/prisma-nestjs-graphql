import assert from 'node:assert';

import type { GeneratorOptions } from '@prisma/generator-helper';
import awaitEventEmitterModule from 'await-event-emitter';
import { Project, QuoteKind } from 'ts-morph';
import type { Constructor } from 'type-fest';

import { Configuration } from './configuration.class.ts';
import { argsType } from './handlers/args-type.ts';
import { combineScalarFilters } from './handlers/combine-scalar-filters.ts';
import { createAggregateInput } from './handlers/create-aggregate-input.ts';
import { generateFiles } from './handlers/generate-files.ts';
import { inputType } from './handlers/input-type.ts';
import { modelData } from './handlers/model-data.ts';
import { modelOutputType } from './handlers/model-output-type.ts';
import { noAtomicOperations } from './handlers/no-atomic-operations.ts';
import { outputType } from './handlers/output-type.ts';
import { purgeOutput } from './handlers/purge-output.ts';
import { ReExport, reExport } from './handlers/re-export.ts';
import { registerEnum } from './handlers/register-enum.ts';
import { requireSingleFieldsInWhereUniqueInput } from './handlers/require-single-fields-in-whereunique-input.ts';
import { warning } from './handlers/warning.ts';
import { factoryGetSourceFile } from './helpers/factory-get-source-file.ts';
import { createGetModelName } from './helpers/get-model-name.ts';
import { mapKeys } from './helpers/utils.ts';
import type {
  Document,
  EventArguments,
  Field,
  Model,
  ObjectSettings,
  OutputType,
  TAwaitEventEmitter,
} from './types.ts';

function resolveAwaitEventEmitter(): Constructor<TAwaitEventEmitter> {
  if (typeof awaitEventEmitterModule === 'function')
    return awaitEventEmitterModule;
  if (typeof awaitEventEmitterModule.default === 'function')
    return awaitEventEmitterModule.default;

  assert.fail('Failed to load awaitEventEmitterModule');
}

export async function generate(
  args: GeneratorOptions & {
    skipAddOutputSourceFiles?: boolean;
    connectCallback?: (
      emitter: TAwaitEventEmitter,
      eventArguments: EventArguments,
    ) => void | Promise<void>;
  },
) {
  const { connectCallback, dmmf, generator, skipAddOutputSourceFiles } = args;
  const config = await Configuration.create({
    config: generator.config,
    output: generator.output?.value as string,
    sourceFilePath: generator.sourceFilePath,
  });

  const AwaitEventEmitter = resolveAwaitEventEmitter();
  const eventEmitter: TAwaitEventEmitter = new AwaitEventEmitter();
  eventEmitter.on('Warning', warning);

  if (config.emitBlocksModels) eventEmitter.on('Model', modelData);
  if (config.emitBlocksPrismaEnums || config.emitBlocksSchemaEnums) {
    eventEmitter.on('EnumType', registerEnum);
  }
  if (
    config.emitBlocksOutputs ||
    (config.emitBlocksModels && !config.omitModelsCount)
  ) {
    eventEmitter.on('OutputType', outputType);
  }
  if (config.emitBlocksModels)
    eventEmitter.on('ModelOutputType', modelOutputType);
  if (config.emitBlocksOutputs)
    eventEmitter.on('AggregateOutput', createAggregateInput);
  if (config.emitBlocksInputs) eventEmitter.on('InputType', inputType);
  if (config.emitBlocksArgs) eventEmitter.on('ArgsType', argsType);
  eventEmitter.on('GenerateFiles', generateFiles);

  const project = new Project({
    manipulationSettings: {
      quoteKind: QuoteKind.Single,
    },
    skipAddingFilesFromTsConfig: true,
    skipLoadingLibFiles: !config.emitCompiled,
    tsConfigFilePath: config.tsConfigFilePath,
  });

  if (!skipAddOutputSourceFiles) {
    project.addSourceFilesAtPaths([
      `${config.output}/**/*.ts`,
      `!${config.output}/**/*.d.ts`,
    ]);
  }

  if (config.combineScalarFilters) combineScalarFilters(eventEmitter);
  if (config.noAtomicOperations) noAtomicOperations(eventEmitter);
  if (config.reExport !== ReExport.None) reExport(eventEmitter);
  if (config.purgeOutput) purgeOutput(eventEmitter);
  if (config.requireSingleFieldsInWhereUniqueInput)
    requireSingleFieldsInWhereUniqueInput(eventEmitter);

  const models = new Map<string, Model>();
  const modelNames: string[] = [];
  const modelFields = new Map<string, Map<string, Field>>();
  const fieldSettings = new Map<string, Map<string, ObjectSettings>>();
  const getModelName = createGetModelName(modelNames);
  const getSourceFile = factoryGetSourceFile({
    eventEmitter,
    getModelName,
    output: config.output,
    outputFilePattern: config.outputFilePattern,
    project,
  });
  const { datamodel, schema } = structuredClone(dmmf) as Document;
  const removeTypes = new Set<string>();
  const eventArguments: EventArguments = {
    classTransformerTypeModels: new Set(),
    config,
    enums: mapKeys(datamodel.enums, x => x.name),
    eventEmitter,
    fieldSettings,
    getModelName,
    getSourceFile,
    modelFields,
    modelNames,
    models,
    output: config.output,
    project,
    removeTypes,
    schema,
    typeNames: new Set<string>(),
  };

  if (connectCallback) {
    await connectCallback(eventEmitter, eventArguments);
  }

  for (const message of config.warnings) {
    eventEmitter.emitSync('Warning', message);
  }

  await eventEmitter.emit('Begin', eventArguments);

  for (const model of datamodel.models) {
    await eventEmitter.emit('Model', model, eventArguments);
  }

  // Types behaves like model
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  for (const model of datamodel.types || []) {
    await eventEmitter.emit('Model', model, eventArguments);
  }

  const { enumTypes, inputObjectTypes, outputObjectTypes } = schema;

  await eventEmitter.emit('PostBegin', eventArguments);

  for (const enumType of enumTypes.prisma.concat(enumTypes.model || [])) {
    await eventEmitter.emit('EnumType', enumType, eventArguments);
  }

  for (const outputType of outputObjectTypes.model) {
    await eventEmitter.emit('ModelOutputType', outputType, eventArguments);
  }

  const queryOutputTypes: OutputType[] = [];

  for (const outputType of outputObjectTypes.prisma) {
    if (['Query', 'Mutation'].includes(outputType.name)) {
      queryOutputTypes.push(outputType);
      continue;
    }
    await eventEmitter.emit('OutputType', outputType, eventArguments);
  }

  const inputTypes =
    inputObjectTypes.prisma?.concat(inputObjectTypes.model ?? []) ?? [];

  for (const inputType of inputTypes) {
    const event = {
      ...eventArguments,
      classDecoratorName: 'InputType',
      fileType: 'input',
      inputType,
    };
    if (inputType.fields.length === 0) {
      removeTypes.add(inputType.name);
      continue;
    }
    await eventEmitter.emit('BeforeInputType', event);
    await eventEmitter.emit('InputType', event);
  }

  for (const outputType of queryOutputTypes) {
    for (const field of outputType.fields) {
      await eventEmitter.emit('ArgsType', field, eventArguments);
    }
  }

  await eventEmitter.emit('BeforeGenerateFiles', eventArguments);
  await eventEmitter.emit('GenerateFiles', eventArguments);
  await eventEmitter.emit('End', eventArguments);

  for (const name of Object.keys(eventEmitter._events)) {
    eventEmitter.off(name);
  }
}

export const generatorHandlerConfig = {
  async onGenerate(options: GeneratorOptions) {
    await generate(options);
  },
  onManifest() {
    return {
      defaultOutput: '.',
      prettyName: 'Prisma NestJS/GraphQL',
    };
  },
};
