import assert from 'assert';
import { SourceFile } from 'ts-morph';

export { generatorOptions } from './generator-options';

export function stringContains(expected: string, actual: string) {
  expected = expected.replace(/\s+/g, ' ');
  assert(
    actual.replace(/\s+/g, ' ').includes(expected),
    `Missing ${expected} in:\n${actual}`,
  );
}

export function stringNotContains(expected: string, actual: string) {
  expected = expected.replace(/\s+/g, ' ');
  assert(
    actual.replace(/\s+/g, ' ').includes(expected) === false,
    `Exists ${expected} in:\n${actual}`,
  );
}

export function getImportDeclarations(sourceFile: SourceFile) {
  return sourceFile.getImportDeclarations().flatMap((d) =>
    d.getNamedImports().map((index) => ({
      name: index.getName(),
      specifier: d.getModuleSpecifierValue(),
    })),
  );
}

export function getFieldArguments(
  args: GetStructuredArguments & { index?: number },
) {
  let result = getStructure(args)?.decorators?.[0]?.arguments;
  if (args.index !== undefined) {
    result = result?.[args.index];
  }
  return result;
}

type GetStructuredArguments = {
  sourceFile: SourceFile;
  className: string;
  property: string;
};

export function getStructure(args: GetStructuredArguments) {
  const { sourceFile, className, property } = args;
  return sourceFile.getClass(className)?.getProperty(property)?.getStructure();
}
