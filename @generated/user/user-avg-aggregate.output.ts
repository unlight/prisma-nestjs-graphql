import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class UserAvgAggregate {
    @Field(() => Float, { nullable: true })
    countComments?: number;

    @Field(() => Float, { nullable: true })
    rating?: number;
}
