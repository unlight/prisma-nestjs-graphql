import assert from 'assert';
import { expect } from 'chai';
import { PropertyDeclaration, SourceFile } from 'ts-morph';

import { generate } from './generate';
import { generatorOptions, getImportDeclarations, stringContains } from './testing';

describe('main generate', () => {
    let property: PropertyDeclaration | undefined;
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
        expect(filePaths).not.to.have.property('length', 0);
    });

    it('smoke many', async () => {
        await getResult({
            schema: `model User {
              id        Int      @id
              name      String?
              profile   Profile?
              comments  Comment[]
              role      Role
            }
            model Profile {
                id        Int      @id
                sex       Boolean?
            }
            model Comment {
                id        Int      @id
            }
            enum Role {
                USER
            }
            `,
        });
        const filePaths = sourceFiles.map((s) => String(s.getFilePath()));
        expect(filePaths).not.to.have.property('length', 0);
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
        stringContains(`posts?: Array<Post>`, property.getText());

        sourceFile = sourceFiles.find((s) =>
            s.getFilePath().toLowerCase().endsWith('/post.model.ts'),
        )!;
        assert(sourceFile);
        sourceText = sourceFile.getText();
        stringContains(`import { User } from '../user/user.model'`, sourceText);
    });

    it('whereinput should be used in relation filter', async () => {
        await getResult({
            schema: `
            model User {
                id       String     @id
                articles Article[]  @relation("ArticleAuthor")
            }
            model Article {
                id        String @id
                author    User   @relation(name: "ArticleAuthor", fields: [authorId], references: [id])
                authorId  String
            }
            `,
        });
        sourceFile = sourceFiles.find((s) =>
            s.getFilePath().toLowerCase().endsWith('/article-where.input.ts'),
        )!;
        assert(sourceFile, `File do not exists`);

        property = sourceFile.getClass('ArticleWhereInput')?.getProperty('author');
        assert(property, 'Property author should exists');

        assert.strictEqual(
            property.getStructure().decorators?.[0].arguments?.[0],
            '() => UserWhereInput',
            'Union type not yet supported, WhereInput should be used as more common',
        );

        const imports = sourceFile.getImportDeclarations().flatMap((d) =>
            d.getNamedImports().map((index) => ({
                name: index.getName(),
                specifier: d.getModuleSpecifierValue(),
            })),
        );
        assert(
            imports.find(({ name }) => name === 'UserWhereInput'),
            'UserWhereInput should be imported',
        );
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
        expect(filePaths).to.include('/prisma/sort-order.enum.ts');
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
        assert.strictEqual(id.type, 'string');
        let args = classDeclaration
            .getProperty('id')
            ?.getDecorator('Field')
            ?.getArguments()
            .map((a) => a.getText());
        assert.strictEqual(args?.[0], '() => String');

        const age = classDeclaration.getProperty('age')?.getStructure();
        assert(age);
        assert.strictEqual(age.type, 'number');
        args = classDeclaration
            .getProperty('age')
            ?.getDecorator('Field')
            ?.getArguments()
            .map((a) => a.getText());
        assert.strictEqual(args?.[0], '() => Int');

        const rating = classDeclaration.getProperty('rating')?.getStructure();
        assert(rating);
        assert.strictEqual(rating.type, 'number | null');
        args = classDeclaration
            .getProperty('rating')
            ?.getDecorator('Field')
            ?.getArguments()
            .map((a) => a.getText());
        assert.strictEqual(args?.[0], '() => Float');
    });

    it('user args type', async () => {
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
        ['aggregate-user.args.ts', 'find-many-user.args.ts', 'find-one-user.args.ts'].forEach(
            (file) => {
                assert(
                    sourceFiles.find((s) => s.getFilePath().endsWith(file)),
                    `File ${file} should exists`,
                );
            },
        );

        sourceFile = sourceFiles.find((s) => s.getFilePath().endsWith('aggregate-user.args.ts'));
        assert(sourceFile);

        const classDeclaration = sourceFile.getClass('AggregateUserArgs');
        assert(classDeclaration);

        let struct = classDeclaration.getProperty('count')?.getStructure();
        let decoratorArguments = struct?.decorators?.[0].arguments;
        assert.strictEqual(decoratorArguments?.[0], '() => Boolean');

        struct = classDeclaration.getProperty('avg')?.getStructure();
        assert.strictEqual(struct?.type, 'UserAvgAggregateInput');
        decoratorArguments = struct.decorators?.[0].arguments;
        assert.strictEqual(decoratorArguments?.[0], '() => UserAvgAggregateInput');

        struct = classDeclaration.getProperty('sum')?.getStructure();
        assert.strictEqual(struct?.type, 'UserSumAggregateInput');
        decoratorArguments = struct.decorators?.[0].arguments;
        assert.strictEqual(decoratorArguments?.[0], '() => UserSumAggregateInput');

        struct = classDeclaration.getProperty('min')?.getStructure();
        assert.strictEqual(struct?.type, 'UserMinAggregateInput');
        decoratorArguments = struct.decorators?.[0].arguments;
        assert.strictEqual(decoratorArguments?.[0], '() => UserMinAggregateInput');

        struct = classDeclaration.getProperty('max')?.getStructure();
        assert.strictEqual(struct?.type, 'UserMaxAggregateInput');
        decoratorArguments = struct.decorators?.[0].arguments;
        assert.strictEqual(decoratorArguments?.[0], '() => UserMaxAggregateInput');

        const imports = sourceFile.getImportDeclarations().flatMap((d) =>
            d.getNamedImports().map((index) => ({
                name: index.getName(),
                specifier: d.getModuleSpecifierValue(),
            })),
        );
        assert(imports.find((x) => x.name === 'UserAvgAggregateInput'));
        assert(imports.find((x) => x.name === 'UserSumAggregateInput'));
        assert(imports.find((x) => x.name === 'UserMinAggregateInput'));
        assert(imports.find((x) => x.name === 'UserMaxAggregateInput'));
    });

    it('aggregate output types', async () => {
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
        sourceFile = sourceFiles.find((s) =>
            s.getFilePath().endsWith('user-avg-aggregate.output.ts'),
        );
        assert(sourceFile);
        const classDeclaration = sourceFile.getClass('UserAvgAggregate');
        assert(classDeclaration);

        let struct = classDeclaration.getProperty('age')?.getStructure();
        let decoratorArguments = struct?.decorators?.[0].arguments;
        assert.strictEqual(decoratorArguments?.[0], '() => Float');

        struct = classDeclaration.getProperty('rating')?.getStructure();
        decoratorArguments = struct?.decorators?.[0].arguments;
        assert.strictEqual(decoratorArguments?.[0], '() => Float');
    });

    it('no combine scalar filters', async () => {
        await getResult({
            schema: `
            model User {
              id        Int      @id
              int       Int?
              str       String?
              bool      Boolean?
              date      DateTime?
            }
            `,
            combineScalarFilters: false,
        });
        const filePaths = sourceFiles.map((s) => String(s.getFilePath()));
        const userWhereInput = sourceFiles.find((s) =>
            s.getFilePath().endsWith('user-where.input.ts'),
        );
        assert(userWhereInput);
        const fileImports = new Set(getImportDeclarations(userWhereInput).map((x) => x.name));
        assert(fileImports.has('StringNullableFilter'));
        assert(fileImports.has('IntNullableFilter'));
        assert(fileImports.has('DateTimeNullableFilter'));
    });

    it('combine scalar filters enabled', async () => {
        await getResult({
            schema: `
            model User {
              id        Int      @id
              int       Int?
              str1       String?
              str2       String
              bool1      Boolean?
              bool2      Boolean
              date1      DateTime?
              date2      DateTime
              f1      Float?
              f2      Float
              role1      Role?
              role2      Role
            }
            enum Role {
                USER
            }
            `,
            combineScalarFilters: true,
        });
        const filePaths = sourceFiles.map((s) => String(s.getFilePath()));
        for (const filePath of filePaths) {
            assert(!filePath.includes('nullable'), `${filePath} constains nullable`);
            assert(!filePath.includes('nested'), `${filePath} constains nested`);
        }
        for (const sourceFile of sourceFiles) {
            getImportDeclarations(sourceFile).forEach((statement) => {
                if (statement.name.includes('Nullable')) {
                    assert.fail(`${sourceFile.getFilePath()} imports nullable ${statement.name}`);
                }
                if (statement.name.includes('Nested')) {
                    assert.fail(`${sourceFile.getFilePath()} imports nested ${statement.name}`);
                }
            });
        }
    });
});
