import { Project } from 'ts-morph';

import { testSourceFile } from './helpers';
import { testGenerate } from './test-generate';

describe.only('native types auto class validator', () => {
    let project: Project;
    const schema = `
        model Post {
          id         Int    @id
          title      String @db.VarChar(100)
        }
    `;

    before(async () => {
        ({ project } = await testGenerate({
            schema,
            options: [`classValidatorDecorators = true`],
        }));
    });

    // IsOptional IsString IsNumber IsInt IsEnum IsBoolean IsDateString

    it('post model', () => {
        const s = testSourceFile({
            project,
            file: 'post.model.ts',
        });
        // console.log(s);
    });
});
