import expect from 'expect';
import { Project } from 'ts-morph';

import { testSourceFile } from './helpers';
import { testGenerate } from './test-generate';

let project: Project;

it('config inputFieldDescription', async () => {
    ({ project } = await testGenerate({
        schema: `
            model User {
                id String @id
                /// name really
                name String
            }
        `,
        options: [
            `outputFilePattern = "{name}.{type}.ts"`,
            `inputFieldDescription = "filter {model.name} by {field.name}"`,
        ],
    }));

    const s = testSourceFile({
        project,
        file: 'user-where.input.ts',
        property: 'name',
    });

    expect(s.fieldDecorator?.arguments?.[1]).toContain(
        "description:'filter User for name'",
    );
});
