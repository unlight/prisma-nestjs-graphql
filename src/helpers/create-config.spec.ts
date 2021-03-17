import expect from 'expect';

import { createConfig } from './create-config';

describe('createConfig', () => {
    it('createConfig smoke', () => {
        expect(typeof createConfig).toEqual('function');
    });

    it('createConfig default', () => {
        const result = createConfig({});
        expect(result.combineScalarFilters).toEqual(false);
        expect(result.noAtomicOperations).toEqual(false);
        expect(result.$warnings).toEqual([]);
    });

    it('createConfig types', () => {
        const result = createConfig({
            types_Decimal_fieldType: `MyDec`,
            types_Decimal_fieldModule: `decimal.js`,
        });
        expect(result.types['Decimal']).toBeTruthy();
        expect(result.types['Decimal']?.fieldType).toEqual('MyDec');
        expect(result.types['Decimal']?.fieldModule).toEqual('decimal.js');
        expect(result.$warnings).toEqual([]);
    });

    it('filename with parent reference should be not valid', () => {
        const result = createConfig({
            outputFilePattern: '../../../{model}//{name}.{type}.ts/',
        });
        expect(result.outputFilePattern).toEqual('{model}/{name}.{type}.ts');
        expect(result.$warnings).toContainEqual(
            "Due to invalid filepath 'outputFilePattern' changed to '{model}/{name}.{type}.ts'",
        );
    });
});
