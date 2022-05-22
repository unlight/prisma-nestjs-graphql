import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class UserSumAggregate {
  @Field(() => Int, { nullable: true })
  countComments?: number;

  @Field(() => Float, { nullable: true })
  rating?: number;

  @Field(() => GraphQLDecimal, { nullable: true })
  money?: Decimal;
}
