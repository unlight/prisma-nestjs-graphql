import { Field, InputType } from '@nestjs/graphql';

import { EnumRoleNullableWithAggregatesFilter } from '../prisma/enum-role-nullable-with-aggregates-filter.input';
import { FloatNullableWithAggregatesFilter } from '../prisma/float-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class UserScalarWhereWithAggregatesInput {
    @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
    AND?: Array<UserScalarWhereWithAggregatesInput>;

    @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
    OR?: Array<UserScalarWhereWithAggregatesInput>;

    @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
    NOT?: Array<UserScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    email?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    password?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
    bio?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
    image?: StringNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, { nullable: true })
    countComments?: IntNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, { nullable: true })
    rating?: FloatNullableWithAggregatesFilter;

    @Field(() => EnumRoleNullableWithAggregatesFilter, { nullable: true })
    role?: EnumRoleNullableWithAggregatesFilter;
}
