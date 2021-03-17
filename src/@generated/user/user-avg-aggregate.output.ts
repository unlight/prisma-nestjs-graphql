import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserAvgAggregate {
    @Field(() => Float, { nullable: true })
    countComments?: number;

    @Field(() => Float, { nullable: true })
    rating?: number;
}
