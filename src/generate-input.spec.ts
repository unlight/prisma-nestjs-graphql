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
              id        String      @id
              count     Int?
            }
            `,
            name: 'UserWhereInput',
        });
        stringContains(
            `@Field(() => StringFilter, {
            nullable: true,
            description: undefined
        }) id?: StringFilter | null`,
            sourceText,
        );
        stringContains(
            `@Field(() => NullableIntFilter, {
            nullable: true,
            description: undefined
        }) count?: NullableIntFilter | null`,
            sourceText,
        );
        stringContains(`import { StringFilter, NullableIntFilter } from`, sourceText);
    });

    it('user user create input', async () => {
        await getResult({
            schema: `
            model User {
              id        String      @id
              count     Int?
            }
            `,
            name: 'UserCreateInput',
        });
        stringContains(
            `@Field(() => String, {
            nullable: true,
            description: undefined
        }) id?: string | null`,
            sourceText,
        );
        stringContains(
            `@Field(() => Int, {
            nullable: true,
            description: undefined
        }) count?: number | null`,
            sourceText,
        );
        stringContains(`import { InputType, Field, Int } from '@nestjs/graphql'`, sourceText);
    });
});
