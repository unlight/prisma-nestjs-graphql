import { Field, InputType } from '@nestjs/graphql';

import { EnumRoleFilter } from '../prisma/enum-role-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { Role } from '../prisma/role.enum';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class UserScalarWhereInput {
    @Field(() => [UserScalarWhereInput], {
        nullable: true,
    })
    AND?: UserScalarWhereInput | Array<UserScalarWhereInput>;

    @Field(() => [UserScalarWhereInput], {
        nullable: true,
    })
    OR?: Array<UserScalarWhereInput>;

    @Field(() => [UserScalarWhereInput], {
        nullable: true,
    })
    NOT?: UserScalarWhereInput | Array<UserScalarWhereInput>;

    @Field(() => StringFilter, {
        nullable: true,
    })
    id?: StringFilter | string;

    @Field(() => StringFilter, {
        nullable: true,
    })
    email?: StringFilter | string;

    @Field(() => StringFilter, {
        nullable: true,
    })
    name?: StringFilter | string;

    @Field(() => StringFilter, {
        nullable: true,
    })
    password?: StringFilter | string;

    @Field(() => StringFilter, {
        nullable: true,
    })
    bio?: StringFilter | string;

    @Field(() => StringFilter, {
        nullable: true,
    })
    image?: StringFilter | string;

    @Field(() => IntFilter, {
        nullable: true,
    })
    countComments?: IntFilter | number;

    @Field(() => FloatFilter, {
        nullable: true,
    })
    rating?: FloatFilter | number;

    @Field(() => EnumRoleFilter, {
        nullable: true,
    })
    role?: EnumRoleFilter | Role;
}
