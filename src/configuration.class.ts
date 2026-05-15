import fs from 'node:fs';
import path from 'node:path';

import { unflatten } from 'flat';

import { ReExport } from './handlers/re-export.ts';
import {
  createUseInputType,
  getSchemaCustomImport,
  getSchemaDecorate,
  getSchemaFields,
  normalizeOutputFilePattern,
} from './helpers/create-config.ts';
import { createEmitBlocks } from './helpers/create-emit-blocks.ts';
import { findByPattern } from './helpers/find-by-pattern.ts';
import { loadExternalConfig } from './helpers/load-external-config.ts';
import { find, isObject, toBoolean } from './helpers/utils.ts';
import type {
  CustomImportItem,
  DecoratorItem,
  EmittedBlockType,
  ExternalConfig,
  FieldLocation,
  GeneratorConfigLine,
  GetInputTypeFunctionArgs,
  ImportNameSpec,
  InputTypeRef,
  ObjectSettings,
  ReExportType,
} from './types.ts';

export type ConfigurationCreateArgs = {
  config: { [k: string]: GeneratorConfigLine };
  output: string;
  sourceFilePath: string;
};

export class Configuration {
  readonly warnings = new Set<string>();
  #generatorOutput!: string;
  schemaConfig: Record<string, unknown>;
  externalConfig?: ExternalConfig;
  externalConfigFile?: string;
  #emitBlocks: Record<EmittedBlockType, boolean>;
  #outputFilePattern: string = '';

  constructor(
    args: Pick<
      Configuration,
      'schemaConfig' | 'externalConfig' | 'externalConfigFile'
    > & {
      sourceFilePath: string;
      output: string;
      warnings?: string[];
    },
  ) {
    const { externalConfig, externalConfigFile, schemaConfig } = args;
    this.schemaConfig = schemaConfig;
    this.externalConfigFile = externalConfigFile;
    this.externalConfig = externalConfig;
    this.#generatorOutput = args.output;
    this.#emitBlocks = createEmitBlocks(
      externalConfig?.emitBlocks ?? schemaConfig.emitBlocks,
    );
    this.initializeOutputFilePattern();

