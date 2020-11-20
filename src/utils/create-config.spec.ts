import expect from 'expect';

import { createConfig } from './create-config';

it('createConfig smoke', () => {
    expect(typeof createConfig).toEqual('function');
});

it('createConfig default', () => {
    const result = createConfig({});
    expect(result.combineScalarFilters).toEqual(true);
    expect(result.atomicNumberOperations).toEqual(false);
});

it('createConfig languageTypes', () => {
    const result = createConfig({
        languageTypes_Decimal_name: `MyDec`,
        languageTypes_Decimal_specifier: `decimal.js`,
    });
    expect(result.languageTypes['Decimal']).toBeTruthy();
    expect(result.languageTypes['Decimal'].name).toEqual('MyDec');
    expect(result.languageTypes['Decimal'].specifier).toEqual('decimal.js');
});
