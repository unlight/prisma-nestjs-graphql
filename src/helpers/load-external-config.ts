import assert from 'node:assert';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

import type { ExternalConfig } from '../types.ts';
import { isObject } from './utils.ts';

export async function loadExternalConfig(
  configFile: unknown,
  sourceFilePath: string,
) {
  if (typeof configFile !== 'string') return;

  let externalConfigFile = configFile;

  if (!path.isAbsolute(configFile)) {
    assert.ok(
      sourceFilePath,
      'Require sourceFilePath for relative config path',
    );
    externalConfigFile = path.resolve(path.dirname(sourceFilePath), configFile);
  }

  const absolutePath = path.resolve(externalConfigFile);
  const { href: fileUrl } = pathToFileURL(absolutePath);

  let configModule: { default?: unknown };
  try {
    configModule = await import(fileUrl);
  } catch {
    assert.fail(`Failed to load config file: ${externalConfigFile}`);
  }

  const externalConfig: ExternalConfig =
    (configModule as any).default ?? configModule;

  assert.ok(
    isObject(externalConfig),
    `Config file must export a non-null object: ${externalConfigFile}`,
  );

  if (externalConfig.output !== undefined) {
    assert.ok(
      typeof externalConfig.output === 'string' &&
        externalConfig.output.length > 0,
      `Config 'output' must be a non-empty string`,
    );
  }

  if (externalConfig.decorators !== undefined) {
    assert.ok(
      Array.isArray(externalConfig.decorators),
      `Config 'decorators' must be an array`,
    );
    for (const element of externalConfig.decorators as Record<
      string,
      unknown
    >[]) {
      assert.ok(
        isObject(element),
        `Each 'decorators' element must be an object`,
      );
      assert.ok(element.from, `Each 'decorators' element missing 'from'`);
      assert.ok(element.name, `Each 'decorators' element missing 'name'`);
    }
  }

  if (externalConfig.customImports !== undefined) {
    assert.ok(
      Array.isArray(externalConfig.customImports),
      `Config 'customImports' must be an array`,
    );
    for (const element of externalConfig.customImports as Record<
      string,
      unknown
    >[]) {
      assert.ok(
        isObject(element),
        `Each 'customImports' element must be an object`,
      );
      assert.ok(element.from, `Each 'customImports' element missing 'from'`);
      assert.ok(element.name, `Each 'customImports' element missing 'name'`);
    }
  }

  return { externalConfig, externalConfigFile };
}
