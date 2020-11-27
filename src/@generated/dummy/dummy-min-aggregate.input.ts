import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DummyMinAggregateInput {
    @Field(() => Boolean, {
        nullable: true,
    })
    decimal?: true;

    @Field(() => Boolean, {
        nullable: true,
    })
    bigInt?: true;
}
