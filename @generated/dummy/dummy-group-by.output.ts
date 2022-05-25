import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { GraphQLJSON } from 'graphql-type-json';
import { DummyCountAggregate } from './dummy-count-aggregate.output';
import { DummyAvgAggregate } from './dummy-avg-aggregate.output';
import { DummySumAggregate } from './dummy-sum-aggregate.output';
import { DummyMinAggregate } from './dummy-min-aggregate.output';
import { DummyMaxAggregate } from './dummy-max-aggregate.output';

@ObjectType()
export class DummyGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: true })
  date?: Date | string;

  @Field(() => Int, { nullable: true })
  int?: number;

  @Field(() => Float, { nullable: true })
  float?: number;

  @Field(() => String, { nullable: true })
  bytes?: Buffer;

  @Field(() => GraphQLDecimal, { nullable: false })
  decimal!: Decimal;

  @Field(() => [GraphQLDecimal], { nullable: true })
  decimals?: Array<Decimal>;

  @Field(() => String, { nullable: true })
  bigInt?: bigint | number;

  @Field(() => GraphQLJSON, { nullable: true })
  json?: any;

  @Field(() => [String], { nullable: true })
  friends?: Array<string>;

  @Field(() => DummyCountAggregate, { nullable: true })
  _count?: DummyCountAggregate;

  @Field(() => DummyAvgAggregate, { nullable: true })
  _avg?: DummyAvgAggregate;

  @Field(() => DummySumAggregate, { nullable: true })
  _sum?: DummySumAggregate;

  @Field(() => DummyMinAggregate, { nullable: true })
  _min?: DummyMinAggregate;

  @Field(() => DummyMaxAggregate, { nullable: true })
  _max?: DummyMaxAggregate;
}
