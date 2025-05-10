import expect from 'expect';
import { Project, SourceFile } from 'ts-morph';

import { testSourceFile } from './helpers';
import { testGenerate } from './test-generate';

let project: Project;

describe('custom decorators namespace both input and output', () => {
  before(async () => {
    ({ project } = await testGenerate({
      options: [
        `outputFilePattern = "{name}.{type}.ts"`,
        // custom decorators (validate)
        // import * as Validator from 'class-validator'
        // @Validator.IsEmail()
        // email: string
        `fields_Validator_from = "class-validator"`,
        `fields_Validator_input = true`,
      ],
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
    }));
  });

  describe('aggregates should not have validators', () => {
    it('user-count-aggregate.input', () => {
      const s = testSourceFile({
        file: 'user-count-aggregate.input.ts',
        project,
        property: 'email',
      });
      expect(s.propertyDecorators).toHaveLength(1);
      expect(s.propertyDecorators).not.toContainEqual(
        expect.objectContaining({
          name: 'IsEmail',
        }),
      );
      expect(s.fieldDecoratorType).toEqual('() => Boolean');
    });

    it('user-count-order-by-aggregate.input name is type of sort order', () => {
      const s = testSourceFile({
        file: 'user-count-order-by-aggregate.input.ts',
        project,
        property: 'email',
      });
      expect(
        s.propertyDecorators?.find(d => d.name.includes('IsEmail')),
      ).toBeUndefined();
      expect(s.fieldDecoratorType).toEqual('() => SortOrder');
    });
  });

  describe('custom decorators in user create input', () => {
    let sourceFile: SourceFile;
    let importDeclarations: any[];
    let classFile: any;

    before(() => {
      ({ classFile, sourceFile } = testSourceFile({
        file: 'user-create.input.ts',
        project,
      }));
      importDeclarations = sourceFile
        .getImportDeclarations()
        .map(d => d.getStructure());
    });

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
          moduleSpecifier: 'class-validator',
          namespaceImport: 'Validator',
        }),
      );
    });

    it('several decorators length', () => {
      const s = testSourceFile({
        file: 'user-create.input.ts',
        project,
        property: 'age',
      });
      expect(s.propertyDecorators).toHaveLength(3);
    });

    it('validator should be imported once', () => {
      expect(
        importDeclarations.filter(x => x.moduleSpecifier === 'class-validator'),
      ).toHaveLength(1);
    });
  });

  describe('should not have metadata in description', () => {
    it('age', () => {
      const s = testSourceFile({
        file: 'user.model.ts',
        project,
        property: 'age',
      });
      expect(s.fieldDecoratorOptions).not.toContain('description');
    });

    it('name', () => {
      const s = testSourceFile({
        file: 'user.model.ts',
        project,
        property: 'name',
      });
      expect(s.fieldDecoratorOptions).not.toContain('description');
    });

    it('email', () => {
      const s = testSourceFile({
        file: 'user.model.ts',
        project,
        property: 'email',
      });
      expect(s.fieldDecoratorOptions).not.toContain('description');
    });
  });

  it('output model has no maxlength decorator', () => {
    const s = testSourceFile({
      file: 'user.model.ts',
      project,
      property: 'name',
    });
    expect(s.propertyDecorators?.find(d => d.name === 'MaxLength')).toBeFalsy();
  });
});

describe('fieldtype disable output', () => {
  before(async () => {
    ({ project } = await testGenerate({
      options: [
        `outputFilePattern = "{name}.{type}.ts"`,
        `fields_Upload_from = "graphql-upload"`,
        `fields_Upload_input = true`,
        `fields_Upload_output = false`,
      ],
      schema: `
                model User {
                    id           String        @id @default(cuid())
                    /// @FieldType('Upload.GraphQLUpload')
                    image        String?
                }
                `,
    }));
  });

  it('upload image output', () => {
    const s = testSourceFile({
      file: 'user.model.ts',
      project,
      property: 'image',
    });
    expect(s.fieldDecoratorType).toEqual('() => String');
  });
});

