import { StructureKind } from 'ts-morph';

import { relativePath } from '../helpers/relative-path';
import { EventArguments } from '../types';

/**
 * Generate the register-all-types.ts file that imports all generated types
 * to ensure their registerType() calls are executed.
 *
 * This file must be imported early in the application, before any code
 * tries to use getType() for lazy type resolution.
 */
export function generateRegisterAllTypes(args: EventArguments): void {
  const { config, output, project } = args;

  if (!config.esmCompatible) {
    return;
  }

  const rootDirectory = project.getDirectory(output) || project.createDirectory(output);
  const sourceFile = rootDirectory.createSourceFile(
    'register-all-types.ts',
    undefined,
    { overwrite: true },
  );

  // Collect all generated source files that have registerType() calls
  const importPaths: string[] = [];

  // Get all source files in the output directory
  const allSourceFiles = project.getSourceFiles(`${output}/**/*.ts`);

  for (const file of allSourceFiles) {
    const filePath = file.getFilePath();

    // Skip utility files and the register file itself
    if (
      filePath.endsWith('type-registry.ts') ||
      filePath.endsWith('register-all-types.ts') ||
      filePath.endsWith('index.ts')
    ) {
      continue;
    }

    // Check if this file has a registerType() call
    const fileText = file.getText();
    if (fileText.includes('registerType(')) {
      // Get relative path from register-all-types.ts to this file
      const relPath = relativePath(sourceFile.getFilePath(), filePath);
      importPaths.push(relPath);
    }
  }

  // Sort for consistent output
  importPaths.sort();

  // Generate side-effect imports for all type files
  const importStatements = importPaths.map(path => ({
    kind: StructureKind.ImportDeclaration as const,
    moduleSpecifier: path,
  }));

  sourceFile.set({
    kind: StructureKind.SourceFile,
    statements: [
      `/**
 * This file registers all generated types with the type registry.
 * Import this file early in your application bootstrap to ensure
 * all types are registered before they're needed.
 *
 * Example usage in your main.ts or app.module.ts:
 *   import 'src/prisma/@generated/register-all-types';
 */`,
      '\n',
      ...importStatements,
      '\n',
      `export {};`,
    ],
  });
}

