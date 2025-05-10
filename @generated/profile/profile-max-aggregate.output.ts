import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProfileMaxAggregate {

    @Field(() => Int, {deprecationReason:'Use new name instead',nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => String, {nullable:true})
    dummy?: string;
}
