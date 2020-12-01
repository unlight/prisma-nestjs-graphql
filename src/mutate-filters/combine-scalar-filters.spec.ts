import expect from 'expect';

import { replacementTypeName } from './combine-scalar-filters';

describe('combine scalar filters', () => {
    it('replacement type name scalars', () => {
        expect(replacementTypeName('StringNullableFilter')).toEqual('StringFilter');
        expect(replacementTypeName('NullableStringFilter')).toEqual('StringFilter');
        expect(replacementTypeName('NestedStringNullableFilter')).toEqual('StringFilter');
        expect(replacementTypeName('NestedStringFilter')).toEqual('StringFilter');
        expect(replacementTypeName('IntNullableFilter')).toEqual('IntFilter');
        expect(replacementTypeName('NullableIntFilter')).toEqual('IntFilter');
        expect(replacementTypeName('NestedIntNullableFilter')).toEqual('IntFilter');
        expect(replacementTypeName('NestedIntFilter')).toEqual('IntFilter');
        expect(replacementTypeName('FloatNullableFilter')).toEqual('FloatFilter');
        expect(replacementTypeName('NullableFloatFilter')).toEqual('FloatFilter');
        expect(replacementTypeName('NestedFloatNullableFilter')).toEqual('FloatFilter');
        expect(replacementTypeName('NestedFloatFilter')).toEqual('FloatFilter');
        expect(replacementTypeName('DateTimeNullableFilter')).toEqual('DateTimeFilter');
        expect(replacementTypeName('NullableDateTimeFilter')).toEqual('DateTimeFilter');
        expect(replacementTypeName('NestedDateTimeNullableFilter')).toEqual('DateTimeFilter');
        expect(replacementTypeName('NestedDateTimeFilter')).toEqual('DateTimeFilter');
        expect(replacementTypeName('BooleanNullableFilter')).toEqual('BooleanFilter');
        expect(replacementTypeName('NullableBooleanFilter')).toEqual('BooleanFilter');
        expect(replacementTypeName('NestedBooleanNullableFilter')).toEqual('BooleanFilter');
        expect(replacementTypeName('NestedBooleanFilter')).toEqual('BooleanFilter');
        expect(replacementTypeName('BoolNullableFilter')).toEqual('BooleanFilter');
        expect(replacementTypeName('NestedBoolNullableFilter')).toEqual('BooleanFilter');
        expect(replacementTypeName('NestedBoolFilter')).toEqual('BooleanFilter');
    });

    it('replacement type name enum', () => {
        expect(replacementTypeName('EnumRoleNullableFilter')).toEqual('EnumRoleFilter');
    });
});
