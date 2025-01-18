import expect from 'expect';
import { Project, SourceFile } from 'ts-morph';

import { testSourceFile } from './helpers';
import { testGenerate } from './test-generate';

let project: Project;
let sourceFiles: SourceFile[];

describe('compound index', () => {
  before(async () => {
    ({ project, sourceFiles } = await testGenerate({
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

    const minLength = s.classFile.getProperty('name')?.getDecorator('MinLength');
    expect(minLength?.getText()).toEqual('@Validator.MinLength(3)');
  });

  it('compound uniq where must be wrapped to prisma atleast', () => {
    const s = testSourceFile({
      class: 'FindManyUserArgs',
      project,
      property: 'cursor',
    });

    expect(s.property?.type).toEqual(
      `Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email_name'>`,
    );
  });
});

describe('compound primary key', () => {
  before(async () => {
    ({ project, sourceFiles } = await testGenerate({
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
      property: 'cursor',
    });

    expect(s.property?.type).toEqual(
      "Prisma.AtLeast<UserWhereUniqueInput, 'firstname_surname'>",
    );
  });
});
