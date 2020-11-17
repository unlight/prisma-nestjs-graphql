import assert from 'assert';
import { expect } from 'chai';
import { Project, QuoteKind, SourceFile } from 'ts-morph';

import { createConfig } from '../generate';
import {
    generatorOptions,
    getImportDeclarations,
    stringContains,
    stringNotContains,
} from '../testing';
import { generateInput } from './generate-input';

describe('generate inputs', () => {
    let sourceFile: SourceFile;
    type Options = {
        schema: string;
        name: string;
        model: string | undefined;
        sourceFileText?: string;
        outputFilePattern?: string;
    };
    const getResult = async (options: Options) => {
        const { schema, name, sourceFileText, ...optionsArgs } = options;
        const project = new Project({
            useInMemoryFileSystem: true,
            manipulationSettings: { quoteKind: QuoteKind.Single },
        });
        const {
            generator,
            prismaClientDmmf: {
                schema: { inputTypes },
            },
        } = await generatorOptions(schema, optionsArgs);
        const inputType = inputTypes.find((x) => x.name === name);
        assert(inputType, `Failed to find ${name}`);
        sourceFile = project.createSourceFile('0.ts', sourceFileText);
        generateInput({
            inputType,
            sourceFile,
            projectFilePath: (args) => `${args.name}.${args.type}.ts`,
            decorator: {
                name: 'InputType',
            },
            config: createConfig(generator.config),
        });
    };
    const struct = (className: string, property: string) =>
        sourceFile.getClass(className)?.getProperty(property)?.getStructure();

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
            'StringFilter | string',
            'id is not nullable in model',
        );
        const decoratorArguments = sourceFile
            .getClass('UserWhereInput')
            ?.getProperty('id')
            ?.getDecorator('Field')
            ?.getCallExpression()
            ?.getArguments();
        assert.strictEqual(decoratorArguments?.[0]?.getText(), '() => StringFilter');
        assert.strictEqual(struct('birth')?.type, 'DateTimeFilter | Date | string');
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
        expect(structure).to.be.ok;
        assert(structure);
        expect(structure.type).to.equal('IntFilter | number');

        const decoratorArguments = sourceFile
            .getClass('UserWhereInput')
            ?.getProperty('age')
            ?.getDecorator('Field')
            ?.getCallExpression()
            ?.getArguments();
        expect(decoratorArguments?.[0]?.getText()).to.equal('() => IntFilter');

        const imports = getImportDeclarations(sourceFile);

        expect(imports).to.deep.include({
            name: 'StringFilter',
            specifier: './StringFilter.input',
        });
        expect(imports).to.deep.include({ name: 'IntFilter', specifier: './IntFilter.input' });
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

        assert.strictEqual(structure('in')?.type, 'Array<string>');
        assert.strictEqual(structure('notIn')?.type, 'Array<string>');
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

        const imports = getImportDeclarations(sourceFile);

        expect(imports).to.deep.include({ name: 'InputType', specifier: '@nestjs/graphql' });
        expect(imports).to.deep.include({ name: 'Int', specifier: '@nestjs/graphql' });
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

        expect(struct('UserListRelationFilter', 'every')?.type).to.equal('UserWhereInput');
        expect(struct('UserListRelationFilter', 'some')?.type).to.equal('UserWhereInput');
        expect(struct('UserListRelationFilter', 'none')?.type).to.equal('UserWhereInput');
    });

    it('relation filter property', async () => {
        await getResult({
            schema: `
            model User {
              id        Int      @id
              posts     Post[]
            }
            model Post {
              id        Int      @id
              author    User    @relation(fields: [authorId], references: [id])
              authorId  Int
            }`,
            name: 'PostWhereInput',
            model: 'Post',
        });
        const property = sourceFile.getClass('PostWhereInput')?.getProperty('author');
        assert(property, 'Property author should exists');
        expect(property.getStructure().type).to.equal('UserRelationFilter | UserWhereInput');

        const imports = getImportDeclarations(sourceFile);
        const importNames = imports.map((x) => x.name);

        expect(importNames).to.include('UserRelationFilter');
    });

    it('enum filter should include enum import', async () => {
        await getResult({
            schema: `
            model User {
              id     String      @id
              role   Role
            }
            enum Role {
                USER
            }
            `,
            name: 'UserWhereInput',
            model: 'User',
        });
        const imports = getImportDeclarations(sourceFile);
        expect(imports).to.deep.include({
            name: 'EnumRoleFilter',
            specifier: './EnumRoleFilter.input',
        });
        expect(imports).to.deep.include({ name: 'Role', specifier: './Role.enum' });
    });
});
