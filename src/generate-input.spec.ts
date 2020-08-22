import assert from 'assert';
import { Project, QuoteKind, SourceFile } from 'ts-morph';

import { generateInput } from './generate-input';
import { generatorOptions, stringContains, stringNotContains } from './testing';

describe('generate inputs', () => {
    let sourceFile: SourceFile;
    let sourceText: string;
    type Options = {
        schema: string;
        name: string;
        sourceFileText?: string;
        outputFilePattern?: string;
    };
    let imports: { name: string; specifier: string }[];
    async function getResult(options: Options) {
        const { schema, name, sourceFileText, outputFilePattern } = options;
        const project = new Project({
            useInMemoryFileSystem: true,
            manipulationSettings: { quoteKind: QuoteKind.Single },
        });
        const {
            prismaClientDmmf: {
                schema: { inputTypes },
            },
        } = await generatorOptions(schema, { outputFilePattern });
        const inputType = inputTypes.find((x) => x.name === name);
        assert(inputType);
        sourceFile = project.createSourceFile('0.ts', sourceFileText);
        generateInput({ inputType, sourceFile, projectFilePath: () => '0.ts' });
        sourceText = sourceFile.getText();
        imports = sourceFile.getImportDeclarations().flatMap((d) =>
            d.getNamedImports().map((i) => ({
                name: i.getName(),
                specifier: d.getModuleSpecifierValue(),
            })),
        );
    }

    it('user where input', async () => {
        await getResult({
            schema: `
            model User {
              id     String      @id
            }
            `,
            name: 'UserWhereInput',
        });

        const structure = sourceFile.getClass('UserWhereInput')?.getProperty('id')?.getStructure();
        assert(structure);
        assert.strictEqual(structure.type, 'string | StringFilter | null');
        const decoratorArguments = sourceFile
            .getClass('UserWhereInput')
            ?.getProperty('id')
            ?.getDecorator('Field')
            ?.getCallExpression()
            ?.getArguments();
        assert.strictEqual(decoratorArguments?.[0]?.getText(), '() => StringFilter');
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
        });
        const structure = sourceFile.getClass('UserWhereInput')?.getProperty('age')?.getStructure();
        assert(structure);
        assert.strictEqual(structure.type, 'number | IntFilter | null');

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

    it('user create input', async () => {
        await getResult({
            schema: `
            model User {
              id     String      @id
              countComments  Int?
            }
            `,
            name: 'UserCreateInput',
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

    it('no datetime import', async () => {
        await getResult({
            schema: `
            model User {
              id     Int      @id
              birth  DateTime
              died   DateTime?
            }
            `,
            name: 'DateTimeFilter',
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
});
