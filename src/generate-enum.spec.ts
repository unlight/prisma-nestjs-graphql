import assert from 'assert';
import { Project, QuoteKind, SourceFile } from 'ts-morph';

import { generateEnum } from './generate-enum';
import { generatorOptions, stringContains } from './testing';

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
                schema: { enums },
            },
        } = await generatorOptions(schema);
        const enumerable = enums.find((x) => x.name === name);
        assert(enumerable);
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
        stringContains(`import { registerEnumType } from '@nestjs/graphql'`, sourceText);
        stringContains(
            `registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })`,
            sourceText,
        );
        stringContains(`export enum SortOrder { asc = "asc", desc = "desc" }`, sourceText);
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
        stringContains(
            `registerEnumType(Role, { name: 'Role', description: undefined })`,
            sourceText,
        );
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
        assert.equal(
            sourceText.match(/registerEnumType/g)?.length,
            2,
            'Only import and call once should exists',
        );
        assert.equal(sourceText.match(/enum Role/g)?.length, 1);
    });
});
