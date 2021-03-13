import { Field, InputType } from '@nestjs/graphql';

import { EnumRoleNullableFilter } from '../prisma/enum-role-nullable-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class UserScalarWhereInput {
    @Field(() => [UserScalarWhereInput], { nullable: true })
    AND?: Array<UserScalarWhereInput>;

    @Field(() => [UserScalarWhereInput], { nullable: true })
    OR?: Array<UserScalarWhereInput>;

    @Field(() => [UserScalarWhereInput], { nullable: true })
    NOT?: Array<UserScalarWhereInput>;

    @Field(() => StringFilter, { nullable: true })
    id?: StringFilter;

    @Field(() => StringFilter, { nullable: true })
    email?: StringFilter;

    @Field(() => StringFilter, { nullable: true })
    name?: StringFilter;

    @Field(() => StringFilter, { nullable: true })
    password?: StringFilter;

    @Field(() => StringNullableFilter, { nullable: true })
    bio?: StringNullableFilter;

    @Field(() => StringNullableFilter, { nullable: true })
    image?: StringNullableFilter;

    @Field(() => IntNullableFilter, { nullable: true })
    countComments?: IntNullableFilter;

    @Field(() => FloatNullableFilter, { nullable: true })
    rating?: FloatNullableFilter;

    @Field(() => EnumRoleNullableFilter, { nullable: true })
    role?: EnumRoleNullableFilter;
}
