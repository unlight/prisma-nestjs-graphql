import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class DummyAvgAggregate {
  @Field(() => Float, { nullable: true })
  int?: number;

  @Field(() => Float, { nullable: true })
  float?: number;

  @Field(() => GraphQLDecimal, { nullable: true })
  decimal?: Decimal;

  @Field(() => GraphQLDecimal, { nullable: true })
  decimals?: Decimal;

  @Field(() => Float, { nullable: true })
  bigInt?: number;
}
