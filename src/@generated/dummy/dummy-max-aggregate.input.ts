import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DummyMaxAggregateInput {
    @Field(() => Boolean, {
        nullable: true,
    })
    id?: true;

    @Field(() => Boolean, {
        nullable: true,
    })
    bytes?: true;

    @Field(() => Boolean, {
        nullable: true,
    })
    decimal?: true;

    @Field(() => Boolean, {
        nullable: true,
    })
    bigInt?: true;
}
