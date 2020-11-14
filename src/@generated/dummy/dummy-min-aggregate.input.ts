import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DummyMinAggregateInput {
    @Field(() => Boolean, {
        nullable: true,
        description: undefined,
    })
    decimal?: true;

    @Field(() => Boolean, {
        nullable: true,
        description: undefined,
    })
    bigInt?: true;
}
