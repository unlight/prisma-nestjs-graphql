import {
  ImportSpecifierStructure,
  Project,
  PropertyDeclaration,
  PropertyDeclarationStructure,
  SourceFile,
} from 'ts-morph';

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

export function testSourceFile(args: {
  project: Project;
  file?: string;
  class?: string;
  property?: string;
}) {
  const { project, file, property, class: className } = args;
  let sourceFile: SourceFile;
  if (file) {
    sourceFile = project.getSourceFileOrThrow(s => s.getFilePath().endsWith(file));
  } else if (className) {
    sourceFile = project.getSourceFileOrThrow(s => Boolean(s.getClass(className)));
  } else {
    throw new TypeError('file or class must be provided');
  }

  const importDeclarations = sourceFile
    .getImportDeclarations()
    .map(d => d.getStructure());
  const classFile = sourceFile.getClass(() => true)!;
  const propertyStructure =
    property && classFile.getProperty(p => p.getName() === property)?.getStructure();
  const propertyDecorators = (
    propertyStructure as PropertyDeclarationStructure | undefined
  )?.decorators;
  const fieldDecorator = propertyDecorators?.find(d => d.name === 'Field');

  type ImportElement = { name: string; specifier: string };
  const namedImports: ImportElement[] = [];
  const namespaceImports: ImportElement[] = [];

  for (const d of importDeclarations) {
    if (d.namespaceImport) {
      namespaceImports.push({
        name: d.namespaceImport,
        specifier: d.moduleSpecifier,
      });
    }
    for (const s of (d.namedImports || []) as ImportSpecifierStructure[]) {
      namedImports.push({
        name: s.name,
        specifier: d.moduleSpecifier,
      });
    }
  }

  return {
    sourceFile,
    classFile,
    sourceText: sourceFile.getText(),
    namedImports,
    namespaceImports,
    property: propertyStructure as PropertyDeclarationStructure | undefined,
    propertyDecorators,
    fieldDecorator,
    fieldDecoratorType: fieldDecorator?.arguments?.[0],
    fieldDecoratorOptions: fieldDecorator?.arguments?.[1],
  };
}
