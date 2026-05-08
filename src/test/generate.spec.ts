import JSON5 from 'json5';
import {
  ClassDeclaration,
  type ImportDeclarationStructure,
  type ImportSpecifierStructure,
  Project,
  PropertyDeclaration,
  type PropertyDeclarationStructure,
  SourceFile,
} from 'ts-morph';
import { beforeAll, describe, expect, it } from 'vitest';

import { trim } from '../helpers/lodash.ts';
import type { EventArguments } from '../types.ts';
import {
  getFieldDecoratorOptions,
  getFieldDecoratorType,
  getFieldOptions,
  getPropertyStructure,
  testSourceFile,
  testSourceFileLegacy,
} from './helpers.ts';
import { testGenerate } from './test-generate.ts';

let sourceFile: SourceFile;
let sourceText: string;
let project: Project;
let imports: { name: string; specifier: string }[];
let classFile: ClassDeclaration;
let sourceFiles: SourceFile[];
let importDeclarations: ImportDeclarationStructure[] = [];

const p = (name: string) => getPropertyStructure(sourceFile, name);
const f = (name: string) =>
  getPropertyStructure(sourceFile, name)?.decorators?.find(
    d => d.name === 'Field',
  )?.arguments;
const t = (name: string) => f(name)?.[0];
const setSourceFile = (name: string) => {
  sourceFile = project.getSourceFileOrThrow(s =>
    s.getFilePath().endsWith(name),
  );
  sourceText = sourceFile.getText();
  classFile = sourceFile.getClass(() => true)!;
  importDeclarations = sourceFile
    .getImportDeclarations()
    .map(d => d.getStructure());
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

it('smoke', async () => {
  ({ project, sourceFiles } = await testGenerate({
    schema: `
    model User {
      id Int @id
    }`,
  }));
});

describe('model with one id int', () => {
  beforeAll(async () => {
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
    let s: ReturnType<typeof testSourceFileLegacy>;
    beforeAll(() => {
      s = testSourceFileLegacy({ file: 'user.model.ts', project });
    });

    it('class should be exported', () => {
      expect(s.classFile.isExported()).toBe(true);
    });

    it('argument decorated id', () => {
      const { fieldDecoratorType } = testSourceFileLegacy({
        file: 'user.model.ts',
        project,
        property: 'id',
      });
      expect(fieldDecoratorType).toEqual('() => ID');
    });

    it('should have import graphql type id', () => {
      expect(s.namedImports).toContainEqual({
        name: 'ID',
        specifier: '@nestjs/graphql',
      });
    });

    it('should have import field decorator', () => {
      expect(s.namedImports).toContainEqual({
        name: 'Field',
        specifier: '@nestjs/graphql',
      });
    });

    it('should have exclamation mark for non null id field', () => {
      const s = testSourceFileLegacy({
        file: 'user.model.ts',
        project,
        property: 'id',
      });
      expect(s.property?.hasExclamationToken).toEqual(true);
    });

    it('default value', () => {
      const s = testSourceFileLegacy({
        class: 'User',
        project,
        property: 'id',
      });
      expect(s.fieldDecoratorOptions).toMatch(/nullable:\s*false/);
      expect(s.fieldDecoratorOptions).toMatch(/defaultValue:\s*1/);
      expect(s.fieldDecoratorOptions).not.toMatch(/description:\s*undefined/);
    });

    it('property description', () => {
      const s = testSourceFileLegacy({
        file: 'user.model.ts',
        project,
        property: 'id',
      });
      expect(s.fieldDecoratorOptions).toMatch(/nullable:\s*false/);
      expect(s.fieldDecoratorOptions).toMatch(
        /description:\s*["']user id really["']/,
      );
    });

    it('property description in jsdoc', () => {
      const description = s.classFile
        .getProperty('id')
        ?.getJsDocs()[0]
        .getDescription();
      expect(description).toEqual('\nuser id really');
    });

    it('object type description', () => {
      const decoratorArgument = s.classFile.getDecorators()[0].getStructure()
        .arguments?.[0] as string | undefined;
      expect(decoratorArgument).toMatch(/description:\s*["']User really["']/);
    });

    it('has js comment', () => {
      expect(s.classFile.getJsDocs()[0].getDescription()).toEqual(
        '\nUser really',
      );
    });

    it('has import objecttype', () => {
      expect(s.namedImports).toContainEqual({
        name: 'ObjectType',
        specifier: '@nestjs/graphql',
      });
    });
  });

  it('aggregate user output class should be exported', () => {
    const s = testSourceFileLegacy({
      file: 'aggregate-user.output.ts',
      project,
    });
    expect(s.classFile.isExported()).toBe(true);
  });

  it('aggregate user output contains decorator ObjectType', () => {
    const s = testSourceFileLegacy({
      file: 'aggregate-user.output.ts',
      project,
    });
    expect(s.namedImports).toContainEqual({
      name: 'ObjectType',
      specifier: '@nestjs/graphql',
    });
  });

  it('aggregate user output count', () => {
    const s = testSourceFileLegacy({
      class: 'AggregateUser',
      project,
      property: '_count',
    });
    expect(s.property?.type).toEqual('Identity<UserCountAggregate>');
    expect(s.property?.hasQuestionToken).toEqual(true);
  });

  it('user count aggregate (usercountaggregate) id property', () => {
    const s = testSourceFileLegacy({
      file: 'user-count-aggregate.output.ts',
      project,
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
      const { property } = testSourceFileLegacy({
        file: 'user-where.input.ts',
        project,
        property: 'id',
      });
      expect(property?.name).toEqual('id');
    });

    it('should have type IntFilter', () => {
      const { propertyMap, sourceText } = testSourceFile({
        file: 'user-where.input.ts',
        project,
      });

      expect(propertyMap.id.type).toEqual('Identity<IntFilter>');
    });

    it('field decorator returns IntFilter', () => {
      const { fieldDecoratorType } = testSourceFileLegacy({
        file: 'user-where.input.ts',
        project,
        property: 'id',
      });
      expect(fieldDecoratorType).toEqual('() => IntFilter');
    });

    it('field decorator IntFilter nullable', () => {
      const { fieldDecoratorOptions } = testSourceFileLegacy({
        file: 'user-where.input.ts',
        project,
        property: 'id',
      });
      expect(fieldDecoratorOptions).toMatch(/nullable:\s*true/);
    });

    it('property AND has one type', () => {
      const { property } = testSourceFileLegacy({
        file: 'user-where.input.ts',
        project,
        property: 'AND',
      });
      expect(property?.type).toEqual('Array<UserWhereInput>');
    });
  });

  describe('aggregate user args', () => {
    beforeAll(() => {
      setSourceFile('user-aggregate.args.ts');
      classFile = sourceFile.getClass(() => true)!;
    });

    it('decorator name args', () => {
      const { classFile } = testSourceFileLegacy({
        file: 'user-aggregate.args.ts',
        project,
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
      expect(p('_count')?.type).toEqual('Identity<UserCountAggregateInput>');
    });

    it('sum', () => {
      expect(p('_sum')?.type).toEqual('Identity<UserSumAggregateInput>');
    });

    it('min', () => {
      expect(p('_min')?.type).toEqual('Identity<UserMinAggregateInput>');
    });

    it('max', () => {
      expect(p('_max')?.type).toEqual('Identity<UserMaxAggregateInput>');
    });
  });

  describe('user count aggregate input', () => {
    let id: PropertyDeclarationStructure;
    beforeAll(() => {
      setSourceFile('user-count-aggregate.input.ts');
      id = getPropertyStructure(sourceFile, 'id')!;
    });

    it('property id should have true type', () => {
      const s = testSourceFileLegacy({
        file: 'user-count-aggregate.input.ts',
        project,
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
    const s = testSourceFileLegacy({
      file: 'user-group-by.args.ts',
      project,
    });

    expect(s.classFile.getName()).toEqual('UserGroupByArgs');
  });

  it('rename to user aggregateargs', () => {
    const s = testSourceFileLegacy({
      file: 'user-aggregate.args.ts',
      project,
    });

    expect(s.classFile.getName()).toEqual('UserAggregateArgs');
  });

  it('where uniq must be wrapped to prisma atleast', () => {
    const s = testSourceFileLegacy({
      class: 'FindManyUserArgs',
      project,
      property: 'cursor',
    });

    expect(s.property?.type).toEqual(
      `Prisma.AtLeast<UserWhereUniqueInput, 'id'>`,
    );
  });
});

describe('duplicated', () => {
  it('duplicated fields in exising file', async () => {
    ({ project, sourceFiles } = await testGenerate({
      createSouceFile: {
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
        type: 'input',
      },
      schema: `
                model User {
                    id Int @id
                }
            `,
    }));
    setSourceFile('/user-create.input.ts');
    const classFile = sourceFile.getClass(() => true)!;
    const names = classFile.getProperties().map(p => p.getName());
    expect(names).toStrictEqual(['id']);
  });

  it('duplicated import decorators', async () => {
    ({ project, sourceFiles } = await testGenerate({
      createSouceFile: {
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
        type: 'model',
      },
      schema: `
                model User {
                    id Int @id
                    xl Int
                    xs Int
                }
            `,
    }));
    setSourceFile('user.model.ts');
    expect(imports.filter(x => x.name === 'Field')).toHaveLength(1);
    expect(imports.filter(x => x.name === 'ObjectType')).toHaveLength(1);
  });
});

describe('one model with scalar types', () => {
  beforeAll(async () => {
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
    beforeAll(() => {
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
    beforeAll(() => {
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
      expect(fieldIn.getStructure().type).toEqual(
        'Array<Date> | Array<string>',
      );
    });
  });

  describe('user where input', () => {
    beforeAll(() => {
      setSourceFile('user-where.input.ts');
    });

    it('number should have int filter', () => {
      const structure = getPropertyStructure(sourceFile, 'count');
      expect(structure?.type).toEqual('Identity<IntFilter>');
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
    beforeAll(() => {
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
    beforeAll(() => {
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
    beforeAll(() => {
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

describe('model with scalar nullable types', () => {
  beforeAll(async () => {
    ({ project, sourceFiles } = await testGenerate({
      options: [`outputFilePattern = "{name}.{type}.ts"`],
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
    }));
  });

  it('nullable json', () => {
    setSourceFile('user-create.input.ts');
    expect(p('data')?.type).toEqual('any');
  });
});

describe('scalar list type', () => {
  describe('general', () => {
    beforeAll(async () => {
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
      expect(p('permissions')?.type).toEqual(
        'Identity<UserCreatepermissionsInput>',
      );
      expect(t('permissions')).toEqual('() => UserCreatepermissionsInput');
    });
  });
});

describe('nullish compatibility', () => {
  beforeAll(async () => {
    ({ project, sourceFiles } = await testGenerate({
      options: [`outputFilePattern = "{name}.{type}.ts"`],
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

              @@unique([userId])
            }
            model Profile {
              id                  Int                 @id @default(autoincrement())
              user                User                @relation(fields: [userId], references: [id])
              userId              String
              dummy               String?

              @@unique([userId])
            }
            enum Role {
                USER
            }
            `,
    }));
    setSourceFile('user.model.ts');
  });

  it('number', () => {
    const s = testSourceFileLegacy({
      file: 'user.model.ts',
      project,
      property: 'count',
    });

    expect(s.property?.type).toEqual('number | null');
    expect(s.property?.hasQuestionToken).toBe(false);
  });

  it('born', () => {
    const s = testSourceFileLegacy({
      file: 'user.model.ts',
      project,
      property: 'born',
    });

    expect(s.property?.type).toEqual('Date | null');
    expect(s.property?.hasQuestionToken).toBe(false);
  });

  it('money', () => {
    const s = testSourceFileLegacy({
      file: 'user.model.ts',
      project,
      property: 'money',
    });
    expect(s.property?.type).toEqual('Decimal | null');
    expect(s.property?.hasQuestionToken).toBe(false);
    expect(imports).toContainEqual({
      name: 'GraphQLDecimal',
      specifier: 'prisma-graphql-type-decimal',
    });
  });

  it('data', () => {
    const s = testSourceFileLegacy({
      file: 'user.model.ts',
      project,
      property: 'data',
    });
    expect(s.property?.type).toEqual('any | null');
    expect(imports).toContainEqual({
      name: 'GraphQLJSON',
      specifier: 'graphql-type-json',
    });
  });

  describe('relation fields should hasQuestionToken (optional)', () => {
    it('profile', () => {
      const s = testSourceFileLegacy({
        file: 'user.model.ts',
        project,
        property: 'profile',
      });
      expect(s.property?.hasQuestionToken).toBe(true);
    });

    it('posts', () => {
      const s = testSourceFileLegacy({
        file: 'user.model.ts',
        project,
        property: 'posts',
      });
      expect(s.property?.hasQuestionToken).toBe(true);
    });
  });
});

describe('one model with enum', () => {
  beforeAll(async () => {
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
    const s = testSourceFileLegacy({ file: 'sort-order.enum.ts', project });
    expect(s.namedImports).toContainEqual({
      name: 'registerEnumType',
      specifier: '@nestjs/graphql',
    });
  });

  it('should register SortOrder', () => {
    const s = testSourceFileLegacy({ file: 'sort-order.enum.ts', project });
    expect(s.sourceText).toContain(
      `registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })`,
    );
  });

  it('should have asc value', () => {
    const s = testSourceFileLegacy({ file: 'sort-order.enum.ts', project });
    const members = s.sourceFile.getEnum('SortOrder')?.getStructure().members;

    expect(members).toContainEqual(
      expect.objectContaining({
        initializer: '"asc"',
        name: 'asc',
      }),
    );
  });

  it('should have desc value', () => {
    const s = testSourceFileLegacy({ file: 'sort-order.enum.ts', project });
    const members = s.sourceFile.getEnum('SortOrder')?.getStructure().members;

    expect(members).toContainEqual(
      expect.objectContaining({
        initializer: '"desc"',
        name: 'desc',
      }),
    );
  });

  describe('role enum', () => {
    beforeAll(() => {
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
    beforeAll(() => {
      setSourceFile('user.model.ts');
    });

    it('should import Role as enum', () => {
      expect(imports).toContainEqual({
        name: 'Role',
        specifier: '../prisma/role.enum',
      });
    });

    it('role type should use tick trick', () => {
      const role = p('role');
      expect(role?.type).toEqual('`${Role}`');
    });
  });
});

describe('one model with self reference', () => {
  beforeAll(async () => {
    ({ project, sourceFiles } = await testGenerate({
      schema: `model User {
                  id     Int    @id
                  parentId Int
                  parent User   @relation("UserToUser", fields: [parentId], references: [id])
                  user   User[] @relation("UserToUser")
                }`,
    }));
  });

  it('with relation input', () => {
    const s = testSourceFileLegacy({
      file: 'user-order-by-with-relation.input.ts',
      project,
    });

    expect(s.namedImports).not.toContainEqual(
      expect.objectContaining({
        name: 'UserOrderByWithRelationInput',
      }),
    );
  });

  describe('model', () => {
    it('should not contain import to self file', () => {
      const s = testSourceFileLegacy({ file: 'user.model.ts', project });
      expect(s.namedImports).not.toContainEqual(
        expect.objectContaining({ name: 'User' }),
      );
    });

    it('imports should contain user count', () => {
      const s = testSourceFileLegacy({ file: 'user.model.ts', project });
      expect(s.namedImports).toContainEqual({
        name: 'UserCount',
        specifier: './user-count.output',
      });
    });
  });

  describe('user list relation filter', () => {
    beforeAll(() => {
      sourceFile = project.getSourceFile(s =>
        s.getFilePath().endsWith('/user-list-relation-filter.input.ts'),
      )!;
    });

    it('every', () => {
      const structure = getPropertyStructure(sourceFile, 'every');
      expect(structure?.type).toEqual('Identity<UserWhereInput>');
    });

    it('some', () => {
      const structure = getPropertyStructure(sourceFile, 'some');
      expect(structure?.type).toEqual('Identity<UserWhereInput>');
    });

    it('none', () => {
      const structure = getPropertyStructure(sourceFile, 'none');
      expect(structure?.type).toEqual('Identity<UserWhereInput>');
    });
  });
});

describe('two models with id only and relation', () => {
  beforeAll(async () => {
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
    beforeAll(() => {
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
    createSouceFile: {
      name: 'Role',
      text: `
                    export enum Role { USER = "USER" }
                    registerEnumType(Role, { name: 'Role' })
                `,
      type: 'enum',
    },
    schema: `enum Role {
                  USER
                }
                model User {
                  id    Int   @id
                  role  Role
                }`,
  }));

  sourceFile = project.getSourceFile(s =>
    s.getFilePath().includes('role.enum.ts'),
  )!;
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
      createSouceFile: {
        name: 'User',
        text: `@ObjectType() export class User {}`,
        type: 'model',
      },
      schema,
    }));
    sourceFile = project.getSourceFile(s =>
      s.getFilePath().endsWith('user.model.ts'),
    )!;
    sourceText = sourceFile.getText();
    expect(sourceText.match(/export class User/g)?.length).toEqual(1);
  });

  it('remove description', async () => {
    ({ project, sourceFiles } = await testGenerate({
      createSouceFile: {
        name: 'User',
        text: `@ObjectType({ description: 'user description' }) export class User {}`,
        type: 'model',
      },
      schema,
    }));
    setSourceFile('user.model.ts');
    const objectType = classFile.getDecorator('ObjectType')?.getText();
    expect(objectType).toEqual('@ObjectType()');
  });

  it('generated commented class if reexport found', async () => {
    ({ project, sourceFiles } = await testGenerate({
      createSouceFile: {
        name: 'User',
        text: `
                    export { User } from 'src/user/model'
                    export { User as UserModel } from 'src/user2/model'
                `,
        type: 'model',
      },
      schema,
    }));
    setSourceFile('user.model.ts');
    expect(sourceText).toContain(`export { User } from 'src/user/model'`);
    expect(sourceText).toContain(`// export class User`);
  });

  it('no generate another commented class', async () => {
    ({ project, sourceFiles } = await testGenerate({
      createSouceFile: {
        name: 'User',
        text: `
                export { User } from 'src/user/model'

                // @ObjectType()
                // export class User { }
                `,
        type: 'model',
      },
      schema,
    }));
    setSourceFile('user.model.ts');
    expect(sourceText.match(/export class User/g)).toHaveLength(1);
    expect(sourceText).toContain('// export class User');
  });
});

it('generator option outputFilePattern', async () => {
  ({ project, sourceFiles } = await testGenerate({
    options: [`outputFilePattern = "data/{type}/{name}.ts"`],
    schema: `model User {
                    id Int @id
                }`,
  }));
  const filePaths = sourceFiles.map(s => String(s.getFilePath()));
  expect(filePaths).toContainEqual(
    expect.stringContaining('/data/model/user.ts'),
  );
});

describe('several models', () => {
  beforeAll(async () => {
    ({ project, sourceFiles } = await testGenerate({
      schema: `
        model User {
          id Int @id
          name String?
          profile Profile?
          comments Comment[]
          profileId Int?
        }

        model Profile {
          id Int @id
          sex Boolean?
          user User? @relation(fields: [userId], references: [id])
          userId Int? @unique
        }

        model Comment {
          id Int @id
          user User? @relation(fields: [userId], references: [id])
          userId Int?
        }
  `,
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
  beforeAll(async () => {
    ({ project, sourceFiles } = await testGenerate({
      options: [
        `
        outputFilePattern = "{name}.{type}.ts"
        noAtomicOperations = true
      `,
      ],
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
    }));
  });

  it('files should not be', () => {
    const filePaths = sourceFiles.map(s => s.getFilePath().slice(1));
    for (const filePath of filePaths) {
      expect(filePath).not.toContain('field-update-operations');
    }
  });

  describe('user update input', () => {
    beforeAll(() => {
      setSourceFile('user-update.input.ts');
    });

    it('id property type should be regular string', () => {
      const s = testSourceFileLegacy({
        class: 'UserUpdateInput',
        project,
        property: 'id',
      });
      expect(s.property?.type).toEqual('string');
    });

    it('id field type should be string', () => {
      const s = testSourceFileLegacy({
        class: 'UserUpdateInput',
        project,
        property: 'id',
      });
      expect(s.fieldDecoratorType).toEqual('() => String');
    });

    it('age property type should be number', () => {
      const s = testSourceFileLegacy({
        class: 'UserUpdateInput',
        project,
        property: 'age',
      });
      expect(s.property?.type).toEqual('number');
    });

    it('age field type should be number', () => {
      const s = testSourceFileLegacy({
        class: 'UserUpdateInput',
        project,
        property: 'age',
      });
      expect(s.fieldDecoratorType).toEqual('() => Int');
    });

    it('rating should be regular number', () => {
      const s = testSourceFileLegacy({
        class: 'UserUpdateInput',
        project,
        property: 'rating',
      });
      expect(s.property?.type).toEqual('number');
    });

    it('rating field type should be float', () => {
      const s = testSourceFileLegacy({
        class: 'UserUpdateInput',
        project,
        property: 'rating',
      });
      expect(s.fieldDecoratorType).toEqual('() => Float');
    });

    it('scalar array', () => {
      const s = testSourceFileLegacy({
        class: 'UserUpdateInput',
        project,
        property: 'friends',
      });
      expect(s.fieldDecoratorType).toEqual('() => [String]');
    });
  });

  describe('date field files', () => {
    const dateFieldFiles = [
      'user-create.input.ts',
      'user-unchecked-update.input.ts',
    ];

    for (const file of dateFieldFiles) {
      it(`date field files [${file}]`, () => {
        const s = testSourceFileLegacy({ file, project, property: 'born' });

        expect(s.fieldDecoratorType).toEqual('() => Date');
        expect(s.property?.type).toEqual('Date | string');
      });
    }
  });
});

describe('noAtomicOperations with emitSingle and combineScalarFilters', () => {
  beforeAll(async () => {
    ({ project, sourceFiles } = await testGenerate({
      options: [
        `outputFilePattern = "{name}.{type}.ts"`,
        `noAtomicOperations = true`,
        `emitSingle = true`,
        `combineScalarFilters = true`,
      ],
      schema: `
            model User {
              id String @id
              age Int
            }
            `,
    }));
  });

  it('FieldUpdateOperationsInput should not exists', () => {
    const s = testSourceFileLegacy({
      file: 'index.ts',
      project,
    });

    const classDeclaration = s.sourceFile.getClass(
      'IntFieldUpdateOperationsInput',
    );
    expect(classDeclaration).toBeUndefined();
  });
});

describe('scalar arrays with noAtomicOperations', () => {
  let project: Project;
  beforeAll(async () => {
    ({ project } = await testGenerate({
      options: [
        `
        noAtomicOperations = true
      `,
      ],
      schema: `
        model User {
          id String @id
          ints Int[]
          articles Article[] @relation("ArticleAuthor")
        }
        model Article {
          id String @id
          author   User   @relation(name: "ArticleAuthor", fields: [authorId], references: [id])
          authorId String
        }
        `,
    }));
  });

  describe('ints should be array', () => {
    for (const className of ['UserCreateInput']) {
      it(className, () => {
        const s = testSourceFileLegacy({
          class: className,
          project,
          property: 'ints',
        });

        expect(s.fieldDecoratorType).toEqual('() => [Int]');
      });
    }
  });

  it('create many inputs should not be deleted', () => {
    const { propertyMap } = testSourceFile({
      class: 'UserCreateInput',
      project,
    });

    expect(propertyMap.articles.type).toBe(
      'Identity<ArticleCreateNestedManyWithoutAuthorInput>',
    );
  });
});

it('model with prisma keyword output', async () => {
  ({ project, sourceFiles } = await testGenerate({
    options: [`outputFilePattern = "{name}.{type}.ts"`],
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
  }));
});

describe('reexport option', () => {
  describe('reexport directories clean', () => {
    beforeAll(async () => {
      ({ project, sourceFiles } = await testGenerate({
        options: ['reExport = Directories'],
        schema: `
            model User {
                id Int @id
            }`,
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
    beforeAll(async () => {
      ({ project, sourceFiles } = await testGenerate({
        onConnect(emitter) {
          emitter.on('PostBegin', ({ output, project }: EventArguments) => {
            project.createSourceFile(
              `${output}/user/index.ts`,
              `export { User } from './user.model';`,
              { overwrite: true },
            );
          });
        },
        options: ['reExport = Directories'],
        schema: `
            model User {
                id Int @id
            }`,
      }));
    });

    it('user index should not contain duplicate identifer', () => {
      sourceFile = project.getSourceFile(s =>
        s.getFilePath().endsWith('/user/index.ts'),
      )!;
      const decls = sourceFile.getExportDeclarations().map(x => ({
        name: x.getNamedExports()[0].getName(),
        specifier: x.getModuleSpecifierValue(),
      }));
      expect(decls).not.toContainEqual(
        expect.objectContaining({ specifier: './index' }),
      );
    });
  });

  describe('reexport directories with output file pattern', () => {
    beforeAll(async () => {
      ({ project, sourceFiles } = await testGenerate({
        options: [
          'reExport = Directories',
          `outputFilePattern = "{model}/{plural.type}/{name}.{type}.ts"`,
        ],
        schema: `
                model User {
                    id Int @id
                }`,
      }));
    });

    it('user should export plural types', () => {
      sourceFile = project.getSourceFile(s =>
        s.getFilePath().endsWith('/user/index.ts'),
      )!;

      for (const exp of [
        `export * from './args/index';`,
        `export * from './enums/index';`,
        `export * from './inputs/index';`,
        `export * from './models/index';`,
        `export * from './outputs/index';`,
      ]) {
        expect(sourceFile.getText()).toContain(exp);
      }
    });
  });

  describe('reexport single', () => {
    beforeAll(async () => {
      ({ project, sourceFiles } = await testGenerate({
        options: ['reExport = Single'],
        schema: `
            model User {
                id Int @id
            }`,
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
    beforeAll(async () => {
      ({ project, sourceFiles } = await testGenerate({
        options: ['reExport = All'],
        schema: `
            model User {
                id Int @id
            }`,
      }));
    });

    it('root index', () => {
      const rootDirectory = project.getRootDirectories()[0].getParent();
      const sourceFile = rootDirectory?.getSourceFileOrThrow('index.ts')!;

      expect(sourceFile).toBeTruthy();
      expect(sourceFile.getText()).toMatch(
        /export {.*AffectedRows,.*} from '\.\/prisma\/index'/,
      );
      expect(sourceFile.getText()).toMatch(
        /export {.*UserWhereInput,.*} from '\.\/user\/index'/,
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

describe('import importExtension option reExport none', () => {
  beforeAll(async () => {
    ({ project, sourceFiles } = await testGenerate({
      options: ['reExport = None', 'importExtension = jsx'],
      schema: `
            model User {
                id Int @id
            }`,
    }));
  });

  it('import ts extension in aggregate output', () => {
    const { namedImports } = testSourceFileLegacy({
      file: 'aggregate-user.output.ts',
      project,
    });
    for (const importStruct of namedImports.filter(x =>
      x.specifier.startsWith('.'),
    )) {
      expect(
        importStruct.specifier.endsWith('.output.jsx'),
        `${importStruct.specifier} invalid extension`,
      ).toBeTruthy();
    }
  });
});

describe('import importExtension option reExport', () => {
  beforeAll(async () => {
    ({ project, sourceFiles } = await testGenerate({
      options: ['reExport = Directories', 'importExtension = js'],
      schema: `
            model User {
                id Int @id
            }`,
    }));
  });

  it('re-export index should have .js extension', () => {
    sourceFile = project.getSourceFile(s =>
      s.getFilePath().endsWith('/user/index.ts'),
    )!;
    expect(sourceFile).toBeTruthy();
    expect(sourceFile.getText()).toContain(
      `export { User } from './user.model.js'`,
    );
  });
});

describe('emit single and decorators', () => {
  beforeAll(async () => {
    ({ project, sourceFiles } = await testGenerate({
      options: [
        `emitSingle = true`,
        `outputFilePattern = "{name}.{type}.ts"`,
        `fields_Validator_from = "class-validator"`,
        `fields_Validator_input = true`,
      ],
      schema: `
                model User {
                  id    Int    @id
                  /// @Validator.MinLength(3)
                  name String
                  /// @PropertyType({ name: 'G.Email', from: 'graphql-type-email', input: true })
                  email String?
                }
                `,
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
    beforeAll(() => {
      property = sourceFile.getClass('UserCreateInput')?.getProperty('name')!;
    });

    it('decorator validator', () => {
      const d = property.getDecorator(d =>
        d.getFullText().includes('MinLength'),
      );
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
    beforeAll(async () => {
      ({ project, sourceFiles } = await testGenerate({
        options: [
          `emitSingle = true`,
          `outputFilePattern = "{name}.{type}.ts"`,
        ],
        schema,
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

    it('type started with Prisma should not be wrapped to instanceof', async () => {
      const types = sourceFile
        .getClasses()
        .flatMap(c => c.getProperties().map(p => ({ c, p })))
        .map(({ c, p }) => ({
          c,
          p,
          propertyType: p.getStructure().type,
        }))
        .map(({ propertyType }) => String(propertyType))
        .filter(
          propertyType =>
            propertyType.includes('Prisma.') &&
            propertyType.startsWith('InstanceType<'),
        );

      expect(types).toHaveLength(0);
    });
  });

  describe('emit single second gen', () => {
    beforeAll(async () => {
      ({ project, sourceFiles } = await testGenerate({
        onConnect(emitter) {
          emitter.on('PostBegin', ({ output, project }: EventArguments) => {
            project.createSourceFile(
              `${output}/index.ts`,
              `@ObjectType() export class User { }`,
              { overwrite: true },
            );
          });
        },
        options: [
          `emitSingle = true`,
          `outputFilePattern = "{name}.{type}.ts"`,
        ],
        schema,
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
      options: [
        `outputFilePattern = "{name}.{type}.ts"`,
        `useInputType_PostWhereInput_ALL = "WhereInput"`,
      ],
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
    }));

    const { propertyMap } = testSourceFile({
      file: 'post-where.input.ts',
      project,
    });
    expect(getFieldDecoratorType(propertyMap.user)).toEqual(
      '() => UserWhereInput',
    );
    expect(propertyMap.user.type).toEqual('Identity<UserWhereInput>');
  });

  it('select input type usercreateargs', async () => {
    ({ project, sourceFiles } = await testGenerate({
      options: [
        `outputFilePattern = "{name}.{type}.ts"`,
        `useInputType_CreateOne_ALL = "UncheckedCreate"`,
      ],
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
    }));

    const { propertyMap } = testSourceFile({
      file: 'create-one-user.args.ts',
      project,
    });

    expect(propertyMap.data.type).toEqual('Identity<UserUncheckedCreateInput>');
    expect(getFieldDecoratorType(propertyMap.data)).toEqual(
      '() => UserUncheckedCreateInput',
    );
  });

  describe('select input type articlewhereinput array config', () => {
    beforeAll(async () => {
      ({ project, sourceFiles } = await testGenerate({
        options: [
          `outputFilePattern = "{name}.{type}.ts"`,
          `useInputType_WhereInput_ALL = "WhereInput"`,
          `useInputType_CreateOne_ALL = "UncheckedCreate"`,
        ],
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
      }));
    });

    it('article-where.input', () => {
      const { importDeclarations, propertyMap } = testSourceFile({
        file: 'article-where.input.ts',
        project,
      });
      expect(propertyMap.author.type).toEqual('Identity<UserWhereInput>');
      expect(getFieldDecoratorType(propertyMap.author)).toEqual(
        '() => UserWhereInput',
      );
      expect(importDeclarations).toContainEqual(
        expect.objectContaining({
          moduleSpecifier: './user-where.input',
        }),
      );
    });

    it('select input type articlewhereinput array config', () => {
      const { propertyMap } = testSourceFile({
        file: 'create-one-user.args.ts',
        project,
      });

      expect(propertyMap.data.type).toEqual(
        'Identity<UserUncheckedCreateInput>',
      );

      expect(getFieldDecoratorType(propertyMap.data)).toEqual(
        '() => UserUncheckedCreateInput',
      );
    });
  });

  describe('select input type no atomic operations', () => {
    beforeAll(async () => {
      ({ project, sourceFiles } = await testGenerate({
        options: [
          `outputFilePattern = "{name}.{type}.ts"`,
          `useInputType_UpdateInput_ALL = "match:!*FieldUpdateOperationsInput"`,
          `useInputType_UpdateMany_ALL = "match:!*FieldUpdateOperationsInput"`,
          `useInputType_UpdateWithout_ALL = "match:!*FieldUpdateOperationsInput"`,
        ],
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
      options: [
        `outputFilePattern = "{name}.{type}.ts"`,
        `useInputType_CreateInput_friends = "String"`,
        `useInputType_CreateInput_ints = "Int"`,
      ],
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
    }));
    setSourceFile('user-create.input.ts');
    expect(t('friends')).toEqual('() => [String]');
    expect(p('friends')?.type).toEqual('Array<string>');

    expect(t('ints')).toEqual('() => [Int]');
    expect(p('ints')?.type).toEqual('Array<number>');
  });
});

describe('model autoincrement int', () => {
  beforeAll(async () => {
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
  beforeAll(async () => {
    ({ project, sourceFiles } = await testGenerate({
      options: [`outputFilePattern = "{name}.{type}.ts"`],
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
    }));
  });

  it('count output', () => {
    setSourceFile('dummy-count.output.ts');
    expect(t('comments')).toEqual('() => Int');
  });
});

describe('noTypeId config', () => {
  describe('disabled', () => {
    beforeAll(async () => {
      ({ project, sourceFiles } = await testGenerate({
        options: [`outputFilePattern = "{name}.{type}.ts"`],
        schema: `
                    model User {
                      id Int @id
                    }
                `,
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
    beforeAll(async () => {
      ({ project, sourceFiles } = await testGenerate({
        options: [`outputFilePattern = "{name}.{type}.ts"`, 'noTypeId = true'],
        schema: `
                    model User {
                      id Int @id
                    }
                `,
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
      options: [`outputFilePattern = "{name}.{type}.ts"`],
      schema: `
            /// @ObjectType({ isAbstract: true })
            model User {
                id Int @id
            }`,
    }));

    const s = testSourceFileLegacy({ class: 'User', project });
    const argument = s.classFile.getDecorator('ObjectType')?.getStructure()
      .arguments?.[0];
    const json = JSON5.parse(argument);

    expect(json).toEqual({ isAbstract: true });
  });

  it('should have abstract true and name robot', async () => {
    ({ project, sourceFiles } = await testGenerate({
      options: [`outputFilePattern = "{name}.{type}.ts"`],
      schema: `
            /// user really
            /// @ObjectType({ name: 'Robot', isAbstract: true })
            model User {
                id Int @id
            }`,
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
      options: [`outputFilePattern = "{name}.{type}.ts"`],
      schema: `
            /// user really
            /// @ObjectType('Human', { isAbstract: true })
            model User {
                id Int @id
            }`,
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

describe('field type', () => {
  describe('it overwrites field type based on match expression', () => {
    beforeAll(async () => {
      ({ project, sourceFiles } = await testGenerate({
        options: [`outputFilePattern = "{name}.{type}.ts"`],
        schema: `
                model User {
                  id Int @id
                  /// @FieldType({ name: 'GraphQLJSONObject', from: 'graphql-scalars', namedImport: true, match: 'User{Create,Update}Input' })
                  profile Json
                }
                `,
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
    options: [`outputFilePattern = "{name}.{type}.ts"`],
    schema: `
            model User {
                id Int @id
                /// @FieldType({ name: 'GraphQLJSONObject', from: 'graphql-scalars', namedImport: true, input: true, output: true })
                /// @PropertyType({ name: 'JsonObject', from: 'type-fest', namedImport: true, input: true, output: true })
                profile Json
            }
            `,
  }));
  setSourceFile('user-group-by.output.ts');
  expect(t('profile')).toEqual('() => GraphQLJSONObject');
});

describe('property type', () => {
  describe('it overwrites property type based on match expression', () => {
    beforeAll(async () => {
      ({ project, sourceFiles } = await testGenerate({
        options: [`outputFilePattern = "{name}.{type}.ts"`],
        schema: `
              model User {
                id Int @id
                /// @PropertyType({ name: 'JsonObject', from: 'type-fest', namedImport: true, match: 'User{Create,Update}Input' })
                profile Json
              }
              `,
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
    beforeAll(async () => {
      ({ project, sourceFiles } = await testGenerate({
        options: [
          `
                  fields_JsonObject_from         = "type-fest"
                  fields_JsonObject_namedImport  = true
                  fields_JsonObject_input        = true
                  fields_JsonObject_output       = false
                `,
        ],
        schema: `
              model User {
                id Int @id
                /// @PropertyType('JsonObject')
                profile Json
              }
              `,
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
    beforeAll(async () => {
      ({ project, sourceFiles } = await testGenerate({
        options: [
          `
                  fields_JsonObject_from         = "type-fest"
                  fields_JsonObject_namedImport  = true
                  fields_JsonObject_input        = false
                  fields_JsonObject_output       = true
                `,
        ],
        schema: `
              model User {
                id Int @id
                /// @PropertyType('JsonObject')
                profile Json
              }
              `,
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
  beforeAll(async () => {
    ({ project, sourceFiles } = await testGenerate({
      options: [`outputFilePattern = "{name}.{type}.ts"`],
      schema: `
            model User {
                id Int @id
                /// @HideField({ match: '*GroupBy' })
                /// @FieldType({ name: 'GraphQLJSONObject', from: 'graphql-scalars', namedImport: true, input: true, output: true })
                /// @PropertyType({ name: 'JsonObject', from: 'type-fest', namedImport: true, input: true, output: true })
                profile Json
            }
            `,
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
  beforeAll(async () => {
    ({ project, sourceFiles } = await testGenerate({
      options: [`outputFilePattern = "{name}.{type}.ts"`],
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

              @@unique([userId])
            }
            model Article {
              id String @id
              author User? @relation(name: "ArticleAuthor", fields: [authorId], references: [id])
              authorId String?
            }`,
    }));
  });

  it('user model profile', () => {
    const { propertyMap } = testSourceFile({
      file: 'user.model.ts',
      project,
    });

    expect(propertyMap.profile.type).toEqual('Identity<Profile> | null');
    expect(propertyMap.profile.hasQuestionToken).toEqual(true);
  });

  it('user model count', () => {
    const { propertyMap } = testSourceFile({
      file: 'user.model.ts',
      project,
    });
    expect(propertyMap._count.type).toEqual('Identity<UserCount>');
    expect(getFieldDecoratorOptions(propertyMap._count)).toEqual(
      '{nullable:false}',
    );
    expect(propertyMap._count.hasQuestionToken).toEqual(true);
  });

  it('user count output should undefineable ts type', () => {
    const s = testSourceFileLegacy({
      file: 'user-count.output.ts',
      project,
      property: 'articles',
    });
    expect(s.fieldDecoratorOptions).toEqual('{nullable:false}');
    expect(s.property?.hasQuestionToken).toBe(true);
  });

  it('article model author', () => {
    const { propertyMap } = testSourceFile({
      file: 'article.model.ts',
      project,
    });

    expect(propertyMap.author.type).toEqual('Identity<User> | null');
  });

  it('list articles should not have null', () => {
    setSourceFile('user.model.ts');
    expect(p('articles')?.type).toEqual('Array<Article>');
  });
});

describe('requireSingleFieldsInWhereUniqueInput', () => {
  it('requireSingleFieldsInWhereUniqueInput several fields', async () => {
    ({ project, sourceFiles } = await testGenerate({
      options: [
        `outputFilePattern = "{name}.{type}.ts"`,
        `requireSingleFieldsInWhereUniqueInput = true`,
      ],
      schema: `
                model User {
                  id String @id
                  email String @unique
            }
            `,
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

  it.skip('requireSingleFieldsInWhereUniqueInput single fields', async () => {
    /* generates, looks like it's not actual
export class UserWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;
}
     */
    ({ project } = await testGenerate({
      options: [
        `outputFilePattern = "{name}.{type}.ts"`,
        `requireSingleFieldsInWhereUniqueInput = true`,
      ],
      schema: `
                model User {
                    id String @id
                }
        `,
    }));

    const s = testSourceFileLegacy({
      file: 'user-where-unique.input.ts',
      project,
      property: 'id',
    });

    expect(s.property?.hasQuestionToken).toEqual(false);
    expect(s.property?.type).toEqual('string');

    expect(s.fieldDecoratorType).toEqual('() => String');
    expect(s.fieldDecoratorOptions).toEqual('{nullable:false}');
  });

  it.skip('requireSingleFieldsInWhereUniqueInput compound', async () => {
    ({ project } = await testGenerate({
      options: [
        `outputFilePattern = "{name}.{type}.ts"`,
        `requireSingleFieldsInWhereUniqueInput = true`,
      ],
      schema: `
                model User {
                  name String
                  email String

                  @@unique([name,email])
                }
            `,
    }));

    const s = testSourceFileLegacy({
      file: 'user-where-unique.input.ts',
      project,
      property: 'name_email',
    });

    expect(s.property?.hasQuestionToken).toEqual(false);
    expect(s.property?.type).toEqual('UserNameEmailCompoundUniqueInput');
    expect(s.fieldDecoratorType).toEqual(
      '() => UserNameEmailCompoundUniqueInput',
    );
    expect(s.fieldDecoratorOptions).toEqual('{nullable:false}');
  });
});

describe('configuration custom scalars', () => {
  describe('bigint', () => {
    beforeAll(async () => {
      ({ project, sourceFiles } = await testGenerate({
        options: [
          `outputFilePattern = "{name}.{type}.ts"`,
          `graphqlScalars_BigInt_name = "GraphQLBigInt"`,
          `graphqlScalars_BigInt_specifier = "graphql-scalars"`,
        ],
        schema: `
            model User {
              id String @id
              bigInt BigInt
            }`,
      }));
    });

    it('big-int-filter equals', () => {
      const s = testSourceFileLegacy({
        file: 'big-int-filter.input.ts',
        project,
        property: 'equals',
      });

      expect(s.fieldDecoratorType).toEqual('() => GraphQLBigInt');

      expect(s.namedImports).toContainEqual({
        name: 'GraphQLBigInt',
        specifier: 'graphql-scalars',
      });
    });

    it('big-int-filter in', () => {
      const s = testSourceFileLegacy({
        file: 'big-int-filter.input.ts',
        project,
        property: 'in',
      });

      expect(s.fieldDecoratorType).toEqual('() => [GraphQLBigInt]');
    });

    it('user model', () => {
      const s = testSourceFileLegacy({
        file: 'user.model.ts',
        project,
        property: 'bigInt',
      });

      expect(s.namedImports).toContainEqual({
        name: 'GraphQLBigInt',
        specifier: 'graphql-scalars',
      });
      expect(s.fieldDecoratorType).toEqual('() => GraphQLBigInt');
    });

    it('user-sum-aggregate', () => {
      const s = testSourceFileLegacy({
        file: 'user-sum-aggregate.output.ts',
        project,
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

describe('multiple description', () => {
  beforeAll(async () => {
    ({ project, sourceFiles } = await testGenerate({
      options: [`outputFilePattern = "{name}.{type}.ts"`],
      schema: `
            /// Model description
            /// Model 2
            model User {
                id Int @id
                /// Name description
                /// Second line
                name String
            }`,
    }));
  });

  it('field', () => {
    const s = testSourceFileLegacy({ class: 'User', project });
    expect(s.sourceText).toContain(`
    /**
     * Name description
     * Second line
     */
    `);
  });

  it('model', () => {
    const s = testSourceFileLegacy({ class: 'User', project });
    expect(s.sourceText).toContain(`/**
 * Model description
 * Model 2
 */`);
  });
});

describe('deprecation reason', () => {
  beforeAll(async () => {
    ({ project, sourceFiles } = await testGenerate({
      options: [`outputFilePattern = "{name}.{type}.ts"`],
      schema: `
            model User {
                id Int @id
                /// Name description
                /// @deprecated Use name2 instead
                name String
            }`,
    }));
  });

  it('deprecation reason default', async () => {
    const s = testSourceFileLegacy({
      class: 'User',
      project,
      property: 'name',
    });

    expect(JSON5.parse(s.fieldDecoratorOptions)).toEqual(
      expect.objectContaining({
        deprecationReason: 'Use name2 instead',
        description: 'Name description',
      }),
    );
  });

  for (const className of [
    'UserWhereInput',
    'UserCountAggregateInput',
    'UserCountAggregate',
    'UserMaxAggregateInput',
  ]) {
    it(className, () => {
      const s = testSourceFileLegacy({
        class: 'UserCountAggregateInput',
        project,
        property: 'name',
      });
      expect(JSON5.parse(s.fieldDecoratorOptions)).toEqual(
        expect.objectContaining({ deprecationReason: 'Use name2 instead' }),
      );
    });
  }

  it('deprecated decorator in comment', () => {
    const s = testSourceFileLegacy({
      class: 'User',
      project,
      property: 'name',
    });
    const jsdoc = s.classFile.getProperty('name')?.getJsDocs().at(0)?.getText();
    expect(jsdoc).toContain('* Name description');
    expect(jsdoc).toContain('* @deprecated Use name2 instead');

    expect(JSON5.parse(s.fieldDecoratorOptions)).toEqual(
      expect.objectContaining({
        deprecationReason: 'Use name2 instead',
        description: 'Name description',
      }),
    );
  });
});

describe('unsafeCompatibleWhereUniqueInput', () => {
  it('user id', async () => {
    ({ project, sourceFiles } = await testGenerate({
      options: [
        `outputFilePattern = "{name}.{type}.ts"`,
        `unsafeCompatibleWhereUniqueInput = true`,
      ],
      schema: `
      model User {
        id String @id
      }`,
    }));
    const s = testSourceFileLegacy({
      class: 'UserWhereUniqueInput',
      project,
      property: 'id',
    });
    expect(s.property?.hasExclamationToken).toBe(true);
  });

  it('user id email', async () => {
    ({ project, sourceFiles } = await testGenerate({
      options: [
        `outputFilePattern = "{name}.{type}.ts"`,
        `unsafeCompatibleWhereUniqueInput = true`,
      ],
      schema: `
      model User {
        id        String    @id @default(cuid())
        name      String
        email     String    @unique @db.VarChar(255)
        password  String

        @@unique([email, name])
      }`,
    }));

    const id = testSourceFileLegacy({
      class: 'UserWhereUniqueInput',
      project,
      property: 'id',
    });
    expect(id.property?.hasExclamationToken).toBe(true);

    const email = testSourceFileLegacy({
      class: 'UserWhereUniqueInput',
      project,
      property: 'email',
    });
    expect(email.property?.hasExclamationToken).toBe(true);

    const emailName = testSourceFileLegacy({
      class: 'UserWhereUniqueInput',
      project,
      property: 'email_name',
    });
    expect(emailName.property?.hasExclamationToken).toBe(true);
  });
});
