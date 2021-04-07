import expect from 'expect';

import { generateFileName } from './generate-file-name';

describe('generateFileName', () => {
    it('plural type model', () => {
        const result = generateFileName({
            getModelName: () => 'User',
            name: 'User',
            type: 'model',
            template: '{model}/{plural.type}/{name}.{type}.ts',
        });
        expect(result).toEqual('user/models/user.model.ts');
    });

    it('plural type input', () => {
        const result = generateFileName({
            getModelName: () => 'User',
            name: 'UserWhereInput',
            type: 'input',
            template: '{model}/{plural.type}/{name}.{type}.ts',
        });
        expect(result).toEqual('user/inputs/user-where.input.ts');
    });

    it('plural type enum', () => {
        const result = generateFileName({
            getModelName: () => 'prisma',
            name: 'Role',
            type: 'enum',
            template: '{model}/{plural.type}/{name}.{type}.ts',
        });
        expect(result).toEqual('prisma/enums/role.enum.ts');
    });
});
