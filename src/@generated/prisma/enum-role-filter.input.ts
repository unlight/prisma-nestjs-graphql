import { Field, InputType } from '@nestjs/graphql';

import { Role } from './role.enum';

@InputType()
export class EnumRoleFilter {
    @Field(() => Role, {
        nullable: true,
        description: undefined,
    })
    equals?: Role | null;

    @Field(() => [Role], {
        nullable: true,
        description: undefined,
    })
    in?: Array<Role> | null;

    @Field(() => [Role], {
        nullable: true,
        description: undefined,
    })
    notIn?: Array<Role> | null;

    @Field(() => EnumRoleFilter, {
        nullable: true,
        description: undefined,
    })
    not?: Role | EnumRoleFilter | null;
}
