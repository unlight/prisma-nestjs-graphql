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
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User?    @relation(fields: [authorId], references: [id])
  authorId  Int?
}
            `,
            options: [
                `outputFilePattern = "{name}.{type}.ts"`,
                `useInputType_WhereInput_ALL = "WhereInput"`,
                `useInputType_CreateOne_ALL = "UncheckedCreate"`,
            ],
        }));
    });

    it('^', () => {
        for (const sourceFile of project.getSourceFiles()) {
            const classDeclaration = sourceFile.getClass(() => true);
            if (!classDeclaration) {
                continue;
            }
            const referencedSymbols = classDeclaration.findReferences();
            if (referencedSymbols.length > 1) {
                continue;
            }
            console.log('class name', classDeclaration.getName());
            // console.log('referencedSymbols.length', referencedSymbols.length);
            // for (const referencedSymbol of referencedSymbols) {
            //     for (const reference of referencedSymbol.getReferences()) {
            //         console.log('---------');
            //         console.log('REFERENCE');
            //         console.log('---------');
            //         console.log(
            //             'File path: ' + reference.getSourceFile().getFilePath(),
            //         );
            //         console.log('Start: ' + reference.getTextSpan().getStart());
            //         console.log('Length: ' + reference.getTextSpan().getLength());
            //         console.log(
            //             'Parent kind: ' +
            //                 reference.getNode().getParentOrThrow().getKindName(),
            //         );
            //         console.log('\n');
            //     }
            // }
        }
    });
});
