import {
  ImportDeclarationStructure,
  ImportSpecifierStructure,
  OptionalKind,
  StructureKind,
} from 'ts-morph';

export class ImportDeclarationMap extends Map<
  string,
  OptionalKind<ImportDeclarationStructure>
> {
  add(name: string, moduleSpecifier: string, isTypeOnly?: boolean): void;
  add(name: string, value: OptionalKind<ImportDeclarationStructure>): void;

  add(
    name: string,
    value: OptionalKind<ImportDeclarationStructure> | string,
    isTypeOnly?: boolean,
  ): void {
    if (!this.has(name)) {
      const structure: OptionalKind<ImportDeclarationStructure> =
        typeof value === 'string'
          ? { moduleSpecifier: value, namedImports: [{ name }], isTypeOnly }
          : value;
      this.set(name, structure);
    }
  }

  /**
   * Add a type-only import for ESM circular dependency resolution
   */
  addType(name: string, moduleSpecifier: string): void {
    const typeOnlyKey = `type:${name}`;
    if (!this.has(typeOnlyKey) && !this.has(name)) {
      this.set(typeOnlyKey, {
        moduleSpecifier,
        namedImports: [{ name }],
        isTypeOnly: true,
      });
    }
  }

  create(args: {
    name: string;
    from: string;
    defaultImport?: string | true;
    namespaceImport?: string;
    namedImport?: boolean;
    isTypeOnly?: boolean;
  }) {
    const { from, defaultImport, namespaceImport, namedImport, isTypeOnly } = args;
    let name = args.name;
    const value: OptionalKind<ImportDeclarationStructure> = {
      moduleSpecifier: from,
      namedImports: [] as OptionalKind<ImportSpecifierStructure>[],
      defaultImport: undefined as string | undefined,
      namespaceImport: undefined as string | undefined,
      isTypeOnly,
    };
    if (namedImport === true && namespaceImport) {
      value.namedImports = [{ name: namespaceImport }];
      name = namespaceImport;
    } else if (defaultImport) {
      value.defaultImport = defaultImport === true ? name : defaultImport;
      name = value.defaultImport;
    } else if (namespaceImport) {
      value.namespaceImport = namespaceImport;
      name = namespaceImport;
    } else {
      value.namedImports = [{ name }];
    }
    const key = isTypeOnly ? `type:${name}` : name;
    if (!this.has(key)) {
      this.set(key, value);
    }
  }

  *toStatements(): Iterable<ImportDeclarationStructure> {
    const iterator = this.values();
    let result = iterator.next();
    while (result.value) {
      yield {
        ...result.value,
        kind: StructureKind.ImportDeclaration,
      };
      result = iterator.next();
    }
  }
}
