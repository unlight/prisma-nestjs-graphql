import { Field, Float, HideField, Int, ObjectType } from '@nestjs/graphql';

import { Role } from '../prisma/role.enum';

@ObjectType()
export class UserMaxAggregate {
    @Field(() => String, { nullable: true })
    id?: string;

    @Field(() => String, { nullable: true })
    email?: string;

    @Field(() => String, { nullable: true })
    name?: string;

    @HideField()
    password?: string;

    @Field(() => String, { nullable: true })
    bio?: string;

    @Field(() => String, { nullable: true })
    image?: string;

    @Field(() => Int, { nullable: true })
    countComments?: number;

    @Field(() => Float, { nullable: true })
    rating?: number;

    @Field(() => Role, { nullable: true })
    role?: Role;
}
