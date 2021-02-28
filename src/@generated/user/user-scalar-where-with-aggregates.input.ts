import { Field, InputType } from '@nestjs/graphql';

import { EnumRoleWithAggregatesFilter } from '../prisma/enum-role-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class UserScalarWhereWithAggregatesInput {
    @Field(() => [UserScalarWhereWithAggregatesInput], {
        nullable: true,
    })
    AND?: Array<UserScalarWhereWithAggregatesInput>;

    @Field(() => [UserScalarWhereWithAggregatesInput], {
        nullable: true,
    })
    OR?: Array<UserScalarWhereWithAggregatesInput>;

    @Field(() => [UserScalarWhereWithAggregatesInput], {
        nullable: true,
    })
    NOT?: Array<UserScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {
        nullable: true,
    })
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {
        nullable: true,
    })
    email?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {
        nullable: true,
    })
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {
        nullable: true,
    })
    password?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {
        nullable: true,
    })
    bio?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {
        nullable: true,
    })
    image?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {
        nullable: true,
    })
    countComments?: IntWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {
        nullable: true,
    })
    rating?: FloatWithAggregatesFilter;

    @Field(() => EnumRoleWithAggregatesFilter, {
        nullable: true,
    })
    role?: EnumRoleWithAggregatesFilter;
}
