import expect from 'expect';
import { Project, SourceFile } from 'ts-morph';

import { testSourceFile } from './helpers';
import { testGenerate } from './test-generate';

let project: Project;
let sourceFiles: SourceFile[];

describe('combine scalar filters', () => {
  before(async () => {
    ({ project, sourceFiles } = await testGenerate({
      schema: `
            model User {
                id String @id
                bio String?
                count Int?
                rating Float?
                born DateTime?
                humanoid Boolean?
                money Decimal?
                data Json?
                bytes Bytes?
                bigint BigInt?
                role Role?
            }
            enum Role {
                USER
                ADMIN
            }
            `,
      options: [
        `outputFilePattern = "{name}.{type}.ts"`,
        `combineScalarFilters = true`,
      ],
    }));
  });

  it('files should not contain nested and nullable', () => {
    const filePaths = sourceFiles
      .map(s => s.getFilePath().slice(1))
      .filter(
        p =>
          !(
            p.endsWith('field-update-operations.input.ts') ||
            p.endsWith('json-null-value-input.enum.ts')
          ),
      );

    for (const filePath of filePaths) {
      expect(filePath).not.toContain('nested');
      expect(filePath).not.toContain('nullable');
    }
  });

  it('source file should not reference bogus type', () => {
    for (const sourceFile of sourceFiles) {
      const types = sourceFile
        .getClass(() => true)
        ?.getProperties()
        .map(p => String(p.getStructure().type))
        .filter((t: string) => t.endsWith('Filter') || t.endsWith('Filter>'));
      if (types) {
        for (const type of types) {
          expect(type).not.toContain('Nested');
          expect(type).not.toContain('Nullable');
        }
      }
    }
  });

  it('user-where.input count', () => {
    const s = testSourceFile({
      project,
      file: 'user-where.input.ts',
      property: 'count',
    });
    expect(s.property?.type).toBe('IntFilter');
  });

  it('user-where.input bio', () => {
    const s = testSourceFile({
      project,
      file: 'user-where.input.ts',
      property: 'bio',
    });
    expect(s.property?.type).toBe('StringFilter');
  });

  it('user-where.input money', () => {
    const s = testSourceFile({
      project,
      file: 'user-where.input.ts',
      property: 'money',
    });
    expect(s.property?.type).toBe('DecimalFilter');
  });

  it('user-where.input rating', () => {
    const s = testSourceFile({
      project,
      file: 'user-where.input.ts',
      property: 'rating',
    });
    expect(s.property?.type).toBe('FloatFilter');
  });

  it('user-where.input born', () => {
    const s = testSourceFile({
      project,
      file: 'user-where.input.ts',
      property: 'born',
    });
    expect(s.property?.type).toBe('DateTimeFilter');
  });

  it('user-where.input humanoid', () => {
    const s = testSourceFile({
      project,
      file: 'user-where.input.ts',
      property: 'humanoid',
    });
    expect(s.property?.type).toBe('BoolFilter');
  });

  it('user-where.input role', () => {
    const s = testSourceFile({
      project,
      file: 'user-where.input.ts',
      property: 'role',
    });
    expect(s.property?.type).toBe('EnumRoleFilter');
  });

  it('user scalar where with aggregates id', () => {
    const s = testSourceFile({
      project,
      file: 'user-scalar-where-with-aggregates.input.ts',
      property: 'id',
    });
    expect(s.property?.type).toBe('StringWithAggregatesFilter');
  });

  it('user scalar where with aggregates bio', () => {
    const s = testSourceFile({
      project,
      file: 'user-scalar-where-with-aggregates.input.ts',
      property: 'bio',
    });
    expect(s.property?.type).toBe('StringWithAggregatesFilter');
  });

  it('user scalar where with aggregates count', () => {
    const s = testSourceFile({
      project,
      file: 'user-scalar-where-with-aggregates.input.ts',
      property: 'count',
    });
    expect(s.property?.type).toBe('IntWithAggregatesFilter');
  });

  it('user scalar where with aggregates rating', () => {
    const s = testSourceFile({
      project,
      file: 'user-scalar-where-with-aggregates.input.ts',
      property: 'rating',
    });
    expect(s.property?.type).toBe('FloatWithAggregatesFilter');
  });

  it('user scalar where with aggregates born', () => {
    const s = testSourceFile({
      project,
      file: 'user-scalar-where-with-aggregates.input.ts',
      property: 'born',
    });
    expect(s.property?.type).toBe('DateTimeWithAggregatesFilter');
  });

  it('user scalar where with aggregates humanoid', () => {
    const s = testSourceFile({
      project,
      file: 'user-scalar-where-with-aggregates.input.ts',
      property: 'humanoid',
    });
    expect(s.property?.type).toBe('BoolWithAggregatesFilter');
  });

  it('user scalar where with aggregates money', () => {
    const s = testSourceFile({
      project,
      file: 'user-scalar-where-with-aggregates.input.ts',
      property: 'money',
    });
    expect(s.property?.type).toBe('DecimalWithAggregatesFilter');
  });

  it('user scalar where with aggregates data', () => {
    const s = testSourceFile({
      project,
      file: 'user-scalar-where-with-aggregates.input.ts',
      property: 'data',
    });
    expect(s.property?.type).toBe('JsonWithAggregatesFilter');
  });

  it('user scalar where with aggregates role', () => {
    const s = testSourceFile({
      project,
      file: 'user-scalar-where-with-aggregates.input.ts',
      property: 'role',
    });
    expect(s.property?.type).toBe('EnumRoleWithAggregatesFilter');
  });
});

describe('combine scalar filters on array', () => {
  before(async () => {
    ({ project, sourceFiles } = await testGenerate({
      schema: `
            model User {
                id String @id
                str String[]
                int Int?
            }
            `,
      options: [
        `outputFilePattern = "{name}.{type}.ts"`,
        `combineScalarFilters = true`,
      ],
    }));
  });

  it('smoke', () => {
    'no errors';
  });
});

describe('empty relation filter input', () => {
  before(async () => {
    ({ project, sourceFiles } = await testGenerate({
      schema: `
        model Article {
          id             String    @id @default(cuid())
          comments       Comment[]
        }
        model Comment {
          id        String   @id @default(cuid())
          article   Article? @relation(fields: [articleId], references: [id])
          articleId String?
        }
        `,
      options: [`combineScalarFilters = true`],
    }));
  });

  it('smoke', () => {
    'no errors';
  });
});