    for (const name of [
      'fields',
      'useInputType',
      'graphqlScalars',
      'customImport',
      'decorate',
    ]) {
      if (this.schemaConfig[name]) {
        this.warnings.add(
          `Configuration in schema (${name}) deprecated, prefer config file`,
        );
      }
    }
  }

  static async create(args: ConfigurationCreateArgs) {
    const { config, output, sourceFilePath } = args;
    const schemaConfig: Record<string, unknown> = unflatten(config, {
      delimiter: '_',
    });
    const { externalConfig, externalConfigFile } =
      (await loadExternalConfig(schemaConfig.configFile, sourceFilePath)) ?? {};

    return new Configuration({
      externalConfig,
      externalConfigFile,
      output,
      schemaConfig,
      sourceFilePath,
    });
  }

  private initializeOutputFilePattern() {
    const testOutputFilePattern =
      this.externalConfig?.outputFilePattern ??
      this.schemaConfig.outputFilePattern;

    this.#outputFilePattern = normalizeOutputFilePattern(testOutputFilePattern);

    if (
      testOutputFilePattern &&
      testOutputFilePattern !== this.#outputFilePattern
    ) {
      this.warnings.add(
        `outputFilePattern changed to ${this.#outputFilePattern}`,
      );
    }
  }

  get output() {
    if (this.externalConfig?.output && this.externalConfigFile) {
      return path.resolve(
        path.dirname(this.externalConfigFile),
        this.externalConfig.output,
      );
    }

    return this.#generatorOutput;
  }

  get outputFilePattern() {
    return this.#outputFilePattern;
  }

  get importExtension(): string {
    if (this.externalConfig?.importExtension) {
      return this.externalConfig.importExtension;
    }
    if (
      typeof this.schemaConfig.importExtension === 'string' &&
      this.schemaConfig.importExtension
    ) {
      return this.schemaConfig.importExtension;
    }

    return '';
  }

  get emitCompiled() {
    if (this.externalConfig?.emitCompiled !== undefined) {
      return this.externalConfig.emitCompiled;
    }
    if (this.schemaConfig.emitCompiled) {
      return toBoolean(this.schemaConfig.emitCompiled);
    }

    return false;
  }

  get tsConfigFilePath(): string | undefined {
    const tsConfigFilePath =
      this.externalConfig?.tsConfigFilePath ||
      this.schemaConfig.tsConfigFilePath;

    if (typeof tsConfigFilePath === 'string') return tsConfigFilePath;
    if (fs.existsSync('tsconfig.json')) return 'tsconfig.json';
  }

  get combineScalarFilters(): boolean {
    if (this.externalConfig?.combineScalarFilters !== undefined) {
      return this.externalConfig.combineScalarFilters;
    }
    if (this.schemaConfig.combineScalarFilters) {
      return toBoolean(this.schemaConfig.combineScalarFilters);
    }

    return true;
  }

  get noTypeId(): boolean {
    if (this.externalConfig?.noTypeId !== undefined) {
      return this.externalConfig.noTypeId;
    }
    if (this.schemaConfig.noTypeId) {
      return toBoolean(this.schemaConfig.noTypeId);
    }

    return false;
  }

  get noAtomicOperations() {
    if (this.externalConfig?.noAtomicOperations !== undefined) {
      return this.externalConfig.noAtomicOperations;
    }
    if (this.schemaConfig.noAtomicOperations) {
      return toBoolean(this.schemaConfig.noAtomicOperations);
    }

    return true;
  }

  get reExport(): ReExportType {
    const reExport =
      this.externalConfig?.reExport ?? this.schemaConfig.reExport;
    if (typeof reExport !== 'string') return ReExport.None;
    if (Object.values(ReExport).includes(reExport as ReExportType))
      return reExport as ReExportType;

    return ReExport.None;
  }

  get purgeOutput() {
    if (this.externalConfig?.purgeOutput !== undefined) {
      return this.externalConfig.purgeOutput;
    }
    if (this.schemaConfig.purgeOutput) {
      return toBoolean(this.schemaConfig.purgeOutput);
    }

    return false;
  }

  get emitSingle() {
    if (this.externalConfig?.emitSingle !== undefined) {
      return this.externalConfig.emitSingle;
    }
    if (this.schemaConfig.emitSingle) {
      return toBoolean(this.schemaConfig.emitSingle);
    }

    return false;
  }

  get requireSingleFieldsInWhereUniqueInput() {
    if (
      this.externalConfig?.requireSingleFieldsInWhereUniqueInput !== undefined
    ) {
      return this.externalConfig.requireSingleFieldsInWhereUniqueInput;
    }
    if (this.schemaConfig.requireSingleFieldsInWhereUniqueInput) {
      return toBoolean(this.schemaConfig.requireSingleFieldsInWhereUniqueInput);
    }

    return false;
  }

  get omitModelsCount() {
    if (this.externalConfig?.omitModelsCount !== undefined) {
      return this.externalConfig.omitModelsCount;
    }
    if (this.schemaConfig.omitModelsCount) {
      return toBoolean(this.schemaConfig.omitModelsCount);
    }

    return false;
  }

  get typeListNullable() {
    if (this.externalConfig?.typeListNullable !== undefined) {
      return this.externalConfig.typeListNullable;
    }
    if (this.schemaConfig.typeListNullable) {
      return toBoolean(this.schemaConfig.typeListNullable);
    }

    return false;
  }

  get unsafeCompatibleWhereUniqueInput() {
    if (this.externalConfig?.unsafeCompatibleWhereUniqueInput !== undefined) {
      return this.externalConfig.unsafeCompatibleWhereUniqueInput;
    }
    if (this.schemaConfig.unsafeCompatibleWhereUniqueInput) {
      return toBoolean(this.schemaConfig.unsafeCompatibleWhereUniqueInput);
    }

    return false;
  }

  get prismaClientImport(): string {
    const value =
      this.externalConfig?.prismaClientImport ??
      this.schemaConfig.prismaClientImport;
    if (typeof value === 'string') return value;

    return '@prisma/client';
  }

  get emitBlocksModels(): boolean {
    return this.#emitBlocks.models;
  }

  get emitBlocksPrismaEnums() {
    return this.#emitBlocks.prismaEnums;
  }

  get emitBlocksSchemaEnums() {
    return this.#emitBlocks.schemaEnums;
  }

  get emitBlocksOutputs() {
    return this.#emitBlocks.outputs;
  }

  get emitBlocksInputs() {
    return this.#emitBlocks.inputs;
  }

  get emitBlocksArgs() {
    return this.#emitBlocks.args;
  }

  getGraphqlScalar(type: string): ImportNameSpec | undefined {
    const graphqlScalars =
      this.externalConfig?.graphqlScalars ?? this.schemaConfig.graphqlScalars;
    if (typeof graphqlScalars?.[type]?.name === 'string') {
      return graphqlScalars[type];
    }
  }

  getField(namespace?: string) {
    if (!namespace) return;
    const fields =
      this.externalConfig?.fields ?? getSchemaFields(this.schemaConfig.fields);
    return fields?.[namespace];
  }

  /**
   * Get graphql for input type
   */
  getInputType(args: GetInputTypeFunctionArgs): InputTypeRef | undefined {
    const { fieldInputTypes, fieldName, inputTypeName } = args;
    const configInputType = this.externalConfig?.inputType;

    if (typeof configInputType === 'function') {
      const result = configInputType(args);
      if (typeof result === 'string') {
        return findByPattern(fieldInputTypes, result);
      }
      return result;
    }

    if (isObject(configInputType)) {
      const typeMap = find(configInputType, (_, typeName) =>
        inputTypeName.includes(typeName),
      );
      if (isObject(typeMap)) {
        const pattern = find(
          typeMap,
          (_, field) => field === fieldName || field === '*',
        );
        if (pattern) return findByPattern(fieldInputTypes, pattern);
      }
    }

    if (this.schemaConfig.useInputType) {
      const configUseInputType = createUseInputType(
        this.schemaConfig.useInputType,
      );

      const useInputType = configUseInputType.find(x =>
        inputTypeName.includes(x.typeName),
      );

      const pattern = useInputType?.ALL || useInputType?.[fieldName];

      if (pattern) return findByPattern(fieldInputTypes, pattern);
    }
  }

  get customImports(): CustomImportItem[] {
    if (this.externalConfig?.customImports) {
      return this.externalConfig.customImports;
    }

    if (this.schemaConfig.customImport) {
      return getSchemaCustomImport(this.schemaConfig.customImport);
    }

    return [];
  }

  shouldHideField(args: {
    objectName: string;
    propertyName: string;
    propertyType: string;
    location: FieldLocation;
    typeName: string;
    /**
     * @deprecated Should not use
     */
    settings?: ObjectSettings;
    /**
     * @deprecated Legacy1
     */
    output?: boolean;
    /**
     * @deprecated Legacy
     */
    input?: boolean;
  }) {
    const { input, output, settings, ...fieldInfo } = args;
    const { objectName, propertyName } = fieldInfo;

    if (typeof this.externalConfig?.shouldHideField === 'function') {
      return this.externalConfig.shouldHideField(fieldInfo);
    }

    return (
      settings?.shouldHideField({ input, name: objectName, output }) ||
      this.decorate.some(
        d =>
          d.name === 'HideField' &&
          d.from === '@nestjs/graphql' &&
          d.isMatchField(propertyName) &&
          d.isMatchType(objectName),
      )
    );
  }

  *getDecorators(): Generator<DecoratorItem> {
    if (this.externalConfig?.decorators) {
      yield* this.externalConfig.decorators;
    }

    if (this.schemaConfig.decorate) {
      const decorators = getSchemaDecorate(this.schemaConfig.decorate);
      for (const decorator of decorators) {
        const match: DecoratorItem['match'] = ({
          objectName,
          propertyName,
        }) => {
          return (
            decorator.isMatchField(propertyName) &&
            decorator.isMatchType(objectName)
          );
        };

        yield {
          ...decorator,
          match,
        };
      }
    }
  }

  /**
   * @deprecated Should be replaced by decorators
   */
  get decorate() {
    if (this.schemaConfig.decorate) {
      return getSchemaDecorate(this.schemaConfig.decorate);
    }

    return [];
  }
}
