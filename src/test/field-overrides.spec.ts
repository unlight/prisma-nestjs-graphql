import { Project } from 'ts-morph';
import { beforeAll, describe, expect, it } from 'vitest';

import { testSourceFile } from './helpers.ts';
import { testGenerate } from './test-generate.ts';

describe('fieldOverrides', () => {
  let project: Project;

  describe('override take field in Args classes', () => {
    beforeAll(async () => {
      ({ project } = await testGenerate({
        schema: `
          model User {
            id    String @id @default(cuid())
            name  String
          }
        `,
        externalConfig: {
          fieldOverrides: [
            {
              match: ({ objectName, propertyName }) =>
                objectName.endsWith('Args') && propertyName === 'take',
              fieldArguments: {
                defaultValue: 10,
                description: 'Number of records to return',
              },
            },
          ],
        },
      }));
    });

    it('should have defaultValue and description on take field', () => {
      const s = testSourceFile({
        project,
        file: 'find-many-user.args.ts',
        property: 'take',
      });

      expect(s.fieldDecoratorOptions).toMatchObject({
        nullable: true,
        defaultValue: 10,
        description: 'Number of records to return',
      });
    });

    it('skip field should not have override', () => {
      const s = testSourceFile({
        project,
        file: 'find-many-user.args.ts',
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
        schema: `
          model Post {
            id      String @id @default(cuid())
            title   String
          }
        `,
        externalConfig: {
          fieldOverrides: [
            {
              match: ({ objectName, propertyName }) =>
                objectName.endsWith('Args') && propertyName === 'take',
              fieldArguments: {
                defaultValue: 20,
                description: 'Limit results',
              },
            },
            {
              match: ({ objectName, propertyName }) =>
                objectName.endsWith('Args') && propertyName === 'skip',
              fieldArguments: {
                defaultValue: 0,
                description: 'Skip records',
              },
            },
          ],
        },
      }));
    });

    it('take should have override', () => {
      const s = testSourceFile({
        project,
        file: 'find-many-post.args.ts',
        property: 'take',
      });

      expect(s.fieldDecoratorOptions).toMatchObject({
        defaultValue: 20,
        description: 'Limit results',
      });
    });

    it('skip should have override', () => {
      const s = testSourceFile({
        project,
        file: 'find-many-post.args.ts',
        property: 'skip',
      });

      expect(s.fieldDecoratorOptions).toMatchObject({
        defaultValue: 0,
        description: 'Skip records',
      });
    });
  });

  describe('override fields in output types', () => {
    beforeAll(async () => {
      ({ project } = await testGenerate({
        schema: `
          model Item {
            id    String @id @default(cuid())
            count Int
          }
        `,
        externalConfig: {
          fieldOverrides: [
            {
              match: ({ objectName, propertyName }) =>
                objectName === 'Item' && propertyName === 'count',
              fieldArguments: {
                description: 'Item count override',
              },
            },
          ],
        },
      }));
    });

    it('should have description on model output type', () => {
      const s = testSourceFile({
        project,
        file: 'item.model.ts',
        property: 'count',
      });

      expect(s.fieldDecoratorOptions).toMatchObject({
        description: 'Item count override',
      });
    });
  });
});
