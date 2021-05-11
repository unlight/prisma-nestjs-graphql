import expect from 'expect';
import {
    ClassDeclaration,
    ImportDeclarationStructure,
    ImportSpecifierStructure,
    Project,
    PropertyDeclarationStructure,
    SourceFile,
} from 'ts-morph';

import { getFieldType, getPropertyStructure } from './helpers';
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

describe('custom types', () => {
    describe('legacy custom type in user model', () => {
        before(async () => {
            ({ project, sourceFiles } = await testGenerate({
                schema: `
            model User {
               id String @id
               money Decimal
            }`,
                options: [
                    `types_Decimal_fieldType = Dec`,
                    `types_Decimal_fieldModule = "decimal.js"`,
                ],
            }));
            setSourceFile('/user.model.ts');
        });

        it('money property should have Dec type', () => {
            const property = getPropertyStructure(sourceFile, 'money');
            expect(property?.type).toEqual('Dec');
        });

        it('import should contain Dec', () => {
            expect(imports).toContainEqual({
                name: 'Dec',
                specifier: 'decimal.js',
            });
        });
    });

    describe('legacy custom datetime type', () => {
        before(async () => {
            ({ project, sourceFiles } = await testGenerate({
                schema: `
                    model User {
                        id     Int      @id
                        birth  DateTime
                        died   DateTime?
                    }`,
                options: [
                    `types_DateTime_fieldType = "Date | string"`,
                    `types_DateTime_graphqlType = "Date"`,
                ],
            }));
            sourceFile = project.getSourceFile(s =>
                s.getFilePath().endsWith('/date-time-filter.input.ts'),
            )!;
        });

        // it('^', () => console.log(sourceFile.getText()));

        it('property in', () => {
            const property = getPropertyStructure(sourceFile, 'in');
            expect(property?.type).toEqual('Array<Date> | Array<string>');
        });

        it('decorator type should be array date', () => {
            expect(getFieldType(sourceFile, 'in')).toEqual('() => [Date]');
        });
    });

    describe('custom type decimal in user', () => {
        before(async () => {
            ({ project, sourceFiles } = await testGenerate({
                schema: `
            model User {
               id String @id
               /// @PropertyType({ name: 'Prisma.Decimal', from: '@prisma/client', namedImport: true })
               money Decimal
            }`,
                options: [],
            }));
        });

        describe('user model', () => {
            before(() => {
                setSourceFile('/user.model.ts');
            });

            // it('^', () => console.log(sourceFile.getText()));

            it('money property should have dec type', () => {
                expect(p('money')?.type).toEqual('Prisma.Decimal');
            });

            it('import should exists', () => {
                expect(imports).toContainEqual({
                    name: 'Prisma',
                    specifier: '@prisma/client',
                });
            });
        });

        describe('user create input', () => {
            before(() => {
                setSourceFile('/user-create.input.ts');
            });

            // it('^', () => console.log(sourceFile.getText()));

            it('money property should have custom type', () => {
                expect(p('money')?.type).toEqual('Prisma.Decimal');
            });

            it('import should exists', () => {
                expect(imports).toContainEqual({
                    name: 'Prisma',
                    specifier: '@prisma/client',
                });
            });
        });

        describe('user count aggregate output', () => {
            before(() => {
                setSourceFile('/user-count-aggregate.output.ts');
            });

            // it('^', () => console.log(sourceFile.getText()));

            it('money property should have custom type', () => {
                expect(p('money')?.type).toEqual('Prisma.Decimal');
            });

            it('import should exists', () => {
                expect(imports).toContainEqual({
                    name: 'Prisma',
                    specifier: '@prisma/client',
                });
            });
        });
    });

    describe('custom type multiple types', () => {
        let otherSourceFile: SourceFile;
        before(async () => {
            ({ project, sourceFiles } = await testGenerate({
                schema: `
            model User {
               id String @id
               /// @PropertyType({ name: 'X' })
               date DateTime[]
            }`,
                options: [`noAtomicOperations = true`, `fields_X_from = "custom-date"`],
            }));
            setSourceFile('/user-create.input.ts');
            // otherSourceFile = sourceFiles.find(s =>
            //     s.getFilePath().endsWith('/user-createdate.input.ts'),
            // );
        });

        // it('^', () => console.log(sourceFile.getText()));
        // it('^', () => console.log(otherSourceFile.getText()));
    });

    describe('custom type json in user model', () => {
        before(async () => {
            ({ project, sourceFiles } = await testGenerate({
                schema: `
            model User {
               id String @id
               /// @PropertyType('TF.JsonObject')
               data Json
            }`,
                options: [`fields_TF_from = "type-fest"`],
            }));
            setSourceFile('/user.model.ts');
            importDeclarations = sourceFile
                .getImportDeclarations()
                .map(d => d.getStructure());
        });

        // it('^', () => console.log(sourceFile.getText()));

        it('data property should have json type', () => {
            const property = getPropertyStructure(sourceFile, 'data');
            expect(property?.type).toEqual('TF.JsonObject');
        });

        it('import should contain type json', () => {
            expect(importDeclarations).toContainEqual(
                expect.objectContaining({
                    defaultImport: undefined,
                    moduleSpecifier: 'type-fest',
                    namedImports: [],
                    namespaceImport: 'TF',
                }),
            );
        });
    });
});

describe('custom decorators namespace both input and output', () => {
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
                    /// @FieldType({ name: 'Scalars.GraphQLEmailAddress', from: 'graphql-scalars', input: true })
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

    describe('aggregates should not have validators', () => {
        it('user-count-aggregate.input', () => {
            setSourceFile('user-count-aggregate.input.ts');
            expect(
                p('email')?.decorators?.find(d => d.name.includes('IsEmail')),
            ).toBeUndefined();
            expect(t('email')).toEqual('() => Boolean');
        });

        it('user-count-order-by-aggregate.input name is type of sort order', () => {
            setSourceFile('user-count-order-by-aggregate.input.ts');
            expect(
                p('email')?.decorators?.find(d => d.name.includes('IsEmail')),
            ).toBeUndefined();
            expect(t('email')).toEqual('() => SortOrder');
        });
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

        it('several decorators length', () => {
            const decorators = p('age')?.decorators;
            expect(decorators).toHaveLength(3);
        });

        it('validator should be imported once', () => {
            expect(
                importDeclarations.filter(x => x.moduleSpecifier === 'class-validator'),
            ).toHaveLength(1);
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

describe('custom decorators and description', () => {
    before(async () => {
        ({ project, sourceFiles } = await testGenerate({
            schema: `
                model User {
                    /// user id really
                    id Int @id
                    /// User name really
                    /// @Validator.Length(5, 15, "check length")
                    name String
                }`,
            options: [
                `outputFilePattern = "{name}.{type}.ts"`,
                `fields_Validator_from = "class-validator"`,
                `fields_Validator_output = true`,
                `fields_Validator_input = true`,
            ],
        }));
    });

    describe('user model output', () => {
        before(() => setSourceFile('user.model.ts'));

        it('has description', () => {
            const data = d('name')?.arguments?.[1];
            expect(data).toContain("description:'User name really'");
        });

        it('has decorator length', () => {
            const decorators = p('name')?.decorators;
            expect(decorators).toHaveLength(2);
            expect(decorators).toContainEqual(
                expect.objectContaining({ name: 'Length' }),
            );
            expect(sourceText).toContain('@Validator.Length(5, 15, "check length")');
        });
    });
});

describe('custom decorators default import', () => {
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

        it('email field type', () => {
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
