import expect from 'expect';
import {
    ClassDeclaration,
    Decorator,
    EnumDeclarationStructure,
    Project,
    PropertyDeclaration,
    PropertyDeclarationStructure,
    SourceFile,
} from 'ts-morph';

import { eventEmitter, generate } from './generate';
import {
    createGeneratorOptions,
    getFieldOptions,
    getFieldType,
    getImportDeclarations,
    getPropertyStructure,
} from './testing';

let property: PropertyDeclaration;
let sourceFile: SourceFile;
let sourceFiles: SourceFile[];
let sourceText: string;
let project: Project;
let propertyStructure: PropertyDeclarationStructure;
let imports: ReturnType<typeof getImportDeclarations>;

async function testGenerate(args: {
    schema: string;
    options?: string[];
    sourceFile?: {
        text: string;
        path: string;
    };
}) {
    const { schema, options, sourceFile } = args;
    eventEmitter.off('generateFiles');
    if (sourceFile) {
        eventEmitter.once('begin', ({ project }: { project: Project }) => {
            project.createSourceFile(sourceFile.path, sourceFile.text, {
                overwrite: true,
            });
        });
    }
    eventEmitter.once('end', (args: { project: Project }) => {
        ({ project } = args);
    });
    await generate({
        ...(await createGeneratorOptions(schema, options)),
    });

    sourceFiles = project.getSourceFiles();
    try {
        // eslint-disable-next-line no-var
        var emptyFiles = sourceFiles
            .filter(s => !s.getText())
            .map(s => s.getFilePath());
        expect(emptyFiles).toHaveLength(0);
    } catch {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        throw `Project should not contain empty files: ${emptyFiles}`;
    }
}

