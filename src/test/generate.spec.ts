import expect from 'expect';
import JSON5 from 'json5';
import { trim } from 'lodash';
import {
    ClassDeclaration,
    ImportDeclarationStructure,
    ImportSpecifierStructure,
    Project,
    PropertyDeclaration,
    PropertyDeclarationStructure,
    SourceFile,
} from 'ts-morph';

import { EventArguments } from '../types';
import { getFieldOptions, getPropertyStructure, testSourceFile } from './helpers';
import { testGenerate } from './test-generate';

let sourceFile: SourceFile;
let sourceText: string;
let project: Project;
let imports: { name: string; specifier: string }[];
let classFile: ClassDeclaration;
let sourceFiles: SourceFile[];
let importDeclarations: ImportDeclarationStructure[] = [];

const p = (name: string) => getPropertyStructure(sourceFile, name);
const d = (name: string) => getPropertyStructure(sourceFile, name)?.decorators?.[0];
const f = (name: string) =>
    getPropertyStructure(sourceFile, name)?.decorators?.find(d => d.name === 'Field')
        ?.arguments;
const t = (name: string) => f(name)?.[0];
const setSourceFile = (name: string) => {
    sourceFile = project.getSourceFileOrThrow(s => s.getFilePath().endsWith(name));
    sourceText = sourceFile.getText();
    classFile = sourceFile.getClass(() => true)!;
    importDeclarations = sourceFile.getImportDeclarations().map(d => d.getStructure());
    imports = importDeclarations.flatMap(d =>
        (d.namedImports as ImportSpecifierStructure[]).map(x => ({
            name: x.name,
            specifier: d.moduleSpecifier,
        })),
    );
};
const objectTypeArguments = () =>
    sourceFile
        .getClass(() => true)
        ?.getDecorator('ObjectType')
        ?.getStructure().arguments;