describe('custom decorators and description', () => {
  before(async () => {
    ({ project } = await testGenerate({
      options: [
        `outputFilePattern = "{name}.{type}.ts"`,
        `fields_Validator_from = "class-validator"`,
        `fields_Validator_output = true`,
        `fields_Validator_input = true`,
      ],
      schema: `
                model User {
                    /// user id really
                    id Int @id
                    /// User name really
                    /// @Validator.Length(5, 15, "check length")
                    name String
                }`,
    }));
  });

  it('has description', () => {
    const s = testSourceFile({
      file: 'user.model.ts',
      project,
      property: 'name',
    });
    expect(s.fieldDecoratorOptions).toContain("description:'User name really'");
  });

  it('has decorator length', () => {
    const s = testSourceFile({
      file: 'user.model.ts',
      project,
      property: 'name',
    });
    expect(s.propertyDecorators).toHaveLength(2);
    expect(s.propertyDecorators).toContainEqual(
      expect.objectContaining({ name: 'Length' }),
    );
    expect(s.sourceText).toContain('@Validator.Length(5, 15, "check length")');
  });
});

describe('custom decorators default import', () => {
  before(async () => {
    ({ project } = await testGenerate({
      options: [
        `outputFilePattern = "{name}.{type}.ts"`,
        `fields_IsValidName_from = "is-valid-name"`,
        `fields_IsValidName_input = true`,
        `fields_IsValidName_defaultImport = IsValidName`,
      ],
      schema: `
                model User {
                    id Int @id
                    /// @IsValidName()
                    name String
                }`,
    }));
  });

  it('importDeclarations should import default', () => {
    const s = testSourceFile({
      file: 'user-create.input.ts',
      project,
    });

    const importDeclarations = s.sourceFile
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
});

describe('default import alternative syntax', () => {
  before(async () => {
    ({ project } = await testGenerate({
      options: [
        `outputFilePattern = "{name}.{type}.ts"`,
        `fields_IsEmail_from = "isvalidemail"`,
        `fields_IsEmail_input = true`,
        `fields_IsEmail_defaultImport = true`,
      ],
      schema: `
                model User {
                    id Int @id
                    /// @IsEmail()
                    name String
                }`,
    }));
  });

  it('test', () => {
    const s = testSourceFile({
      file: 'user-create.input.ts',
      project,
    });
    const importDeclarations = s.sourceFile
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

describe('custom decorators field custom type namespace', () => {
  before(async () => {
    ({ project } = await testGenerate({
      options: [
        `outputFilePattern = "{name}.{type}.ts"`,
        // import { EmailAddress } from 'graphql-scalars'
        // @Field(() => EmailAddress)
        `fields_Scalars_from = "graphql-scalars"`,
        `fields_Scalars_input = true`,
      ],
      schema: `
                model User {
                    id Int @id
                    /// @FieldType({ name: 'Scalars.EmailAddress', output: true, input: true })
                    email String
                    /// @FieldType('Scalars.EmailAddress')
                    secondEmail String
                }`,
    }));
  });

  describe('user create input', () => {
    it('email field type', () => {
      const s = testSourceFile({
        file: 'user-create.input.ts',
        project,
        property: 'email',
      });
      expect(s.fieldDecoratorType).toEqual('() => Scalars.EmailAddress');
      expect(s.propertyDecorators).toHaveLength(1);
    });

    it('field type secondemail', () => {
      const s = testSourceFile({
        file: 'user-create.input.ts',
        project,
        property: 'secondEmail',
      });
      expect(s.fieldDecoratorType).toEqual('() => Scalars.EmailAddress');
    });

    it('importdeclarations should import namespace', () => {
      const s = testSourceFile({
        file: 'user-create.input.ts',
        project,
      });
      expect(s.namespaceImports).toContainEqual({
        name: 'Scalars',
        specifier: 'graphql-scalars',
      });
    });
  });

  describe('custom type user model', () => {
    it('custom type user model email field type', () => {
      const s = testSourceFile({
        file: 'user.model.ts',
        project,
        property: 'email',
      });
      expect(s.fieldDecoratorType).toEqual('() => Scalars.EmailAddress');
    });
  });
});

describe('decorate option', () => {
  before(async () => {
    ({ project } = await testGenerate({
      options: [
        `outputFilePattern = "{name}.{type}.ts"`,
        `fields_Validator_from = "class-validator"`,
        `decorate_1_type = "Create@(One|Many)*Args"`,
        `decorate_1_field = data`,
        `decorate_1_name = ValidateNested`,
        `decorate_1_from = "class-validator"`,
        `decorate_1_arguments = "[]"`,
        `decorate_2_type = "Create@(One|Many)*Args"`,
        `decorate_2_field = data`,
        `decorate_2_from = "class-transformer"`,
        `decorate_2_arguments = "['() => {propertyType.0}']"`,
        `decorate_2_name = Type`,
        // Import as namespace
        // `decorate_2_namespaceImport = "Transform"`,
        // `decorate_2_name = "Transform.Type"`,
      ],
      schema: `
            model User {
                id Int @id @default(autoincrement())
                /// @Validator.MinLength(3)
                name String
            }
            `,
    }));
  });

  it('validatenested create one user args', () => {
    const s = testSourceFile({
      file: 'create-one-user.args.ts',
      project,
      property: 'data',
    });
    expect(s.propertyDecorators).toContainEqual(
      expect.objectContaining({
        arguments: [],
        name: 'ValidateNested',
        typeArguments: [],
      }),
    );
    expect(s.propertyDecorators).toContainEqual(
      expect.objectContaining({
        arguments: ['() => UserCreateInput'],
        name: 'Type',
        typeArguments: [],
      }),
    );
    expect(s.namedImports).toContainEqual({
      name: 'Type',
      specifier: 'class-transformer',
    });
    expect(s.namedImports).toContainEqual({
      name: 'ValidateNested',
      specifier: 'class-validator',
    });
  });

  it('validatenested create many user args', () => {
    const s = testSourceFile({
      file: 'create-many-user.args.ts',
      project,
      property: 'data',
    });

    expect(s.propertyDecorators).toContainEqual(
      expect.objectContaining({
        arguments: [],
        name: 'ValidateNested',
        typeArguments: [],
      }),
    );
    expect(s.propertyDecorators).toContainEqual(
      expect.objectContaining({
        arguments: ['() => UserCreateManyInput'],
        name: 'Type',
        typeArguments: [],
      }),
    );
    expect(s.namedImports).toContainEqual({
      name: 'Type',
      specifier: 'class-transformer',
    });
    expect(s.namedImports).toContainEqual({
      name: 'ValidateNested',
      specifier: 'class-validator',
    });
  });
});

describe('model decorate', () => {
  before(async () => {
    ({ project } = await testGenerate({
      options: [
        `outputFilePattern = "{name}.{type}.ts"`,
        `fields_NG_from = "@nestjs/graphql"`,
        `fields_NG_output = false`,
        `fields_NG_model = true`,
      ],
      schema: `
            /// @NG.Directive('@extends')
            /// @NG.Directive('@key(fields: "id")')
            model User {
                /// @NG.Directive('@external')
                id String @id
            }`,
    }));
  });

  it('user model id property', () => {
    const { propertyDecorators } = testSourceFile({
      file: 'user.model.ts',
      project,
      property: 'id',
    });
    expect(propertyDecorators?.find(d => d.name === 'Directive')).toBeTruthy();
    expect(propertyDecorators?.find(d => d.name === 'Directive')?.arguments?.[0]).toBe(
      "'@external'",
    );
  });

  it('user model class', () => {
    const s = testSourceFile({
      file: 'user.model.ts',
      project,
    });
    expect(s.namespaceImports).toContainEqual({
      name: 'NG',
      specifier: '@nestjs/graphql',
    });
    expect(s.classFile.getDecorator('Directive')).toBeTruthy();
  });

  it('usergroupby should not have ng.directive', () => {
    const s = testSourceFile({
      file: 'user-group-by.output.ts',
      project,
      property: 'id',
    });
    expect(s.propertyDecorators).toHaveLength(1);
    expect(s.propertyDecorators?.find(d => d.name === 'Directive')).toBeFalsy();
  });
});

describe('model directive', () => {
  before(async () => {
    ({ project } = await testGenerate({
      options: [`outputFilePattern = "{name}.{type}.ts"`],
      schema: `
            /// @Directive({ arguments: ['@extends'] })
            /// @Directive({ arguments: ['@key(fields: "id")'] })
            model User {
                /// @Directive({ arguments: ['@external'] })
                id String @id
            }`,
    }));
  });

  it('user model id property', () => {
    const s = testSourceFile({
      file: 'user.model.ts',
      project,
      property: 'id',
    });
    expect(s.propertyDecorators?.find(d => d.name === 'Directive')).toBeTruthy();
    expect(
      s.propertyDecorators?.find(d => d.name === 'Directive')?.arguments?.[0],
    ).toBe("'@external'");
  });

  it('user model class', () => {
    const s = testSourceFile({
      file: 'user.model.ts',
      project,
    });
    expect(s.namedImports).toContainEqual({
      name: 'Directive',
      specifier: '@nestjs/graphql',
    });
    expect(s.classFile.getDecorator('Directive')).toBeTruthy();
  });

  it('usergroupby should not have ng.directive', () => {
    const s = testSourceFile({
      file: 'user-group-by.output.ts',
      project,
      property: 'id',
    });
    expect(s.propertyDecorators).toHaveLength(1);
    expect(s.propertyDecorators?.find(d => d.name === 'Directive')).toBeFalsy();
    expect(s.namedImports).not.toContainEqual({
      name: 'Directive',
      specifier: '@nestjs/graphql',
    });
  });
});

describe('hide and decorate', () => {
  before(async () => {
    ({ project } = await testGenerate({
      options: [
        `outputFilePattern = "{name}.{type}.ts"`,
        `decorate_3_type = "ProfileUncheckedCreateNestedOneWithoutUserInput"`,
        `decorate_3_field = "!(create)"`,
        `decorate_3_name = "HideField"`,
        `decorate_3_from = "@nestjs/graphql"`,
        `decorate_3_arguments = "[]"`,
      ],
      schema: `
            model User {
                id String @id
                profile Profile?
            }
            model Profile {
                id String @id
                user   User    @relation(fields: [userId], references: [id])
                userId String  @unique
            }
            `,
    }));
  });

  it('smoke', () => {
    expect(project).toBeTruthy();
    const files = project.getSourceFiles().map(s => s.getBaseName());
    expect(files.length).toBeGreaterThan(0);
  });

  it('should keep only create', () => {
    const s = testSourceFile({
      class: 'ProfileUncheckedCreateNestedOneWithoutUserInput',
      project,
      property: 'create',
    });

    expect(s.property?.decorators).not.toContainEqual(
      expect.objectContaining({ name: 'HideField' }),
    );
  });

  ['connect', 'connectOrCreate'].forEach(property => {
    it(`${property} property should be disabled`, () => {
      const s = testSourceFile({
        class: 'ProfileUncheckedCreateNestedOneWithoutUserInput',
        project,
        property,
      });

      expect(s.property?.decorators).not.toContainEqual(
        expect.objectContaining({ name: 'Field' }),
      );

      expect(s.property?.decorators).toContainEqual(
        expect.objectContaining({ name: 'HideField' }),
      );
    });
  });
});
