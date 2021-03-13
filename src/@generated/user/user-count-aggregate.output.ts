import { Field, HideField, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserCountAggregate {
    @Field(() => Int, { nullable: true })
    id?: number;

    @Field(() => Int, { nullable: true })
    email?: number;

    @Field(() => Int, { nullable: true })
    name?: number;

    @HideField()
    password?: number;

    @Field(() => Int, { nullable: true })
    bio?: number;

    @Field(() => Int, { nullable: true })
    image?: number;

    @Field(() => Int, { nullable: true })
    countComments?: number;

    @Field(() => Int, { nullable: true })
    rating?: number;

    @Field(() => Int, { nullable: true })
    role?: number;

    @Field(() => Int, { nullable: false })
    _all!: number;
}
