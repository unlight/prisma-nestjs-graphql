import { PropertyDeclaration, SourceFile } from 'ts-morph';

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

export function getPropertyStructure(sourceFile: SourceFile, name: string) {
    return sourceFile
        .getClass(() => true)
        ?.getProperty(p => p.getName() === name)
        ?.getStructure();
}
