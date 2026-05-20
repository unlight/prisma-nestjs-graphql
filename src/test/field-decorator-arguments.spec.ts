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
              match: ({ objectName, propertyName }) =>
                objectName.endsWith('Args') && propertyName === 'take',
              decoratorArguments: {
                defaultValue: 10,
                description: 'Number of records to return',
              },
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
              match: ({ objectName, propertyName }) =>
                objectName.endsWith('Args') && propertyName === 'take',
              decoratorArguments: {
                defaultValue: 20,
                description: 'Limit results',
              },
            },
            {
              match: ({ objectName, propertyName }) =>
                objectName.endsWith('Args') && propertyName === 'skip',
              decoratorArguments: {
                name: 'offset',
                defaultValue: 0,
                description: 'Skip records',
              },
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
        name: 'offset',
        defaultValue: 0,
        description: 'Skip records',
      });
    });
  });

  describe('override fields in output types', () => {
    beforeAll(async () => {
      ({ project } = await testGenerate({
        externalConfig: {
          fieldDecoratorArguments: [
            {
              match: ({ objectName, propertyName }) =>
                objectName === 'Item' && propertyName === 'count',
              decoratorArguments: {
                description: 'Item count override',
              },
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
              match: ({ objectName, propertyName }) =>
                objectName === 'User' && propertyName === 'createdAt',
              decoratorArguments: {
                name: 'createdAt',
                deprecationReason: 'Use timestamp instead',
                description: 'Field creation timestamp',
              },
            },
            {
              match: ({ objectName, propertyName }) =>
                objectName === 'User' && propertyName === 'id',
              decoratorArguments: {
                middleware: [],
                description: 'User identifier',
              },
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
        name: 'createdAt',
        deprecationReason: 'Use timestamp instead',
        description: 'Field creation timestamp',
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
});
