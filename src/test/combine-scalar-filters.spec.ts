import { Project, SourceFile } from 'ts-morph';
import { beforeAll, describe, expect, it } from 'vitest';

import { testSourceFile } from './helpers.ts';
import { testGenerate } from './test-generate.ts';

let project: Project;
let sourceFiles: SourceFile[];

it('combine scalar filters for simple model', async () => {
  // Arrange/Act
  ({ project, sourceFiles } = await testGenerate({
    options: ['combineScalarFilters = true', 'noAtomicOperations = true'],
    schema: `
      model User {
        id Int @id
      }
    `,
  }));
  // Assert
  const intWithAggregatesFilter = testSourceFile({
    class: 'IntWithAggregatesFilter',
    project,
  });
  const intFilter =
    intWithAggregatesFilter.getNamedImports('./int-filter.input');
  expect(intFilter).toHaveLength(1);
  expect(intFilter[0].name).toEqual('IntFilter');
});

describe('combine scalar filters', () => {
  beforeAll(async () => {
    ({ project, sourceFiles } = await testGenerate({
      options: [
        `outputFilePattern = "{name}.{type}.ts"`,
        `combineScalarFilters = true`,
      ],
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
    const { propertyMap } = testSourceFile({
      file: 'user-where.input.ts',
      project,
    });
    expect(propertyMap.count.type).toBe('Identity<IntFilter>');
  });

  it('user-where.input bio', () => {
    const { propertyMap } = testSourceFile({
      file: 'user-where.input.ts',
      project,
    });
    expect(propertyMap.bio.type).toBe('Identity<StringFilter>');
  });

  it('user-where.input money', () => {
    const { propertyMap } = testSourceFile({
      file: 'user-where.input.ts',
      project,
    });
    expect(propertyMap.money.type).toBe('Identity<DecimalFilter>');
  });

  it('user-where.input rating', () => {
    const { propertyMap } = testSourceFile({
      file: 'user-where.input.ts',
      project,
    });
    expect(propertyMap.rating.type).toBe('Identity<FloatFilter>');
  });

  it('user-where.input born', () => {
    const { propertyMap } = testSourceFile({
      file: 'user-where.input.ts',
      project,
    });
    expect(propertyMap.born.type).toBe('Identity<DateTimeFilter>');
  });

  it('user-where.input humanoid', () => {
    const { propertyMap } = testSourceFile({
      file: 'user-where.input.ts',
      project,
    });
    expect(propertyMap.humanoid.type).toBe('Identity<BoolFilter>');
  });

  it('user-where.input role', () => {
    const { propertyMap } = testSourceFile({
      file: 'user-where.input.ts',
      project,
    });
    expect(propertyMap.role.type).toBe('Identity<EnumRoleFilter>');
  });

  it('user scalar where with aggregates id', () => {
    const { propertyMap } = testSourceFile({
      file: 'user-scalar-where-with-aggregates.input.ts',
      project,
    });
    expect(propertyMap.id.type).toBe('Identity<StringWithAggregatesFilter>');
  });

  it('user scalar where with aggregates bio', () => {
    const { propertyMap } = testSourceFile({
      file: 'user-scalar-where-with-aggregates.input.ts',
      project,
    });
    expect(propertyMap.bio.type).toBe('Identity<StringWithAggregatesFilter>');
  });

  it('user scalar where with aggregates count', () => {
    const { propertyMap } = testSourceFile({
      file: 'user-scalar-where-with-aggregates.input.ts',
      project,
    });
    expect(propertyMap.count.type).toBe('Identity<IntWithAggregatesFilter>');
  });

  it('user scalar where with aggregates rating', () => {
    const { propertyMap } = testSourceFile({
      file: 'user-scalar-where-with-aggregates.input.ts',
      project,
    });
    expect(propertyMap.rating.type).toBe('Identity<FloatWithAggregatesFilter>');
  });

  it('user scalar where with aggregates born', () => {
    const { propertyMap } = testSourceFile({
      file: 'user-scalar-where-with-aggregates.input.ts',
      project,
    });
    expect(propertyMap.born.type).toBe(
      'Identity<DateTimeWithAggregatesFilter>',
    );
  });

  it('user scalar where with aggregates humanoid', () => {
    const { propertyMap } = testSourceFile({
      file: 'user-scalar-where-with-aggregates.input.ts',
      project,
    });
    expect(propertyMap.humanoid.type).toBe(
      'Identity<BoolWithAggregatesFilter>',
    );
  });

  it('user scalar where with aggregates money', () => {
    const { propertyMap } = testSourceFile({
      file: 'user-scalar-where-with-aggregates.input.ts',
      project,
    });
    expect(propertyMap.money.type).toBe(
      'Identity<DecimalWithAggregatesFilter>',
    );
  });

  it('user scalar where with aggregates data', () => {
    const { propertyMap } = testSourceFile({
      file: 'user-scalar-where-with-aggregates.input.ts',
      project,
    });
    expect(propertyMap.data.type).toBe('Identity<JsonWithAggregatesFilter>');
  });

  it('user scalar where with aggregates role', () => {
    const { propertyMap } = testSourceFile({
      file: 'user-scalar-where-with-aggregates.input.ts',
      project,
    });

    expect(propertyMap.role.type).toBe(
      'Identity<EnumRoleWithAggregatesFilter>',
    );
  });
});

describe('combine scalar filters on array', () => {
  beforeAll(async () => {
    ({ project, sourceFiles } = await testGenerate({
      options: [
        `outputFilePattern = "{name}.{type}.ts"`,
        `combineScalarFilters = true`,
      ],
      schema: `
            model User {
                id String @id
                str String[]
                int Int?
            }
            `,
    }));
  });

  it('smoke', () => {
    'no errors';
  });
});

describe('empty relation filter input', () => {
  beforeAll(async () => {
    ({ project, sourceFiles } = await testGenerate({
      options: [`combineScalarFilters = true`],
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
    }));
  });

  it('smoke', () => {
    'no errors';
  });
});
