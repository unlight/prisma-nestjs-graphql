import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class DummyAvgAggregate {
    @Field(() => Float, { nullable: true })
    floaty?: number;

    @Field(() => Float, { nullable: true })
    int?: number;

    @Field(() => Float, { nullable: true })
    float?: number;

    @Field(() => GraphQLDecimal, { nullable: true })
    decimal?: any;

    @Field(() => Float, { nullable: true })
    bigInt?: number;
}
