import { Field, InputType } from '@nestjs/graphql';

import { NestedEnumRoleNullableFilter } from './nested-enum-role-nullable-filter.input';
import { NestedEnumRoleNullableWithAggregatesFilter } from './nested-enum-role-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { Role } from './role.enum';

@InputType()
export class EnumRoleNullableWithAggregatesFilter {
    @Field(() => Role, { nullable: true })
    equals?: keyof typeof Role;

    @Field(() => [Role], { nullable: true })
    in?: Array<keyof typeof Role>;

    @Field(() => [Role], { nullable: true })
    notIn?: Array<keyof typeof Role>;

    @Field(() => NestedEnumRoleNullableWithAggregatesFilter, { nullable: true })
    not?: NestedEnumRoleNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, { nullable: true })
    count?: NestedIntNullableFilter;
    @Field(() => NestedEnumRoleNullableFilter, { nullable: true })
    min?: NestedEnumRoleNullableFilter;
    @Field(() => NestedEnumRoleNullableFilter, { nullable: true })
    max?: NestedEnumRoleNullableFilter;
    @Field(() => NestedIntNullableFilter, { nullable: true })
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumRoleNullableFilter, { nullable: true })
    _min?: NestedEnumRoleNullableFilter;

    @Field(() => NestedEnumRoleNullableFilter, { nullable: true })
    _max?: NestedEnumRoleNullableFilter;
}
