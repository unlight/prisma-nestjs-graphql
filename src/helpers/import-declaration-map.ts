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
    add(name: string, moduleSpecifier: string): void;
    add(name: string, value: OptionalKind<ImportDeclarationStructure>): void;

    add(name: string, value: OptionalKind<ImportDeclarationStructure> | string): void {
        if (!this.has(name)) {
            const structure: OptionalKind<ImportDeclarationStructure> =
                typeof value === 'string'
                    ? { moduleSpecifier: value, namedImports: [{ name }] }
                    : value;
            this.set(name, structure);
        }
    }

    create(args: {
        name: string;
        from: string;
        defaultImport?: string | true;
        namespaceImport?: string;
        namedImport?: boolean;
    }) {
        const { from, defaultImport, namespaceImport, namedImport } = args;
        let name = args.name;
        const value = {
            moduleSpecifier: from,
            namedImports: [] as OptionalKind<ImportSpecifierStructure>[],
            defaultImport: undefined as string | undefined,
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
