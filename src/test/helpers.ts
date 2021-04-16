import { PropertyDeclaration, SourceFile } from 'ts-morph';

export function getImportDeclarations(sourceFile: SourceFile) {
    return sourceFile.getImportDeclarations().flatMap(d =>
        d.getNamedImports().map(index => ({
            name: index.getName(),
            specifier: d.getModuleSpecifierValue(),
        })),
    );
}

export function getFieldType(
    sourceFile: SourceFile,
    property: string | PropertyDeclaration,
) {
    let propertyDeclaration: PropertyDeclaration | undefined;
    if (typeof property === 'string') {
        propertyDeclaration = sourceFile.getClass(() => true)?.getProperty(property);
    }
    const result = propertyDeclaration?.getStructure()?.decorators?.[0]?.arguments?.[0];
    return result as string;
}

export function getFieldOptions(
    sourceFile: SourceFile,
    property: string | PropertyDeclaration,
) {
    let propertyDeclaration: PropertyDeclaration | undefined;
    if (typeof property === 'string') {
        propertyDeclaration = sourceFile.getClass(() => true)?.getProperty(property);
    }
    const result = propertyDeclaration?.getStructure()?.decorators?.[0]?.arguments?.[1];
    return result as string;
    // return new Function(`return ${text}`)();
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

export function getPropertyStructure(sourceFile: SourceFile, name: string) {
    return sourceFile
        .getClass(() => true)
        ?.getProperty(p => p.getName() === name)
        ?.getStructure();
}
