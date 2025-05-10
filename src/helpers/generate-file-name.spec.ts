import expect from 'expect';

import { generateFileName } from './generate-file-name';

describe('generateFileName', () => {
  it('plural type model', () => {
    const result = generateFileName({
      getModelName: () => 'User',
      name: 'User',
      template: '{model}/{plural.type}/{name}.{type}.ts',
      type: 'model',
    });
    expect(result).toEqual('user/models/user.model.ts');
  });

  it('plural type input', () => {
    const result = generateFileName({
      getModelName: () => 'User',
      name: 'UserWhereInput',
      template: '{model}/{plural.type}/{name}.{type}.ts',
      type: 'input',
    });
    expect(result).toEqual('user/inputs/user-where.input.ts');
  });

  it('plural type enum', () => {
    const result = generateFileName({
      getModelName: () => 'prisma',
      name: 'Role',
      template: '{model}/{plural.type}/{name}.{type}.ts',
      type: 'enum',
    });
    expect(result).toEqual('prisma/enums/role.enum.ts');
  });
});
