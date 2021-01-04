import assert from 'assert';
import expect from 'expect';
import { Project, QuoteKind, SourceFile } from 'ts-morph';

import { generatorOptions } from '../testing';
import { generateEnum } from './generate-enum';

describe('generate enum', () => {
    let sourceFile: SourceFile;
    let sourceText: string;
    type Options = {
        schema: string;
        sourceFileText?: string;
        name: string;
    };
    async function getResult(options: Options) {
        const { name, schema, sourceFileText } = options;
        const project = new Project({
            useInMemoryFileSystem: true,
            manipulationSettings: { quoteKind: QuoteKind.Single },
        });
        const {
            prismaClientDmmf: {
                schema: { enumTypes },
            },
        } = await generatorOptions(schema);
        const enums = [...(enumTypes.model || []), ...enumTypes.prisma];
        const enumerable = enums.find(x => x.name === name);
        assert(enumerable, `Cannot find ${name} enumerable`);
        sourceFile = project.createSourceFile('0.ts', sourceFileText);
        generateEnum({ enumerable, sourceFile });
        sourceText = sourceFile.getText();
    }

    it('enum sort order', async () => {
        await getResult({
            schema: `
                enum Role {
                  USER
                  ADMIN
                }
                model User {
                  id    Int   @id
                  role  Role
                }
            `,
            name: 'SortOrder',
        });
        expect(sourceText).toContain(
            `import { registerEnumType } from '@nestjs/graphql'`,
        );
        expect(sourceText).toContain(
            `registerEnumType(SortOrder, { name: 'SortOrder' })`,
        );
        expect(sourceFile.getEnum('SortOrder')?.getStructure()?.members).toContainEqual(
            expect.objectContaining({
                name: 'asc',
                initializer: '"asc"',
            }),
        );
        expect(sourceFile.getEnum('SortOrder')?.getStructure()?.members).toContainEqual(
            expect.objectContaining({
                name: 'desc',
                initializer: '"desc"',
            }),
        );
    });

    it('enum role', async () => {
        await getResult({
            schema: `
                enum Role {
                  USER
                  ADMIN
                }
                model User {
                  id    Int   @id
                  role  Role
                }
            `,
            name: 'Role',
        });
        expect(sourceText).toContain(`registerEnumType(Role, { name: 'Role' })`);
    });

    it('enum with exists source', async () => {
        await getResult({
            schema: `
                enum Role {
                  USER
                }
                model User {
                  id    Int   @id
                  role  Role
                }
            `,
            name: 'Role',
            sourceFileText: `
            export enum Role { USER = "USER" }
            registerEnumType(Role, { name: 'Role' })
            `,
        });
        assert.strictEqual(
            sourceText.match(/registerEnumType/g)?.length,
            2,
            'Only import and call once should exists',
        );
        assert.strictEqual(sourceText.match(/enum Role/g)?.length, 1);
    });
});
