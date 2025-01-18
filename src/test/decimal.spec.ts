import { expect } from 'expect';
import { Project } from 'ts-morph';

import { testSourceFile } from './helpers';
import { testGenerate } from './test-generate';

describe('decimal type', () => {
  let project: Project;
  before(async () => {
    ({ project } = await testGenerate({
      options: [`outputFilePattern = "{name}.{type}.ts"`],
      schema: `
            model User {
                id String @id
                money Decimal
                maybe Decimal?
            }
            `,
    }));
  });

  it('user model money', () => {
    const s = testSourceFile({
      file: 'user.model.ts',
      project,
      property: 'money',
    });
    expect(s.property?.type).toEqual('Decimal');
    expect(s.namedImports).toContainEqual({
      name: 'Decimal',
      specifier: '@prisma/client/runtime/library',
    });
  });

  it('user model nullish', () => {
    const s = testSourceFile({
      file: 'user.model.ts',
      project,
      property: 'maybe',
    });
    expect(s.property?.type).toEqual('Decimal | null');
    expect(s.namedImports).toContainEqual({
      name: 'Decimal',
      specifier: '@prisma/client/runtime/library',
    });
  });

  it('user input money', () => {
    const s = testSourceFile({
      file: 'user-create.input.ts',
      project,
      property: 'money',
    });
    expect(s.property?.type).toEqual('Decimal');
    expect(s.namedImports).toContainEqual({
      name: 'Decimal',
      specifier: '@prisma/client/runtime/library',
    });
  });

  it('user input maybe', () => {
    const s = testSourceFile({
      file: 'user-create.input.ts',
      project,
      property: 'maybe',
    });
    expect(s.property?.type).toEqual('Decimal');
    expect(s.property?.hasQuestionToken).toEqual(true);
    expect(s.namedImports).toContainEqual({
      name: 'Decimal',
      specifier: '@prisma/client/runtime/library',
    });
  });

  it('user aggregate output money', () => {
    const s = testSourceFile({
      file: 'user-sum-aggregate.output.ts',
      project,
      property: 'money',
    });
    expect(s.property?.type).toEqual('Decimal');
    expect(s.namedImports).toContainEqual({
      name: 'Decimal',
      specifier: '@prisma/client/runtime/library',
    });
  });

  it('user aggregate output maybe', () => {
    const s = testSourceFile({
      file: 'user-sum-aggregate.output.ts',
      project,
      property: 'maybe',
    });
    expect(s.property?.type).toEqual('Decimal');
    expect(s.property?.hasQuestionToken).toEqual(true);
    expect(s.namedImports).toContainEqual({
      name: 'Decimal',
      specifier: '@prisma/client/runtime/library',
    });
  });
});

describe('decimal graphql', () => {
  let project: Project;
  before(async () => {
    ({ project } = await testGenerate({
      schema: `
        model User {
          id String @id
          money Decimal
          transfers Decimal[]
        }
        `,
    }));
  });

  it('should contain necessary imports', () => {
    const s = testSourceFile({
      class: 'UserCreateInput',
      project,
    });

    expect(s.namedImports).toContainEqual({
      name: 'Type',
      specifier: 'class-transformer',
    });
    expect(s.namedImports).toContainEqual({
      name: 'Transform',
      specifier: 'class-transformer',
    });
    expect(s.namedImports).toContainEqual({
      name: 'transformToDecimal',
      specifier: 'prisma-graphql-type-decimal',
    });
  });

  it('create input value', () => {
    const s = testSourceFile({
      class: 'UserCreateInput',
      project,
      property: 'money',
    });

    expect(s.propertyDecorators).toContainEqual(
      expect.objectContaining({
        arguments: ['() => Object'],
        name: 'Type',
      }),
    );

    expect(s.propertyDecorators).toContainEqual(
      expect.objectContaining({
        arguments: ['transformToDecimal'],
        name: 'Transform',
      }),
    );
  });

  it('array input should contain decorator type with same type', () => {
    const s = testSourceFile({
      class: 'UserCreateInput',
      project,
      property: 'transfers',
    });

    expect(s.propertyDecorators).toContainEqual(
      expect.objectContaining({
        arguments: ['() => UserCreatetransfersInput'],
        name: 'Type',
      }),
    );
  });

  it('should not contain type decorator for aggregate inputs', () => {
    const s = testSourceFile({
      class: 'UserCountAggregateInput',
      project,
      property: 'transfers',
    });

    expect(s.propertyDecorators).not.toContainEqual(
      expect.objectContaining({
        name: 'Type',
      }),
    );
  });

  it('should not contain type decorator for order by', () => {
    const s = testSourceFile({
      class: 'UserAvgOrderByAggregateInput',
      project,
      property: 'transfers',
    });

    expect(s.propertyDecorators).not.toContainEqual(
      expect.objectContaining({
        name: 'Type',
      }),
    );
  });

  it('should type contain in findmanyuserargs', () => {
    const s = testSourceFile({
      class: 'FindManyUserArgs',
      project,
      property: 'where',
    });

    expect(s.propertyDecorators).toContainEqual(
      expect.objectContaining({
        arguments: ['() => UserWhereInput'],
        name: 'Type',
      }),
    );

    expect(s.namedImports).toContainEqual({
      name: 'Type',
      specifier: 'class-transformer',
    });
  });

  it('should not contain type decorator for order by', () => {
    const s = testSourceFile({
      class: 'UserWhereInput',
      project,
      property: 'transfers',
    });

    expect(s.propertyDecorators).toContainEqual(
      expect.objectContaining({
        arguments: ['() => DecimalNullableListFilter'],
        name: 'Type',
      }),
    );

    expect(s.namedImports).toContainEqual({
      name: 'Type',
      specifier: 'class-transformer',
    });
  });

  it('should not be added for id string filter', () => {
    const s = testSourceFile({
      class: 'UserWhereInput',
      project,
      property: 'id',
    });

    expect(s.propertyDecorators).not.toContainEqual(
      expect.objectContaining({ name: 'Type' }),
    );
  });

  it('decimal list filter', () => {
    const s = testSourceFile({
      class: 'DecimalNullableListFilter',
      project,
    });

    expect(s.namedImports).toContainEqual({
      name: 'Type',
      specifier: 'class-transformer',
    });

    const properties = s.classFile.getProperties();

    for (const property of properties.filter(p =>
      ['equals', 'has'].includes(p.getName()),
    )) {
      const typeDecorator = property.getDecorator('Type')?.getStructure();
      expect(typeDecorator?.arguments).toEqual(['() => Object']);
    }
  });

  it('special property data should be decorated', () => {
    const s = testSourceFile({
      class: 'CreateOneUserArgs',
      project,
      property: 'data',
    });

    expect(s.propertyDecorators).toContainEqual(
      expect.objectContaining({ name: 'Type' }),
    );
  });

  it('special property where should be decorated', () => {
    const s = testSourceFile({
      file: 'delete-many-user.args.ts',
      project,
      property: 'where',
    });

    expect(s.propertyDecorators).toContainEqual(
      expect.objectContaining({ name: 'Type' }),
    );
  });
});