describe('model with one id int', () => {
    before(async () => {
        ({ project, sourceFiles } = await testGenerate({
            schema: `
            /// User really
            model User {
                  /// user id really
                  id Int @id @default(1)
                }`,
        }));
    });

    describe('model', () => {
        before(() => {
            setSourceFile('user.model.ts');
            ({ classFile } = testSourceFile({ project, file: 'user.model.ts' }));
        });

        it('class should be exported', () => {
            const [classFile] = sourceFile.getClasses();
            expect(classFile.isExported()).toBe(true);
        });

        it('argument decorated id', () => {
            const { fieldDecoratorType } = testSourceFile({
                project,
                file: 'user.model.ts',
                property: 'id',
            });
            expect(fieldDecoratorType).toEqual('() => ID');
        });

        it('should have import graphql type id', () => {
            expect(imports).toContainEqual({
                name: 'ID',
                specifier: '@nestjs/graphql',
            });
        });

        it('should have import field decorator', () => {
            expect(imports).toContainEqual({
                name: 'Field',
                specifier: '@nestjs/graphql',
            });
        });

        it('should have exclamation mark for non null id field', () => {
            const s = testSourceFile({
                project,
                file: 'user.model.ts',
                property: 'id',
            });
            expect(s.property?.hasExclamationToken).toEqual(true);
        });

        it('default value', () => {
            const argument = getFieldOptions(sourceFile, 'id');
            expect(argument).toMatch(/nullable:\s*false/);
            expect(argument).toMatch(/defaultValue:\s*1/);
            expect(argument).not.toMatch(/description:\s*undefined/);
        });

        it('property description', () => {
            const argument = getFieldOptions(sourceFile, 'id');
            expect(argument).toMatch(/nullable:\s*false/);
            expect(argument).toMatch(/description:\s*["']user id really["']/);
        });

        it('property description in jsdoc', () => {
            const description = classFile
                .getProperty('id')
                ?.getJsDocs()[0]
                .getDescription();
            expect(description).toEqual('user id really');
        });

        it('object type description', () => {
            const decoratorArgument = classFile.getDecorators()[0].getStructure()
                .arguments?.[0] as string | undefined;
            expect(decoratorArgument).toMatch(/description:\s*["']User really["']/);
        });

        it('has js comment', () => {
            expect(classFile.getJsDocs()[0].getDescription()).toEqual('User really');
        });

        it('has import objecttype', () => {
            expect(imports).toContainEqual({
                name: 'ObjectType',
                specifier: '@nestjs/graphql',
            });
        });
    });

    it('aggregate user output class should be exported', () => {
        const s = testSourceFile({ project, file: 'aggregate-user.output.ts' });
        expect(s.classFile.isExported()).toBe(true);
    });

    it('aggregate user output contains decorator ObjectType', () => {
        const s = testSourceFile({ project, file: 'aggregate-user.output.ts' });
        expect(s.namedImports).toContainEqual({
            name: 'ObjectType',
            specifier: '@nestjs/graphql',
        });
    });

    it('aggregate user output count', () => {
        const s = testSourceFile({
            project,
            file: 'aggregate-user.output.ts',
            property: '_count',
        });
        expect(s.property?.type).toEqual('UserCountAggregate');
        expect(s.property?.hasQuestionToken).toEqual(true);
    });

    it('user count aggregate (usercountaggregate) id property', () => {
        const s = testSourceFile({
            project,
            file: 'user-count-aggregate.output.ts',
            property: 'id',
        });
        expect(s.property?.type).toEqual('number');
        expect(s.fieldDecoratorType).toEqual('() => Int');
        expect(s.property?.hasQuestionToken).toEqual(false);
        expect(s.namedImports).toContainEqual({
            name: 'Int',
            specifier: '@nestjs/graphql',
        });
    });

    describe('where input', () => {
        it('should have id property', () => {
            const { property } = testSourceFile({
                project,
                file: 'user-where.input.ts',
                property: 'id',
            });
            expect(property?.name).toEqual('id');
        });

        it('should have type IntFilter', () => {
            const { property } = testSourceFile({
                project,
                file: 'user-where.input.ts',
                property: 'id',
            });
            expect(property?.type).toEqual('IntFilter');
        });

        it('field decorator returns IntFilter', () => {
            const { fieldDecoratorType } = testSourceFile({
                project,
                file: 'user-where.input.ts',
                property: 'id',
            });
            expect(fieldDecoratorType).toEqual('() => IntFilter');
        });

        it('field decorator IntFilter nullable', () => {
            const { fieldDecoratorOptions } = testSourceFile({
                project,
                file: 'user-where.input.ts',
                property: 'id',
            });
            expect(fieldDecoratorOptions).toMatch(/nullable:\s*true/);
        });

        it('property AND has one type', () => {
            const { property } = testSourceFile({
                project,
                file: 'user-where.input.ts',
                property: 'AND',
            });
            expect(property?.type).toEqual('Array<UserWhereInput>');
        });
    });

    describe('aggregate user args', () => {
        before(() => {
            setSourceFile('user-aggregate.args.ts');
            classFile = sourceFile.getClass(() => true)!;
        });

        it('decorator name args', () => {
            const { classFile } = testSourceFile({
                project,
                file: 'user-aggregate.args.ts',
            });
            const decorator = classFile.getDecorator('ArgsType');
            expect(decorator?.getText()).toEqual('@ArgsType()');
        });

        it('no duplicated properties', () => {
            const names = sourceFile
                .getClass(() => true)
                ?.getProperties()
                .map(p => p.getName())!;
            expect([...new Set(names).values()]).toHaveLength(names.length);
        });

        it('count', () => {
            expect(p('_count')?.type).toEqual('UserCountAggregateInput');
        });

        it('sum', () => {
            expect(p('_sum')?.type).toEqual('UserSumAggregateInput');
        });

        it('min', () => {
            expect(p('_min')?.type).toEqual('UserMinAggregateInput');
        });

        it('max', () => {
            expect(p('_max')?.type).toEqual('UserMaxAggregateInput');
        });
    });

    describe('user count aggregate input', () => {
        let id: PropertyDeclarationStructure;
        before(() => {
            setSourceFile('user-count-aggregate.input.ts');
            id = getPropertyStructure(sourceFile, 'id')!;
        });

        it('property id should have true type', () => {
            const s = testSourceFile({
                project,
                file: 'user-count-aggregate.input.ts',
                property: 'id',
            });

            expect(s.property?.type).toEqual('true');
        });

        it('nullable', () => {
            expect(id.hasQuestionToken).toEqual(true);
        });

        it('decorated field type should be boolean', () => {
            const argument = t('id');
            expect(argument).toEqual('() => Boolean');
        });
    });

    it('rename to user-group-by args', () => {
        const s = testSourceFile({
            project,
            file: 'user-group-by.args.ts',
        });

        expect(s.classFile.getName()).toEqual('UserGroupByArgs');
    });

    it('rename to user aggregateargs', () => {
        const s = testSourceFile({
            project,
            file: 'user-aggregate.args.ts',
        });

        expect(s.classFile.getName()).toEqual('UserAggregateArgs');
    });
});

describe('duplicated', () => {
    it('duplicated fields in exising file', async () => {
        ({ project, sourceFiles } = await testGenerate({
            schema: `
                model User {
                    id Int @id
                }
            `,
            createSouceFile: {
                type: 'input',
                name: 'UserCreateInput',
                text: `
            import { Int } from '@nestjs/graphql';
            @InputType()
            export class UserCreateInput {
                @Field(() => String, {
                    nullable: true,
                })
                id?: string;
            `,
            },
        }));
        setSourceFile('/user-create.input.ts');
        const classFile = sourceFile.getClass(() => true)!;
        const names = classFile.getProperties().map(p => p.getName());
        expect(names).toStrictEqual(['id']);
    });

    it('duplicated import decorators', async () => {
        ({ project, sourceFiles } = await testGenerate({
            schema: `
                model User {
                    id Int @id
                    xl Int
                    xs Int
                }
            `,
            createSouceFile: {
                type: 'model',
                name: 'User',
                text: `
            import { Field, ObjectType } from '@nestjs/graphql';
            import { Int, ID } from '@nestjs/graphql';
            @ObjectType()
            export class User {
                @Field(() => ID) id: number;
                @Field(() => Int) xl: number;
                @Field(() => Int) xs: number;
            `,
            },
        }));
        setSourceFile('user.model.ts');
        expect(imports.filter(x => x.name === 'Field')).toHaveLength(1);
        expect(imports.filter(x => x.name === 'ObjectType')).toHaveLength(1);
    });
});

describe('one model with scalar types', () => {
    before(async () => {
        ({ project, sourceFiles } = await testGenerate({
            schema: `model User {
                id String @id
                count Int
                rating Float
                born DateTime
                humanoid Boolean
                money Decimal
                data Json
                biggy BigInt
            }`,
        }));
        // const filePaths = sourceFiles.map(s => s.getFilePath());
    });

    describe('user model', () => {
        before(() => {
            setSourceFile('user.model.ts');
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
                expect(getPropertyStructure(sourceFile, 'born')?.type).toEqual('Date');
            });

            it('big int', () => {
                expect(p('biggy')?.type).toEqual('bigint');
            });

            it('money', () => {
                expect(p('money')?.type).toEqual('Decimal');
            });
        });

        describe('json type', () => {
            it('should import graphqljson', () => {
                expect(imports).toContainEqual({
                    name: 'GraphQLJSON',
                    specifier: 'graphql-type-json',
                });
            });

            it('field decorator should return custom graphqljson type', () => {
                expect(t('data')).toEqual('() => GraphQLJSON');
            });
        });
    });

    describe('datetime filter', () => {
        before(() => {
            sourceFile = project.getSourceFile(s =>
                s.getFilePath().endsWith('/date-time-filter.input.ts'),
            )!;
        });

        it('equals field type Date', () => {
            expect(t('equals')).toEqual('() => Date');
        });

        it('equals is optional', () => {
            const structure = getPropertyStructure(sourceFile, 'equals');
            expect(structure?.hasQuestionToken).toEqual(true);
            expect(getFieldOptions(sourceFile, 'equals')).toMatch(/nullable:\s*true/);
        });

        it('not property should be object type', () => {
            expect(t('not')).toContain('DateTimeFilter');
        });

        it('compatiblity datetime filter', () => {
            const classFile = sourceFile.getClass('DateTimeFilter')!;
            const fieldIn = classFile.getProperty('in')!;
            expect(fieldIn.getStructure().type).toEqual('Array<Date> | Array<string>');
        });
    });

    describe('user where input', () => {
        before(() => {
            setSourceFile('user-where.input.ts');
        });

        it('number should have int filter', () => {
            const structure = getPropertyStructure(sourceFile, 'count');
            expect(structure?.type).toEqual('IntFilter');
        });

        it('decorator argument int filter', () => {
            const p = t('count');
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
            setSourceFile('/user-create.input.ts');
        });

        it('valid imports', () => {
            expect(sourceText).not.toContain("import ';");
        });

        it('imports', () => {
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
            const id = t('id');
            expect(id).toEqual('() => String');
        });

        it('float property', () => {
            const property = getPropertyStructure(sourceFile, 'rating');
            expect(property?.type).toEqual('number');
        });

        it('data property (json)', () => {
            expect(t('data')).toEqual('() => GraphQLJSON');
        });

        it('native string should not be imported', () => {
            expect(imports).not.toContainEqual(
                expect.objectContaining({ name: 'String' }),
            );
        });
    });

    describe('json filter', () => {
        before(() => {
            sourceFile = project.getSourceFile(s =>
                s.getFilePath().endsWith('/json-filter.input.ts'),
            )!;
        });

        it('not field should be json filter', () => {
            const not = p('not');
            expect(not?.type).toEqual('any');
        });

        it('field type should be GraphQLJSON', () => {
            expect(t('not')).toEqual('() => GraphQLJSON');
        });
    });
});

describe('decimal type', () => {
    before(async () => {
        ({ project } = await testGenerate({
            schema: `
            model User {
                id String @id
                money Decimal
                maybe Decimal?
            }
            `,
            options: [`outputFilePattern = "{name}.{type}.ts"`],
        }));
    });

    it('user model money', () => {
        const s = testSourceFile({
            project,
            file: 'user.model.ts',
            property: 'money',
        });
        expect(s.property?.type).toEqual('Decimal');
        expect(s.namedImports).toContainEqual({
            name: 'Decimal',
            specifier: '@prisma/client/runtime',
        });
    });

    it('user model nullish', () => {
        const s = testSourceFile({
            project,
            file: 'user.model.ts',
            property: 'maybe',
        });
        expect(s.property?.type).toEqual('Decimal | null');
        expect(s.namedImports).toContainEqual({
            name: 'Decimal',
            specifier: '@prisma/client/runtime',
        });
    });

    it('user input money', () => {
        const s = testSourceFile({
            project,
            file: 'user-create.input.ts',
            property: 'money',
        });
        expect(s.property?.type).toEqual('Decimal');
        expect(s.namedImports).toContainEqual({
            name: 'Decimal',
            specifier: '@prisma/client/runtime',
        });
    });

    it('user input maybe', () => {
        const s = testSourceFile({
            project,
            file: 'user-create.input.ts',
            property: 'maybe',
        });
        expect(s.property?.type).toEqual('Decimal');
        expect(s.property?.hasQuestionToken).toEqual(true);
        expect(s.namedImports).toContainEqual({
            name: 'Decimal',
            specifier: '@prisma/client/runtime',
        });
    });

    it('user aggregate output money', () => {
        const s = testSourceFile({
            project,
            file: 'user-sum-aggregate.output.ts',
            property: 'money',
        });
        expect(s.property?.type).toEqual('Decimal');
        expect(s.namedImports).toContainEqual({
            name: 'Decimal',
            specifier: '@prisma/client/runtime',
        });
    });

    it('user aggregate output maybe', () => {
        const s = testSourceFile({
            project,
            file: 'user-sum-aggregate.output.ts',
            property: 'maybe',
        });
        expect(s.property?.type).toEqual('Decimal');
        expect(s.property?.hasQuestionToken).toEqual(true);
        expect(s.namedImports).toContainEqual({
            name: 'Decimal',
            specifier: '@prisma/client/runtime',
        });
    });
});

describe('model with scalar nullable types', () => {
    before(async () => {
        ({ project, sourceFiles } = await testGenerate({
            schema: `model User {
                id String @id
                count Int?
                rating Float?
                born DateTime?
                humanoid Boolean?
                money Decimal?
                data Json?
                biggy BigInt?
            }`,
            options: [`outputFilePattern = "{name}.{type}.ts"`],
        }));
    });

    it('nullable json', () => {
        setSourceFile('user-create.input.ts');
        expect(p('data')?.type).toEqual('any');
    });
});

describe('scalar list type', () => {
    describe('general', () => {
        before(async () => {
            ({ project, sourceFiles } = await testGenerate({
                schema: `
            model User {
                id    Int   @id
                permissions String[]
            }`,
            }));
        });

        it('smoke', () => {
            expect(sourceFiles.length).toBeTruthy();
        });

        it('user create input', () => {
            setSourceFile('user-create.input.ts');
            expect(p('permissions')?.type).toEqual('UserCreatepermissionsInput');
            expect(t('permissions')).toEqual('() => UserCreatepermissionsInput');
        });
    });
});

describe('nullish compatibility', () => {
    before(async () => {
        ({ project, sourceFiles } = await testGenerate({
            schema: `
            model User {
                id String @id
                count Int?
                rating Float?
                born DateTime?
                humanoid Boolean?
                money Decimal?
                data Json?
                biggy BigInt?
                role Role?
                posts Post[]
                profile Profile?
            }
            model Post {
              id     Int   @id
              User   User? @relation(fields: [userId], references: [id])
              userId String?
            }
            model Profile {
              id                  Int                 @id @default(autoincrement())
              user                User                @relation(fields: [userId], references: [id])
              userId              String
              dummy String?
            }
            enum Role {
                USER
            }
            `,
            options: [`outputFilePattern = "{name}.{type}.ts"`],
        }));
        setSourceFile('user.model.ts');
    });

    it('number', () => {
        const s = testSourceFile({ project, file: 'user.model.ts', property: 'count' });

        expect(s.property?.type).toEqual('number | null');
        expect(s.property?.hasQuestionToken).toBe(false);
    });

    it('born', () => {
        const s = testSourceFile({ project, file: 'user.model.ts', property: 'born' });

        expect(s.property?.type).toEqual('Date | null');
        expect(s.property?.hasQuestionToken).toBe(false);
    });

    it('money', () => {
        const s = testSourceFile({ project, file: 'user.model.ts', property: 'money' });
        expect(s.property?.type).toEqual('Decimal | null');
        expect(s.property?.hasQuestionToken).toBe(false);
        expect(imports).toContainEqual({
            name: 'GraphQLDecimal',
            specifier: 'prisma-graphql-type-decimal',
        });
    });

    it('data', () => {
        const s = testSourceFile({ project, file: 'user.model.ts', property: 'data' });
        expect(s.property?.type).toEqual('any | null');
        expect(imports).toContainEqual({
            name: 'GraphQLJSON',
            specifier: 'graphql-type-json',
        });
    });

    describe('relation fields should hasQuestionToken (optional)', () => {
        it('profile', () => {
            const s = testSourceFile({
                project,
                file: 'user.model.ts',
                property: 'profile',
            });
            expect(s.property?.hasQuestionToken).toBe(true);
        });

        it('posts', () => {
            const s = testSourceFile({
                project,
                file: 'user.model.ts',
                property: 'posts',
            });
            expect(s.property?.hasQuestionToken).toBe(true);
        });
    });
});

describe('one model with enum', () => {
    before(async () => {
        ({ project, sourceFiles } = await testGenerate({
            schema: `
            /// Role really
            enum Role {
                  USER
                  ADMIN
                }
            model User {
                  id    Int   @id
                  role  Role
                  permissions String[]
                }`,
        }));
    });

    it('should import registerEnumType', () => {
        const s = testSourceFile({ project, file: 'sort-order.enum.ts' });
        expect(s.namedImports).toContainEqual({
            name: 'registerEnumType',
            specifier: '@nestjs/graphql',
        });
    });

    it('should register SortOrder', () => {
        const s = testSourceFile({ project, file: 'sort-order.enum.ts' });
        expect(s.sourceText).toContain(
            `registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })`,
        );
    });

    it('should have asc value', () => {
        const s = testSourceFile({ project, file: 'sort-order.enum.ts' });
        const members = s.sourceFile.getEnum('SortOrder')?.getStructure().members;

        expect(members).toContainEqual(
            expect.objectContaining({
                name: 'asc',
                initializer: '"asc"',
            }),
        );
    });

    it('should have desc value', () => {
        const s = testSourceFile({ project, file: 'sort-order.enum.ts' });
        const members = s.sourceFile.getEnum('SortOrder')?.getStructure().members;

        expect(members).toContainEqual(
            expect.objectContaining({
                name: 'desc',
                initializer: '"desc"',
            }),
        );
    });

    describe('role enum', () => {
        before(() => {
            setSourceFile('role.enum.ts');
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
            setSourceFile('user.model.ts');
        });

        it('should import Role as enum', () => {
            expect(imports).toContainEqual({
                name: 'Role',
                specifier: '../prisma/role.enum',
            });
        });

        it('role type should use typeof keyof trick', () => {
            const role = p('role');
            expect(role?.type).toEqual('keyof typeof Role');
        });
    });
});

describe('one model with self reference', () => {
    before(async () => {
        ({ project, sourceFiles } = await testGenerate({
            schema: `model User {
                  id     Int    @id
                  parentId Int
                  parent User   @relation("UserToUser", fields: [parentId], references: [id])
                  user   User[] @relation("UserToUser")
                }`,
        }));
    });

    describe('model', () => {
        before(() => {
            setSourceFile('user.model.ts');
        });

        it('should not contain import to self file', () => {
            expect(imports).not.toContainEqual(
                expect.objectContaining({ name: 'User' }),
            );
        });

        it('imports should contain user count', () => {
            expect(imports).toContainEqual({
                name: 'UserCount',
                specifier: './user-count.output',
            });
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
        ({ project, sourceFiles } = await testGenerate({
            schema: `
                model User {
                  id    Int    @id
                  posts Post[]
                }

                model Post {
                  id     Int   @id
                  User   User? @relation(fields: [userId], references: [id])
                  userId Int?
                }
            `,
        }));
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
    ({ project, sourceFiles } = await testGenerate({
        schema: `enum Role {
                  USER
                }
                model User {
                  id    Int   @id
                  role  Role
                }`,
        createSouceFile: {
            name: 'Role',
            type: 'enum',
            text: `
                    export enum Role { USER = "USER" }
                    registerEnumType(Role, { name: 'Role' })
                `,
        },
    }));

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
        ({ project, sourceFiles } = await testGenerate({
            schema,
            createSouceFile: {
                type: 'model',
                name: 'User',
                text: `@ObjectType() export class User {}`,
            },
        }));
        sourceFile = project.getSourceFile(s =>
            s.getFilePath().endsWith('user.model.ts'),
        )!;
        sourceText = sourceFile.getText();
        expect(sourceText.match(/export class User/g)?.length).toEqual(1);
    });

    it('remove description', async () => {
        ({ project, sourceFiles } = await testGenerate({
            schema,
            createSouceFile: {
                type: 'model',
                name: 'User',
                text: `@ObjectType({ description: 'user description' }) export class User {}`,
            },
        }));
        setSourceFile('user.model.ts');
        const objectType = classFile.getDecorator('ObjectType')?.getText();
        expect(objectType).toEqual('@ObjectType()');
    });

    it('generated commented class if reexport found', async () => {
        ({ project, sourceFiles } = await testGenerate({
            schema,
            createSouceFile: {
                type: 'model',
                name: 'User',
                text: `
                    export { User } from 'src/user/model'
                    export { User as UserModel } from 'src/user2/model'
                `,
            },
        }));
        setSourceFile('user.model.ts');
        expect(sourceText).toContain(`export { User } from 'src/user/model'`);
        expect(sourceText).toContain(`// export class User`);
    });

    it('no generate another commented class', async () => {
        ({ project, sourceFiles } = await testGenerate({
            schema,
            createSouceFile: {
                type: 'model',
                name: 'User',
                text: `
                export { User } from 'src/user/model'

                // @ObjectType()
                // export class User { }
                `,
            },
        }));
        setSourceFile('user.model.ts');
        expect(sourceText.match(/export class User/g)).toHaveLength(1);
        expect(sourceText).toContain('// export class User');
    });
});

it('generator option outputFilePattern', async () => {
    ({ project, sourceFiles } = await testGenerate({
        schema: `model User {
                    id Int @id
                }`,
        options: [`outputFilePattern = "data/{type}/{name}.ts"`],
    }));
    const filePaths = sourceFiles.map(s => String(s.getFilePath()));
    expect(filePaths).toContainEqual(expect.stringContaining('/data/model/user.ts'));
});

it('several models', () => {
    before(async () => {
        ({ project, sourceFiles } = await testGenerate({
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
        }));
    });

    it('no nullable type', () => {
        for (const d of sourceFiles
            .flatMap(s => s.getClasses())
            .flatMap(d => d.getProperties())
            .flatMap(p => p.getDecorators())) {
            const argument = d.getCallExpression()?.getArguments()?.[0].getText();
            expect(argument).not.toContain('null');
        }
    });
});

describe('get rid of atomic number operations', () => {
    before(async () => {
        ({ project, sourceFiles } = await testGenerate({
            schema: `
            model User {
              id String @id
              age Int
              rating Float?
              money Decimal?
              born DateTime
              friends String[]
            }
            `,
            options: [
                `outputFilePattern = "{name}.{type}.ts"`,
                `noAtomicOperations = true`,
            ],
        }));
    });

    it('files should not be', () => {
        const filePaths = sourceFiles.map(s => s.getFilePath().slice(1));
        for (const filePath of filePaths) {
            expect(filePath).not.toContain('field-update-operations');
        }
    });

    describe('user update input', () => {
        before(() => {
            setSourceFile('user-update.input.ts');
        });

        it('id should be regular string', () => {
            expect(getPropertyStructure(sourceFile, 'id')?.type).toEqual('string');
        });

        it('id field type should be string', () => {
            expect(t('id')).toEqual('() => String');
        });

        it('age should be regular string', () => {
            expect(getPropertyStructure(sourceFile, 'age')?.type).toEqual('number');
        });

        it('age field type should be string', () => {
            expect(t('age')).toEqual('() => Int');
        });

        it('rating should be regular string', () => {
            expect(getPropertyStructure(sourceFile, 'rating')?.type).toEqual('number');
        });

        it('rating field type should be string', () => {
            expect(t('rating')).toEqual('() => Float');
        });

        it('scalar array', () => {
            expect(t('friends')).toEqual('() => UserUpdatefriendsInput');
        });
    });

    describe('UserUpdatefriendsInput', () => {
        before(() => {
            setSourceFile('user-updatefriends.input.ts');
        });
    });

    describe('date field files', () => {
        const dateFieldFiles = [
            'user-create.input.ts',
            'user-unchecked-update.input.ts',
        ];

        for (const file of dateFieldFiles) {
            it(`date field files ${file}`, () => {
                setSourceFile(file);
                expect(p('born')?.type).toEqual('Date | string');
                expect(t('born')).toEqual('() => Date');
            });
        }
    });
});

describe('noAtomicOperations with emitSingle and combineScalarFilters', () => {
    before(async () => {
        ({ project, sourceFiles } = await testGenerate({
            schema: `
            model User {
              id String @id
              age Int
            }
            `,
            options: [
                `outputFilePattern = "{name}.{type}.ts"`,
                `noAtomicOperations = true`,
                `emitSingle = true`,
                `combineScalarFilters = true`,
            ],
        }));
    });

    it('FieldUpdateOperationsInput should not exists', () => {
        const s = testSourceFile({
            project,
            file: 'index.ts',
        });

        const classDeclaration = s.sourceFile.getClass('IntFieldUpdateOperationsInput');
        expect(classDeclaration).toBeUndefined();
    });
});

describe('combine scalar filters', () => {
    before(async () => {
        ({ project, sourceFiles } = await testGenerate({
            schema: `
            model User {
                id String @id
                bio String?
                count Int?
                rating Float?
                born DateTime?
                humanoid Boolean?
                money Decimal?
                data Json?
                role Role?
            }
            enum Role {
                USER
                ADMIN
            }
            `,
            options: [
                `outputFilePattern = "{name}.{type}.ts"`,
                `combineScalarFilters = true`,
            ],
        }));
    });

    it('files should not contain nested and nullable', () => {
        const filePaths = sourceFiles
            .map(s => s.getFilePath().slice(1))
            .filter(
                p =>
                    !(
                        p.endsWith('field-update-operations.input.ts') ||
                        p.endsWith('json-null-value-input.enum.ts')
                    ),
            );
        for (const filePath of filePaths) {
            expect(filePath).not.toContain('nested');
            expect(filePath).not.toContain('nullable');
        }
    });

    it('source file should not reference bogus type', () => {
        for (const sourceFile of sourceFiles) {
            const types = sourceFile
                .getClass(() => true)
                ?.getProperties()
                .map(p => String(p.getStructure().type))
                .filter((t: string) => t.endsWith('Filter') || t.endsWith('Filter>'));
            if (types) {
                for (const type of types) {
                    expect(type).not.toContain('Nested');
                    expect(type).not.toContain('Nullable');
                }
            }
        }
    });

    it('user-where.input count', () => {
        const s = testSourceFile({
            project,
            file: 'user-where.input.ts',
            property: 'count',
        });
        expect(s.property?.type).toBe('IntFilter');
    });

    it('user-where.input bio', () => {
        const s = testSourceFile({
            project,
            file: 'user-where.input.ts',
            property: 'bio',
        });
        expect(s.property?.type).toBe('StringFilter');
    });

    it('user-where.input money', () => {
        const s = testSourceFile({
            project,
            file: 'user-where.input.ts',
            property: 'money',
        });
        expect(s.property?.type).toBe('DecimalFilter');
    });

    it('user-where.input rating', () => {
        const s = testSourceFile({
            project,
            file: 'user-where.input.ts',
            property: 'rating',
        });
        expect(s.property?.type).toBe('FloatFilter');
    });

    it('user-where.input born', () => {
        const s = testSourceFile({
            project,
            file: 'user-where.input.ts',
            property: 'born',
        });
        expect(s.property?.type).toBe('DateTimeFilter');
    });

    it('user-where.input humanoid', () => {
        const s = testSourceFile({
            project,
            file: 'user-where.input.ts',
            property: 'humanoid',
        });
        expect(s.property?.type).toBe('BoolFilter');
    });

    it('user-where.input role', () => {
        const s = testSourceFile({
            project,
            file: 'user-where.input.ts',
            property: 'role',
        });
        expect(s.property?.type).toBe('EnumRoleFilter');
    });

    it('user scalar where with aggregates id', () => {
        const s = testSourceFile({
            project,
            file: 'user-scalar-where-with-aggregates.input.ts',
            property: 'id',
        });
        expect(s.property?.type).toBe('StringWithAggregatesFilter');
    });

    it('user scalar where with aggregates bio', () => {
        const s = testSourceFile({
            project,
            file: 'user-scalar-where-with-aggregates.input.ts',
            property: 'bio',
        });
        expect(s.property?.type).toBe('StringWithAggregatesFilter');
    });

    it('user scalar where with aggregates count', () => {
        const s = testSourceFile({
            project,
            file: 'user-scalar-where-with-aggregates.input.ts',
            property: 'count',
        });
        expect(s.property?.type).toBe('IntWithAggregatesFilter');
    });

    it('user scalar where with aggregates rating', () => {
        const s = testSourceFile({
            project,
            file: 'user-scalar-where-with-aggregates.input.ts',
            property: 'rating',
        });
        expect(s.property?.type).toBe('FloatWithAggregatesFilter');
    });

    it('user scalar where with aggregates born', () => {
        const s = testSourceFile({
            project,
            file: 'user-scalar-where-with-aggregates.input.ts',
            property: 'born',
        });
        expect(s.property?.type).toBe('DateTimeWithAggregatesFilter');
    });

    it('user scalar where with aggregates humanoid', () => {
        const s = testSourceFile({
            project,
            file: 'user-scalar-where-with-aggregates.input.ts',
            property: 'humanoid',
        });
        expect(s.property?.type).toBe('BoolWithAggregatesFilter');
    });

    it('user scalar where with aggregates money', () => {
        const s = testSourceFile({
            project,
            file: 'user-scalar-where-with-aggregates.input.ts',
            property: 'money',
        });
        expect(s.property?.type).toBe('DecimalWithAggregatesFilter');
    });

    it('user scalar where with aggregates data', () => {
        const s = testSourceFile({
            project,
            file: 'user-scalar-where-with-aggregates.input.ts',
            property: 'data',
        });
        expect(s.property?.type).toBe('JsonWithAggregatesFilter');
    });

    it('user scalar where with aggregates role', () => {
        const s = testSourceFile({
            project,
            file: 'user-scalar-where-with-aggregates.input.ts',
            property: 'role',
        });
        expect(s.property?.type).toBe('EnumRoleWithAggregatesFilter');
    });
});

describe('combine scalar filters on array', () => {
    before(async () => {
        ({ project, sourceFiles } = await testGenerate({
            schema: `
            model User {
                id String @id
                str String[]
                int Int?
            }
            `,
            options: [
                `outputFilePattern = "{name}.{type}.ts"`,
                `combineScalarFilters = true`,
            ],
        }));
    });

    it('smoke', () => {
        'no errors';
    });
});

it('model with prisma keyword output', async () => {
    ({ project, sourceFiles } = await testGenerate({
        schema: `
            model Output {
              id        Int         @id
              Aggregate Aggregate[]
            }

            model Aggregate {
              id       Int     @id
              outputId Int
              output   Output  @relation(fields: [outputId], references: [id])
              xId      Int
              x        XOutput @relation(fields: [xId], references: [id])
            }

            model XOutput {
              id        Int         @id
              Aggregate Aggregate[]
            }
            `,
        options: [`outputFilePattern = "{name}.{type}.ts"`],
    }));
});

describe('reexport option', () => {
    describe('reexport directories clean', () => {
        before(async () => {
            ({ project, sourceFiles } = await testGenerate({
                schema: `
            model User {
                id Int @id
            }`,
                options: ['reExport = Directories'],
            }));
        });

        it('user index', () => {
            setSourceFile('/user/index.ts');
            expect(sourceFile).toBeTruthy();
            expect(sourceFile.getText()).toContain(
                `export { AggregateUser } from './aggregate-user.output'`,
            );
            expect(sourceFile.getText()).toContain(
                `export { User } from './user.model'`,
            );
        });
    });

    describe('reexport directories with existing file', () => {
        before(async () => {
            ({ project, sourceFiles } = await testGenerate({
                schema: `
            model User {
                id Int @id
            }`,
                options: ['reExport = Directories'],
                onConnect(emitter) {
                    emitter.on('PostBegin', ({ project, output }: EventArguments) => {
                        project.createSourceFile(
                            `${output}/user/index.ts`,
                            `export { User } from './user.model';`,
                            { overwrite: true },
                        );
                    });
                },
            }));
        });

        it('user index should not contain duplicate identifer', () => {
            sourceFile = project.getSourceFile(s =>
                s.getFilePath().endsWith('/user/index.ts'),
            )!;
            const decls = sourceFile.getExportDeclarations().map(x => ({
                specifier: x.getModuleSpecifierValue(),
                name: x.getNamedExports()[0].getName(),
            }));
            expect(decls).not.toContainEqual(
                expect.objectContaining({ specifier: './index' }),
            );
        });
    });

    describe('reexport directories with output file pattern', () => {
        before(async () => {
            ({ project, sourceFiles } = await testGenerate({
                schema: `
                model User {
                    id Int @id
                }`,
                options: [
                    'reExport = Directories',
                    `outputFilePattern = "{model}/{plural.type}/{name}.{type}.ts"`,
                ],
            }));
        });

        it('user should export plural types', () => {
            sourceFile = project.getSourceFile(s =>
                s.getFilePath().endsWith('/user/index.ts'),
            )!;

            for (const exp of [
                `export * from './args';`,
                `export * from './enums';`,
                `export * from './inputs';`,
                `export * from './models';`,
                `export * from './outputs';`,
            ]) {
                expect(sourceFile.getText()).toContain(exp);
            }
        });
    });

    describe('reexport single', () => {
        before(async () => {
            ({ project, sourceFiles } = await testGenerate({
                schema: `
            model User {
                id Int @id
            }`,
                options: ['reExport = Single'],
            }));
        });

        it('root index', () => {
            const rootDirectory = project.getRootDirectories()[0].getParent();
            const sourceFile = rootDirectory?.getSourceFileOrThrow('index.ts')!;
            expect(sourceFile).toBeTruthy();
            expect(sourceFile.getText()).toContain(
                `export { SortOrder } from './prisma/sort-order.enum'`,
            );
            expect(sourceFile.getText()).toContain(
                `export { User } from './user/user.model'`,
            );
        });
    });

    describe('reexport all', () => {
        before(async () => {
            ({ project, sourceFiles } = await testGenerate({
                schema: `
            model User {
                id Int @id
            }`,
                options: ['reExport = All'],
            }));
        });

        it('root index', () => {
            const rootDirectory = project.getRootDirectories()[0].getParent();
            const sourceFile = rootDirectory?.getSourceFileOrThrow('index.ts')!;
            expect(sourceFile).toBeTruthy();
            expect(sourceFile.getText()).toMatch(
                /export {.*AffectedRows,.*} from '\.\/prisma'/,
            );
            expect(sourceFile.getText()).toMatch(
                /export {.*UserWhereInput,.*} from '\.\/user'/,
            );
        });

        it('user index', () => {
            sourceFile = project.getSourceFile(s =>
                s.getFilePath().endsWith('/user/index.ts'),
            )!;
            // sourceFile = project.getSourceFile('/user/index.ts')!;
            expect(sourceFile).toBeTruthy();
            expect(sourceFile.getText()).toContain(
                `export { AggregateUser } from './aggregate-user.output'`,
            );
            expect(sourceFile.getText()).toContain(
                `export { User } from './user.model'`,
            );
        });
    });
});

describe('emit single and decorators', () => {
    before(async () => {
        ({ project, sourceFiles } = await testGenerate({
            schema: `
                model User {
                  id    Int    @id
                  /// @Validator.MinLength(3)
                  name String
                  /// @PropertyType({ name: 'G.Email', from: 'graphql-type-email', input: true })
                  email String?
                }
                `,
            options: [
                `emitSingle = true`,
                `outputFilePattern = "{name}.{type}.ts"`,
                `fields_Validator_from = "class-validator"`,
                `fields_Validator_input = true`,
            ],
        }));
        setSourceFile('index.ts');
    });

    it('should contain custom decorator import', () => {
        const importDeclaration = importDeclarations.find(
            x => x.moduleSpecifier === 'graphql-type-email',
        );
        expect(importDeclaration).toEqual(
            expect.objectContaining({
                namespaceImport: 'G',
            }),
        );
    });

    it('validator namespace for name should be imported', () => {
        expect(importDeclarations).toContainEqual(
            expect.objectContaining({
                namespaceImport: 'Validator',
            }),
        );
    });

    describe('user create input name', () => {
        let property: PropertyDeclaration;
        before(() => {
            property = sourceFile.getClass('UserCreateInput')?.getProperty('name')!;
        });

        it('decorator validator', () => {
            const d = property.getDecorator(d => d.getFullText().includes('MinLength'));
            expect(trim(d?.getFullText())).toEqual('@Validator.MinLength(3)');
        });
    });
});

describe('emit single', () => {
    const schema = `
        model User {
          id    Int    @id
          posts Post[]
        }
        model Post {
          id     Int   @id
          user   User? @relation(fields: [userId], references: [id])
          userId Int?
        }
    `;
    describe('emit single green', () => {
        before(async () => {
            ({ project, sourceFiles } = await testGenerate({
                schema,
                options: [
                    `emitSingle = true`,
                    `outputFilePattern = "{name}.{type}.ts"`,
                ],
            }));
            setSourceFile('index.ts');
        });

        it('should have one file', () => {
            expect(project.getSourceFiles()).toHaveLength(1);
        });

        it('should not contain relative import', () => {
            const badImport = imports.find(x => x.specifier.startsWith('.'));
            expect(badImport).toBeUndefined();
        });

        it('should contains class user', () => {
            expect(sourceText).toMatch(/export class User {/);
        });

        it('should contains class post', () => {
            expect(sourceText).toMatch(/export class Post {/);
        });

        it('should use InstanceType trick to avoid tdz', () => {
            const struct = sourceFile
                .getClass('Post')
                ?.getProperty('user')
                ?.getStructure();
            expect(struct?.type).toEqual('InstanceType<typeof User> | null');
            expect(struct?.hasQuestionToken).toEqual(true);
        });

        it('type for all properties should use InstanceType trick to avoid tdz', () => {
            const types = sourceFile
                .getClasses()
                .flatMap(c => c.getProperties().map(p => ({ c, p })))
                .map(({ c, p }) => ({ c, p, type: p.getType() }))
                .filter(({ type }) => type.isClass())
                .map(({ c, p }) => ({
                    class: c.getName(),
                    property: p.getStructure().name,
                    type: p.getStructure().type,
                }));
            expect(types).toHaveLength(0);
        });
    });

    describe('emit single second gen', () => {
        before(async () => {
            ({ project, sourceFiles } = await testGenerate({
                schema,
                options: [
                    `emitSingle = true`,
                    `outputFilePattern = "{name}.{type}.ts"`,
                ],
                onConnect(emitter) {
                    emitter.on('PostBegin', ({ project, output }: EventArguments) => {
                        project.createSourceFile(
                            `${output}/index.ts`,
                            `@ObjectType() export class User { }`,
                            { overwrite: true },
                        );
                    });
                },
            }));
            setSourceFile('index.ts');
        });

        it('should not add to existing file', () => {
            expect(sourceText.match(/export class User /g)).toHaveLength(1);
        });
    });
});

describe('select input type', () => {
    it('select input type all', async () => {
        ({ project, sourceFiles } = await testGenerate({
            schema: `
                model User {
                  id Int @id
                  posts Post[]
                }
                model Post {
                  id     Int   @id
                  user   User? @relation(fields: [userId], references: [id])
                  userId Int?
                }
            `,
            options: [
                `outputFilePattern = "{name}.{type}.ts"`,
                `useInputType_PostWhereInput_ALL = "WhereInput"`,
            ],
        }));
        setSourceFile('post-where.input.ts');
        expect(t('user')).toEqual('() => UserWhereInput');
        expect(p('user')?.type).toEqual('UserWhereInput');
    });

    it('select input type usercreateargs', async () => {
        ({ project, sourceFiles } = await testGenerate({
            schema: `
                model User {
                    userId String @id
                    articles Article[] @relation("ArticleAuthor")
                }
                model Article {
                    articleId      String    @id @default(cuid())
                    author         User?     @relation(name: "ArticleAuthor", fields: [authorId], references: [userId])
                    authorId       String?
                }
            `,
            options: [
                `outputFilePattern = "{name}.{type}.ts"`,
                `useInputType_CreateOne_ALL = "UncheckedCreate"`,
            ],
        }));
        setSourceFile('create-one-user.args.ts');
        expect(t('data')).toEqual('() => UserUncheckedCreateInput');
        expect(p('data')?.type).toEqual('UserUncheckedCreateInput');
    });

    describe('select input type articlewhereinput array config', () => {
        before(async () => {
            ({ project, sourceFiles } = await testGenerate({
                schema: `
                model User {
                    userId String @id
                    articles Article[] @relation("ArticleAuthor")
                }
                model Article {
                    articleId      String    @id @default(cuid())
                    author         User?     @relation(name: "ArticleAuthor", fields: [authorId], references: [userId])
                    authorId       String?
                }
            `,
                options: [
                    `outputFilePattern = "{name}.{type}.ts"`,
                    `useInputType_WhereInput_ALL = "WhereInput"`,
                    `useInputType_CreateOne_ALL = "UncheckedCreate"`,
                ],
            }));
        });

        it('article-where.input', () => {
            setSourceFile('article-where.input.ts');
            expect(t('author')).toEqual('() => UserWhereInput');
            expect(p('author')?.type).toEqual('UserWhereInput');
            expect(importDeclarations).toContainEqual(
                expect.objectContaining({
                    moduleSpecifier: './user-where.input',
                }),
            );
        });

        it('select input type articlewhereinput array config', () => {
            setSourceFile('create-one-user.args.ts');
            expect(t('data')).toEqual('() => UserUncheckedCreateInput');
            expect(p('data')?.type).toEqual('UserUncheckedCreateInput');
        });
    });

    describe('select input type no atomic operations', () => {
        before(async () => {
            ({ project, sourceFiles } = await testGenerate({
                schema: `
                model User {
                    userId Int @id
                    articles Article[] @relation("ArticleAuthor")
                    friends String[]
                }
                model Article {
                    articleId      String    @id @default(cuid())
                    author         User?     @relation(name: "ArticleAuthor", fields: [authorId], references: [userId])
                    authorId       Int?
                }
            `,
                options: [
                    `outputFilePattern = "{name}.{type}.ts"`,
                    `useInputType_UpdateInput_ALL = "match:!*FieldUpdateOperationsInput"`,
                    `useInputType_UpdateMany_ALL = "match:!*FieldUpdateOperationsInput"`,
                    `useInputType_UpdateWithout_ALL = "match:!*FieldUpdateOperationsInput"`,
                ],
            }));
        });

        it('check all', () => {
            for (const s of sourceFiles
                .filter(
                    sourceFile =>
                        !sourceFile
                            .getFilePath()
                            .endsWith('field-update-operations.input.ts') &&
                        sourceFile.getClass(() => true),
                )
                .map(sourceFile => sourceFile.getClass(() => true))
                .flatMap(c => {
                    return c!.getProperties().map(p => ({
                        class: c?.getName(),
                        type: p.getStructure().type,
                    }));
                })) {
                expect(s).not.toEqual(
                    expect.objectContaining({
                        type: expect.stringContaining('FieldUpdateOperationsInput'),
                    }),
                );
            }
        });
    });

    it('select input type list filter', async () => {
        ({ project, sourceFiles } = await testGenerate({
            schema: `
                model User {
                    userId String @id
                    friends String[]
                    ints     Int[]
                    // creates DateTime[]
                    // floats   Float[]
                    // bytes   Bytes[]
                    // decimals Decimal[]
                    // bigInts  BigInt[]
                    // jsons    Json[]
                }
            `,
            options: [
                `outputFilePattern = "{name}.{type}.ts"`,
                `useInputType_CreateInput_friends = "String"`,
                `useInputType_CreateInput_ints = "Int"`,
            ],
        }));
        setSourceFile('user-create.input.ts');
        expect(t('friends')).toEqual('() => [String]');
        expect(p('friends')?.type).toEqual('Array<string>');

        expect(t('ints')).toEqual('() => [Int]');
        expect(p('ints')?.type).toEqual('Array<number>');
    });
});

describe('model autoincrement int', () => {
    before(async () => {
        ({ project, sourceFiles } = await testGenerate({
            schema: `
                model User {
                  id  Int  @id  @default(autoincrement())
                }
            `,
        }));
    });

    it('input types whithout fields', () => {
        const files = sourceFiles
            .map(s => s.getClass(() => true))
            .filter(Boolean)
            .map(c => ({ className: c!.getName(), properties: c!.getProperties() }))
            .filter(({ properties }) => properties.length === 0);
        expect(files).toHaveLength(0);
    });

    it('post update many input should not exists', () => {
        const f = project.getSourceFile(s =>
            s.getFilePath().endsWith('post-update-many-mutation.input.ts'),
        );
        expect(f).toBeUndefined();
    });
});

describe('output without fields', () => {
    before(async () => {
        ({ project, sourceFiles } = await testGenerate({
            schema: `
                model Comment {
                  id String @id @default(cuid())
                  dummy Dummy @relation(fields: [dummyId], references: [id])
                  dummyId String
                }
                model Dummy {
                  id String @id
                  /// @HideField({ input: true, output: true })
                  comments Comment[]
                }
            `,
            options: [`outputFilePattern = "{name}.{type}.ts"`],
        }));
    });

    it('count output', () => {
        setSourceFile('dummy-count.output.ts');
        expect(t('comments')).toEqual('() => Int');
    });
});

describe('noTypeId config', () => {
    describe('disabled', () => {
        before(async () => {
            ({ project, sourceFiles } = await testGenerate({
                schema: `
                    model User {
                      id Int @id
                    }
                `,
                options: [`outputFilePattern = "{name}.{type}.ts"`],
            }));
            setSourceFile('user.model.ts');
        });

        it('type should be ID', () => {
            expect(t('id')).toEqual('() => ID');
        });

        it('import contain ID', () => {
            expect(imports).toContainEqual({
                name: 'ID',
                specifier: '@nestjs/graphql',
            });
        });
    });

    describe('enabled int', () => {
        before(async () => {
            ({ project, sourceFiles } = await testGenerate({
                schema: `
                    model User {
                      id Int @id
                    }
                `,
                options: [`outputFilePattern = "{name}.{type}.ts"`, 'noTypeId = true'],
            }));
            setSourceFile('user.model.ts');
        });

        it('type should be Int', () => {
            expect(t('id')).toEqual('() => Int');
        });

        it('import contain Int', () => {
            expect(imports).toContainEqual({
                name: 'Int',
                specifier: '@nestjs/graphql',
            });
        });
    });
});

describe('object model options', () => {
    it('abstract true by objecttype', async () => {
        ({ project, sourceFiles } = await testGenerate({
            schema: `
            /// @ObjectType({ isAbstract: true })
            model User {
                id Int @id
            }`,
            options: [`outputFilePattern = "{name}.{type}.ts"`],
        }));

        setSourceFile('user.model.ts');
        const argument = objectTypeArguments()?.[0];
        const json = JSON5.parse(argument);
        expect(json).toEqual({ isAbstract: true });
    });

    it('should have abstract true and name robot', async () => {
        ({ project, sourceFiles } = await testGenerate({
            schema: `
            /// user really
            /// @ObjectType({ name: 'Robot', isAbstract: true })
            model User {
                id Int @id
            }`,
            options: [`outputFilePattern = "{name}.{type}.ts"`],
        }));

        setSourceFile('user.model.ts');
        const [argument1, argument2] = objectTypeArguments() as string[];
        expect(argument1).toEqual("'Robot'");
        expect(JSON5.parse(argument2)).toEqual({
            description: 'user really',
            isAbstract: true,
        });
    });

    it('name by first argument string', async () => {
        ({ project, sourceFiles } = await testGenerate({
            schema: `
            /// user really
            /// @ObjectType('Human', { isAbstract: true })
            model User {
                id Int @id
            }`,
            options: [`outputFilePattern = "{name}.{type}.ts"`],
        }));

        setSourceFile('user.model.ts');
        const [argument1, argument2] = objectTypeArguments() as string[];
        expect(JSON5.parse(argument1)).toEqual('Human');
        expect(JSON5.parse(argument2)).toEqual({
            description: 'user really',
            isAbstract: true,
        });
    });
});

describe('compound index', () => {
    it('user unique input compound', async () => {
        ({ project, sourceFiles } = await testGenerate({
            schema: `
                model User {
                  id    Int    @id
                  /// @Validator.MinLength(3)
                  name String
                  /// @PropertyType({ name: 'G.Email', from: 'graphql-type-email' })
                  email String?

                  @@unique([email, name])
                }
                model Us {
                  id    Int    @id
                }
                `,
            options: [
                `outputFilePattern = "{name}.{type}.ts"`,
                `fields_Validator_from = "class-validator"`,
                `fields_Validator_input = true`,
            ],
        }));
        setSourceFile('user-email-name-compound-unique.input.ts');
        const minLength = classFile.getProperty('name')?.getDecorator('MinLength');
        expect(minLength?.getText()).toEqual('@Validator.MinLength(3)');
    });
});

describe('field type', () => {
    describe('it overwrites field type based on match expression', () => {
        before(async () => {
            ({ project, sourceFiles } = await testGenerate({
                schema: `
                model User {
                  id Int @id
                  /// @FieldType({ name: 'GraphQLJSONObject', from: 'graphql-scalars', namedImport: true, match: 'User{Create,Update}Input' })
                  profile Json
                }
                `,
                options: [`outputFilePattern = "{name}.{type}.ts"`],
            }));
        });

        it('should use default scalar type in model', () => {
            setSourceFile('user.model.ts');
            expect(t('profile')).toEqual('() => GraphQLJSON');
        });

        it('should use default scalar type in user-create-many.input', () => {
            setSourceFile('user-create-many.input.ts');
            expect(t('profile')).toEqual('() => GraphQLJSON');
        });

        it('user-create.input', () => {
            setSourceFile('user-create.input.ts');
            expect(t('profile')).toEqual('() => GraphQLJSONObject');
        });

        it('should use default scalar type in user-update-many-mutation.input', () => {
            setSourceFile('user-update-many-mutation.input.ts');
            expect(t('profile')).toEqual('() => GraphQLJSON');
        });

        it('user-update.input', () => {
            setSourceFile('user-update.input.ts');
            expect(t('profile')).toEqual('() => GraphQLJSONObject');
        });
    });
});

it('fieldtype on groupby', async () => {
    ({ project, sourceFiles } = await testGenerate({
        schema: `
            model User {
                id Int @id
                /// @FieldType({ name: 'GraphQLJSONObject', from: 'graphql-scalars', namedImport: true, input: true, output: true })
                /// @PropertyType({ name: 'JsonObject', from: 'type-fest', namedImport: true, input: true, output: true })
                profile Json
            }
            `,
        options: [`outputFilePattern = "{name}.{type}.ts"`],
    }));
    setSourceFile('user-group-by.output.ts');
    expect(t('profile')).toEqual('() => GraphQLJSONObject');
});

describe('property type', () => {
    describe('it overwrites property type based on match expression', () => {
        before(async () => {
            ({ project, sourceFiles } = await testGenerate({
                schema: `
              model User {
                id Int @id
                /// @PropertyType({ name: 'JsonObject', from: 'type-fest', namedImport: true, match: 'User{Create,Update}Input' })
                profile Json
              }
              `,
                options: [`outputFilePattern = "{name}.{type}.ts"`],
            }));
        });

        it('should use default scalar type in model', () => {
            setSourceFile('user.model.ts');
            expect(p('profile')?.type).toEqual('any');
        });

        it('should use default scalar type in user-create-many.input', () => {
            setSourceFile('user-create-many.input.ts');
            expect(p('profile')?.type).toEqual('any');
        });

        it('user-create.input', () => {
            setSourceFile('user-create.input.ts');
            expect(p('profile')?.type).toEqual('JsonObject');
        });

        it('should use default scalar type in user-update-many-mutation.input', () => {
            setSourceFile('user-update-many-mutation.input.ts');
            expect(p('profile')?.type).toEqual('any');
        });

        it('user-update.input', () => {
            setSourceFile('user-update.input.ts');
            expect(p('profile')?.type).toEqual('JsonObject');
        });
    });

    describe('it respects input from generator level field configuration', () => {
        before(async () => {
            ({ project, sourceFiles } = await testGenerate({
                schema: `
              model User {
                id Int @id
                /// @PropertyType('JsonObject')
                profile Json
              }
              `,
                options: [
                    `
                  fields_JsonObject_from         = "type-fest"
                  fields_JsonObject_namedImport  = true
                  fields_JsonObject_input        = true
                  fields_JsonObject_output       = false
                `,
                ],
            }));
        });

        it('should use default scalar type in model', () => {
            setSourceFile('user.model.ts');
            expect(p('profile')?.type).toEqual('any');
        });

        it('user-create.input', () => {
            setSourceFile('user-create.input.ts');
            expect(p('profile')?.type).toEqual('JsonObject');
        });
    });

    describe('it respects output from generator level field configuration', () => {
        before(async () => {
            ({ project, sourceFiles } = await testGenerate({
                schema: `
              model User {
                id Int @id
                /// @PropertyType('JsonObject')
                profile Json
              }
              `,
                options: [
                    `
                  fields_JsonObject_from         = "type-fest"
                  fields_JsonObject_namedImport  = true
                  fields_JsonObject_input        = false
                  fields_JsonObject_output       = true
                `,
                ],
            }));
        });

        it('should use default scalar type in model', () => {
            setSourceFile('user.model.ts');
            expect(p('profile')?.type).toEqual('JsonObject');
        });

        it('user-create.input', () => {
            setSourceFile('user-create.input.ts');
            expect(p('profile')?.type).toEqual('any');
        });
    });
});

describe('hidefield on groupby output', () => {
    before(async () => {
        ({ project, sourceFiles } = await testGenerate({
            schema: `
            model User {
                id Int @id
                /// @HideField({ match: '*GroupBy' })
                /// @FieldType({ name: 'GraphQLJSONObject', from: 'graphql-scalars', namedImport: true, input: true, output: true })
                /// @PropertyType({ name: 'JsonObject', from: 'type-fest', namedImport: true, input: true, output: true })
                profile Json
            }
            `,
            options: [`outputFilePattern = "{name}.{type}.ts"`],
        }));
        setSourceFile('user-group-by.output.ts');
    });

    it('no graphqljsonobject', () => {
        expect(imports).not.toContainEqual(
            expect.objectContaining({
                name: 'GraphQLJSONObject',
            }),
        );
    });

    it('no graphqljson', () => {
        expect(imports).not.toContainEqual(
            expect.objectContaining({
                name: 'GraphQLJSON',
            }),
        );
    });
});

describe('non list optional properties should be nullable', () => {
    before(async () => {
        ({ project, sourceFiles } = await testGenerate({
            schema: `
            model User {
                id String @id
                profile Profile?
                articles Article[] @relation("ArticleAuthor")
            }
            model Profile {
              id String @id
              user User? @relation(fields: [userId], references: [id])
              userId String?
            }
            model Article {
              id String @id
              author User? @relation(name: "ArticleAuthor", fields: [authorId], references: [id])
              authorId String?
            }`,
            options: [`outputFilePattern = "{name}.{type}.ts"`],
        }));
    });

    it('user model profile', () => {
        setSourceFile('user.model.ts');
        expect(p('profile')?.type).toEqual('Profile | null');
        expect(p('profile')?.hasQuestionToken).toEqual(true);
    });

    it('user model count', () => {
        const s = testSourceFile({
            project,
            file: 'user.model.ts',
            property: '_count',
        });
        expect(s.property?.type).toEqual('UserCount');
        expect(s.fieldDecoratorOptions).toEqual('{nullable:false}');
        expect(s.property?.hasQuestionToken).toEqual(true);
    });

    it('user count output should undefineable ts type', () => {
        const s = testSourceFile({
            project,
            file: 'user-count.output.ts',
            property: 'articles',
        });
        expect(s.fieldDecoratorOptions).toEqual('{nullable:false}');
        expect(s.property?.hasQuestionToken).toBe(true);
    });

    it('article model author', () => {
        setSourceFile('article.model.ts');
        expect(p('author')?.type).toEqual('User | null');
    });

    it('list articles should not have null', () => {
        setSourceFile('user.model.ts');
        expect(p('articles')?.type).toEqual('Array<Article>');
    });
});

describe('requireSingleFieldsInWhereUniqueInput', () => {
    it('requireSingleFieldsInWhereUniqueInput several fields', async () => {
        ({ project, sourceFiles } = await testGenerate({
            schema: `
                model User {
                    id String @id
                email String @unique
            }
            `,
            options: [
                `outputFilePattern = "{name}.{type}.ts"`,
                `requireSingleFieldsInWhereUniqueInput = true`,
            ],
        }));
        setSourceFile('user-where-unique.input.ts');

        expect(p('id')).toEqual(
            expect.objectContaining({ hasQuestionToken: true, type: 'string' }),
        );
        expect(f('id')).toEqual(['() => String', '{nullable:true}']);
        expect(p('email')).toEqual(
            expect.objectContaining({ hasQuestionToken: true, type: 'string' }),
        );
        expect(f('email')).toEqual(['() => String', '{nullable:true}']);
    });

    it('requireSingleFieldsInWhereUniqueInput single fields', async () => {
        ({ project } = await testGenerate({
            schema: `
                model User {
                    id String @id
                }
        `,
            options: [
                `outputFilePattern = "{name}.{type}.ts"`,
                `requireSingleFieldsInWhereUniqueInput = true`,
            ],
        }));

        const s = testSourceFile({
            project,
            file: 'user-where-unique.input.ts',
            property: 'id',
        });

        expect(s.property).toEqual(
            expect.objectContaining({ hasQuestionToken: false, type: 'string' }),
        );
        expect(s.fieldDecoratorType).toEqual('() => String');
        expect(s.fieldDecoratorOptions).toEqual('{nullable:false}');
    });

    it('requireSingleFieldsInWhereUniqueInput compound', async () => {
        ({ project } = await testGenerate({
            schema: `
                model User {
                  name String
                  email String

                  @@unique([name,email])
                }
            `,
            options: [
                `outputFilePattern = "{name}.{type}.ts"`,
                `requireSingleFieldsInWhereUniqueInput = true`,
            ],
        }));

        const s = testSourceFile({
            project,
            file: 'user-where-unique.input.ts',
            property: 'name_email',
        });

        expect(s.property?.hasQuestionToken).toEqual(false);
        expect(s.property?.type).toEqual('UserNameEmailCompoundUniqueInput');
        expect(s.fieldDecoratorType).toEqual('() => UserNameEmailCompoundUniqueInput');
        expect(s.fieldDecoratorOptions).toEqual('{nullable:false}');
    });
});

describe('configuration custom scalars', () => {
    describe('bigint', () => {
        before(async () => {
            ({ project, sourceFiles } = await testGenerate({
                schema: `
            model User {
              id String @id
              bigInt BigInt
            }`,
                options: [
                    `outputFilePattern = "{name}.{type}.ts"`,
                    `graphqlScalars_BigInt_name = "GraphQLBigInt"`,
                    `graphqlScalars_BigInt_specifier = "graphql-scalars"`,
                ],
            }));
        });

        it('big-int-filter equals', () => {
            const s = testSourceFile({
                project,
                file: 'big-int-filter.input.ts',
                property: 'equals',
            });

            expect(s.fieldDecoratorType).toEqual('() => GraphQLBigInt');

            expect(s.namedImports).toContainEqual({
                name: 'GraphQLBigInt',
                specifier: 'graphql-scalars',
            });
        });

        it('big-int-filter in', () => {
            const s = testSourceFile({
                project,
                file: 'big-int-filter.input.ts',
                property: 'in',
            });

            expect(s.fieldDecoratorType).toEqual('() => [GraphQLBigInt]');
        });

        it('user model', () => {
            const s = testSourceFile({
                project,
                file: 'user.model.ts',
                property: 'bigInt',
            });

            expect(s.namedImports).toContainEqual({
                name: 'GraphQLBigInt',
                specifier: 'graphql-scalars',
            });
            expect(s.fieldDecoratorType).toEqual('() => GraphQLBigInt');
        });

        it('user-sum-aggregate', () => {
            const s = testSourceFile({
                project,
                file: 'user-sum-aggregate.output.ts',
                property: 'bigInt',
            });

            expect(s.namedImports).toContainEqual({
                name: 'GraphQLBigInt',
                specifier: 'graphql-scalars',
            });
            expect(s.fieldDecoratorType).toEqual('() => GraphQLBigInt');
        });
    });
});
