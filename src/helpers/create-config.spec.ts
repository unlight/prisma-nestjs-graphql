import expect from 'expect';

import { ReExport } from '../handlers/re-export';
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
        expect(result.reExport).toEqual(ReExport.None);
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

    it('create config reExport', () => {
        const result = createConfig({ reExport: 'Single' });
        expect(result.reExport).toEqual(ReExport.Single);
    });

    it('createConfig useInputType 1', () => {
        const result = createConfig({
            useInputType_CreateInput_ALL: 'WhereInput',
            useInputType_CreateInput_author: 'WhereInput',
        });
        expect(result.useInputType).toEqual([
            {
                typeName: 'CreateInput',
                ALL: 'WhereInput',
                properties: { author: 'WhereInput' },
            },
        ]);
    });
});
