import expect from 'expect';
import { Project, SourceFile } from 'ts-morph';

import {
  buildDependencyGraph,
  detectCircularDependencies,
  hasCircularDependency,
  getModelsInCircularDeps,
} from '../helpers/detect-circular-deps';
import { Model } from '../types';
import { testSourceFile } from './helpers';
import { testGenerate } from './test-generate';

let project: Project;
let sourceFiles: SourceFile[];

describe('circular dependency detection', () => {
  it('should detect circular dependencies between two models', () => {
    const models = [
      {
        name: 'User',
        fields: [
          { name: 'id', type: 'Int', kind: 'scalar', isRequired: true, isList: false, isUnique: false, isId: true, isReadOnly: false, hasDefaultValue: false },
          { name: 'articles', type: 'Article', kind: 'object', isRequired: false, isList: true, isUnique: false, isId: false, isReadOnly: false, hasDefaultValue: false },
        ],
        primaryKey: null,
        uniqueFields: [],
        uniqueIndexes: [],
        dbName: null,
        schema: null,
        isGenerated: false,
      },
      {
        name: 'Article',
        fields: [
          { name: 'id', type: 'Int', kind: 'scalar', isRequired: true, isList: false, isUnique: false, isId: true, isReadOnly: false, hasDefaultValue: false },
          { name: 'author', type: 'User', kind: 'object', isRequired: true, isList: false, isUnique: false, isId: false, isReadOnly: false, hasDefaultValue: false },
        ],
        primaryKey: null,
        uniqueFields: [],
        uniqueIndexes: [],
        dbName: null,
        schema: null,
        isGenerated: false,
      },
    ] as unknown as Model[];

    const graph = buildDependencyGraph(models);
    const circularDeps = detectCircularDependencies(graph);

    expect(circularDeps.size).toBeGreaterThan(0);
    expect(hasCircularDependency(circularDeps, 'User', 'Article')).toBe(true);
    expect(hasCircularDependency(circularDeps, 'Article', 'User')).toBe(true);
  });

  it('should not detect circular dependency for unrelated models', () => {
    const models = [
      {
        name: 'User',
        fields: [
          { name: 'id', type: 'Int', kind: 'scalar', isRequired: true, isList: false, isUnique: false, isId: true, isReadOnly: false, hasDefaultValue: false },
        ],
        primaryKey: null,
        uniqueFields: [],
        uniqueIndexes: [],
        dbName: null,
        schema: null,
        isGenerated: false,
      },
      {
        name: 'Article',
        fields: [
          { name: 'id', type: 'Int', kind: 'scalar', isRequired: true, isList: false, isUnique: false, isId: true, isReadOnly: false, hasDefaultValue: false },
        ],
        primaryKey: null,
        uniqueFields: [],
        uniqueIndexes: [],
        dbName: null,
        schema: null,
        isGenerated: false,
      },
    ] as unknown as Model[];

    const graph = buildDependencyGraph(models);
    const circularDeps = detectCircularDependencies(graph);

    expect(circularDeps.size).toBe(0);
    expect(hasCircularDependency(circularDeps, 'User', 'Article')).toBe(false);
  });

  it('should detect self-referencing model', () => {
    const models = [
      {
        name: 'User',
        fields: [
          { name: 'id', type: 'Int', kind: 'scalar', isRequired: true, isList: false, isUnique: false, isId: true, isReadOnly: false, hasDefaultValue: false },
          { name: 'parent', type: 'User', kind: 'object', isRequired: false, isList: false, isUnique: false, isId: false, isReadOnly: false, hasDefaultValue: false },
        ],
        primaryKey: null,
        uniqueFields: [],
        uniqueIndexes: [],
        dbName: null,
        schema: null,
        isGenerated: false,
      },
    ] as unknown as Model[];

    const graph = buildDependencyGraph(models);
    // Self-reference is not a circular dependency between different models
    expect(graph.get('User')?.has('User')).toBe(false);
  });

  it('should get all models involved in circular dependencies', () => {
    const models = [
      {
        name: 'User',
        fields: [
          { name: 'id', type: 'Int', kind: 'scalar', isRequired: true, isList: false, isUnique: false, isId: true, isReadOnly: false, hasDefaultValue: false },
          { name: 'articles', type: 'Article', kind: 'object', isRequired: false, isList: true, isUnique: false, isId: false, isReadOnly: false, hasDefaultValue: false },
        ],
        primaryKey: null,
        uniqueFields: [],
        uniqueIndexes: [],
        dbName: null,
        schema: null,
        isGenerated: false,
      },
      {
        name: 'Article',
        fields: [
          { name: 'id', type: 'Int', kind: 'scalar', isRequired: true, isList: false, isUnique: false, isId: true, isReadOnly: false, hasDefaultValue: false },
          { name: 'author', type: 'User', kind: 'object', isRequired: true, isList: false, isUnique: false, isId: false, isReadOnly: false, hasDefaultValue: false },
        ],
        primaryKey: null,
        uniqueFields: [],
        uniqueIndexes: [],
        dbName: null,
        schema: null,
        isGenerated: false,
      },
      {
        name: 'Tag',
        fields: [
          { name: 'id', type: 'Int', kind: 'scalar', isRequired: true, isList: false, isUnique: false, isId: true, isReadOnly: false, hasDefaultValue: false },
        ],
        primaryKey: null,
        uniqueFields: [],
        uniqueIndexes: [],
        dbName: null,
        schema: null,
        isGenerated: false,
      },
    ] as unknown as Model[];

    const graph = buildDependencyGraph(models);
    const circularDeps = detectCircularDependencies(graph);
    const modelsInCycles = getModelsInCircularDeps(circularDeps);

    expect(modelsInCycles.has('User')).toBe(true);
    expect(modelsInCycles.has('Article')).toBe(true);
    expect(modelsInCycles.has('Tag')).toBe(false);
  });
});

