import { chain } from 'lodash';
import { ImportSpecifierStructure, Project, SourceFile } from 'ts-morph';
import { beforeAll, describe, expect, it } from 'vitest';

import { testSourceFile } from './helpers.ts';
import { testGenerate } from './test-generate.ts';

let project: Project;
let sourceFiles: SourceFile[];

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
    const { classFile, sourceText } = testSourceFile({
      file: 'user-list-relation-filter.input.ts',
      project,
    });
  });
});
