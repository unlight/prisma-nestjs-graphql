import expect from 'expect';

import { parseFieldSettings } from './field-settings';

describe('parseFieldSettings', () => {
    it('simple maxlength', () => {
        const result = parseFieldSettings('@Validator.MaxLength(30)');
        expect(result.decorators).toHaveLength(1);
        expect(result.decorators[0].name).toEqual('Validator.MaxLength');
        expect(result.decorators[0].arguments).toEqual(['30']);
    });

    it('invalid validator minlength', () => {
        const result = parseFieldSettings('@Validator.MinLength()');
        expect(result.decorators).toHaveLength(1);
        expect(result.decorators[0].name).toEqual('Validator.MinLength');
        expect(result.decorators[0].arguments).toEqual([]);
    });

    it('multiple lines', () => {
        const result = parseFieldSettings(
            `@Validator.MaxLength(50, {\\nmessage: 'Title is too long'\\n})`,
        );
        expect(result.decorators).toHaveLength(1);
        expect(result.decorators[0].name).toEqual('Validator.MaxLength');
        expect(result.decorators[0].arguments).toEqual([
            '50',
            expect.stringContaining(`message: 'Title is too long'`),
        ]);
    });

    it('hidefield decorator as meta', () => {
        const result = parseFieldSettings(`@HideField()`);
        expect(result.hideOutput).toEqual(true);
        expect(result.decorators).toEqual([]);
    });

    it('typegraphql output', () => {
        const result = parseFieldSettings(`@TypeGraphQL.omit(output: true)`);
        expect(result.hideOutput).toEqual(true);
        expect(result.decorators).toEqual([]);
    });

    it('empty string', () => {
        const result = parseFieldSettings(``);
        expect(result.hideOutput).toEqual(false);
        expect(result.decorators).toEqual([]);
    });

    it('several decorators', () => {
        const result = parseFieldSettings(`@V.Max(50)\\n@V.Min(0)`);
        expect(result.hideOutput).toEqual(false);
        expect(result.decorators).toHaveLength(2);
        expect(result.decorators).toEqual([
            {
                name: 'V.Max',
                arguments: ['50'],
            },
            {
                name: 'V.Min',
                arguments: ['0'],
            },
        ]);
    });

    it('mixed documentation and decorator', () => {
        const result = parseFieldSettings(`User really\\n@Max(50)`);
        expect(result.hideOutput).toEqual(false);
        expect(result.documentation).toEqual('User really');
        expect(result.decorators).toEqual([
            {
                name: 'Max',
                arguments: ['50'],
            },
        ]);
    });
});
