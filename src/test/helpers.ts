import {
  ImportDeclarationStructure,
  ImportSpecifierStructure,
  Project,
  PropertyDeclaration,
  PropertyDeclarationStructure,
  SourceFile,
} from 'ts-morph';

import { chain } from '../helpers/utils.ts';

export function testSourceFile(args: {
  project: Project;
  file?: string;
  class?: string;
}) {
  const { class: className, file, project } = args;
  const getSourceFile = () => {
    if (file) {
      return project.getSourceFileOrThrow(s => s.getFilePath().endsWith(file));
    }
    if (className) {
      return project.getSourceFileOrThrow(s => Boolean(s.getClass(className)));
    }

    throw new TypeError('file or class must be provided');
  };
  const sourceFile = getSourceFile();
  const importDeclarations = sourceFile
    .getImportDeclarations()
    .map(d => d.getStructure());

  const sourceClass = sourceFile.getClass(d =>
    className ? d.getName() === className : true,
  )!;
  const propertyList = sourceClass.getProperties().map(p => p.getStructure());
  const propertyMap = Object.fromEntries(propertyList.map(p => [p.name, p]));
  const hasHideFiled = (property: string) => {
    return propertyMap[property].decorators?.some(d => d.name === 'HideField');
  };
  const getImportByName = (name: string) => {
    let declaration: ImportDeclarationStructure;
    let specifier: ImportSpecifierStructure;
    for (declaration of importDeclarations) {
      if (declaration.namedImports) {
        for (specifier of declaration.namedImports as ImportSpecifierStructure[]) {
          if (specifier.name === name) return { declaration, specifier };
        }
      }
    }
  };

  return {
    getImportByName,
    getNamedImports: getNamedImportsFactory(importDeclarations),
    hasHideFiled,
    importDeclarations,
    propertyMap,
    sourceClass,
    sourceText: sourceFile.getText(),
  };
}

function getNamedImportsFactory(
  importDeclarations: ImportDeclarationStructure[],
) {
  return function getNamedImportsFactory(path: string) {
    return chain(importDeclarations)
      .find({ moduleSpecifier: path })
      .get('namedImports')
      .castArray()
      .compact()
      .value() as ImportSpecifierStructure[];
  };
}

export function getFieldDecoratorType(property: PropertyDeclarationStructure) {
  return getFieldDecorator(property).type;
}

export function getFieldDecoratorOptions(
  property: PropertyDeclarationStructure,
) {
  return getFieldDecorator(property).options;
}

function getFieldDecorator(property: PropertyDeclarationStructure) {
  const decorator = property.decorators?.find(x => x.name === 'Field');

  return {
    decorator,
    options: decorator?.arguments?.[1],
    type: decorator?.arguments?.[0],
  };
}

export function getFieldOptions(
  sourceFile: SourceFile,
  property: string | PropertyDeclaration,
) {
  let propertyDeclaration: PropertyDeclaration | undefined;
  if (typeof property === 'string') {
    propertyDeclaration = sourceFile
      .getClass(() => true)
      ?.getProperty(property);
  }
  const result =
    propertyDeclaration?.getStructure().decorators?.[0]?.arguments?.[1];
  return result as string;
}

/**
 * @deprecated
 */
export function getPropertyStructure(sourceFile: SourceFile, name: string) {
  return sourceFile
    .getClass(() => true)
    ?.getProperty(p => p.getName() === name)
    ?.getStructure();
}

/**
 * @deprecated Use testSourceFile instead
 */
export function testSourceFileLegacy(args: {
  project: Project;
  file?: string;
  class?: string;
  property?: string;
}) {
  const { class: className, file, project, property } = args;
  let sourceFile: SourceFile;
  if (file) {
    sourceFile = project.getSourceFileOrThrow(s =>
      s.getFilePath().endsWith(file),
    );
  } else if (className) {
    sourceFile = project.getSourceFileOrThrow(s =>
      Boolean(s.getClass(className)),
    );
  } else {
    throw new TypeError('file or class must be provided');
  }

  const importDeclarations = sourceFile
    .getImportDeclarations()
    .map(d => d.getStructure());
  const classFile = sourceFile.getClass(() => true)!;
  const propertyStructure =
    property &&
    classFile.getProperty(p => p.getName() === property)?.getStructure();
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
    classFile,
    fieldDecorator,
    fieldDecoratorOptions: fieldDecorator?.arguments?.[1],
    fieldDecoratorType: fieldDecorator?.arguments?.[0],
    namedImports,
    namespaceImports,
    property: propertyStructure as PropertyDeclarationStructure | undefined,
    propertyDecorators,
    sourceFile,
    sourceText: sourceFile.getText(),
  };
}
