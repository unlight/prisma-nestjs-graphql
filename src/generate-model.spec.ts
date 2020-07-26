import assert from 'assert';
import { Project, QuoteKind, SourceFile } from 'ts-morph';

import { generateModel } from './generate-model';
import { generatorOptions, stringContains, stringNotContains } from './testing';

describe('generate models', () => {
    let sourceFile: SourceFile;
    let sourceText: string;
    async function getResult(schema: string, { sourceFileText }: { sourceFileText?: string } = {}) {
        const project = new Project({
            useInMemoryFileSystem: true,
            manipulationSettings: { quoteKind: QuoteKind.Single },
        });
        const {
            prismaClientDmmf: {
                datamodel: { models },
            },
        } = await generatorOptions(schema);
        const [model] = models;
        sourceFile = project.createSourceFile('_.ts', sourceFileText);
        generateModel({ model, sourceFile, projectFilePath: () => '_.ts' });
        return sourceFile;
    }

    it('model', async () => {
        sourceFile = await getResult(`model User {
                id String @id
            }`);
        sourceText = sourceFile.getText();
        stringContains('@Field(() => ID, { nullable: false, description: undefined })', sourceText);
        stringContains('id!: string', sourceText);
        stringContains(`import { ObjectType, ID, Field } from '@nestjs/graphql'`, sourceText);
    });

    it('field nullable', async () => {
        sourceFile = await getResult(`model User {
                id Int @id
                image String?
            }`);
        const sourceText = sourceFile.getText();
        stringContains(
            '@Field(() => String, { nullable: true, description: undefined })',
            sourceText,
        );
        stringContains('image?: string | null', sourceText);
    });

    it('default value', async () => {
        sourceFile = await getResult(`model User {
                count Int @id @default(1)
            }`);
        const sourceText = sourceFile.getText();
        stringContains(
            '@Field(() => ID, { nullable: false, defaultValue: 1, description: undefined })',
            sourceText,
        );
    });

    it('self relation', async () => {
        sourceFile = await getResult(`
            model User {
                id  String  @id
                following   User[]   @relation("UserFollows", references: [id])
                followers   User[]   @relation("UserFollows", references: [id])
            }`);
        stringNotContains('import { User }', sourceFile.getText());
    });

    it('extend existing class', async () => {
        sourceFile = await getResult(
            `model User {
                id String @id
            }`,
            { sourceFileText: `@ObjectType() export class User {}` },
        );
        sourceText = sourceFile.getText();
        assert.strictEqual(sourceText.match(/export class User/g)?.length, 1);
    });

    it('object type description', async () => {
        sourceFile = await getResult(
            `/// User really
            model User {
                id Int @id
            }`,
        );
        sourceText = sourceFile.getText();
        stringContains(`@ObjectType({ description: "User really" })`, sourceText);
    });

    it('property description', async () => {
        sourceFile = await getResult(
            `model User {
                /// user id
                id Int @id
            }`,
        );
        sourceText = sourceFile.getText();
        stringContains(
            `    @Field(() => ID, { nullable: false, description: "user id" }) id!: number`,
            sourceText,
        );
    });

    it('update description to undefined', async () => {
        sourceFile = await getResult(
            `model User {
                id String @id
            }`,
            {
                sourceFileText: `@ObjectType({ description: 'user description' }) export class User {}`,
            },
        );
        sourceText = sourceFile.getText();
        stringContains(`@ObjectType({ description: undefined }) export class User`, sourceText);
    });

    it('model import scalar types', async () => {
        sourceFile = await getResult(`model User {
                id String @id
                count Int
                money Float
                born DateTime
                humanoid Boolean
                // data Json
            }`);
        const imports = new Set(
            sourceFile
                .getImportDeclarations()
                .flatMap((x) => x.getNamedImports())
                .map((x) => x.getName()),
        );
        sourceText = sourceFile.getText();
        stringContains(
            '@Field(() => Boolean, { nullable: false, description: undefined }) humanoid!: boolean',
            sourceText,
        );
        stringContains(
            '@Field(() => Float, { nullable: false, description: undefined }) money!: number',
            sourceText,
        );
        stringContains(
            '@Field(() => Int, { nullable: false, description: undefined }) count!: number',
            sourceText,
        );
        stringContains(
            '@Field(() => String, { nullable: false, description: undefined }) born!: string',
            sourceText,
        );
        assert(imports.has('String') === false, 'Imports should not includes String');
        assert(imports.has('Boolean') === false, 'Imports should not includes Boolean');
        assert(imports.has('User') === false, 'Imports should not includes User');
        assert(imports.has('Int') === true, 'Imports should includes Int');
        assert(imports.has('Float') === true, 'Imports should includes Float');
    });
});
