import { Field, InputType } from '@nestjs/graphql';

import { Role } from './role.enum';

@InputType()
export class EnumRoleFilter {
    @Field(() => Role, {
        nullable: true,
    })
    equals?: Role | null;

    @Field(() => [Role], {
        nullable: true,
    })
    in?: Array<Role> | null;

    @Field(() => [Role], {
        nullable: true,
    })
    notIn?: Array<Role> | null;

    @Field(() => EnumRoleFilter, {
        nullable: true,
    })
    not?: Role | EnumRoleFilter | null;
}
