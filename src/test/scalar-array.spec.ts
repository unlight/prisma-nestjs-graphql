import { expect } from 'expect';
import { Project } from 'ts-morph';

import { testSourceFile } from './helpers';
import { testGenerate } from './test-generate';

describe('scalar array', () => {
  let project: Project;
  before(async () => {
    ({ project } = await testGenerate({
      options: [`outputFilePattern = "{name}.{type}.ts"`],
      schema: `
        model User {
          id String @id
          friends String[]
        }
      `,
    }));
  });

  it('project files', () => {
    const files = project.getSourceFiles().map(s => s.getBaseName());

    expect(files).toBeDefined();
  });
});
