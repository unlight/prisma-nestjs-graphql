import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QueryMode } from './query-mode.enum.ts';
import type { Identity } from 'identity-type';
import { NestedStringNullableWithAggregatesFilter } from './nested-string-nullable-with-aggregates-filter.input.ts';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input.ts';
import { NestedStringNullableFilter } from './nested-string-nullable-filter.input.ts';

@InputType()
export class StringNullableWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: string;

  @Field(() => [String], { nullable: true })
  in?: Array<string>;

  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;

  @Field(() => String, { nullable: true })
  lt?: string;

  @Field(() => String, { nullable: true })
  lte?: string;

  @Field(() => String, { nullable: true })
  gt?: string;

  @Field(() => String, { nullable: true })
  gte?: string;

  @Field(() => String, { nullable: true })
  contains?: string;

  @Field(() => String, { nullable: true })
  startsWith?: string;

  @Field(() => String, { nullable: true })
  endsWith?: string;

  @Field(() => QueryMode, { nullable: true })
  mode?: `${QueryMode}`;

  @Field(() => NestedStringNullableWithAggregatesFilter, { nullable: true })
  not?: Identity<NestedStringNullableWithAggregatesFilter>;

  @Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: Identity<NestedIntNullableFilter>;

  @Field(() => NestedStringNullableFilter, { nullable: true })
  _min?: Identity<NestedStringNullableFilter>;

  @Field(() => NestedStringNullableFilter, { nullable: true })
  _max?: Identity<NestedStringNullableFilter>;
}
