import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { NestedIntWithAggregatesFilter } from './nested-int-with-aggregates-filter.input.ts';
import { NestedIntFilter } from './nested-int-filter.input.ts';
import { NestedFloatFilter } from './nested-float-filter.input.ts';

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

  @Field(() => NestedIntWithAggregatesFilter, { nullable: true })
  not?: Identity<NestedIntWithAggregatesFilter>;

  @Field(() => NestedIntFilter, { nullable: true })
  _count?: Identity<NestedIntFilter>;

  @Field(() => NestedFloatFilter, { nullable: true })
  _avg?: Identity<NestedFloatFilter>;

  @Field(() => NestedIntFilter, { nullable: true })
  _sum?: Identity<NestedIntFilter>;

  @Field(() => NestedIntFilter, { nullable: true })
  _min?: Identity<NestedIntFilter>;

  @Field(() => NestedIntFilter, { nullable: true })
  _max?: Identity<NestedIntFilter>;
}
