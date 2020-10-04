import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserAvgAggregateInput {
    @Field(() => Boolean, {
        nullable: true,
        description: undefined,
    })
    countComments?: true;

    @Field(() => Boolean, {
        nullable: true,
        description: undefined,
    })
    rating?: true;
}
