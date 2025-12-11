import { StructureKind } from 'ts-morph';

import { EventArguments } from '../types';

/**
 * Generate the type-registry.ts file that provides lazy type resolution
 * for circular dependencies in ESM environments
 */
export function generateTypeRegistry(args: EventArguments): void {
  const { config, output, project } = args;

  if (!config.esmCompatible) {
    return;
  }

  const rootDirectory = project.getDirectory(output) || project.createDirectory(output);

  const sourceFile = rootDirectory.createSourceFile(
    'type-registry.ts',
    undefined,
    { overwrite: true },
  );

  sourceFile.set({
    kind: StructureKind.SourceFile,
    statements: [
      {
        kind: StructureKind.VariableStatement,
        isExported: false,
        declarationKind: 'const' as any,
        declarations: [
          {
            name: 'registry',
            initializer: 'new Map<string, unknown>()',
          },
        ],
      },
      '\n',
      {
        kind: StructureKind.Function,
        isExported: true,
        name: 'registerType',
        parameters: [
          { name: 'name', type: 'string' },
          { name: 'type', type: 'unknown' },
        ],
        returnType: 'void',
        statements: ['registry.set(name, type);'],
      },
      '\n',
      {
        kind: StructureKind.Function,
        isExported: true,
        name: 'getType',
        parameters: [{ name: 'name', type: 'string' }],
        returnType: '() => unknown',
        statements: ['return () => registry.get(name);'],
      },
    ],
  });
}

