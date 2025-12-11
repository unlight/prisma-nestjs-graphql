import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ProfileSumAggregateInput {

    @Field(() => Boolean, {deprecationReason:'Use new name instead',nullable:true})
    id?: true;
}
