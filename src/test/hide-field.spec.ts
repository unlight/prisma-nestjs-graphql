import expect from 'expect';
import { Project, SourceFile } from 'ts-morph';

import { testSourceFile } from './helpers';
import { testGenerate } from './test-generate';

let project: Project;
let imports: { name: string; specifier: string }[];
let s: ReturnType<typeof testSourceFile>;

describe('scalar field', () => {
  before(async () => {
    ({ project } = await testGenerate({
      options: [],
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
    }));
  });

  describe('model', () => {
    it('TypeGraphQL omit should hide password1', () => {
      const s = testSourceFile({
        file: 'user.model.ts',
        project,
        property: 'password1',
      });
      expect(s.propertyDecorators).toContainEqual(
        expect.objectContaining({ arguments: [], name: 'HideField' }),
      );
    });

    it('HideField should hide field', () => {
      const s = testSourceFile({
        file: 'user.model.ts',
        project,
        property: 'password2',
      });
      expect(s.propertyDecorators).toContainEqual(
        expect.objectContaining({ arguments: [], name: 'HideField' }),
      );
    });
  });

  describe('other outputs', () => {
    it('user-max-aggregate', () => {
      const s = testSourceFile({
        file: 'user-max-aggregate.output.ts',
        project,
      });

      expect(
        s.classFile.getProperty('password1')?.getStructure().decorators,
      ).toContainEqual(expect.objectContaining({ arguments: [], name: 'HideField' }));

      expect(
        s.classFile.getProperty('password2')?.getStructure().decorators,
      ).toContainEqual(expect.objectContaining({ arguments: [], name: 'HideField' }));
    });
  });
});

describe('hide on non scalar', () => {
  before(async () => {
    ({ project } = await testGenerate({
      options: [],
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
    }));
  });

  describe('model', () => {
    it('type should be imported', () => {
      const s = testSourceFile({
        file: 'user.model.ts',
        project,
      });

      expect(s.namedImports).toContainEqual(
        expect.objectContaining({ name: 'Secret' }),
      );
    });
  });
});

describe('hide field using match', () => {
  before(async () => {
    ({ project } = await testGenerate({
      options: [`outputFilePattern = "{name}.{type}.ts"`],
      schema: `
                model User {
                    id String @id
                    /// @HideField({ match: '@(User|Comment)Create*Input' })
                    createdAt DateTime @default(now())
                    /// @HideField( { match: '*Update*Input' } )
                    updatedAt DateTime @updatedAt
                }
                `,
    }));
  });

  it('in model nothing should be hidden', () => {
    const s = testSourceFile({
      file: 'user.model.ts',
      project,
      property: 'createdAt',
    });

    expect(s.propertyDecorators).toHaveLength(1);
    expect(s.fieldDecorator).toEqual(expect.objectContaining({ name: 'Field' }));
  });

  it('user-create-many.input', () => {
    const s = testSourceFile({
      file: 'user-create-many.input.ts',
      project,
      property: 'createdAt',
    });

    expect(s.propertyDecorators).toHaveLength(1);
    expect(s.propertyDecorators).toContainEqual(
      expect.objectContaining({ name: 'HideField' }),
    );
  });

  it('user-create.input', () => {
    const s = testSourceFile({
      file: 'user-create.input.ts',
      project,
      property: 'createdAt',
    });

    expect(s.propertyDecorators).toHaveLength(1);
    expect(s.propertyDecorators).toContainEqual(
      expect.objectContaining({ name: 'HideField' }),
    );
  });

  it('user-update-many-mutation.input', () => {
    const s = testSourceFile({
      file: 'user-update-many-mutation.input.ts',
      project,
      property: 'updatedAt',
    });

    expect(s.propertyDecorators).toHaveLength(1);
    expect(s.propertyDecorators).toContainEqual(
      expect.objectContaining({ name: 'HideField' }),
    );
  });

  it('user-update.input', () => {
    const s = testSourceFile({
      file: 'user-update.input.ts',
      project,
      property: 'updatedAt',
    });

    expect(s.propertyDecorators).toHaveLength(1);
    expect(s.propertyDecorators).toContainEqual(
      expect.objectContaining({ name: 'HideField' }),
    );
  });
});

