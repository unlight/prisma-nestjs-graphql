import expect from 'expect';

import { createConfig } from './create-config';

describe('createConfig', () => {
    it('createConfig smoke', () => {
        expect(typeof createConfig).toEqual('function');
    });

    it('createConfig default', () => {
        const result = createConfig({});
        expect(result.combineScalarFilters).toEqual(true);
        expect(result.atomicNumberOperations).toEqual(false);
    });

    it('createConfig types', () => {
        const result = createConfig({
            types_Decimal_fieldType: `MyDec`,
            types_Decimal_fieldModule: `decimal.js`,
        });
        expect(result.types['Decimal']).toBeTruthy();
        expect(result.types['Decimal'].fieldType).toEqual('MyDec');
        expect(result.types['Decimal'].fieldModule).toEqual('decimal.js');
    });
});
