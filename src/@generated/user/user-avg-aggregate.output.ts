import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserAvgAggregate {
    @Field(() => Float, {
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
