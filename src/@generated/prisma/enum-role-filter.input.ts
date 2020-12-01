import { Field, InputType } from '@nestjs/graphql';

import { Role } from './role.enum';

@InputType()
export class EnumRoleFilter {
    @Field(() => Role, {
        nullable: true,
    })
    equals?: Role;

    @Field(() => [Role], {
        nullable: true,
    })
    in?: Array<Role>;

    @Field(() => [Role], {
        nullable: true,
    })
    notIn?: Array<Role>;

    @Field(() => EnumRoleFilter, {
        nullable: true,
    })
    not?: Role | EnumRoleFilter;
}
