import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DummyCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    date?: true;

    @Field(() => Boolean, {nullable:true})
    int?: true;

    @Field(() => Boolean, {nullable:true})
    float?: true;

    @Field(() => Boolean, {nullable:true})
    bytes?: true;

    @Field(() => Boolean, {nullable:true})
    decimal?: true;

    @Field(() => Boolean, {nullable:true})
    decimals?: true;

    @Field(() => Boolean, {nullable:true})
    bigInt?: true;

    @Field(() => Boolean, {nullable:true})
    json?: true;

    @Field(() => Boolean, {nullable:true})
    friends?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
