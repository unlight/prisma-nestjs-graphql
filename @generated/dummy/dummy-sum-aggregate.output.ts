import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class DummySumAggregate {
  @Field(() => Int, { nullable: true })
  int?: number;

  @Field(() => Float, { nullable: true })
  float?: number;

  @Field(() => GraphQLDecimal, { nullable: true })
  decimal?: Prisma.Decimal;

  @Field(() => [GraphQLDecimal], { nullable: true })
  decimals?: Array<Prisma.Decimal>;

  @Field(() => String, { nullable: true })
  bigInt?: bigint | number;
}
