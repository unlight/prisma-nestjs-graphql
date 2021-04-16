import expect from 'expect';
import {
    ClassDeclaration,
    Project,
    PropertyDeclarationStructure,
    SourceFile,
} from 'ts-morph';

import { getImportDeclarations, getPropertyStructure } from './helpers';
import { testGenerate } from './test-generate';

let sourceFile: SourceFile;
let sourceText: string;
let project: Project;
let propertyStructure: PropertyDeclarationStructure;
let imports: ReturnType<typeof getImportDeclarations>;
let classFile: ClassDeclaration;
let sourceFiles: SourceFile[];

const p = (name: string) => getPropertyStructure(sourceFile, name);
const d = (name: string) => getPropertyStructure(sourceFile, name)?.decorators?.[0];
const setSourceFile = (name: string) => {
    sourceFile = project.getSourceFile(s => s.getFilePath().endsWith(name))!;
    classFile = sourceFile.getClass(() => true)!;
    sourceText = sourceFile.getText();
    imports = getImportDeclarations(sourceFile);
};

describe('custom decorators namespace both input and output', () => {
    let importDeclarations: any[];
    before(async () => {
        ({ project, sourceFiles } = await testGenerate({
            schema: `
                model User {
                    id Int @id
                    /// @Validator.MaxLength(30)
                    name String
                    /// @Validator.Max(999)
                    /// @Validator.Min(18)
                    age Int
                    /// @Validator.IsEmail()
                    email String?
                }`,
            options: [
                `outputFilePattern = "{name}.{type}.ts"`,
                // custom decorators (validate)
                // import * as Validator from 'class-validator'
                // @Validator.IsEmail()
                // email: string
                `fields_Validator_from = "class-validator"`,
                `fields_Validator_input = true`,
            ],
        }));
    });

    describe('custom decorators in user create input', () => {
        before(() => {
            setSourceFile('user-create.input.ts');
            importDeclarations = sourceFile
                .getImportDeclarations()
                .map(d => d.getStructure());
        });

        // it('^', () => console.log(sourceFile.getText()));

        it('decorator validator maxlength should exists', () => {
            const d = classFile
                .getProperty('name')
                ?.getDecorator(d => d.getFullName() === 'Validator.MaxLength');
            expect(d).toBeTruthy();
            expect(d?.getText()).toBe('@Validator.MaxLength(30)');
        });

        it('imports should contains custom import', () => {
            expect(importDeclarations).toContainEqual(
                expect.objectContaining({
                    namespaceImport: 'Validator',
                    moduleSpecifier: 'class-validator',
                }),
            );
        });

        it('several decorators', () => {
            const decorators = p('age')?.decorators;
            expect(decorators).toHaveLength(3);
        });
    });

    describe('user model output should not have validator decorator', () => {
        before(() => setSourceFile('user.model.ts'));

        describe('should not have metadata in description', () => {
            it('age', () => {
                expect(d('age')?.arguments?.[1]).not.toContain('description');
            });

            it('name', () => {
                expect(d('name')?.arguments?.[1]).not.toContain('description');
            });

            it('email', () => {
                expect(d('email')?.arguments?.[1]).not.toContain('description');
            });
        });

        it('output model has no maxlength decorator', () => {
            const decorator = p('name')?.decorators?.find(d => d.name === 'MaxLength');
            expect(decorator).toBeFalsy();
        });

        // it('^', () => console.log(sourceFile.getText()));
    });
});

