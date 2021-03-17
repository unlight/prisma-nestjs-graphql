import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class TagMinAggregateInput {
    @Field(() => Boolean, { nullable: true })
    id?: true;

    @Field(() => Boolean, { nullable: true })
    name?: true;
}