describe('model with one id int', () => {
    let id: PropertyDeclarationStructure;
    before(async () => {
        await testGenerate({
            schema: `
            /// User really
            model User {
                  /// user id
                  id Int @id @default(1)
                }`,
        });
    });

    describe('model', () => {
        before(() => {
            sourceFile = project.getSourceFile(s =>
                s.getFilePath().endsWith('user.model.ts'),
            )!;
        });

        it('argument decorated id', () => {
            expect(getFieldType(sourceFile, 'id')).toEqual('() => ID');
        });

        it('should have import graphql type id', () => {
            expect(getImportDeclarations(sourceFile)).toContainEqual({
                name: 'ID',
                specifier: '@nestjs/graphql',
            });
        });

        it('should have import field decorator', () => {
            expect(getImportDeclarations(sourceFile)).toContainEqual({
                name: 'Field',
                specifier: '@nestjs/graphql',
            });
        });

        it('should have exclamation mark for non null id field', () => {
            id = sourceFile
                .getClass(() => true)
                ?.getProperty(p => p.getName() === 'id')
                ?.getStructure()!;
            expect(id.hasExclamationToken).toEqual(true);
        });

        // it('', () => console.log(sourceFile.getText()));

        it('default value', () => {
            const argument = getFieldOptions(sourceFile, 'id');
            expect(argument).toContain('nullable: false');
            expect(argument).toContain('defaultValue: 1');
            expect(argument).not.toContain('description: undefined');
        });

        it('property description', () => {
            const argument = getFieldOptions(sourceFile, 'id');
            expect(argument).toContain('nullable: false');
            expect(argument).toContain('description: "user id"');
        });

        it('object type description', () => {
            const decoratorArgument = sourceFile
                .getClass(() => true)
                ?.getDecorators()?.[0]
                .getStructure()?.arguments?.[0] as string | undefined;
            expect(decoratorArgument).toContain(`description: "User really"`);
        });
    });

    describe('aggregate user', () => {
        before(() => {
            sourceFile = project.getSourceFile(s =>
                s.getFilePath().endsWith('aggregate-user.output.ts'),
            )!;
        });

        // it('', () => console.log(sourceFile.getText()));

        it('count', () => {
            const structure = sourceFile
                .getClass(() => true)
                ?.getProperty(p => p.getName() === 'count')
                ?.getStructure();
            expect(structure?.type).toEqual('UserCountAggregate');
            expect(structure?.hasQuestionToken).toEqual(true);
        });
    });

    describe('user count aggregate', () => {
        before(() => {
            sourceFile = project.getSourceFile(s =>
                s.getFilePath().endsWith('user-count-aggregate.output.ts'),
            )!;
            propertyStructure = sourceFile
                .getClass(() => true)
                ?.getProperty(p => p.getName() === 'id')
                ?.getStructure()!;
        });

        it('should be number', () => {
            expect(propertyStructure.type).toEqual('number');
        });

        it('should be not null', () => {
            expect(propertyStructure.hasQuestionToken).toEqual(false);
        });

        it('should have import graphql type int', () => {
            expect(getImportDeclarations(sourceFile)).toContainEqual({
                name: 'Int',
                specifier: '@nestjs/graphql',
            });
        });
    });

    describe('where input', () => {
        before(() => {
            sourceFile = project.getSourceFile(s =>
                s.getFilePath().endsWith('user-where.input.ts'),
            )!;
        });

        // it('', () => console.log(sourceFile.getText()));

        it('should have id property', () => {
            id = getPropertyStructure(sourceFile, 'id')!;
            expect(id).toEqual(expect.objectContaining({ name: 'id' }));
        });

        it('should have type IntFilter', () => {
            id = getPropertyStructure(sourceFile, 'id')!;
            expect(id.type).toEqual('IntFilter');
        });

        it('field decorator returns IntFilter', () => {
            const argument = getFieldType(sourceFile, 'id');
            expect(argument).toEqual('() => IntFilter');
        });

        it('field decorator IntFilter nullable', () => {
            const argument = getFieldOptions(sourceFile, 'id');
            expect(argument).toContain('nullable: true');
        });

        it('property AND has one type', () => {
            expect(getPropertyStructure(sourceFile, 'AND')?.type).toEqual(
                'Array<UserWhereInput>',
            );
        });
    });

    describe('aggregate user args', () => {
        before(() => {
            sourceFile = project.getSourceFile(s =>
                s.getFilePath().endsWith('aggregate-user.args.ts'),
            )!;
        });

        // it('', () => console.log(sourceFile.getText()));

        it('no duplicated properties', () => {
            const names = sourceFile
                .getClass(() => true)
                ?.getProperties()
                .map(p => p.getName())!;
            expect([...new Set(names).values()]).toHaveLength(names.length);
        });

        it('count', () => {
            const count = getPropertyStructure(sourceFile, 'count');
            expect(count?.type).toEqual('UserCountAggregateInput');
        });

        it('sum', () => {
            const sum = getPropertyStructure(sourceFile, 'sum');
            expect(sum?.type).toEqual('UserSumAggregateInput');
        });

        it('min', () => {
            const min = getPropertyStructure(sourceFile, 'min');
            expect(min?.type).toEqual('UserMinAggregateInput');
        });

        it('max', () => {
            const max = getPropertyStructure(sourceFile, 'max');
            expect(max?.type).toEqual('UserMaxAggregateInput');
        });
    });

    describe('user count aggregate input', () => {
        let id: PropertyDeclarationStructure;
        before(() => {
            sourceFile = project.getSourceFile(s =>
                s.getFilePath().endsWith('user-count-aggregate.input.ts'),
            )!;
            id = getPropertyStructure(sourceFile, 'id')!;
        });

        // it('', () => console.log(sourceFile.getText()));

        it('property id should have true type', () => {
            expect(id.type).toEqual('true');
        });

        it('nullable', () => {
            expect(id.hasQuestionToken).toEqual(true);
        });

        it('decorated field type should be boolean', () => {
            const argument = getFieldType(sourceFile, 'id');
            expect(argument).toEqual('() => Boolean');
        });
    });
});

