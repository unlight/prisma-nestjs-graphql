import assert from 'assert';
import { PropertyDeclaration, SourceFile } from 'ts-morph';

import { generate } from './generate';
import { generatorOptions, stringContains } from './testing';

describe('main generate', () => {
    let sourceFile: SourceFile | undefined;
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

    it('no nullable type', async () => {
        await getResult({
            schema: `
                model User {
                  id    Int   @id
                  countComments Int?
                }
            `,
        });
        sourceFiles
            .flatMap((s) => s.getClasses())
            .flatMap((d) => d.getProperties())
            .flatMap((p) => p.getDecorators())
            .forEach((d) => {
                const argument = d.getCallExpression()?.getArguments()?.[0].getText();
                assert.notStrictEqual(argument, '() => null');
            });
    });

    it('user avg aggregate input', async () => {
        await getResult({
            schema: `
            model User {
              id     String      @id
              age    Int
            }
            `,
        });
        sourceFile = sourceFiles.find((s) =>
            s.getFilePath().endsWith('user-avg-aggregate.input.ts'),
        );
        assert(sourceFile);
        const classDeclaration = sourceFile.getClass('UserAvgAggregateInput');
        assert(classDeclaration, 'class not found');
        const propertyDeclaration = classDeclaration.getProperty('age');
        assert(propertyDeclaration, 'age');
        const decorator = propertyDeclaration.getDecorator('Field');
        assert(decorator);
        const struct = decorator.getStructure();
        assert.strictEqual(struct.arguments?.[0], '() => Boolean');
    });

    it('get rid of atomic number operations', async () => {
        await getResult({
            atomicNumberOperations: false,
            schema: `
            model User {
              id String @id
              age Int
              rating Float?
            }
            `,
        });

        [
            'float-field-update-operations.input.ts',
            'int-field-update-operations.input.ts',
            'string-field-update-operations.input.ts',
        ].forEach((file) => {
            assert(
                !sourceFiles.find((s) => s.getFilePath().endsWith(file)),
                `File ${file} should not exists`,
            );
        });

        sourceFile = sourceFiles.find((s) => s.getFilePath().endsWith('user-update.input.ts'));
        assert(sourceFile);

        const classDeclaration = sourceFile.getClass('UserUpdateInput');
        assert(classDeclaration);

        const id = classDeclaration.getProperty('id')?.getStructure();
        assert(id);
        assert.equal(id.type, 'string');
        let args = classDeclaration
            .getProperty('id')
            ?.getDecorator('Field')
            ?.getArguments()
            .map((a) => a.getText());
        assert.equal(args?.[0], '() => String');

        const age = classDeclaration.getProperty('age')?.getStructure();
        assert(age);
        assert.equal(age.type, 'number');
        args = classDeclaration
            .getProperty('age')
            ?.getDecorator('Field')
            ?.getArguments()
            .map((a) => a.getText());
        assert.equal(args?.[0], '() => Int');

        const rating = classDeclaration.getProperty('rating')?.getStructure();
        assert(rating);
        assert.equal(rating.type, 'number | null');
        args = classDeclaration
            .getProperty('rating')
            ?.getDecorator('Field')
            ?.getArguments()
            .map((a) => a.getText());
        assert.equal(args?.[0], '() => Float');
    });
});
