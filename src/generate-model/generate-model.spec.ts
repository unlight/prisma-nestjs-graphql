import assert from 'assert';
import { Project, QuoteKind, SourceFile } from 'ts-morph';

import { generateModel } from '../generate-model';
import { generatorOptions, stringContains, stringNotContains } from '../testing';

describe('generate models', () => {
    let sourceFile: SourceFile;
    let sourceText: string;
    let imports: { name: string; specifier: string }[];
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
        sourceText = sourceFile.getText();
        imports = sourceFile.getImportDeclarations().flatMap((d) =>
            d.getNamedImports().map((i) => ({
                name: i.getName(),
                specifier: d.getModuleSpecifierValue(),
            })),
        );
    }

    it('model', async () => {
        await getResult(`model User {
                id String @id
            }`);
        assert(imports.find((x) => x.name === 'ObjectType' && x.specifier === '@nestjs/graphql'));
        assert(imports.find((x) => x.name === 'ID' && x.specifier === '@nestjs/graphql'));
        assert(imports.find((x) => x.name === 'Field' && x.specifier === '@nestjs/graphql'));
        stringContains('@Field(() => ID, { nullable: false, description: undefined })', sourceText);
        stringContains('id!: string', sourceText);
    });

    it('field nullable', async () => {
        await getResult(`model User {
                id Int @id
                image String?
            }`);
        const sourceText = sourceFile.getText();
        stringContains(
            '@Field(() => String, { nullable: true, description: undefined })',
            sourceText,
        );
        stringContains('image?: string', sourceText);
    });

    it('default value', async () => {
        await getResult(`model User {
                count Int @id @default(1)
            }`);
        const sourceText = sourceFile.getText();

        const struct = sourceFile.getClass('User')?.getProperty('count')?.getStructure();
        const args = struct?.decorators?.[0].arguments;
        stringContains('nullable: false', args?.[1]);
        stringContains('defaultValue: 1', args?.[1]);
        stringContains('description: undefined', args?.[1]);
        assert.strictEqual(args?.[0], '() => ID');
    });

    it('self relation', async () => {
        await getResult(`
            model User {
                id  String  @id
                following   User[]   @relation("UserFollows", references: [id])
                followers   User[]   @relation("UserFollows", references: [id])
            }`);
        stringNotContains('import { User }', sourceFile.getText());
    });

    it('extend existing class', async () => {
        await getResult(
            `model User {
                id String @id
            }`,
            { sourceFileText: `@ObjectType() export class User {}` },
        );
        sourceText = sourceFile.getText();
        assert.strictEqual(sourceText.match(/export class User/g)?.length, 1);
    });

    it('object type description', async () => {
        await getResult(
            `/// User really
            model User {
                id Int @id
            }`,
        );
        sourceText = sourceFile.getText();
        stringContains(`@ObjectType({ description: "User really" })`, sourceText);
    });

    it('property description', async () => {
        await getResult(
            `model User {
                /// user id
                id Int @id
            }`,
        );
        const struct = sourceFile.getClass('User')?.getProperty('id')?.getStructure();
        const args = struct?.decorators?.[0].arguments;
        stringContains('nullable: false', args?.[1]);
        stringContains('description: "user id"', args?.[1]);
        assert.strictEqual(args?.[0], '() => ID');
    });

    it('update description to undefined', async () => {
        await getResult(
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
        await getResult(`model User {
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
            '@Field(() => String, { nullable: false, description: undefined }) born!: Date | string',
            sourceText,
        );
        assert(imports.has('String') === false, 'Imports should not includes String');
        assert(imports.has('Boolean') === false, 'Imports should not includes Boolean');
        assert(imports.has('User') === false, 'Imports should not includes User');
        assert(imports.has('Int') === true, 'Imports should includes Int');
        assert(imports.has('Float') === true, 'Imports should includes Float');
    });

    it('model scalar json', async () => {
        await getResult(`model User {
                id String @id
                data Json
            }`);
        sourceText = sourceFile.getText();
        const propertyDeclaration = sourceFile.getClass('User')?.getProperty('data');
        assert(propertyDeclaration);
        stringContains(`@Field(() => GraphQLJSON`, propertyDeclaration.getText());

        const importDeclaration = sourceFile.getImportDeclaration(
            (d) => d.getModuleSpecifier().getLiteralValue() === 'graphql-type-json',
        );
        assert(importDeclaration, 'import graphql-type-json should exists');
        const importSpecifier = importDeclaration
            .getNamedImports()
            .find((x) => x.getName() === 'GraphQLJSON');
        assert(importSpecifier, 'const GraphQLJSON should be imported');
    });

    it('with related', async () => {
        await getResult(`
            model User {
              id        Int      @id
              posts     Post[]
            }
            model Post {
              id        Int      @id
            }`);
        sourceText = sourceFile.getText();
        const property = sourceFile.getClass('User')?.getProperty('posts');
        assert(property, 'Property posts should exists');
        assert.strictEqual(property.getStructure().type, 'Array<Post>');
    });
});
