import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DummyAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    int?: true;

    @Field(() => Boolean, {nullable:true})
    float?: true;

    @Field(() => Boolean, {nullable:true})
    decimal?: true;

    @Field(() => Boolean, {nullable:true})
    decimals?: true;

    @Field(() => Boolean, {nullable:true})
    bigInt?: true;
}
