import { ok } from 'assert';
import filenamify from 'filenamify';
import { unflatten } from 'flat';
import { existsSync } from 'graceful-fs';
import JSON5 from 'json5';
import { Dictionary, memoize, merge, trim } from 'lodash';
import outmatch from 'outmatch';

import { ReExport } from '../handlers/re-export';
import { ImportNameSpec, ObjectSetting } from '../types';
import { createEmitBlocks, EmitBlocksOption } from './create-emit-blocks';

type ConfigFieldSetting = Partial<Omit<ObjectSetting, 'name'>>;
type DecorateElement = {
  isMatchField: (s: string) => boolean;
  isMatchType: (s: string) => boolean;
  from: string;
  name: string;
  arguments?: string[];
  namedImport: boolean;
  defaultImport?: string | true;
  namespaceImport?: string;
};
type CustomImport = {
  from: string;
  name: string;
  namedImport: boolean;
  defaultImport?: string | true;
  namespaceImport?: string;
};

export function createConfig(data: Record<string, unknown>) {
  const config = merge({}, unflatten(data, { delimiter: '_' })) as Record<
    string,
    unknown
  >;
  const $warnings: string[] = [];

  const configOutputFilePattern = String(
    config.outputFilePattern || `{model}/{name}.{type}.ts`,
  );

  let outputFilePattern = filenamify(configOutputFilePattern, {
    replacement: '/',
  })
    .replaceAll('..', '/')
    .replaceAll(/\/+/g, '/');
  outputFilePattern = trim(outputFilePattern, '/');

  if (outputFilePattern !== configOutputFilePattern) {
    $warnings.push(
      `Due to invalid filepath 'outputFilePattern' changed to '${outputFilePattern}'`,
    );
  }

  if (config.reExportAll) {
    $warnings.push(`Option 'reExportAll' is deprecated, use 'reExport' instead`);
    if (toBoolean(config.reExportAll)) {
      config.reExport = 'All';
    }
  }

  const fields: Record<string, ConfigFieldSetting | undefined> = Object.fromEntries(
    Object.entries<Dictionary<string | undefined>>(
      (config.fields ?? {}) as Record<string, Dictionary<string | undefined>>,
    )
      .filter(({ 1: value }) => typeof value === 'object')
      .map(([name, value]) => {
        const fieldSetting: ConfigFieldSetting = {
          arguments: [],
          defaultImport: toBoolean(value.defaultImport) ? true : value.defaultImport,
          from: value.from,
          input: toBoolean(value.input),
          model: toBoolean(value.model),
          namespaceImport: value.namespaceImport,
          output: toBoolean(value.output),
        };
        return [name, fieldSetting];
      }),
  );

  const decorate: DecorateElement[] = [];
  const configDecorate: (Record<string, string> | undefined)[] = Object.values(
    (config.decorate as any) || {},
  );

  for (const element of configDecorate) {
    if (!element) continue;
    ok(
      element.from && element.name,
      `Missed 'from' or 'name' part in configuration for decorate`,
    );
    decorate.push({
      arguments: element.arguments ? JSON5.parse(element.arguments) : undefined,
      defaultImport: toBoolean(element.defaultImport) ? true : element.defaultImport,
      from: element.from,
      isMatchField: outmatch(element.field, { separator: false }),
      isMatchType: outmatch(element.type, { separator: false }),
      name: element.name,
      namedImport: toBoolean(element.namedImport),
      namespaceImport: element.namespaceImport,
    });
  }

  const customImport: CustomImport[] = [];
  const configCustomImport: (Record<string, string> | undefined)[] = Object.values(
    (config.customImport as any) || {},
  );
  for (const element of configCustomImport) {
    if (!element) continue;
    ok(
      element.from && element.name,
      `Missed 'from' or 'name' part in configuration for customImport`,
    );
    customImport.push({
      defaultImport: toBoolean(element.defaultImport) ? true : element.defaultImport,
      from: element.from,
      name: element.name,
      namedImport: toBoolean(element.namedImport),
      namespaceImport: element.namespaceImport,
    });
  }
  return {
    $warnings,
    combineScalarFilters: toBoolean(config.combineScalarFilters),
    customImport,
    decorate,
    emitBlocks: createEmitBlocks(config.emitBlocks as EmitBlocksOption[]),
    emitCompiled: toBoolean(config.emitCompiled),
    emitSingle: toBoolean(config.emitSingle),
    fields,
    graphqlScalars: (config.graphqlScalars || {}) as Record<
      string,
      ImportNameSpec | undefined
    >,
    noAtomicOperations: toBoolean(config.noAtomicOperations),
    noTypeId: toBoolean(config.noTypeId),
    omitModelsCount: toBoolean(config.omitModelsCount),
    outputFilePattern,
    prismaClientImport: createPrismaImport(config.prismaClientImport),
    purgeOutput: toBoolean(config.purgeOutput),
    reExport: (ReExport[String(config.reExport)] || ReExport.None) as ReExport,
    requireSingleFieldsInWhereUniqueInput: toBoolean(
      config.requireSingleFieldsInWhereUniqueInput,
    ),
    tsConfigFilePath: createTsConfigFilePathValue(config.tsConfigFilePath),
    unsafeCompatibleWhereUniqueInput: toBoolean(
      config.unsafeCompatibleWhereUniqueInput,
    ),
    useInputType: createUseInputType(config.useInputType as any),
  };
}

type ConfigInputItem = {
  typeName: string;
  ALL?: string;
  [index: string]: string | undefined;
};

const tsConfigFileExists = memoize((filePath: string) => {
  return existsSync(filePath);
});

function createTsConfigFilePathValue(value: unknown): string | undefined {
  if (typeof value === 'string') return value;
  if (tsConfigFileExists('tsconfig.json')) return 'tsconfig.json';
}

function createPrismaImport(value: unknown): string {
  if (typeof value === 'string') return value;
  return '@prisma/client';
}

function createUseInputType(data?: Record<string, ConfigInputItem>) {
  if (!data) {
    return [];
  }
  const result: ConfigInputItem[] = [];
  for (const [typeName, useInputs] of Object.entries(data)) {
    const entry: ConfigInputItem = {
      ALL: undefined,
      typeName,
    };
    if (useInputs.ALL) {
      entry.ALL = useInputs.ALL;
      delete useInputs.ALL;
    }

    for (const [propertyName, pattern] of Object.entries(useInputs)) {
      entry[propertyName] = pattern;
    }

    result.push(entry);
  }
  return result;
}

function toBoolean(value: unknown) {
  return ['true', '1', 'on'].includes(String(value));
}