it('hidden relations result in un-imported types', async () => {
  ({ project } = await testGenerate({
    options: [`outputFilePattern = "{name}.{type}.ts"`],
    schema: `
            model User {
              id           String @id @default(uuid())
              userApiKey UserApiKey[]
            }

            model UserApiKey {
              id        String   @id @default(uuid())
              userId    String
              /// @HideField({ input: true })
              user      User     @relation(fields: [userId], references: [id])
            }
                `,
  }));

  const s = testSourceFile({
    file: 'user-api-key-where.input.ts',
    project,
  });

  expect(s.classFile.getProperty('user')?.getStructure().type).toEqual(
    'UserScalarRelationFilter',
  );

  expect(s.namedImports).toContainEqual({
    name: 'UserScalarRelationFilter',
    specifier: './user-scalar-relation-filter.input',
  });
});

describe('enums are not imported in classes when decorated', () => {
  before(async () => {
    ({ project } = await testGenerate({
      options: [`outputFilePattern = "{name}.{type}.ts"`],
      schema: `
        model User {
          id Int @id
          /// @HideField({ input: true, output: true })
          role Role
        }
        enum Role {
          USER
          ADMIN
        }
        `,
    }));
  });

  for (const file of [
    'user-group-by.output.ts',
    'user-max-aggregate.output.ts',
    'user-min-aggregate.output.ts',
    'user-create-many.input.ts',
    'user.model.ts',
  ]) {
    it(`check files ${file}`, () => {
      const s = testSourceFile({
        file,
        project,
        property: 'role',
      });

      expect(s.namedImports).toContainEqual({
        name: 'Role',
        specifier: './role.enum',
      });

      expect(s.propertyDecorators).toContainEqual(
        expect.objectContaining({ name: 'HideField' }),
      );
    });
  }
});

describe.skip('hide enum', () => {
  before(async () => {
    ({ project } = await testGenerate({
      options: [`outputFilePattern = "{name}.{type}.ts"`],
      schema: `
        model User {
          id Int @id
          /// @HideField({ input: true, output: true, model: true })
          role Role
        }
        enum Role {
          USER
          ADMIN
        }
        `,
    }));
  });

  it('should not call registerEnumType', () => {
    const s = testSourceFile({
      file: 'role.enum.ts',
      project,
    });

    expect(s.namedImports).not.toContainEqual({
      name: 'registerEnumType',
      specifier: '@nestjs/graphql',
    });
  });

  it('check usage in files', () => {
    const files = [
      // 'user-group-by.output.ts',
      // 'user-max-aggregate.output.ts',
      // 'user-min-aggregate.output.ts',
      // 'user-create.input.ts',
      // 'user-update-many-mutation.input.ts',
      // 'user-create-many.input.ts',
      // 'user.model.ts',
      // 'user-where.input.ts',
      'enum-role-filter.input.ts',
    ];

    for (const file of files) {
      const s = testSourceFile({
        file,
        project,
        property: 'role',
      });

      console.log('s', s);

      expect(s.namedImports).toContainEqual({
        name: 'Role',
        specifier: './role.enum',
      });
      expect(s.propertyDecorators).toContainEqual(
        expect.objectContaining({ name: 'HideField' }),
      );
    }
  });
});

describe('hide with self reference', () => {
  before(async () => {
    ({ project } = await testGenerate({
      schema: `model User {
                  id     Int    @id
                  parentId Int
                  /// @HideField({ output: false, input: true })
                  parent User   @relation("UserToUser", fields: [parentId], references: [id])
                  /// @HideField({ output: false, input: true })
                  user   User[] @relation("UserToUser")
                }`,
    }));
  });

  it('smoke', () => {
    const files = project.getSourceFiles().map(s => s.getBaseName());
    expect(files).toBeTruthy();
  });

  it.skip('order by with relation self import', () => {
    const s = testSourceFile({
      class: 'UserOrderByWithRelationAndSearchRelevanceInput',
      project,
    });

    expect(s.namedImports).not.toContainEqual(
      expect.objectContaining({
        name: 'UserOrderByWithRelationAndSearchRelevanceInput',
      }),
    );
  });
});

describe('hide _count', () => {
  before(async () => {
    ({ project } = await testGenerate({
      options: `
  outputFilePattern = "{name}.{type}.ts"
  decorate_1_type = "ArticleCount"
  decorate_1_field = "_count"
  decorate_1_name = "HideField"
  decorate_1_from = "@nestjs/graphql"
  decorate_1_arguments = "[]"
        `,
      schema: `
        model Article {
          id             String    @id
          comments       Comment[]
        }
        model Comment {
          id        String   @id
          article   Article? @relation(fields: [articleId], references: [id])
          articleId String?
        }
        `,
    }));
  });

  it('should hide _count in model', () => {
    const s = testSourceFile({
      class: 'Article',
      project,
      property: '_count',
    });

    expect(s.propertyDecorators).toContainEqual(
      expect.objectContaining({ name: 'HideField' }),
    );
  });
});
