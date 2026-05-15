import assert from 'node:assert';

import filenamify from 'filenamify';
import JSON5 from 'json5';
import outmatch from 'outmatch';

import type {
  ConfigFieldRecord,
  CustomImportItem,
  Dictionary,
  ExternalConfig,
  LegacyConfigInputItem,
  LegacyDecorateElement,
} from '../types.ts';
import { toBoolean } from './utils.ts';

export function normalizeOutputFilePattern(outputFilePattern?: unknown) {
  if (!outputFilePattern || typeof outputFilePattern !== 'string')
    return '{model}/{name}.{type}.ts';

  const result = outputFilePattern
    .replaceAll('\\', '/')
    .split('/')
    .map(path => filenamify(path, { replacement: '' }))
    .filter(Boolean)
    .join('/');

  return result;
}

export function createUseInputType(configData) {
  const data: Record<string, LegacyConfigInputItem> =
    structuredClone(configData);
  const result: LegacyConfigInputItem[] = [];
  for (const [typeName, useInputs] of Object.entries(data)) {
    const entry: LegacyConfigInputItem = {
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

export function getSchemaFields(
  configFields: unknown,
): ExternalConfig['fields'] {
  const entries = Object.entries(
    (configFields ?? {}) as Record<string, Dictionary<string | undefined>>,
  )
    .filter(({ 1: value }) => typeof value === 'object')
    .map(([name, value]) => {
      // TODO: Improve type, make Required
      const fieldSetting: ConfigFieldRecord = {
        arguments: [],
        defaultImport: toBoolean(value.defaultImport)
          ? true
          : value.defaultImport,
        from: value.from,
        input: toBoolean(value.input),
        model: toBoolean(value.model),
        namespaceImport: value.namespaceImport,
        output: toBoolean(value.output),
      };
      return [name, fieldSetting];
    });

  return Object.fromEntries(entries);
}

export function getSchemaDecorate(decorate): LegacyDecorateElement[] {
  const result: LegacyDecorateElement[] = [];
  const configDecorate: (Record<string, string> | undefined)[] = Object.values(
    decorate || {},
  );

  for (const element of configDecorate) {
    if (!element) continue;

    assert.ok(
      element.from && element.name,
      `Missed 'from' or 'name' part in configuration for decorate`,
    );
    result.push({
      arguments: element.arguments ? JSON5.parse(element.arguments) : undefined,
      defaultImport: toBoolean(element.defaultImport)
        ? true
        : element.defaultImport,
      field: element.field,
      from: element.from,
      isMatchField: outmatch(element.field, { separator: false }),
      isMatchType: outmatch(element.type, { separator: false }),
      name: element.name,
      namedImport: toBoolean(element.namedImport),
      namespaceImport: element.namespaceImport,
      type: element.type,
    });
  }

  return result;
}

export function getSchemaCustomImport(customImport): CustomImportItem[] {
  const result: CustomImportItem[] = [];
  const configCustomImport: (Record<string, string> | undefined)[] =
    Object.values(customImport || {});
  for (const element of configCustomImport) {
    if (!element) continue;
    assert.ok(
      element.from && element.name,
      `Missed 'from' or 'name' part in configuration for customImport`,
    );
    result.push({
      defaultImport: toBoolean(element.defaultImport)
        ? true
        : element.defaultImport,
      from: element.from,
      name: element.name,
      namedImport: toBoolean(element.namedImport),
      namespaceImport: element.namespaceImport,
    });
  }

  return result;
}
