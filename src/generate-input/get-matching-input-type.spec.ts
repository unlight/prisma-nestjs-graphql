import assert from 'assert';

import { PrismaDMMF } from '../types';
import { getMatchingInputType } from './get-matching-input-type';

describe('get matching input type', () => {
    let inputTypes: PrismaDMMF.SchemaArgInputType[] = [];
    it('mixed types', () => {
        inputTypes = [
            { type: 'StringFilter', location: 'inputObjectTypes', isList: false },
            { type: 'String', location: 'scalar', isList: false },
        ];
        const result = getMatchingInputType(inputTypes);
        assert.deepStrictEqual(result.type, 'StringFilter');
    });

    it('several kind objects xor list', () => {
        inputTypes = [
            { type: 'UserWhereInput', location: 'inputObjectTypes', isList: false },
            { type: 'UserWhereInput', location: 'inputObjectTypes', isList: true },
        ];
        const result = getMatchingInputType(inputTypes);
        assert.deepStrictEqual(result, {
            type: 'UserWhereInput',
            location: 'inputObjectTypes',
            isList: true,
        });
    });

    it('whereinput over relationfilter', () => {
        inputTypes = [
            { type: 'UserRelationFilter', location: 'inputObjectTypes', isList: false },
            { type: 'UserWhereInput', location: 'inputObjectTypes', isList: false },
        ];
        const result = getMatchingInputType(inputTypes);
        assert.deepStrictEqual(result.type, 'UserWhereInput');
    });

    it('mixed objects with null', () => {
        inputTypes = [
            { type: 'UserRelationFilter', location: 'inputObjectTypes', isList: false },
            { type: 'UserWhereInput', location: 'inputObjectTypes', isList: false },
            { type: 'Null', location: 'scalar', isList: false },
        ];
        const result = getMatchingInputType(inputTypes);
        assert.deepStrictEqual(result.type, 'UserWhereInput');
    });

    it('mixed with null', () => {
        inputTypes = [
            { type: 'IntFilter', location: 'inputObjectTypes', isList: false },
            { type: 'Int', location: 'scalar', isList: false },
            { type: 'Null', location: 'scalar', isList: false },
        ];
        const result = getMatchingInputType(inputTypes);
        assert.deepStrictEqual(result.type, 'IntFilter');
    });
});