describe('custom decorators default import', () => {
    let importDeclarations: any[];

    before(async () => {
        ({ project, sourceFiles } = await testGenerate({
            schema: `
                model User {
                    id Int @id
                    /// @IsValidName()
                    name String
                }`,
            options: [
                `outputFilePattern = "{name}.{type}.ts"`,
                `fields_IsValidName_from = "is-valid-name"`,
                `fields_IsValidName_input = true`,
                `fields_IsValidName_defaultImport = IsValidName`,
            ],
        }));
    });

    describe('in user create input', () => {
        before(() => {
            setSourceFile('user-create.input.ts');
        });

        it('importDeclarations should import default', () => {
            importDeclarations = sourceFile
                .getImportDeclarations()
                .map(d => d.getStructure())
                .filter(d => d.moduleSpecifier === 'is-valid-name');

            expect(importDeclarations).toHaveLength(1);
            expect(importDeclarations[0]).toEqual(
                expect.objectContaining({
                    defaultImport: 'IsValidName',
                    namedImports: [],
                    namespaceImport: undefined,
                }),
            );
        });

        // it('^', () => console.log(sourceFile.getText()));
    });

    describe('default import alternative syntax', () => {
        before(async () => {
            ({ project, sourceFiles } = await testGenerate({
                schema: `
                model User {
                    id Int @id
                    /// @IsEmail()
                    name String
                }`,
                options: [
                    `outputFilePattern = "{name}.{type}.ts"`,
                    `fields_IsEmail_from = "isvalidemail"`,
                    `fields_IsEmail_input = true`,
                    `fields_IsEmail_defaultImport = true`,
                ],
            }));
            setSourceFile('user-create.input.ts');
        });

        it('test', () => {
            importDeclarations = sourceFile
                .getImportDeclarations()
                .map(d => d.getStructure())
                .filter(d => d.moduleSpecifier === 'isvalidemail');
            expect(importDeclarations).toHaveLength(1);
            expect(importDeclarations[0]).toEqual(
                expect.objectContaining({
                    defaultImport: 'IsEmail',
                    namedImports: [],
                    namespaceImport: undefined,
                }),
            );
        });
    });
});

describe('custom decorators field custom type namespace', () => {
    let importDeclarations: any[];
    before(async () => {
        ({ project, sourceFiles } = await testGenerate({
            schema: `
                model User {
                    id Int @id
                    /// @FieldType({ name: 'Scalars.EmailAddress', output: true, input: true })
                    email String
                    /// @FieldType('Scalars.EmailAddress')
                    secondEmail String
                }`,
            options: [
                `outputFilePattern = "{name}.{type}.ts"`,
                // import { EmailAddress } from 'graphql-scalars'
                // @Field(() => EmailAddress)
                `fields_Scalars_from = "graphql-scalars"`,
                `fields_Scalars_input = true`,
            ],
        }));
    });

    describe('user create input', () => {
        before(() => {
            setSourceFile('user-create.input.ts');
        });

        it('field type', () => {
            const decorator = p('email')?.decorators?.find(d => d.name === 'Field');
            const typeArgument = decorator?.arguments?.[0];
            expect(typeArgument).toEqual('() => Scalars.EmailAddress');
        });

        it('should not apply to field as decorator', () => {
            const decorators = p('email')?.decorators;
            expect(decorators).toHaveLength(1);
        });

        it('field type secondemail', () => {
            const decorator = p('secondEmail')?.decorators?.find(
                d => d.name === 'Field',
            );
            const typeArgument = decorator?.arguments?.[0];
            expect(typeArgument).toEqual('() => Scalars.EmailAddress');
        });

        it('importdeclarations should import namespace', () => {
            importDeclarations = sourceFile
                .getImportDeclarations()
                .map(d => d.getStructure())
                .filter(d => d.moduleSpecifier === 'graphql-scalars');

            expect(importDeclarations).toHaveLength(1);
            expect(importDeclarations[0]).toEqual(
                expect.objectContaining({
                    defaultImport: undefined,
                    namedImports: [],
                    namespaceImport: 'Scalars',
                }),
            );
        });

        // it('^', () => console.log(sourceFile.getText()));
    });

    describe('custom type user model', () => {
        before(() => {
            setSourceFile('user.model.ts');
        });

        it('custom type user model email field type', () => {
            const decorator = p('email')?.decorators?.find(d => d.name === 'Field');
            const typeArgument = decorator?.arguments?.[0];
            expect(typeArgument).toEqual('() => Scalars.EmailAddress');
        });

        // it('^', () => console.log(sourceFile.getText()));
    });
});

// it('^', () => console.log(sourceFile.getText()));
