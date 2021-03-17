import { Field, InputType } from '@nestjs/graphql';

import { Role } from './role.enum';

@InputType()
export class NestedEnumRoleNullableFilter {
    @Field(() => Role, { nullable: true })
    equals?: Role;

    @Field(() => [Role], { nullable: true })
    in?: Array<Role>;

    @Field(() => [Role], { nullable: true })
    notIn?: Array<Role>;

    @Field(() => NestedEnumRoleNullableFilter, { nullable: true })
    not?: NestedEnumRoleNullableFilter;
}
