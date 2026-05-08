import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input.ts';
import { NestedFloatNullableFilter } from './nested-float-nullable-filter.input.ts';
import { NestedBigIntNullableFilter } from './nested-big-int-nullable-filter.input.ts';

@InputType()
export class NestedBigIntNullableWithAggregatesFilter {
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

  @Field(() => NestedBigIntNullableWithAggregatesFilter, { nullable: true })
  not?: Identity<NestedBigIntNullableWithAggregatesFilter>;

  @Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: Identity<NestedIntNullableFilter>;

  @Field(() => NestedFloatNullableFilter, { nullable: true })
  _avg?: Identity<NestedFloatNullableFilter>;

  @Field(() => NestedBigIntNullableFilter, { nullable: true })
  _sum?: Identity<NestedBigIntNullableFilter>;

  @Field(() => NestedBigIntNullableFilter, { nullable: true })
  _min?: Identity<NestedBigIntNullableFilter>;

  @Field(() => NestedBigIntNullableFilter, { nullable: true })
  _max?: Identity<NestedBigIntNullableFilter>;
}