it('duplicated fields in exising file', async () => {
    await testGenerate({
        schema: `
            model User {
              id Int @id
            }
        `,
        sourceFile: {
            path: 'user/user-create.input.ts',
            text: `
            @InputType()
            export class UserCreateInput {
                @Field(() => String, {
                    nullable: true,
                })
                id?: string;
            `,
        },
    });
    sourceFile = project.getSourceFile(s =>
        s.getFilePath().endsWith('/user-create.input.ts'),
    )!;
    const classFile = sourceFile.getClass(() => true)!;
    const names = classFile.getProperties().map(p => p.getName());
    expect(names).toStrictEqual(['id']);
});

describe('one model with scalar types', () => {
    before(async () => {
        await testGenerate({
            schema: `model User {
                id String @id
                count Int
                rating Float
                born DateTime
                humanoid Boolean
                money Decimal
                data Json
            }`,
        });
    });

    describe('user model', () => {
        before(() => {
            sourceFile = project.getSourceFile(s =>
                s.getFilePath().endsWith('user.model.ts'),
            )!;
        });
        describe('property types', () => {
            it('boolean', () => {
                expect(getPropertyStructure(sourceFile, 'humanoid')?.type).toEqual(
                    'boolean',
                );
            });

            it('rating', () => {
                expect(getPropertyStructure(sourceFile, 'rating')?.type).toEqual(
                    'number',
                );
            });

            it('count', () => {
                expect(getPropertyStructure(sourceFile, 'count')?.type).toEqual(
                    'number',
                );
            });

            it('born', () => {
                expect(getPropertyStructure(sourceFile, 'born')?.type).toEqual(
                    'Date | string',
                );
            });
        });

        describe('JSON type', () => {
            before(() => {
                imports = getImportDeclarations(sourceFile);
            });

            it('should import graphqljson', () => {
                expect(imports).toContainEqual({
                    name: 'GraphQLJSON',
                    specifier: 'graphql-type-json',
                });
            });

            it('field decorator should return custom graphqljson type', () => {
                expect(getFieldType(sourceFile, 'data')).toEqual('() => GraphQLJSON');
            });
        });
    });

    describe('datetime filter', () => {
        before(() => {
            sourceFile = project.getSourceFile(s =>
                s.getFilePath().endsWith('/date-time-filter.input.ts'),
            )!;
        });

        // it('^\n', () => console.log(sourceFile.getText()));

        it('equals field type Date', () => {
            expect(getFieldType(sourceFile, 'equals')).toEqual('() => Date');
        });

        it('equals is optional', () => {
            const structure = getPropertyStructure(sourceFile, 'equals');
            expect(structure?.hasQuestionToken).toEqual(true);
            expect(getFieldOptions(sourceFile, 'equals')).toContain('nullable: true');
        });

        it('not property should be object type', () => {
            expect(getFieldType(sourceFile, 'not')).toContain('DateTimeFilter');
        });

        it('compatiblity datetime filter', async () => {
            const classFile = sourceFile.getClass('DateTimeFilter')!;
            const fieldIn = classFile.getProperty('in')!;
            expect(fieldIn.getStructure().type).toEqual('Array<Date> | Array<string>');
        });
    });

    describe('user where input', () => {
        before(() => {
            sourceFile = project.getSourceFile(s =>
                s.getFilePath().endsWith('user-where.input.ts'),
            )!;
            imports = getImportDeclarations(sourceFile);
        });

        it('number should have int filter', () => {
            const structure = getPropertyStructure(sourceFile, 'count');
            expect(structure?.type).toEqual('IntFilter');
        });

        it('decorator argument int filter', () => {
            const p = getFieldType(sourceFile, 'count');
            expect(p).toEqual('() => IntFilter');
        });

        it('contains scalar filters', () => {
            expect(imports).toContainEqual({
                name: 'StringFilter',
                specifier: '../prisma/string-filter.input',
            });
            expect(imports).toContainEqual({
                name: 'IntFilter',
                specifier: '../prisma/int-filter.input',
            });
        });
    });

    describe('string filter input', () => {
        before(() => {
            sourceFile = project.getSourceFile(s =>
                s.getFilePath().endsWith('/string-filter.input.ts'),
            )!;
        });

        // it('', () => console.log(sourceFile.getText()));

        it('properties and types', () => {
            const properties = sourceFile.getClass(() => true)?.getProperties();
            const structure = (name: string) =>
                properties?.find(x => x.getName() === name)?.getStructure();

            expect(structure('equals')?.type).toEqual('string');
            expect(structure('lt')?.type).toEqual('string');
            expect(structure('lte')?.type).toEqual('string');
            expect(structure('gt')?.type).toEqual('string');
            expect(structure('gte')?.type).toEqual('string');
            expect(structure('contains')?.type).toEqual('string');
            expect(structure('startsWith')?.type).toEqual('string');
            expect(structure('endsWith')?.type).toEqual('string');

            expect(structure('in')?.type).toEqual('Array<string>');
            expect(structure('notIn')?.type).toEqual('Array<string>');
        });
    });

    describe('user create input', () => {
        before(() => {
            sourceFile = project.getSourceFile(s =>
                s.getFilePath().endsWith('/user-create.input.ts'),
            )!;
        });

        // it('', () => console.log(sourceFile.getText()));

        it('imports', () => {
            const imports = getImportDeclarations(sourceFile);
            expect(imports).toContainEqual({
                name: 'InputType',
                specifier: '@nestjs/graphql',
            });
            expect(imports).toContainEqual({
                name: 'Int',
                specifier: '@nestjs/graphql',
            });
        });

        it('id field type is string', () => {
            const id = getFieldType(sourceFile, 'id');
            expect(id).toEqual('() => String');
        });

        it('float property', () => {
            const property = getPropertyStructure(sourceFile, 'rating');
            expect(property?.type).toEqual('number');
        });
    });
});

