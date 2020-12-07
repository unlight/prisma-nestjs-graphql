import assert from 'assert';
import expect from 'expect';
import { PropertyDeclaration, SourceFile } from 'ts-morph';

import { generate } from './generate';
import { generatorOptions, getImportDeclarations, stringContains } from './testing';

describe('main generate', () => {
    let property: PropertyDeclaration | undefined;
    let sourceFile: SourceFile | undefined;
    let sourceFiles: SourceFile[];
    let sourceText: string;
    async function getResult(args: { schema: string; options?: string[] }) {
        const { schema, options } = args;
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
        expect(filePaths).not.toHaveLength(0);
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
        expect(filePaths).not.toHaveLength(0);
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

        expect(property.getText()).toContain('@Field(() => [Post]');
        expect(property.getStructure().type).toEqual('Array<Post>');

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
            options: [`outputFilePattern = "data/{type}/{name}.ts"`],
        });
        const filePaths = sourceFiles.map((s) => String(s.getFilePath()));
        expect(filePaths).toContainEqual(expect.stringContaining('/data/model/user.ts'));
    });

    it('output group by feature', async () => {
        await getResult({
            schema: `model User {
                    id Int @id
                }`,
        });
        const filePaths = new Set(sourceFiles.map((s) => String(s.getFilePath())));
        expect(filePaths).toContainEqual('/user/user-where.input.ts');
        expect(filePaths).toContainEqual('/prisma/int-filter.input.ts');
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
        expect(filePaths).toContain('/prisma/sort-order.enum.ts');
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
        expect(struct.arguments?.[0]).toEqual('() => Boolean');
    });

    it('get rid of atomic number operations', async () => {
        await getResult({
            schema: `
            model User {
              id String @id
              age Int
              rating Float?
            }
            `,
            options: [`atomicNumberOperations = false`],
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
        expect(rating.type).toEqual('number');
        args = classDeclaration
            .getProperty('rating')
            ?.getDecorator('Field')
            ?.getArguments()
            .map((a) => a.getText());
        assert.strictEqual(args?.[0], '() => Float');
    });

    it('user args type', async () => {
        await getResult({
            schema: `
            model User {
              id String @id
              age Int
              rating Float?
            }
            `,
            options: [`atomicNumberOperations = false`],
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

        const imports = getImportDeclarations(sourceFile);

        assert(imports.find((x) => x.name === 'UserAvgAggregateInput'));
        assert(imports.find((x) => x.name === 'UserSumAggregateInput'));
        assert(imports.find((x) => x.name === 'UserMinAggregateInput'));
        assert(imports.find((x) => x.name === 'UserMaxAggregateInput'));
    });

    it('aggregate output types', async () => {
        await getResult({
            options: [`atomicNumberOperations = false`],
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
            options: [`combineScalarFilters = false`],
        });
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
            options: [`combineScalarFilters = true`],
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

    it('option atomicNumberOperations false', async () => {
        await getResult({
            schema: `
            model User {
              id        String      @id
              int1      Int
              int2      Int?
              f1        Float?
              f2        Float
              role1     Role?
              role2     Role
            }
            enum Role {
                USER
            }
            `,
            options: [`atomicNumberOperations = false`],
        });
        expect(sourceFiles.length).toBeGreaterThan(0);
        for (const sourceFile of sourceFiles) {
            sourceFile.getClasses().forEach((classDeclaration) => {
                if (classDeclaration.getName()?.endsWith('FieldUpdateOperationsInput')) {
                    throw new Error(`Class should not exists ${classDeclaration.getName()!}`);
                }
            });
        }
        sourceFiles
            .flatMap((s) => s.getClasses())
            .filter((c) =>
                ['UserUpdateInput', 'UserUpdateManyMutationInput'].includes(c.getName()!),
            )
            .flatMap((c) => c.getProperties())
            .map((p) => p.getStructure())
            .map(({ name, type }) => ({
                name,
                type,
                types: (type as string).split('|').map((s) => s.trim()),
            }))
            .forEach((struct) => {
                if (struct.types.find((s) => s.endsWith('FieldUpdateOperationsInput'))) {
                    throw new Error(`Property ${struct.name} typed ${String(struct.type)}`);
                }
            });
    });

    it('scalar filter with enabled combineScalarFilters', async () => {
        await getResult({
            schema: `
            model User {
              id Int @id
              p3 String?
            }
            `,
            options: [`combineScalarFilters = true`],
        });
        expect(sourceFiles.length).toBeGreaterThan(0);
        sourceFile = sourceFiles.find((s) =>
            s.getFilePath().toLowerCase().endsWith('/string-filter.input.ts'),
        )!;
        const classFile = sourceFile.getClass('StringFilter')!;
        const fieldEquals = classFile.getProperty('equals')!;
        expect(fieldEquals.getStructure().type).toEqual('string');
    });

    it('fields are not duplicated (prevent second generation)', async () => {
        debugger;
        await getResult({
            schema: `
            model User {
              id Int @id
            }
            `,
        });
        sourceFile = sourceFiles.find((s) => s.getFilePath().endsWith('int-filter.input.ts'));
        const classFile = sourceFile!.getClass('IntFilter')!;
        const names = classFile.getProperties().map((p) => p.getName());
        expect(names).toStrictEqual([...new Set(names)]);
    });
});
