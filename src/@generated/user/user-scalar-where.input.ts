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
        description: undefined,
    })
    AND?: UserScalarWhereInput | Array<UserScalarWhereInput>;

    @Field(() => [UserScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    OR?: UserScalarWhereInput | Array<UserScalarWhereInput>;

    @Field(() => [UserScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    NOT?: UserScalarWhereInput | Array<UserScalarWhereInput>;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    id?: StringFilter | string;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    email?: StringFilter | string;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    name?: StringFilter | string;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    password?: StringFilter | string;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    bio?: StringFilter | string | null;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    image?: StringFilter | string | null;

    @Field(() => IntFilter, {
        nullable: true,
        description: undefined,
    })
    countComments?: IntFilter | number | null;

    @Field(() => FloatFilter, {
        nullable: true,
        description: undefined,
    })
    rating?: FloatFilter | number | null;

    @Field(() => EnumRoleFilter, {
        nullable: true,
        description: undefined,
    })
    role?: EnumRoleFilter | Role | null;
}
