import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserSumAggregate {
    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    countComments?: number | null;

    @Field(() => Float, {
        nullable: true,
        description: undefined,
    })
    rating?: number | null;
}