describe('custom types', () => {
    describe('custom type in user model', () => {
        before(async () => {
            await testGenerate({
                schema: `
            model User {
               id String @id
               money Decimal
            }`,
                options: [
                    `types_Decimal_fieldType = Dec`,
                    `types_Decimal_fieldModule = "decimal.js"`,
                ],
            });
            sourceFile = project.getSourceFile(s =>
                s.getFilePath().endsWith('/user.model.ts'),
            )!;
        });

        it('money property should have Dec type', () => {
            const property = getPropertyStructure(sourceFile, 'money');
            expect(property?.type).toEqual('Dec');
        });

        it('import should contain Dec', () => {
            const imports = getImportDeclarations(sourceFile);
            expect(imports).toContainEqual({
                name: 'Dec',
                specifier: 'decimal.js',
            });
        });
    });

    describe('custom datetime type', () => {
        before(async () => {
            await testGenerate({
                schema: `
                    model User {
                        id     Int      @id
                        birth  DateTime
                        died   DateTime?
                    }`,
                options: [
                    `types_DateTime_fieldType = "string | Date"`,
                    `types_DateTime_graphqlType = "Date"`,
                ],
            });
            sourceFile = project.getSourceFile(s =>
                s.getFilePath().endsWith('/date-time-filter.input.ts'),
            );
        });

        // it('^', () => console.log(sourceFile.getText()));

        it('property in', () => {
            const property = getPropertyStructure(sourceFile, 'in');
            expect(property.type).toEqual('Array<Date> | Array<string>');
        });

        it('decorator type should be array date', () => {
            expect(getFieldType(sourceFile, 'in')).toEqual('() => [Date]');
        });
    });
});

