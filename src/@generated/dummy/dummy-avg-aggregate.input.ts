import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DummyAvgAggregateInput {
    @Field(() => Boolean, { nullable: true })
    floaty?: true;

    @Field(() => Boolean, { nullable: true })
    int?: true;

    @Field(() => Boolean, { nullable: true })
    float?: true;

    @Field(() => Boolean, { nullable: true })
    decimal?: true;

    @Field(() => Boolean, { nullable: true })
    bigInt?: true;
}
