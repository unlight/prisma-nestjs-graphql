import assert from 'assert';
import { Project, QuoteKind, SourceFile } from 'ts-morph';

import { generateInput } from './generate-input';
import { generatorOptions, stringContains } from './testing';

describe('generate input', () => {
    let sourceFile: SourceFile;
    let sourceText: string;
    type Options = {
        schema: string;
        name: string;
        sourceFileText?: string;
        outputFilePattern?: string;
    };
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

        const idProperty = sourceFile.getClass('UserWhereInput')?.getProperty('id');
        assert(idProperty);
        stringContains(`@Field(() => StringFilter`, idProperty.getText());
        stringContains(`id?: string | StringFilter | null`, idProperty.getText());
    });

    it('user where int filters', async () => {
        await getResult({
            schema: `
            model User {
              id     String      @id
              age    Int
            }
            `,
            name: 'UserWhereInput',
        });

        const ageProperty = sourceFile.getClass('UserWhereInput')?.getProperty('age');
        assert(ageProperty);
        stringContains(`@Field(() => IntFilter`, ageProperty.getText());
        stringContains(`age?: number | IntFilter | null`, ageProperty.getText());

        const imports = sourceFile.getImportDeclarations().flatMap((d) =>
            d.getNamedImports().map((i) => ({
                name: i.getName(),
                specifier: d.getModuleSpecifierValue(),
            })),
        );

        assert(imports.find((x) => x.name === 'StringFilter' && x.specifier === './0'));
        assert(imports.find((x) => x.name === 'IntFilter' && x.specifier === './0'));
    });

    it('user user create input', async () => {
        await getResult({
            schema: `
            model User {
              id     String      @id
              count  Int?
            }
            `,
            name: 'UserCreateInput',
        });

        const idProperty = sourceFile.getClass('UserCreateInput')?.getProperty('id');
        assert(idProperty);

        stringContains(`@Field(() => String`, idProperty.getText());

        const countProperty = sourceFile.getClass('UserCreateInput')?.getProperty('count');
        assert(countProperty);

        stringContains(`@Field(() => Int`, countProperty.getText());
        stringContains(`count?: number | null`, countProperty.getText());

        const imports = sourceFile.getImportDeclarations().flatMap((d) =>
            d.getNamedImports().map((i) => ({
                name: i.getName(),
                specifier: d.getModuleSpecifierValue(),
            })),
        );

        assert(imports.find((x) => x.name === 'InputType' && x.specifier === '@nestjs/graphql'));
        assert(imports.find((x) => x.name === 'Int' && x.specifier === '@nestjs/graphql'));
    });
});
