import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ProfileCountAggregateInput {

    @Field(() => Boolean, {deprecationReason:'Use new name instead',nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    dummy?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
