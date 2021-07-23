import { Field, InputType } from '@nestjs/graphql';

import { NestedEnumRoleNullableFilter } from './nested-enum-role-nullable-filter.input';
import { Role } from './role.enum';

@InputType()
export class EnumRoleNullableFilter {
    @Field(() => Role, { nullable: true })
    equals?: keyof typeof Role;

    @Field(() => [Role], { nullable: true })
    in?: Array<keyof typeof Role>;

    @Field(() => [Role], { nullable: true })
    notIn?: Array<keyof typeof Role>;

    @Field(() => NestedEnumRoleNullableFilter, { nullable: true })
    not?: NestedEnumRoleNullableFilter;
}
