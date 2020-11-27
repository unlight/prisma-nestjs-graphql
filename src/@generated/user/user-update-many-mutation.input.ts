import { Field, Float, InputType, Int } from '@nestjs/graphql';

import { Role } from '../prisma/role.enum';

@InputType()
export class UserUpdateManyMutationInput {
    @Field(() => String, {
        nullable: true,
    })
    id?: string;

    @Field(() => String, {
        nullable: true,
    })
    email?: string;

    @Field(() => String, {
        nullable: true,
    })
    name?: string;

    @Field(() => String, {
        nullable: true,
    })
    password?: string;

    @Field(() => String, {
        nullable: true,
    })
    bio?: string | null;

    @Field(() => String, {
        nullable: true,
    })
    image?: string | null;

    @Field(() => Int, {
        nullable: true,
    })
    countComments?: number | null;

    @Field(() => Float, {
        nullable: true,
    })
    rating?: number | null;

    @Field(() => Role, {
        nullable: true,
    })
    role?: Role | null;
}
