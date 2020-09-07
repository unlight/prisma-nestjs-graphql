import assert from 'assert';
import { Project, QuoteKind, SourceFile } from 'ts-morph';

import { generateInput } from './generate-input';
import { generatorOptions, stringContains, stringNotContains } from './testing';

describe('generate inputs', () => {
    let sourceFile: SourceFile;
    let sourceText: string;
    let imports: { name: string; specifier: string }[];
    type Options = {
        schema: string;
        name: string;
        model: string | undefined;
        sourceFileText?: string;
        outputFilePattern?: string;
    };
    const getResult = async (options: Options) => {
        const { schema, model, name, sourceFileText, outputFilePattern } = options;
        const project = new Project({
            useInMemoryFileSystem: true,
            manipulationSettings: { quoteKind: QuoteKind.Single },
        });
        const {
            prismaClientDmmf: {
                datamodel: { models },
                schema: { inputTypes },
            },
        } = await generatorOptions(schema, { outputFilePattern });
        // console.log('inputTypes', inputTypes);
        const inputType = inputTypes.find((x) => x.name === name);
        assert(inputType, `Failed to find ${name}`);
        sourceFile = project.createSourceFile('0.ts', sourceFileText);
        generateInput({
            model: models.find((x) => x.name === model),
            inputType,
            sourceFile,
            projectFilePath: () => '0.ts',
            decorator: {
                name: 'InputType',
            },
        });
        sourceText = sourceFile.getText();
        imports = sourceFile.getImportDeclarations().flatMap((d) =>
            d.getNamedImports().map((i) => ({
                name: i.getName(),
                specifier: d.getModuleSpecifierValue(),
            })),
        );
    };

    it('user where input', async () => {
        await getResult({
            schema: `
            model User {
              id     String      @id
              birth  DateTime
              died   DateTime?
            }
            `,
            name: 'UserWhereInput',
            model: 'User',
        });
        const struct = (n: string) =>
            sourceFile.getClass('UserWhereInput')?.getProperty(n)?.getStructure();
        assert.strictEqual(
            struct('id')?.type,
            'string | StringFilter',
            'id is not nullable in model',
        );
        const decoratorArguments = sourceFile
            .getClass('UserWhereInput')
            ?.getProperty('id')
            ?.getDecorator('Field')
            ?.getCallExpression()
            ?.getArguments();
        assert.strictEqual(decoratorArguments?.[0]?.getText(), '() => StringFilter');
        assert.strictEqual(
            struct('OR')?.type,
            'Array<UserWhereInput>',
            'OR property should be array only',
        );
        assert.strictEqual(struct('birth')?.type, 'Date | string | DateTimeFilter');
    });

    it('user where int filter', async () => {
        await getResult({
            schema: `
            model User {
              id     String      @id
              age    Int
            }
            `,
            name: 'UserWhereInput',
            model: 'User',
        });
        const structure = sourceFile.getClass('UserWhereInput')?.getProperty('age')?.getStructure();
        assert(structure);
        assert.strictEqual(structure.type, 'number | IntFilter', 'Age property is not nullable');

        const decoratorArguments = sourceFile
            .getClass('UserWhereInput')
            ?.getProperty('age')
            ?.getDecorator('Field')
            ?.getCallExpression()
            ?.getArguments();
        assert.strictEqual(decoratorArguments?.[0]?.getText(), '() => IntFilter');

        assert(imports.find((x) => x.name === 'StringFilter' && x.specifier === './0'));
        assert(imports.find((x) => x.name === 'IntFilter' && x.specifier === './0'));
    });

    it('user where string filter', async () => {
        await getResult({
            schema: `
            model User {
              id     String      @id
            }
            `,
            name: 'StringFilter',
            model: undefined,
        });
        const properties = sourceFile.getClass('StringFilter')?.getProperties();
        const structure = (name: string) =>
            properties?.find((x) => x.getName() === name)?.getStructure();

        assert.strictEqual(structure('equals')?.type, 'string');
        assert.strictEqual(structure('lt')?.type, 'string');
        assert.strictEqual(structure('lte')?.type, 'string');
        assert.strictEqual(structure('gt')?.type, 'string');
        assert.strictEqual(structure('gte')?.type, 'string');
        assert.strictEqual(structure('contains')?.type, 'string');
        assert.strictEqual(structure('startsWith')?.type, 'string');
        assert.strictEqual(structure('endsWith')?.type, 'string');

        assert.strictEqual(structure('in')?.type, 'string | Array<string>');
        assert.strictEqual(structure('notIn')?.type, 'string | Array<string>');
    });

    it('user create input', async () => {
        await getResult({
            schema: `
            model User {
              id     String      @id
              countComments  Int?
            }
            `,
            name: 'UserCreateInput',
            model: 'User',
        });

        const idProperty = sourceFile.getClass('UserCreateInput')?.getProperty('id');
        assert(idProperty);

        stringContains(`@Field(() => String`, idProperty.getText());

        const countProperty = sourceFile.getClass('UserCreateInput')?.getProperty('countComments');
        assert(countProperty);

        const decoratorArguments = sourceFile
            .getClass('UserCreateInput')
            ?.getProperty('countComments')
            ?.getDecorator('Field')
            ?.getCallExpression()
            ?.getArguments();
        assert.strictEqual(decoratorArguments?.[0]?.getText(), '() => Int');

        const structure = sourceFile
            .getClass('UserCreateInput')
            ?.getProperty('countComments')
            ?.getStructure();
        assert(structure);
        assert.strictEqual(structure.type, 'number | null');

        assert(imports.find((x) => x.name === 'InputType' && x.specifier === '@nestjs/graphql'));
        assert(imports.find((x) => x.name === 'Int' && x.specifier === '@nestjs/graphql'));
    });

    it('datetime filter', async () => {
        await getResult({
            schema: `
            model User {
              id     Int      @id
              birth  DateTime
              died   DateTime?
            }
            `,
            name: 'DateTimeFilter',
            model: 'User',
        });
        sourceFile
            .getClass('DateTimeFilter')
            ?.getProperties()
            ?.filter((p) => p.getName() !== 'not')
            .flatMap((p) => p.getDecorators())
            .forEach((d) => {
                const argument = d.getCallExpression()?.getArguments()?.[0].getText();
                stringNotContains('DateTime', argument || '');
            });
    });

    it('user scalar where input ex. user filter', async () => {
        await getResult({
            schema: `
            model User {
              id     String    @id
              following        User[]    @relation("UserFollows", references: [id])
              followers        User[]    @relation("UserFollows", references: [id])
            }
            `,
            name: 'UserListRelationFilter',
            model: 'User',
        });
        const struct = (n: string) =>
            sourceFile.getClass('UserListRelationFilter')?.getProperty(n)?.getStructure();

        assert.strictEqual(struct('every')?.type, 'UserWhereInput');
        assert.strictEqual(struct('some')?.type, 'UserWhereInput');
        assert.strictEqual(struct('none')?.type, 'UserWhereInput');
    });
});
