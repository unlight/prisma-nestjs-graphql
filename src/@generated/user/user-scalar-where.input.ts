import { Field, InputType } from '@nestjs/graphql';

import { FloatFilter } from '../prisma/float-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
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
    OR?: Array<UserScalarWhereInput>;

    @Field(() => [UserScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    NOT?: UserScalarWhereInput | Array<UserScalarWhereInput>;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    id?: string | StringFilter;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    email?: string | StringFilter;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    name?: string | StringFilter;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    password?: string | StringFilter;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    bio?: string | StringFilter | null;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    image?: string | StringFilter | null;

    @Field(() => IntFilter, {
        nullable: true,
        description: undefined,
    })
    countComments?: number | IntFilter | null;

    @Field(() => FloatFilter, {
        nullable: true,
        description: undefined,
    })
    rating?: number | FloatFilter | null;
}
