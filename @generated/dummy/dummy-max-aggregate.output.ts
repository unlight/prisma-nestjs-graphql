import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class DummyMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    date?: Date | string;

    @Field(() => Int, {nullable:true})
    int?: number;

    @Field(() => Float, {nullable:true})
    float?: number;

    @Field(() => String, {nullable:true})
    bytes?: Uint8Array;

    @Field(() => GraphQLDecimal, {nullable:true})
    decimal?: Decimal;

    @Field(() => String, {nullable:true})
    bigInt?: bigint | number;
}
