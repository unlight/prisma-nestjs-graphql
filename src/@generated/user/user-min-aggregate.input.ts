import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserMinAggregateInput {
    @Field(() => Boolean, {
        nullable: true,
    })
    countComments?: true;

    @Field(() => Boolean, {
        nullable: true,
    })
    rating?: true;
}
