import assert from 'assert';

import { PrismaDMMF } from '../types';
import { getMatchingInputType } from './get-matching-input-type';

describe('get matching input type', () => {
    let inputTypes: PrismaDMMF.SchemaArgInputType[] = [];
    it('mixed types', () => {
        inputTypes = [
            { type: 'StringFilter', kind: 'object', isList: false },
            { type: 'String', kind: 'scalar', isList: false },
        ];
        const result = getMatchingInputType(inputTypes);
        assert.deepStrictEqual(result.type, 'StringFilter');
    });

    it('several kind objects xor list', () => {
        inputTypes = [
            { type: 'UserWhereInput', kind: 'object', isList: false },
            { type: 'UserWhereInput', kind: 'object', isList: true },
        ];
        const result = getMatchingInputType(inputTypes);
        assert.deepStrictEqual(result, { type: 'UserWhereInput', kind: 'object', isList: true });
    });

    it('whereinput over relationfilter', () => {
        inputTypes = [
            { type: 'UserRelationFilter', kind: 'object', isList: false },
            { type: 'UserWhereInput', kind: 'object', isList: false },
        ];
        const result = getMatchingInputType(inputTypes);
        assert.deepStrictEqual(result.type, 'UserWhereInput');
    });

    it('mixed objects with null', () => {
        inputTypes = [
            { type: 'UserRelationFilter', kind: 'object', isList: false },
            { type: 'UserWhereInput', kind: 'object', isList: false },
            { type: 'Null', kind: 'scalar', isList: false },
        ];
        const result = getMatchingInputType(inputTypes);
        assert.deepStrictEqual(result.type, 'UserWhereInput');
    });

    it('mixed with null', () => {
        inputTypes = [
            { type: 'IntFilter', kind: 'object', isList: false },
            { type: 'Int', kind: 'scalar', isList: false },
            { type: 'Null', kind: 'scalar', isList: false },
        ];
        const result = getMatchingInputType(inputTypes);
        assert.deepStrictEqual(result.type, 'IntFilter');
    });
});
