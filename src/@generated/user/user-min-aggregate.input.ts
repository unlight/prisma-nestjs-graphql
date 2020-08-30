import { Field, InputType } from '@nestjs/graphql';

@InputType({})
export class UserMinAggregateInput {
    @Field(() => Boolean, {
        nullable: true,
        description: undefined,
    })
    countComments?: true | null;

    @Field(() => Boolean, {
        nullable: true,
        description: undefined,
    })
    rating?: true | null;
}