describe('decimal graphql noAtomicOperations', () => {
  let project: Project;
  before(async () => {
    ({ project } = await testGenerate({
      options: `
        noAtomicOperations = true
      `,
      schema: `
        model User {
          id String @id
          transfers Decimal[]
        }
        `,
    }));
  });

  it('should be array', () => {
    const s = testSourceFile({
      class: 'UserCreateInput',
      project,
      property: 'transfers',
    });

    expect(s.propertyDecorators).toContainEqual(
      expect.objectContaining({
        arguments: ['() => Object'],
        name: 'Type',
      }),
    );

    expect(s.propertyDecorators).toContainEqual(
      expect.objectContaining({
        arguments: ['transformToDecimal'],
        name: 'Transform',
      }),
    );

    expect(s.property?.type).toEqual('Array<Decimal>');
  });
});

describe('nested object decorate', () => {
  let project: Project;
  before(async () => {
    ({ project } = await testGenerate({
      options: `
        noAtomicOperations = true
      `,
      schema: `
        model Job {
          id          Int      @id
          salaryId    Int?
          salary      Salary? @relation(fields: [salaryId], references: [id], onDelete: Cascade)
        }
        model Salary {
          id         Int      @id
          from       Decimal
          to         Decimal
          job        Job[]
        }
        model Employee {
          id              String         @id @default(cuid())
          salaryHistoryId String?        @unique
          salaryHistory   SalaryHistory? @relation(name: "employeeSalaryHistory", fields: [salaryHistoryId], references: [id], onDelete: SetNull)
        }
        model SalaryHistory {
          id         String   @id @default(cuid())
          currencyId String   @db.Char(3)
          createdAt  DateTime @default(now())
          updatedAt  DateTime @updatedAt
          history               SalaryHistoryRecord[]
          employeeSalaryHistory Employee?             @relation(name: "employeeSalaryHistory")
        }
        model SalaryHistoryRecord {
          id              String  @id @default(cuid())
          salaryHistoryId String
          year            Int     @db.SmallInt
          from            Decimal @db.Decimal(15, 2)
          to              Decimal @db.Decimal(15, 2)
          salaryHistory SalaryHistory @relation(fields: [salaryHistoryId], references: [id], onDelete: Cascade)
        }
        `,
    }));
  });

  it('deep field should be decorated up to root', () => {
    const s = testSourceFile({
      class: 'JobCreateInput',
      project,
      property: 'salary',
    });

    expect(s.propertyDecorators).toContainEqual(
      expect.objectContaining({ name: 'Type' }),
    );
  });

  describe('should be decorated by type', () => {
    [
      'create',
      'connectOrCreate',
      'upsert',
      'createMany',
      'set',
      'disconnect',
      'delete',
      'connect',
      'update',
      'updateMany',
      'deleteMany',
      // eslint-disable-next-line unicorn/no-array-for-each
    ].forEach(property => {
      it(property, () => {
        const s = testSourceFile({
          class: 'JobUncheckedUpdateManyWithoutSalaryNestedInput',
          project,
          property,
        });

        expect(s.propertyDecorators).toContainEqual(
          expect.objectContaining({ name: 'Type' }),
        );
      });
    });
  });

  it('property data should be decorated', () => {
    const s = testSourceFile({
      class: 'EmployeeUpdateInput',
      project,
      property: 'salaryHistory',
    });

    expect(s.propertyDecorators).toContainEqual(
      expect.objectContaining({ name: 'Type' }),
    );
  });

  it('property data should be decorated', () => {
    const s = testSourceFile({
      class: 'JobCreateManySalaryInputEnvelope',
      project,
      property: 'data',
    });

    expect(s.propertyDecorators).toContainEqual(
      expect.objectContaining({ name: 'Type' }),
    );
  });
});
