import expect from 'expect';

import { generateFileName } from './generate-file-name';

describe('generateFileName', () => {
  it('plural type model', () => {
    const result = generateFileName({
      models: ['User'],
      name: 'User',
      type: 'model',
      template: '{feature}/{plural.type}/{name}.{type}.ts',
    });
    expect(result).toEqual('user/models/user.model.ts');
  });

  it('plural type input', () => {
    const result = generateFileName({
      models: ['User'],
      name: 'UserWhereInput',
      type: 'input',
      template: '{feature}/{plural.type}/{name}.{type}.ts',
    });
    expect(result).toEqual('user/inputs/user-where.input.ts');
  });

  it('plural type enum', () => {
    const result = generateFileName({
      models: ['User'],
      name: 'Role',
      type: 'enum',
      template: '{feature}/{plural.type}/{name}.{type}.ts',
    });
    expect(result).toEqual('prisma/enums/role.enum.ts');
  });
});
