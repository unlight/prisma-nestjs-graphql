import { ImportDeclarationStructure, OptionalKind, StructureKind } from 'ts-morph';

export class ImportDeclarationMap extends Map<
    string,
    OptionalKind<ImportDeclarationStructure>
> {
    add(name: string, value: OptionalKind<ImportDeclarationStructure>) {
        if (!this.has(name)) {
            this.set(name, value);
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
