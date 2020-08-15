import assert from 'assert';
import { SourceFile } from 'ts-morph';

import { generate } from './generate';
import { generatorOptions, stringContains } from './testing';

describe('main generate', () => {
    let sourceFile: SourceFile;
    let sourceFiles: SourceFile[];
    let sourceText: string;
    async function getResult(args: { schema: string } & Record<string, any>) {
        const { schema, ...options } = args;
        const generateOptions = {
            ...(await generatorOptions(schema, options)),
            fileExistsSync: () => false,
        };
        const project = await generate(generateOptions);
        sourceFiles = project.getSourceFiles();
    }

    it('smoke one', async () => {
        await getResult({
            schema: `
            model User {
              id        Int      @id
            }
            `,
        });
        const filePaths = sourceFiles.map((s) => String(s.getFilePath()));
        assert.notStrictEqual(filePaths.length, 0);
    });

    it('smoke many', async () => {
        await getResult({
            schema: `model User {
              id        Int      @id
              name      String?
              profile   Profile?
              comments  Comment[]
            }
            model Profile {
                id        Int      @id
                sex       Boolean?
            }
            model Comment {
                id        Int      @id
            }
            `,
        });
        const filePaths = sourceFiles.map((s) => String(s.getFilePath()));
        assert.notStrictEqual(filePaths.length, 0);
    });

    it('relations models', async () => {
        await getResult({
            schema: `
            model User {
              id        Int      @id
              posts     Post[]
            }
            model Post {
              id        Int      @id
              author    User?    @relation(fields: [authorId], references: [id])
              authorId  Int?
            }`,
        });
        sourceFile = sourceFiles.find((s) =>
            s.getFilePath().toLowerCase().endsWith('/user.model.ts'),
        )!;
        assert(sourceFile, `File do not exists`);

        const property = sourceFile.getClass('User')?.getProperty('posts');
        assert(property, 'Property posts should exists');

        stringContains(`@Field(() => [Post]`, property.getText());
        stringContains(`posts?: Post[] | null`, property.getText());

        sourceFile = sourceFiles.find((s) =>
            s.getFilePath().toLowerCase().endsWith('/post.model.ts'),
        )!;
        assert(sourceFile);
        sourceText = sourceFile.getText();
        stringContains(`import { User } from '../user/user.model'`, sourceText);
    });

    it('generator option outputFilePattern', async () => {
        await getResult({
            schema: `model User {
                    id Int @id
                }`,
            outputFilePattern: 'data/{name}.{type}.ts',
        });
        const filePaths = sourceFiles.map((s) => String(s.getFilePath()));
        assert(filePaths.includes('/data/User.model.ts'), '/data/User.model.ts should exists');
    });

    it('output group by feature', async () => {
        await getResult({
            schema: `model User {
                    id Int @id
                }`,
        });
        const filePaths = new Set(sourceFiles.map((s) => String(s.getFilePath())));
        assert(
            filePaths.has('/user/user-where.input.ts'),
            '/user/user-where.input.ts should exists',
        );
        assert(
            filePaths.has('/prisma/int-filter.input.ts'),
            '/prisma/int-filter.input.ts should exists',
        );
    });

    it('generate enum file', async () => {
        await getResult({
            schema: `
                model User {
                  id    Int   @id
                }
            `,
        });
        const filePaths = sourceFiles.map((s) => String(s.getFilePath()));
        assert(
            filePaths.includes('/prisma/sort-order.enum.ts'),
            '/prisma/sort-order.enum.ts should exists',
        );
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        sourceText = sourceFiles
            .find((s) => s.getFilePath().endsWith('sort-order.enum.ts'))
            ?.getText()!;
        assert(sourceText);
    });
});