describe('one model with id and enum', () => {
    before(async () => {
        await testGenerate({
            schema: `
            /// Role really
            enum Role {
                  USER
                  ADMIN
                }
            model User {
                  id    Int   @id
                  role  Role
                }`,
        });
    });

    describe('sort order enum', () => {
        before(() => {
            sourceFile = project.getSourceFile(s =>
                s.getFilePath().endsWith('sort-order.enum.ts'),
            )!;
            sourceText = sourceFile.getText();
        });

        it('should import registerEnumType', () => {
            expect(sourceText).toContain(
                `import { registerEnumType } from '@nestjs/graphql'`,
            );
        });

        it('should register SortOrder', () => {
            expect(sourceText).toContain(
                `registerEnumType(SortOrder, { name: 'SortOrder' })`,
            );
        });

        describe('enum sort order', () => {
            let structure: EnumDeclarationStructure;
            before(() => {
                structure = sourceFile.getEnum('SortOrder')?.getStructure()!;
            });

            it('should have asc value', () => {
                expect(structure.members).toContainEqual(
                    expect.objectContaining({
                        name: 'asc',
                        initializer: '"asc"',
                    }),
                );
            });

            it('should have desc value', () => {
                expect(structure.members).toContainEqual(
                    expect.objectContaining({
                        name: 'desc',
                        initializer: '"desc"',
                    }),
                );
            });
        });
    });

    describe('role enum', () => {
        before(() => {
            sourceFile = project.getSourceFile(s =>
                s.getFilePath().endsWith('role.enum.ts'),
            )!;
            sourceText = sourceFile.getText();
        });

        it('should contains import registerEnumType with name role', () => {
            expect(sourceText).toContain(`registerEnumType(Role,`);
            expect(sourceText).toContain(`name: 'Role'`);
        });

        it('should contains', () => {
            expect(sourceText).toContain(`description: "Role really"`);
        });
    });

    describe('model', () => {
        before(() => {
            sourceFile = project.getSourceFile(s =>
                s.getFilePath().endsWith('user.model.ts'),
            )!;
            sourceText = sourceFile.getText();
            imports = getImportDeclarations(sourceFile);
        });

        // it('', () => console.log('sourceText', sourceText));

        it('should import Role as enum', () => {
            expect(imports).toContainEqual({
                name: 'Role',
                specifier: '../prisma/role.enum',
            });
        });
    });
});

describe('one model with self reference', () => {
    before(async () => {
        await testGenerate({
            schema: `model User {
                  id Int @id
                  parent User
                }`,
        });
    });

    describe('model', () => {
        before(() => {
            sourceFile = project.getSourceFile(s =>
                s.getFilePath().endsWith('user.model.ts'),
            )!;
            sourceText = sourceFile.getText();
            imports = getImportDeclarations(sourceFile);
        });

        // it('', () => console.log('sourceText', sourceText));

        it('should not contain import to self file', () => {
            expect(imports).not.toContainEqual(
                expect.objectContaining({ name: 'User' }),
            );
        });
    });

    describe('user list relation filter', () => {
        before(() => {
            sourceFile = project.getSourceFile(s =>
                s.getFilePath().endsWith('/user-list-relation-filter.input.ts'),
            )!;
        });

        it('every', () => {
            const structure = getPropertyStructure(sourceFile, 'every');
            expect(structure?.type).toEqual('UserWhereInput');
        });

        it('some', () => {
            const structure = getPropertyStructure(sourceFile, 'some');
            expect(structure?.type).toEqual('UserWhereInput');
        });

        it('none', () => {
            const structure = getPropertyStructure(sourceFile, 'none');
            expect(structure?.type).toEqual('UserWhereInput');
        });
    });
});

describe('two models with id only and relation', () => {
    before(async () => {
        await testGenerate({
            schema: `
                model User {
                  id        Int      @id
                  posts     Post[]
                }
                model Post {
                  id        Int      @id
                }`,
        });
    });

    describe('user model', () => {
        before(() => {
            sourceFile = project.getSourceFile(s =>
                s.getFilePath().endsWith('/user.model.ts'),
            )!;
        });

        it('posts property', () => {
            const p = getPropertyStructure(sourceFile, 'posts');
            expect(p?.type).toEqual('Array<Post>');
        });
    });
});

it('enum with exists source', async () => {
    await testGenerate({
        schema: `enum Role {
                  USER
                }
                model User {
                  id    Int   @id
                  role  Role
                }`,
        sourceFile: {
            path: 'prisma/role.enum.ts',
            text: `
                    export enum Role { USER = "USER" }
                    registerEnumType(Role, { name: 'Role' })
                `,
        },
    });

    sourceFile = project.getSourceFile(s => s.getFilePath().includes('role.enum.ts'))!;
    sourceText = sourceFile.getText();

    expect(sourceText.match(/registerEnumType/g)).toHaveLength(2);
    expect(sourceText.match(/enum Role/g)).toHaveLength(1);
});

