import { Field, InputType } from '@nestjs/graphql';

import { EnumRoleWithAggregatesFilter } from '../prisma/enum-role-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { Role } from '../prisma/role.enum';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class UserScalarWhereWithAggregatesInput {
    @Field(() => [UserScalarWhereWithAggregatesInput], {
        nullable: true,
    })
    AND?:
        | UserScalarWhereWithAggregatesInput
        | Array<UserScalarWhereWithAggregatesInput>;

    @Field(() => [UserScalarWhereWithAggregatesInput], {
        nullable: true,
    })
    OR?: Array<UserScalarWhereWithAggregatesInput>;

    @Field(() => [UserScalarWhereWithAggregatesInput], {
        nullable: true,
    })
    NOT?:
        | UserScalarWhereWithAggregatesInput
        | Array<UserScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {
        nullable: true,
    })
    id?: StringWithAggregatesFilter | string;

    @Field(() => StringWithAggregatesFilter, {
        nullable: true,
    })
    email?: StringWithAggregatesFilter | string;

    @Field(() => StringWithAggregatesFilter, {
        nullable: true,
    })
    name?: StringWithAggregatesFilter | string;

    @Field(() => StringWithAggregatesFilter, {
        nullable: true,
    })
    password?: StringWithAggregatesFilter | string;

    @Field(() => StringWithAggregatesFilter, {
        nullable: true,
    })
    bio?: StringWithAggregatesFilter | string;

    @Field(() => StringWithAggregatesFilter, {
        nullable: true,
    })
    image?: StringWithAggregatesFilter | string;

    @Field(() => IntWithAggregatesFilter, {
        nullable: true,
    })
    countComments?: IntWithAggregatesFilter | number;

    @Field(() => FloatWithAggregatesFilter, {
        nullable: true,
    })
    rating?: FloatWithAggregatesFilter | number;

    @Field(() => EnumRoleWithAggregatesFilter, {
        nullable: true,
    })
    role?: EnumRoleWithAggregatesFilter | Role;
}
