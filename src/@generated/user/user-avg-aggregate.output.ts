import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserAvgAggregate {
    @Field(() => Float, {
        nullable: true,
        description: undefined,
    })
    countComments?: number;

    @Field(() => Float, {
        nullable: true,
        description: undefined,
    })
    rating?: number;
}
