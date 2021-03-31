import AwaitEventEmitter from 'await-event-emitter';
import expect from 'expect';
import {
    ClassDeclaration,
    EnumDeclarationStructure,
    Project,
    PropertyDeclarationStructure,
    SourceFile,
} from 'ts-morph';

import { User } from './@generated/user/user.model';
import { generate } from './generate';
import { generateFileName } from './helpers/generate-file-name';
import {
    createGeneratorOptions,
    getFieldOptions,
    getFieldType,
    getImportDeclarations,
    getPropertyStructure,
} from './testing';
import { EventArguments } from './types';

let sourceFile: SourceFile;
let sourceFiles: SourceFile[];
let sourceText: string;
let project: Project;
let propertyStructure: PropertyDeclarationStructure;
let imports: ReturnType<typeof getImportDeclarations>;

const p = (name: string) => getPropertyStructure(sourceFile, name);
const d = (name: string) => getPropertyStructure(sourceFile, name)?.decorators?.[0];
const setSourceFile = (name: string) => {
    sourceFile = project.getSourceFile(s => s.getFilePath().endsWith(name))!;
    sourceText = sourceFile.getText();
    imports = getImportDeclarations(sourceFile);
};

async function testGenerate(args: {
    schema: string;
    options?: string[];
    createSouceFile?: {
        text: string;
        name: string;
        type: string;
    };
    onConnect?: (emitter: AwaitEventEmitter) => void;
}) {
    const { schema, options, createSouceFile, onConnect } = args;
    const connectCallback = (emitter: AwaitEventEmitter) => {
        onConnect && onConnect(emitter);
        emitter.off('GenerateFiles');
        if (createSouceFile) {
            emitter.on(
                'PostBegin',
                ({ config, project, output, getModelName }: EventArguments) => {
                    const filePath = generateFileName({
                        type: createSouceFile.type,
                        name: createSouceFile.name,
                        getModelName,
                        template: config.outputFilePattern,
                    });
                    project.createSourceFile(
                        `${output}/${filePath}`,
                        createSouceFile.text,
                        { overwrite: true },
                    );
                },
            );
        }
        emitter.on('End', (args: { project: Project }) => {
            ({ project } = args);
        });
    };
    await generate({
        ...(await createGeneratorOptions(schema, options)),
        skipAddOutputSourceFiles: true,
        connectCallback,
    });

    sourceFiles = project.getSourceFiles();
    let emptyFiles: string[] = [];
    try {
        emptyFiles = sourceFiles.filter(s => !s.getText()).map(s => s.getFilePath());
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
        before(() => setSourceFile('user.model.ts'));

        it('class should be exported', () => {
            const [classFile] = sourceFile.getClasses();
            expect(classFile.isExported()).toBe(true);
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
            expect(argument).toMatch(/nullable:\s*false/);
            expect(argument).toMatch(/defaultValue:\s*1/);
            expect(argument).not.toMatch(/description:\s*undefined/);
        });

        it('property description', () => {
            const argument = getFieldOptions(sourceFile, 'id');
            expect(argument).toMatch(/nullable:\s*false/);
            expect(argument).toMatch(/description:\s*["']user id["']/);
        });

        it('object type description', () => {
            const decoratorArgument = sourceFile
                .getClass(() => true)
                ?.getDecorators()?.[0]
                .getStructure()?.arguments?.[0] as string | undefined;
            expect(decoratorArgument).toMatch(/description:\s*["']User really["']/);
        });

        it('has import objecttype', () => {
            expect(getImportDeclarations(sourceFile)).toContainEqual({
                name: 'ObjectType',
                specifier: '@nestjs/graphql',
            });
        });
    });

    describe('aggregate user', () => {
        before(() => {
            setSourceFile('aggregate-user.output.ts');
        });

        // it('', () => console.log(sourceFile.getText()));

        it('class should be exported', () => {
            const [classFile] = sourceFile.getClasses();
            expect(classFile.isExported()).toBe(true);
        });

        it('contains decorator ObjectType', () => {
            expect(getImportDeclarations(sourceFile)).toContainEqual({
                name: 'ObjectType',
                specifier: '@nestjs/graphql',
            });
        });

        it('count', () => {
            const structure = sourceFile
                .getClass(() => true)
                ?.getProperty(p => p.getName() === 'count')
                ?.getStructure();
            expect(structure?.type).toEqual('UserCountAggregate');
            expect(structure?.hasQuestionToken).toEqual(true);
        });
    });

    describe('user count aggregate (usercountaggregate)', () => {
        before(() => {
            setSourceFile('user-count-aggregate.output.ts');
            propertyStructure = sourceFile
                .getClass(() => true)
                ?.getProperty(p => p.getName() === 'id')
                ?.getStructure()!;
        });

        // it('', () => console.log(sourceFile.getText()));

        it('id property should be Int/number', () => {
            expect(propertyStructure.type).toEqual('number');
            expect(d('id')?.arguments?.[0]).toEqual('() => Int');
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
            expect(argument).toMatch(/nullable:\s*true/);
        });

        it('property AND has one type', () => {
            expect(getPropertyStructure(sourceFile, 'AND')?.type).toEqual(
                'Array<UserWhereInput>',
            );
        });
    });

    describe('aggregate user args', () => {
        let classFile: ClassDeclaration;
        before(() => {
            sourceFile = project.getSourceFile(s =>
                s.getFilePath().endsWith('aggregate-user.args.ts'),
            )!;
            classFile = sourceFile.getClass(() => true)!;
        });

        // it('', () => console.log(sourceFile.getText()));

        it('decorator name args', () => {
            const decorator = classFile.getDecorator('ArgsType');
            expect(decorator).toBeTruthy();
        });

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
                biggy BigInt
            }`,
        });
        // const filePaths = sourceFiles.map(s => s.getFilePath());
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

            it('big int', () => {
                expect(p('biggy')?.type).toEqual('bigint | number');
            });

            it.skip('money', () => {
                expect(p('money')?.type).toEqual('Decimal | number | string');
            });
        });

        describe('json type', () => {
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
            expect(getFieldOptions(sourceFile, 'equals')).toMatch(/nullable:\s*true/);
        });

        it('not property should be object type', () => {
            expect(getFieldType(sourceFile, 'not')).toContain('DateTimeFilter');
        });

        it('compatiblity datetime filter', () => {
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

        it('valid imports', () => {
            const sourceText = sourceFile.getText();
            expect(sourceText).not.toContain("import ';");
        });

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

        it('data property (json)', () => {
            expect(getFieldType(sourceFile, 'data')).toEqual('() => GraphQLJSON');
        });

        // it('', () => console.log(sourceFile.getText()));
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
            expect(getFieldType(sourceFile, 'not')).toEqual('() => GraphQLJSON');
        });

        // it('', () => console.log(sourceFile.getText()));
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
                  id     Int    @id
                  parentId Int
                  parent User   @relation("UserToUser", fields: [parentId], references: [id])
                  user   User[] @relation("UserToUser")
                }`,
        });
    });

    describe('model', () => {
        before(() => {
            setSourceFile('user.model.ts');
        });

        // it('', () => console.log('sourceText', sourceText));

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
        await testGenerate({
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
        createSouceFile: {
            name: 'Role',
            type: 'enum',
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
            createSouceFile: {
                type: 'model',
                name: 'User',
                text: `@ObjectType() export class User {}`,
            },
        });
        sourceFile = project.getSourceFile(s =>
            s.getFilePath().endsWith('user.model.ts'),
        )!;
        sourceText = sourceFile.getText();
        expect(sourceText.match(/export class User/g)?.length).toEqual(1);
    });

    it('remove description', async () => {
        await testGenerate({
            schema,
            createSouceFile: {
                type: 'model',
                name: 'User',
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
            createSouceFile: {
                type: 'model',
                name: 'User',
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
            createSouceFile: {
                type: 'model',
                name: 'User',
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
});

it('generator option outputFilePattern', async () => {
    await testGenerate({
        schema: `model User {
                    id Int @id
                }`,
        options: [`outputFilePattern = "data/{type}/{name}.ts"`],
    });
    const filePaths = sourceFiles.map(s => String(s.getFilePath()));
    expect(filePaths).toContainEqual(expect.stringContaining('/data/model/user.ts'));
});

it('several models', () => {
    before(async () => {
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
        await testGenerate({
            schema: `
            model User {
              id String @id
              age Int
              rating Float?
              money Decimal?
            }
            `,
            options: [
                `outputFilePattern = "{name}.{type}.ts"`,
                `noAtomicOperations = true`,
            ],
        });
    });

    it('files should not be', () => {
        const filePaths = sourceFiles.map(s => s.getFilePath().slice(1));
        for (const filePath of filePaths) {
            expect(filePath).not.toContain('field-update-operations');
        }
    });

    describe('user update input', () => {
        before(() => {
            sourceFile = project.getSourceFile(s =>
                s.getFilePath().endsWith('user-update.input.ts'),
            )!;
        });

        // it('^', () => console.log(sourceFile.getText()));

        it('id should be regular string', () => {
            expect(getPropertyStructure(sourceFile, 'id')?.type).toEqual('string');
        });

        it('id field type should be string', () => {
            expect(getFieldType(sourceFile, 'id')).toEqual('() => String');
        });

        it('age should be regular string', () => {
            expect(getPropertyStructure(sourceFile, 'age')?.type).toEqual('number');
        });

        it('age field type should be string', () => {
            expect(getFieldType(sourceFile, 'age')).toEqual('() => Int');
        });

        it('rating should be regular string', () => {
            expect(getPropertyStructure(sourceFile, 'rating')?.type).toEqual('number');
        });

        it('rating field type should be string', () => {
            expect(getFieldType(sourceFile, 'rating')).toEqual('() => Float');
        });
    });
});

describe('combine scalar filters', () => {
    before(async () => {
        await testGenerate({
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
        });
    });

    it('files should not contain nested and nullable', () => {
        const filePaths = sourceFiles
            .map(s => s.getFilePath().slice(1))
            .filter(p => !p.endsWith('field-update-operations.input.ts'));
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

    describe('user where input', () => {
        before(() => {
            sourceFile = project.getSourceFile(s =>
                s.getFilePath().endsWith('user-where.input.ts'),
            )!;
        });

        it('count', () => {
            expect(getPropertyStructure(sourceFile, 'count')?.type).toBe('IntFilter');
        });

        it('bio', () => {
            expect(getPropertyStructure(sourceFile, 'bio')?.type).toBe('StringFilter');
        });

        it('money', () => {
            expect(getPropertyStructure(sourceFile, 'money')?.type).toBe(
                'DecimalFilter',
            );
        });

        it('rating', () => {
            expect(getPropertyStructure(sourceFile, 'rating')?.type).toBe(
                'FloatFilter',
            );
        });

        it('born', () => {
            expect(getPropertyStructure(sourceFile, 'born')?.type).toBe(
                'DateTimeFilter',
            );
        });

        it('humanoid', () => {
            expect(getPropertyStructure(sourceFile, 'humanoid')?.type).toBe(
                'BoolFilter',
            );
        });

        it('role', () => {
            expect(getPropertyStructure(sourceFile, 'role')?.type).toBe(
                'EnumRoleFilter',
            );
        });

        // it('^', () => console.log(sourceFile.getText()));
    });

    describe('user scalar where with aggregates', () => {
        before(() => {
            sourceFile = project.getSourceFile(s =>
                s.getFilePath().endsWith('user-scalar-where-with-aggregates.input.ts'),
            )!;
        });

        // it('^', () => console.log(sourceFile.getText()));

        it('id', () => {
            expect(getPropertyStructure(sourceFile, 'id')?.type).toBe(
                'StringWithAggregatesFilter',
            );
        });

        it('bio', () => {
            expect(getPropertyStructure(sourceFile, 'bio')?.type).toBe(
                'StringWithAggregatesFilter',
            );
        });

        it('count', () => {
            expect(getPropertyStructure(sourceFile, 'count')?.type).toBe(
                'IntWithAggregatesFilter',
            );
        });

        it('rating', () => {
            expect(getPropertyStructure(sourceFile, 'rating')?.type).toBe(
                'FloatWithAggregatesFilter',
            );
        });

        it('born', () => {
            expect(getPropertyStructure(sourceFile, 'born')?.type).toBe(
                'DateTimeWithAggregatesFilter',
            );
        });

        it('humanoid', () => {
            expect(getPropertyStructure(sourceFile, 'humanoid')?.type).toBe(
                'BoolWithAggregatesFilter',
            );
        });

        it('money', () => {
            expect(getPropertyStructure(sourceFile, 'money')?.type).toBe(
                'DecimalWithAggregatesFilter',
            );
        });

        it('data', () => {
            expect(getPropertyStructure(sourceFile, 'data')?.type).toBe(
                'JsonWithAggregatesFilter',
            );
        });

        it('role', () => {
            expect(getPropertyStructure(sourceFile, 'role')?.type).toBe(
                'EnumRoleWithAggregatesFilter',
            );
        });
    });
});

describe('hide field', () => {
    describe('scalar field', () => {
        before(async () => {
            await testGenerate({
                schema: `
            model User {
                id String @id
                /// Password1
                /// @TypeGraphQL.omit(output: true)
                password1 String
                /// Password2
                /// @HideField()
                password2 String
            }
            `,
                options: [],
            });
        });

        describe('model', () => {
            before(() => {
                sourceFile = project.getSourceFile(s =>
                    s.getFilePath().endsWith('/user.model.ts'),
                )!;
            });

            // it('^', () => console.log(sourceFile.getText()));

            it('TypeGraphQL omit should hide password1', () => {
                expect(d('password1')?.name).toBe('HideField');
                expect(d('password1')?.arguments).toEqual([]);
            });

            it('HideField should hide field', () => {
                expect(d('password2')?.name).toBe('HideField');
                expect(d('password2')?.arguments).toEqual([]);
            });
        });

        describe('other outputs', () => {
            it('user-max-aggregate', () => {
                sourceFile = project.getSourceFile(s =>
                    s.getFilePath().endsWith('/user-max-aggregate.output.ts'),
                )!;
                expect(d('password1')?.name).toBe('HideField');
                expect(d('password1')?.arguments).toEqual([]);
                expect(d('password2')?.name).toBe('HideField');
                expect(d('password2')?.arguments).toEqual([]);
            });
        });
    });

    describe('hide on non scalar', () => {
        before(async () => {
            await testGenerate({
                schema: `
                    model User {
                      id       String @id
                      /// @HideField()
                      secret   Secret @relation(fields: [secretId], references: [id])
                      secretId String
                    }

                    model Secret {
                      id    String @id
                      users User[]
                    }
            `,
                options: [],
            });
        });

        describe('model', () => {
            before(() => setSourceFile('/user.model.ts'));

            it('type should be imported', () => {
                const imports = getImportDeclarations(sourceFile);
                expect(imports).toContainEqual(
                    expect.objectContaining({ name: 'Secret' }),
                );
            });

            // it('^', () => console.log(sourceFile.getText()));
        });
    });
});

it('model with prisma keyword output', async () => {
    await testGenerate({
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
    });
});

describe('reexport option', () => {
    describe('reexport directories clean', () => {
        before(async () => {
            await testGenerate({
                schema: `
            model User {
                id Int @id
            }`,
                options: ['reExport = Directories'],
            });
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
            await testGenerate({
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
            });
        });

        it('user index should not contain duplicate identifer', () => {
            sourceFile = project.getSourceFile(s =>
                s.getFilePath().endsWith('/user/index.ts'),
            )!;
            exports = sourceFile.getExportDeclarations().map(x => ({
                specifier: x.getModuleSpecifierValue(),
                name: x.getNamedExports()[0].getName(),
            }));
            expect(exports).not.toContainEqual(
                expect.objectContaining({ specifier: './index' }),
            );
        });
    });

    describe('reexport single', () => {
        before(async () => {
            await testGenerate({
                schema: `
            model User {
                id Int @id
            }`,
                options: ['reExport = Single'],
            });
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
            await testGenerate({
                schema: `
            model User {
                id Int @id
            }`,
                options: ['reExport = All'],
            });
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
            await testGenerate({
                schema,
                options: [
                    `emitSingle = true`,
                    `outputFilePattern = "{name}.{type}.ts"`,
                ],
            });
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
            const type = sourceFile
                .getClass('Post')
                ?.getProperty('user')
                ?.getStructure().type;
            expect(type).toEqual('InstanceType<typeof User>');
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

        // it('^', () => console.log(sourceFile.getText()));
    });

    describe('emit single second gen', () => {
        before(async () => {
            await testGenerate({
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
            });
            setSourceFile('index.ts');
        });

        it('should not add to existing file', () => {
            expect(sourceText.match(/export class User /g)).toHaveLength(1);
        });

        // it('^', () => console.log(sourceFile.getText()));
    });
});
