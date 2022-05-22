import { expect } from 'expect';
import { Project } from 'ts-morph';

import { testSourceFile } from './helpers';
import { testGenerate } from './test-generate';

describe('decimal type', () => {
  let project: Project;
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
      project,
      class: 'UserCreateInput',
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
      project,
      class: 'UserCreateInput',
      property: 'money',
    });

    expect(s.propertyDecorators).toContainEqual(
      expect.objectContaining({
        name: 'Type',
        arguments: ['() => Object'],
      }),
    );

    expect(s.propertyDecorators).toContainEqual(
      expect.objectContaining({
        name: 'Transform',
        arguments: ['transformToDecimal'],
      }),
    );
  });

  it('array input should contain decorator type with same type', () => {
    const s = testSourceFile({
      project,
      class: 'UserCreateInput',
      property: 'transfers',
    });

    expect(s.propertyDecorators).toContainEqual(
      expect.objectContaining({
        name: 'Type',
        arguments: ['() => UserCreatetransfersInput'],
      }),
    );
  });

  it('should not contain type decorator for aggregate inputs', () => {
    const s = testSourceFile({
      project,
      class: 'UserCountAggregateInput',
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
      project,
      class: 'UserAvgOrderByAggregateInput',
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
      project,
      class: 'FindManyUserArgs',
      property: 'where',
    });

    expect(s.propertyDecorators).toContainEqual(
      expect.objectContaining({
        name: 'Type',
        arguments: ['() => UserWhereInput'],
      }),
    );

    expect(s.namedImports).toContainEqual({
      name: 'Type',
      specifier: 'class-transformer',
    });
  });

  it('should not contain type decorator for order by', () => {
    const s = testSourceFile({
      project,
      class: 'UserWhereInput',
      property: 'transfers',
    });

    expect(s.propertyDecorators).toContainEqual(
      expect.objectContaining({
        name: 'Type',
        arguments: ['() => DecimalNullableListFilter'],
      }),
    );

    expect(s.namedImports).toContainEqual({
      name: 'Type',
      specifier: 'class-transformer',
    });
  });

  it('should not be added for id string filter', () => {
    const s = testSourceFile({
      project,
      class: 'UserWhereInput',
      property: 'id',
    });

    expect(s.propertyDecorators).not.toContainEqual(
      expect.objectContaining({ name: 'Type' }),
    );
  });

  it('decimal list filter', () => {
    const s = testSourceFile({
      project,
      class: 'DecimalNullableListFilter',
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
});

describe('decimal graphql noAtomicOperations', () => {
  let project: Project;
  before(async () => {
    ({ project } = await testGenerate({
      schema: `
        model User {
          id String @id
          transfers Decimal[]
        }
        `,
      options: [
        `
        noAtomicOperations = true
      `,
      ],
    }));
  });

  it('should be array', () => {
    const s = testSourceFile({
      project,
      class: 'UserCreateInput',
      property: 'transfers',
    });

    expect(s.propertyDecorators).toContainEqual(
      expect.objectContaining({
        name: 'Type',
        arguments: ['() => Object'],
      }),
    );

    expect(s.propertyDecorators).toContainEqual(
      expect.objectContaining({
        name: 'Transform',
        arguments: ['transformToDecimal'],
      }),
    );

    expect(s.property?.type).toEqual('Array<Decimal>');
  });
});