describe('ESM compatible mode', () => {
  describe('with circular dependencies', () => {
    before(async () => {
      ({ project, sourceFiles } = await testGenerate({
        schema: `
          model User {
            id Int @id
            articles Article[]
          }
          model Article {
            id Int @id
            authorId Int
            author User @relation(fields: [authorId], references: [id])
          }
        `,
        options: ['esmCompatible = true'],
      }));
    });

    it('should generate type-registry.ts file', () => {
      const registryFile = project.getSourceFile(s =>
        s.getFilePath().endsWith('type-registry.ts'),
      );
      expect(registryFile).toBeDefined();
      const text = registryFile?.getText();
      expect(text).toContain('registerType');
      expect(text).toContain('getType');
    });

    it('user model should have type-only import for Article', () => {
      const s = testSourceFile({ file: 'user.model.ts', project });
      const importDeclarations = s.sourceFile.getImportDeclarations();

      // Should have type-only import for Article
      const articleImport = importDeclarations.find(d =>
        d.getModuleSpecifierValue().includes('article')
      );
      expect(articleImport?.isTypeOnly()).toBe(true);
    });

    it('user model should import registerType and getType', () => {
      const s = testSourceFile({ file: 'user.model.ts', project });
      expect(s.namedImports).toContainEqual(
        expect.objectContaining({ name: 'registerType' }),
      );
      expect(s.namedImports).toContainEqual(
        expect.objectContaining({ name: 'getType' }),
      );
    });

    it('user model should use getType for Article field', () => {
      const s = testSourceFile({ file: 'user.model.ts', project, property: 'articles' });
      expect(s.fieldDecoratorType).toContain("getType('Article')");
    });

    it('user model should call registerType', () => {
      const s = testSourceFile({ file: 'user.model.ts', project });
      expect(s.sourceText).toContain("registerType('User', User)");
    });

    it('article model should have type-only import for User', () => {
      const s = testSourceFile({ file: 'article.model.ts', project });
      const importDeclarations = s.sourceFile.getImportDeclarations();

      // Should have type-only import for User
      const userImport = importDeclarations.find(d =>
        d.getModuleSpecifierValue().includes('user')
      );
      expect(userImport?.isTypeOnly()).toBe(true);
    });

    it('article model should use getType for User field', () => {
      const s = testSourceFile({ file: 'article.model.ts', project, property: 'author' });
      expect(s.fieldDecoratorType).toContain("getType('User')");
    });

    it('article model should call registerType', () => {
      const s = testSourceFile({ file: 'article.model.ts', project });
      expect(s.sourceText).toContain("registerType('Article', Article)");
    });
  });

  describe('without circular dependencies', () => {
    before(async () => {
      ({ project, sourceFiles } = await testGenerate({
        schema: `
          model User {
            id Int @id
            name String
          }
          model Tag {
            id Int @id
            name String
          }
        `,
        options: ['esmCompatible = true'],
      }));
    });

    it('should generate type-registry.ts file', () => {
      const registryFile = project.getSourceFile(s =>
        s.getFilePath().endsWith('type-registry.ts'),
      );
      expect(registryFile).toBeDefined();
    });

    it('user model should not have type-only imports for other models', () => {
      const s = testSourceFile({ file: 'user.model.ts', project });
      const importDeclarations = s.sourceFile.getImportDeclarations();

      // Should not have any imports to other models
      const modelImport = importDeclarations.find(d =>
        d.getModuleSpecifierValue().includes('tag')
      );
      expect(modelImport).toBeUndefined();
    });

    it('user model should still call registerType', () => {
      const s = testSourceFile({ file: 'user.model.ts', project });
      expect(s.sourceText).toContain("registerType('User', User)");
    });
  });

  describe('disabled (default behavior)', () => {
    before(async () => {
      ({ project, sourceFiles } = await testGenerate({
        schema: `
          model User {
            id Int @id
            articles Article[]
          }
          model Article {
            id Int @id
            authorId Int
            author User @relation(fields: [authorId], references: [id])
          }
        `,
      }));
    });

    it('should not generate type-registry.ts file', () => {
      const registryFile = project.getSourceFile(s =>
        s.getFilePath().endsWith('type-registry.ts'),
      );
      expect(registryFile).toBeUndefined();
    });

    it('user model should have regular import for Article', () => {
      const s = testSourceFile({ file: 'user.model.ts', project });
      const importDeclarations = s.sourceFile.getImportDeclarations();

      const articleImport = importDeclarations.find(d =>
        d.getModuleSpecifierValue().includes('article')
      );
      expect(articleImport?.isTypeOnly()).toBe(false);
    });

    it('user model should not import registerType or getType', () => {
      const s = testSourceFile({ file: 'user.model.ts', project });
      expect(s.namedImports).not.toContainEqual(
        expect.objectContaining({ name: 'registerType' }),
      );
      expect(s.namedImports).not.toContainEqual(
        expect.objectContaining({ name: 'getType' }),
      );
    });

    it('user model should use regular type for Article field', () => {
      const s = testSourceFile({ file: 'user.model.ts', project, property: 'articles' });
      expect(s.fieldDecoratorType).toEqual('() => [Article]');
      expect(s.fieldDecoratorType).not.toContain('getType');
    });

    it('user model should not call registerType', () => {
      const s = testSourceFile({ file: 'user.model.ts', project });
      expect(s.sourceText).not.toContain('registerType');
    });
  });
});

describe('three-way circular dependency', () => {
  before(async () => {
    ({ project, sourceFiles } = await testGenerate({
      schema: `
        model User {
          id Int @id
          articles Article[]
        }
        model Article {
          id Int @id
          authorId Int
          author User @relation(fields: [authorId], references: [id])
          comments Comment[]
        }
        model Comment {
          id Int @id
          articleId Int
          article Article @relation(fields: [articleId], references: [id])
          userId Int
        }
      `,
      options: ['esmCompatible = true'],
    }));
  });

  it('should handle multiple circular dependencies', () => {
    const userModel = testSourceFile({ file: 'user.model.ts', project });
    const articleModel = testSourceFile({ file: 'article.model.ts', project });
    const commentModel = testSourceFile({ file: 'comment.model.ts', project });

    // All models should have registerType calls
    expect(userModel.sourceText).toContain("registerType('User', User)");
    expect(articleModel.sourceText).toContain("registerType('Article', Article)");
    expect(commentModel.sourceText).toContain("registerType('Comment', Comment)");
  });
});
