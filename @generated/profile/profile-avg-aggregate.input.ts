import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ProfileAvgAggregateInput {

    @Field(() => Boolean, {deprecationReason:'Use new name instead',nullable:true})
    id?: true;
}
