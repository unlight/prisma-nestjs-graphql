import expect from 'expect';
import {
    ClassDeclaration,
    ImportDeclarationStructure,
    ImportSpecifierStructure,
    Project,
    PropertyDeclarationStructure,
    SourceFile,
} from 'ts-morph';

import { getPropertyStructure } from './helpers';
import { testGenerate } from './test-generate';

let sourceFile: SourceFile;
let sourceText: string;
let project: Project;
let propertyStructure: PropertyDeclarationStructure;
let classFile: ClassDeclaration;
let sourceFiles: SourceFile[];
let importDeclarations: ImportDeclarationStructure[] = [];
let imports: { name: string; specifier: string }[];

const p = (name: string) => getPropertyStructure(sourceFile, name);
const d = (name: string) => getPropertyStructure(sourceFile, name)?.decorators?.[0];
const t = (name: string) =>
    getPropertyStructure(sourceFile, name)?.decorators?.find(d => d.name === 'Field')
        ?.arguments?.[0];
const setSourceFile = (name: string) => {
    sourceFile = project.getSourceFile(s => s.getFilePath().endsWith(name))!;
    classFile = sourceFile.getClass(() => true)!;
    sourceText = sourceFile.getText();
    importDeclarations = sourceFile.getImportDeclarations().map(d => d.getStructure());
    imports = importDeclarations.flatMap(d =>
        (d.namedImports as ImportSpecifierStructure[]).map(x => ({
            name: x.name,
            specifier: d.moduleSpecifier,
        })),
    );
};

describe.skip('user test', () => {
    before(async () => {
        ({ project, sourceFiles } = await testGenerate({
            schema: `

/// Represente les dossier de patients
model Patient {
  id                  String              @id @default(uuid())
  special_indications String[]
}
            `,
            options: [],
        }));
    });

    it('^', () => {});
});