describe('model with one id string', () => {
    const schema = `
        model User {
            id String @id
        }
    `;

    it('extend', async () => {
        await testGenerate({
            schema,
            sourceFile: {
                path: 'user/user.model.ts',
                text: `@ObjectType() export class User {}`,
            },
        });
        sourceFile = project.getSourceFile(s =>
            s.getFilePath().endsWith('user.model.ts'),
        )!;
        sourceText = sourceFile.getText();
        const filePaths = project.getSourceFiles().map(s => s.getFilePath());
        expect(sourceText.match(/export class User/g)?.length).toEqual(1);
    });

    it('remove description', async () => {
        await testGenerate({
            schema,
            sourceFile: {
                path: 'user/user.model.ts',
                text: `@ObjectType({ description: 'user description' }) export class User {}`,
            },
        });
        sourceFile = project.getSourceFile(s =>
            s.getFilePath().endsWith('user.model.ts'),
        )!;
        const objectType = sourceFile
            .getClass(() => true)
            ?.getDecorator('ObjectType')
            ?.getText();
        expect(objectType).toEqual('@ObjectType()');
    });

    it('generated commented class if reexport found', async () => {
        await testGenerate({
            schema,
            sourceFile: {
                path: 'user/user.model.ts',
                text: `
                    export { User } from 'src/user/model'
                    export { User as UserModel } from 'src/user2/model'
                `,
            },
        });
        sourceFile = project.getSourceFile(s =>
            s.getFilePath().endsWith('user.model.ts'),
        )!;
        sourceText = sourceFile.getText();
        const sourceClass = sourceFile.getClasses();
        expect(sourceClass).toHaveLength(0);
        expect(sourceText).toContain(`export { User } from 'src/user/model'`);
        expect(sourceText).toContain(`// export class User`);
    });

    it('no generate another commented class', async () => {
        await testGenerate({
            schema,
            sourceFile: {
                path: 'user/user.model.ts',
                text: `
                export { User } from 'src/user/model'

                // @ObjectType()
                // export class User { }
                `,
            },
        });
        sourceFile = project.getSourceFile(s =>
            s.getFilePath().endsWith('user.model.ts'),
        )!;
        sourceText = sourceFile.getText();
        expect(sourceText.match(/export class User/g)).toHaveLength(1);
        expect(sourceText).toContain('// export class User');
    });

    describe('dont add decorators', () => {
        let userClass: ClassDeclaration;
        let decorator: Decorator | undefined;

        before(async () => {
            await testGenerate({
                schema,
                sourceFile: {
                    path: 'user/user.model.ts',
                    text: `
                    export class User {
                        id: string;
                    }
                `,
                },
            });
            sourceFile = project.getSourceFile(s =>
                s.getFilePath().endsWith('user.model.ts'),
            )!;
            userClass = sourceFile.getClass('User')!;
        });

        it('for class', () => {
            decorator = userClass
                .getDecorators()
                .find(d => d.getName() === 'ObjectType');
            expect(decorator?.getText()).toBeUndefined();
        });

        it('for property', () => {
            expect(userClass.getProperties().map(x => x.getName())).toHaveLength(1);
            decorator = userClass.getProperty('id')!.getDecorator('Field');
            expect(decorator?.getText()).toBeUndefined();
        });
    });
});

it('smoke many', async () => {
    await testGenerate({
        schema: `model User {
              id        Int      @id
              name      String?
              profile   Profile?
              comments  Comment[]
            }
            model Profile {
                id        Int      @id
                sex       Boolean?
            }
            model Comment {
                id        Int      @id
            }`,
    });
});

// it('hide field', async () => {
//         await getResult({
//             schema: `
//             model User {
//               id String @id
//               /// @TypeGraphQL.omit(output: true)
//               /// Regular documentation
//               password String
//             }
//             `,
//             options: [],
//         });
//         const property = getStructure({
//             sourceFile,
//             className: 'User',
//             property: 'password',
//         });
//         expect(property?.decorators?.[0]?.name).toEqual('HideField');
//     });
