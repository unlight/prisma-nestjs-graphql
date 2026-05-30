import { Project } from 'ts-morph';
import { beforeAll, describe, expect, it } from 'vitest';

import { testSourceFile } from './helpers.ts';
import { testGenerate } from './test-generate.ts';

describe('fieldDecoratorArguments', () => {
  let project: Project;

  describe('override take field in Args classes', () => {
    beforeAll(async () => {
      ({ project } = await testGenerate({
        externalConfig: {
          fieldDecoratorArguments: [
            {
              decoratorArguments: {
                defaultValue: 10,
                description: 'Number of records to return',
              },
              match: ({ objectName, propertyName }) =>
                objectName.endsWith('Args') && propertyName === 'take',
            },
          ],
        },
        schema: `
          model User {
            id    String @id @default(cuid())
            name  String
          }
        `,
      }));
    });

    it('should have defaultValue and description on take field', () => {
      const s = testSourceFile({
        file: 'find-many-user.args.ts',
        project,
        property: 'take',
      });

      expect(s.fieldDecoratorOptions).toMatchObject({
        defaultValue: 10,
        description: 'Number of records to return',
        nullable: true,
      });
      expect(s.fieldDecoratorOptions).not.toHaveProperty('name');
    });

    it('skip field should not have override', () => {
      const s = testSourceFile({
        file: 'find-many-user.args.ts',
        project,
        property: 'skip',
      });

      expect(s.fieldDecoratorOptions).toMatchObject({
        nullable: true,
      });
      expect(s.fieldDecoratorOptions).not.toHaveProperty('defaultValue');
      expect(s.fieldDecoratorOptions).not.toHaveProperty('description');
    });
  });

  describe('override multiple fields', () => {
    beforeAll(async () => {
      ({ project } = await testGenerate({
        externalConfig: {
          fieldDecoratorArguments: [
            {
              decoratorArguments: {
                defaultValue: 20,
                description: 'Limit results',
              },
              match: ({ objectName, propertyName }) =>
                objectName.endsWith('Args') && propertyName === 'take',
            },
            {
              decoratorArguments: {
                defaultValue: 0,
                description: 'Skip records',
                name: 'offset',
              },
              match: ({ objectName, propertyName }) =>
                objectName.endsWith('Args') && propertyName === 'skip',
            },
          ],
        },
        schema: `
          model Post {
            id      String @id @default(cuid())
            title   String
          }
        `,
      }));
    });

    it('take should have override', () => {
      const s = testSourceFile({
        file: 'find-many-post.args.ts',
        project,
        property: 'take',
      });

      expect(s.fieldDecoratorOptions).toMatchObject({
        defaultValue: 20,
        description: 'Limit results',
      });
      expect(s.fieldDecoratorOptions).not.toHaveProperty('name');
    });

    it('skip should have override', () => {
      const s = testSourceFile({
        file: 'find-many-post.args.ts',
        project,
        property: 'skip',
      });

      expect(s.fieldDecoratorOptions).toMatchObject({
        defaultValue: 0,
        description: 'Skip records',
        name: 'offset',
      });
    });
  });

  describe('override fields in output types', () => {
    beforeAll(async () => {
      ({ project } = await testGenerate({
        externalConfig: {
          fieldDecoratorArguments: [
            {
              decoratorArguments: {
                description: 'Item count override',
              },
              match: ({ objectName, propertyName }) =>
                objectName === 'Item' && propertyName === 'count',
            },
          ],
        },
        schema: `
          model Item {
            id    String @id @default(cuid())
            count Int
          }
        `,
      }));
    });

    it('should have description on model output type', () => {
      const s = testSourceFile({
        file: 'item.model.ts',
        project,
        property: 'count',
      });

      expect(s.fieldDecoratorOptions).toMatchObject({
        description: 'Item count override',
      });
    });
  });

  describe('deprecationReason, name and middleware', () => {
    beforeAll(async () => {
      ({ project } = await testGenerate({
        externalConfig: {
          fieldDecoratorArguments: [
            {
              decoratorArguments: {
                deprecationReason: 'Use timestamp instead',
                description: 'Field creation timestamp',
                name: 'createdAt',
              },
              match: ({ objectName, propertyName }) =>
                objectName === 'User' && propertyName === 'createdAt',
            },
            {
              decoratorArguments: {
                description: 'User identifier',
                middleware: [],
              },
              match: ({ objectName, propertyName }) =>
                objectName === 'User' && propertyName === 'id',
            },
          ],
        },
        schema: `
          model User {
            id        String @id @default(cuid())
            createdAt DateTime @default(now())
            name      String
          }
        `,
      }));
    });

    it('should have name and deprecationReason on field', () => {
      const s = testSourceFile({
        file: 'user.model.ts',
        project,
        property: 'createdAt',
      });

      expect(s.fieldDecoratorOptions).toMatchObject({
        deprecationReason: 'Use timestamp instead',
        description: 'Field creation timestamp',
        name: 'createdAt',
      });
    });

    it('should have middleware on field', () => {
      const s = testSourceFile({
        file: 'user.model.ts',
        project,
        property: 'id',
      });

      expect(s.fieldDecoratorOptions).toMatchObject({
        description: 'User identifier',
        middleware: [],
      });
    });
  });

  describe('custom middleware with customImports', () => {
    beforeAll(async () => {
      ({ project } = await testGenerate({
        externalConfig: {
          customImports: [
            {
              defaultImport: true,
              from: './field-middleware',
              name: 'loggerMiddleware',
            },
          ],
          fieldDecoratorArguments: [
            {
              decoratorArguments: {
                description: 'User name with logger',
                middleware: ['loggerMiddleware'],
              },
              match: ({ objectName, propertyName }) =>
                objectName === 'User' && propertyName === 'name',
            },
          ],
        },
        schema: `
          model User {
            id    String @id @default(cuid())
            name  String
          }
        `,
      }));
    });

    it('should have middleware on field with custom imports', () => {
      const sourceFile = project.getSourceFileOrThrow(sf =>
        sf.getFilePath().endsWith('user.model.ts'),
      );
      const userClass = sourceFile.getClass('User');
      const nameProperty = userClass?.getProperty('name');
      const fieldDecorator = nameProperty
        ?.getDecorators()
        .find(d => d.getFullName() === 'Field');
      const decoratorText = fieldDecorator?.getText();

      // Middleware should be included as identifier reference, not string literal
      expect(decoratorText).toContain('middleware:[loggerMiddleware]');
      // Should NOT be a string literal
      expect(decoratorText).not.toContain("'loggerMiddleware'");
      expect(decoratorText).toContain("description:'User name with logger'");
    });
  });
});
