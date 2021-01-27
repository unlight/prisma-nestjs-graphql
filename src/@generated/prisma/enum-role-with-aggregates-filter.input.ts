import { Field, InputType } from '@nestjs/graphql';

import { EnumRoleFilter } from './enum-role-filter.input';
import { IntFilter } from './int-filter.input';
import { Role } from './role.enum';

@InputType()
export class EnumRoleWithAggregatesFilter {
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

    @Field(() => EnumRoleWithAggregatesFilter, {
        nullable: true,
    })
    not?: EnumRoleWithAggregatesFilter;

    @Field(() => IntFilter, {
        nullable: true,
    })
    count?: IntFilter;

    @Field(() => EnumRoleFilter, {
        nullable: true,
    })
    min?: EnumRoleFilter;

    @Field(() => EnumRoleFilter, {
        nullable: true,
    })
    max?: EnumRoleFilter;
}
