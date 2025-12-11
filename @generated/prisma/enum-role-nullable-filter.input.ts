import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from './role.enum';
import { NestedEnumRoleNullableFilter } from './nested-enum-role-nullable-filter.input';

@InputType()
export class EnumRoleNullableFilter {

    @Field(() => Role, {nullable:true})
    equals?: `${Role}`;

    @Field(() => [Role], {nullable:true})
    in?: Array<`${Role}`>;

    @Field(() => [Role], {nullable:true})
    notIn?: Array<`${Role}`>;

    @Field(() => NestedEnumRoleNullableFilter, {nullable:true})
    not?: NestedEnumRoleNullableFilter;
}
