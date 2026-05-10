import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from './int-filter.input.ts';
import { FloatFilter } from './float-filter.input.ts';
import { BigIntFilter } from './big-int-filter.input.ts';

@InputType()
export class BigIntWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: bigint | number;

  @Field(() => [String], { nullable: true })
  in?: Array<bigint> | Array<number>;

  @Field(() => [String], { nullable: true })
  notIn?: Array<bigint> | Array<number>;

  @Field(() => String, { nullable: true })
  lt?: bigint | number;

  @Field(() => String, { nullable: true })
  lte?: bigint | number;

  @Field(() => String, { nullable: true })
  gt?: bigint | number;

  @Field(() => String, { nullable: true })
  gte?: bigint | number;

  @Field(() => BigIntWithAggregatesFilter, { nullable: true })
  not?: Identity<BigIntWithAggregatesFilter>;

  @Field(() => IntFilter, { nullable: true })
  _count?: Identity<IntFilter>;

  @Field(() => FloatFilter, { nullable: true })
  _avg?: Identity<FloatFilter>;

  @Field(() => BigIntFilter, { nullable: true })
  _sum?: Identity<BigIntFilter>;

  @Field(() => BigIntFilter, { nullable: true })
  _min?: Identity<BigIntFilter>;

  @Field(() => BigIntFilter, { nullable: true })
  _max?: Identity<BigIntFilter>;
}
