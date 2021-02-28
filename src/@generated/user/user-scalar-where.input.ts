import { Field, InputType } from '@nestjs/graphql';

import { EnumRoleFilter } from '../prisma/enum-role-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class UserScalarWhereInput {
    @Field(() => [UserScalarWhereInput], {
        nullable: true,
    })
    AND?: Array<UserScalarWhereInput>;

    @Field(() => [UserScalarWhereInput], {
        nullable: true,
    })
    OR?: Array<UserScalarWhereInput>;

    @Field(() => [UserScalarWhereInput], {
        nullable: true,
    })
    NOT?: Array<UserScalarWhereInput>;

    @Field(() => StringFilter, {
        nullable: true,
    })
    id?: StringFilter;

    @Field(() => StringFilter, {
        nullable: true,
    })
    email?: StringFilter;

    @Field(() => StringFilter, {
        nullable: true,
    })
    name?: StringFilter;

    @Field(() => StringFilter, {
        nullable: true,
    })
    password?: StringFilter;

    @Field(() => StringFilter, {
        nullable: true,
    })
    bio?: StringFilter;

    @Field(() => StringFilter, {
        nullable: true,
    })
    image?: StringFilter;

    @Field(() => IntFilter, {
        nullable: true,
    })
    countComments?: IntFilter;

    @Field(() => FloatFilter, {
        nullable: true,
    })
    rating?: FloatFilter;

    @Field(() => EnumRoleFilter, {
        nullable: true,
    })
    role?: EnumRoleFilter;
}
