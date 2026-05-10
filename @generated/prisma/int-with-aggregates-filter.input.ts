import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from './int-filter.input.ts';
import { FloatFilter } from './float-filter.input.ts';

@InputType()
export class IntWithAggregatesFilter {
  @Field(() => Int, { nullable: true })
  equals?: number;

  @Field(() => [Int], { nullable: true })
  in?: Array<number>;

  @Field(() => [Int], { nullable: true })
  notIn?: Array<number>;

  @Field(() => Int, { nullable: true })
  lt?: number;

  @Field(() => Int, { nullable: true })
  lte?: number;

  @Field(() => Int, { nullable: true })
  gt?: number;

  @Field(() => Int, { nullable: true })
  gte?: number;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  not?: Identity<IntWithAggregatesFilter>;

  @Field(() => IntFilter, { nullable: true })
  _count?: Identity<IntFilter>;

  @Field(() => FloatFilter, { nullable: true })
  _avg?: Identity<FloatFilter>;

  @Field(() => IntFilter, { nullable: true })
  _sum?: Identity<IntFilter>;

  @Field(() => IntFilter, { nullable: true })
  _min?: Identity<IntFilter>;

  @Field(() => IntFilter, { nullable: true })
  _max?: Identity<IntFilter>;
}
