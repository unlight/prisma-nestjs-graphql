import { ImportSpecifierStructure, Project, SourceFile } from 'ts-morph';
import { beforeAll, describe, expect, it } from 'vitest';

import { chain } from '../helpers/utils.ts';
import {
  getPropertyStructure,
  testSourceFile,
  testSourceFileLegacy,
} from './helpers.ts';
import { testGenerate } from './test-generate.ts';

let project: Project;
let sourceFiles: SourceFile[];
let sourceFile: SourceFile;

describe('one model with self reference', () => {
  beforeAll(async () => {
    ({ project, sourceFiles } = await testGenerate({
      schema: `model User {
                  id     Int    @id
                  parentId Int
                  parent User   @relation("UserToUser", fields: [parentId], references: [id])
                  user   User[] @relation("UserToUser")
                }`,
    }));
  });

  it('with relation input', () => {
    const s = testSourceFileLegacy({
      file: 'user-order-by-with-relation.input.ts',
      project,
    });

    expect(s.namedImports).not.toContainEqual(
      expect.objectContaining({
        name: 'UserOrderByWithRelationInput',
      }),
    );
  });

  describe('model', () => {
    it('should not contain import to self file', () => {
      const s = testSourceFileLegacy({ file: 'user.model.ts', project });
      expect(s.namedImports).not.toContainEqual(
        expect.objectContaining({ name: 'User' }),
      );
    });

    it('imports should contain user count', () => {
      const s = testSourceFileLegacy({ file: 'user.model.ts', project });
      expect(s.namedImports).toContainEqual({
        name: 'UserCount',
        specifier: './user-count.output',
      });
    });
  });

  describe('user list relation filter', () => {
    beforeAll(() => {
      sourceFile = project.getSourceFile(s =>
        s.getFilePath().endsWith('/user-list-relation-filter.input.ts'),
      )!;
    });

    it('every', () => {
      const structure = getPropertyStructure(sourceFile, 'every');
      expect(structure?.type).toEqual('Identity<UserWhereInput>');
    });

    it('some', () => {
      const structure = getPropertyStructure(sourceFile, 'some');
      expect(structure?.type).toEqual('Identity<UserWhereInput>');
    });

    it('none', () => {
      const structure = getPropertyStructure(sourceFile, 'none');
      expect(structure?.type).toEqual('Identity<UserWhereInput>');
    });
  });
});

describe('property type should be forward referenceced', () => {
  beforeAll(async () => {
    ({ project, sourceFiles } = await testGenerate({
      options: [],
      schema: `
        model User {
         id Int @id
         parentId Int
         parent User @relation("UserToUser", fields: [parentId], references: [id])
         user User[] @relation("UserToUser")
        }`,
    }));
  });

  it('list relation', () => {
    const { importDeclarations, propertyMap, sourceText } = testSourceFile({
      file: 'user-list-relation-filter.input.ts',
      project,
    });

    expect(propertyMap.every.type).toEqual('Identity<UserWhereInput>');
    expect(propertyMap.some.type).toEqual('Identity<UserWhereInput>');
    expect(propertyMap.none.type).toEqual('Identity<UserWhereInput>');

    const identityTypeImport = chain(importDeclarations)
      .find({ moduleSpecifier: 'identity-type' })
      .value();

    expect(identityTypeImport).toBeDefined();
    expect(identityTypeImport.isTypeOnly, 'isTypeOnly').toEqual(true);
    expect(identityTypeImport.moduleSpecifier).toEqual('identity-type');

    const namedImport = chain(
      identityTypeImport.namedImports as ImportSpecifierStructure[],
    )
      .castArray()
      .first()
      .value();

    expect(namedImport.name).toEqual('Identity');
    expect(namedImport.isTypeOnly, 'isTypeOnly').toEqual(false);
  });

  it.skip('where input', () => {
    const { sourceClass, sourceText } = testSourceFile({
      file: 'user-list-relation-filter.input.ts',
      project,
    });
  });
});
