import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DummyMinAggregateInput {
    @Field(() => Boolean, { nullable: true })
    id?: true;

    @Field(() => Boolean, { nullable: true })
    floaty?: true;

    @Field(() => Boolean, { nullable: true })
    int?: true;

    @Field(() => Boolean, { nullable: true })
    float?: true;

    @Field(() => Boolean, { nullable: true })
    bytes?: true;

    @Field(() => Boolean, { nullable: true })
    decimal?: true;

    @Field(() => Boolean, { nullable: true })
    bigInt?: true;
}
