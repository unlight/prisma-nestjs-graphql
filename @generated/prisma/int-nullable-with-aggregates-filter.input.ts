import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { NestedIntNullableWithAggregatesFilter } from './nested-int-nullable-with-aggregates-filter.input.ts';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input.ts';
import { NestedFloatNullableFilter } from './nested-float-nullable-filter.input.ts';

@InputType()
export class IntNullableWithAggregatesFilter {
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

  @Field(() => NestedIntNullableWithAggregatesFilter, { nullable: true })
  not?: Identity<NestedIntNullableWithAggregatesFilter>;

  @Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: Identity<NestedIntNullableFilter>;

  @Field(() => NestedFloatNullableFilter, { nullable: true })
  _avg?: Identity<NestedFloatNullableFilter>;

  @Field(() => NestedIntNullableFilter, { nullable: true })
  _sum?: Identity<NestedIntNullableFilter>;

  @Field(() => NestedIntNullableFilter, { nullable: true })
  _min?: Identity<NestedIntNullableFilter>;

  @Field(() => NestedIntNullableFilter, { nullable: true })
  _max?: Identity<NestedIntNullableFilter>;
}
