import path from 'node:path';

const extensions = new Set(['.js', '.mjs', '.ts', '.mts', '.cts', '.cjs']);

export function adjustModuleSpecifier(
  moduleSpecifier: string,
  importExtension: string,
): string {
  if (moduleSpecifier.startsWith('.')) {
    let specifierWithoutExtension = moduleSpecifier;
    const extension = path.extname(moduleSpecifier);
    if (extensions.has(extension)) {
      specifierWithoutExtension = moduleSpecifier.slice(0, -extension.length);
    }

    if (!importExtension) return specifierWithoutExtension;

    if (extension !== `.${importExtension}`) {
      return `${specifierWithoutExtension}.${importExtension}`;
    }
  }

  return moduleSpecifier;
}
