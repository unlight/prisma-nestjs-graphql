import assert from 'assert';

import { replacementTypeName } from './combine-scalar-filters';

describe('combine scalar filters', () => {
    it('replacement type name scalars', () => {
        assert.strictEqual(replacementTypeName('StringNullableFilter'), 'StringFilter');
        assert.strictEqual(replacementTypeName('NullableStringFilter'), 'StringFilter');
        assert.strictEqual(replacementTypeName('NestedStringNullableFilter'), 'StringFilter');
        assert.strictEqual(replacementTypeName('NestedStringFilter'), 'StringFilter');
        assert.strictEqual(replacementTypeName('IntNullableFilter'), 'IntFilter');
        assert.strictEqual(replacementTypeName('NullableIntFilter'), 'IntFilter');
        assert.strictEqual(replacementTypeName('NestedIntNullableFilter'), 'IntFilter');
        assert.strictEqual(replacementTypeName('NestedIntFilter'), 'IntFilter');
        assert.strictEqual(replacementTypeName('FloatNullableFilter'), 'FloatFilter');
        assert.strictEqual(replacementTypeName('NullableFloatFilter'), 'FloatFilter');
        assert.strictEqual(replacementTypeName('NestedFloatNullableFilter'), 'FloatFilter');
        assert.strictEqual(replacementTypeName('NestedFloatFilter'), 'FloatFilter');
        assert.strictEqual(replacementTypeName('DateTimeNullableFilter'), 'DateTimeFilter');
        assert.strictEqual(replacementTypeName('NullableDateTimeFilter'), 'DateTimeFilter');
        assert.strictEqual(replacementTypeName('NestedDateTimeNullableFilter'), 'DateTimeFilter');
        assert.strictEqual(replacementTypeName('NestedDateTimeFilter'), 'DateTimeFilter');
        assert.strictEqual(replacementTypeName('BooleanNullableFilter'), 'BooleanFilter');
        assert.strictEqual(replacementTypeName('NullableBooleanFilter'), 'BooleanFilter');
        assert.strictEqual(replacementTypeName('NestedBooleanNullableFilter'), 'BooleanFilter');
        assert.strictEqual(replacementTypeName('NestedBooleanFilter'), 'BooleanFilter');
        assert.strictEqual(replacementTypeName('BoolNullableFilter'), 'BooleanFilter');
        assert.strictEqual(replacementTypeName('NestedBoolNullableFilter'), 'BooleanFilter');
        assert.strictEqual(replacementTypeName('NestedBoolFilter'), 'BooleanFilter');
    });

    it('replacement type name enum', () => {
        assert.strictEqual(replacementTypeName('EnumRoleNullableFilter'), 'EnumRoleFilter');
    });
});
