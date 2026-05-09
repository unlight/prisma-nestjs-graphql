import type {
  ImportDeclarationStructure,
  ImportSpecifierStructure,
  OptionalKind,
} from 'ts-morph';
import { StructureKind } from 'ts-morph';

import type { GeneratorConfiguration } from '../types.ts';
import type { ObjectSetting } from './object-settings.ts';

export class ImportDeclarationMap extends Map<
  string,
  OptionalKind<ImportDeclarationStructure>
> {
  add(name: string, moduleSpecifier: string): void;
  add(name: string, value: OptionalKind<ImportDeclarationStructure>): void;

  add(
    name: string,
    value: OptionalKind<ImportDeclarationStructure> | string,
  ): void {
    if (!this.has(name)) {
      if (typeof value === 'string') {
        this.set(name, { moduleSpecifier: value, namedImports: [{ name }] });
      } else {
        this.set(name, value);
      }
    }
  }

  create(args: {
    config: GeneratorConfiguration;
    propertySettings?: ObjectSetting;
    propertyType: string;
  }) {
    const { config, propertySettings, propertyType } = args;

    if (propertySettings) {
      return this.createFrom({ ...propertySettings });
    }

    if (/\bIdentity</.test(propertyType)) {
      this.add('Identity', {
        isTypeOnly: true,
        moduleSpecifier: 'identity-type',
        namedImports: [{ name: 'Identity' }],
      });
    }

    if (
      [/\bDecimal\b/, /\bArray<Decimal>\b/].some(re => re.test(propertyType))
    ) {
      // TODO: Deprecated and should be removed
      this.add('Decimal', '@prisma/client-runtime-utils');
    }

    if (/\bPrisma\./.test(propertyType)) {
      this.add('Prisma', config.prismaClientImport);
    }
  }

  createFrom(args: {
    name: string;
    from: string;
    defaultImport?: string | true;
    namespaceImport?: string;
    namedImport?: boolean;
  }) {
    const { defaultImport, from, namedImport, namespaceImport } = args;
    let name = args.name;
    const value = {
      defaultImport: undefined as string | undefined,
      moduleSpecifier: from,
      namedImports: [] as OptionalKind<ImportSpecifierStructure>[],
      namespaceImport: undefined as string | undefined,
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
    this.add(name, value);
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
