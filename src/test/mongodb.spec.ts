import expect from 'expect';
import { Project, SourceFile } from 'ts-morph';

import { testSourceFile } from './helpers';
import { testGenerate } from './test-generate';

let project: Project;
let sourceFiles: SourceFile[];

describe('type has been treated as model #99', () => {
    before(async () => {
        ({ project, sourceFiles } = await testGenerate({
            provider: 'mongodb',
            schema: `
                model User {
                  id String @id @default(auto()) @map("_id") @db.ObjectId
                  preferences Preference[]
                }
                type Preference {
                  name String
                  value String
                }
            `,
            options: [
                // `outputFilePattern = "{name}.{type}.ts"`
            ],
        }));
    });

    it('smoke', () => {
        expect(project).toBeTruthy();
    });

    it('files', () => {
        const files = project.getSourceFiles().map(s => s.getBaseName());
        expect(files.length).toBeGreaterThan(0);
    });

    it('user model', () => {
        const s = testSourceFile({
            project,
            file: 'user.model.ts',
            property: 'preferences',
        });
        expect(s.namedImports).toContainEqual({
            name: 'Preference',
            specifier: '../preference/preference.model',
        });
        expect(s.property?.type).toEqual('Array<Preference>');
        expect(s.fieldDecoratorType).toEqual('() => [Preference]');
    });
});
