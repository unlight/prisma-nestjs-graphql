import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from './role.enum';
import { NestedEnumRoleNullableWithAggregatesFilter } from './nested-enum-role-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumRoleNullableFilter } from './nested-enum-role-nullable-filter.input';

@InputType()
export class EnumRoleNullableWithAggregatesFilter {

    @Field(() => Role, {nullable:true})
    equals?: `${Role}`;

    @Field(() => [Role], {nullable:true})
    in?: Array<`${Role}`>;

    @Field(() => [Role], {nullable:true})
    notIn?: Array<`${Role}`>;

    @Field(() => NestedEnumRoleNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumRoleNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumRoleNullableFilter, {nullable:true})
    _min?: NestedEnumRoleNullableFilter;

    @Field(() => NestedEnumRoleNullableFilter, {nullable:true})
    _max?: NestedEnumRoleNullableFilter;
}
