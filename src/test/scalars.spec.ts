import { Project } from 'ts-morph';
import { beforeAll, expect, it } from 'vitest';

import { testSourceFile } from './helpers.ts';
import { testGenerate } from './test-generate.ts';

let project: Project;
beforeAll(async () => {
  ({ project } = await testGenerate({
    options: [`outputFilePattern = "{name}.{type}.ts"`],
    schema: `
        model User {
          id String @id
          bytes Bytes
          maybeBytes Bytes?
        }
      `,
  }));
});

it('bytes should have type equal to prisma not null', () => {
  const s = testSourceFile({
    file: 'user.model.ts',
    project,
    property: 'bytes',
  });

  expect(s.property?.type).toEqual('Prisma.Bytes');

  const importPrisma = s.namedImports.find(x => x.name === 'Prisma');
  expect(importPrisma).toBeTruthy();
});

it('bytes should have type equal to prisma nullable', () => {
  const s = testSourceFile({
    file: 'user.model.ts',
    project,
    property: 'maybeBytes',
  });

  expect(s.property?.type).toEqual('Prisma.Bytes | null');
});
