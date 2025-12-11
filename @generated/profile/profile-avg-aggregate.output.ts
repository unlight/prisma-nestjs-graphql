import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ProfileAvgAggregate {

    @Field(() => Float, {deprecationReason:'Use new name instead',nullable:true})
    id?: number;
}
