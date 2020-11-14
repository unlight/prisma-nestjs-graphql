import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DummySumAggregateInput {
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
