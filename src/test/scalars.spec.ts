import { expect } from 'expect';
import { Project } from 'ts-morph';

import { testSourceFile } from './helpers';
import { testGenerate } from './test-generate';

describe('scalars', () => {
  let project: Project;
  before(async () => {
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
    expect(s.property?.type).toEqual('Uint8Array');
  });

  it('bytes should have type equal to prisma nullable', () => {
    const s = testSourceFile({
      file: 'user.model.ts',
      project,
      property: 'maybeBytes',
    });
    expect(s.property?.type).toEqual('Uint8Array | null');
  });
});
