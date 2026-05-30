import { Project, SourceFile } from 'ts-morph';
import { beforeAll, describe, expect, it } from 'vitest';

import { testSourceFile } from './helpers.ts';
import { testGenerate } from './test-generate.ts';

let project: Project;

describe('compound index', () => {
  beforeAll(async () => {
    ({ project } = await testGenerate({
      options: [
        `outputFilePattern = "{name}.{type}.ts"`,
        `fields_Validator_from = "class-validator"`,
        `fields_Validator_input = true`,
      ],
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
    }));
  });

  it('user unique input compound', () => {
    const s = testSourceFile({
      class: 'UserEmailNameCompoundUniqueInput',
      project,
    });

    const minLength = s.propertyMap.name.decorators?.find(
      d => d.name === 'MinLength',
    );

    expect(minLength).toBeTruthy();
    expect(minLength).toEqual({
      arguments: ['3'],
      kind: 7,
      name: 'MinLength',
      typeArguments: [],
    });
  });

  it('compound uniq where must be wrapped to prisma atleast', () => {
    const s = testSourceFile({
      class: 'FindManyUserArgs',
      project,
    });

    expect(s.propertyMap.cursor.type).toEqual(
      `Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email_name'>`,
    );
  });
});

describe('compound primary key', () => {
  beforeAll(async () => {
    ({ project } = await testGenerate({
      options: [`outputFilePattern = "{name}.{type}.ts"`],
      schema: `
                model User {
                  firstname String
                  surname String
                  email String

                  @@id([firstname, surname])
                }
                `,
    }));
  });

  it('compound primary key atleast keys', () => {
    const s = testSourceFile({
      class: 'FindFirstUserArgs',
      project,
    });

    expect(s.propertyMap.cursor.type).toEqual(
      "Prisma.AtLeast<UserWhereUniqueInput, 'firstname_surname'>",
    );
  });
});
