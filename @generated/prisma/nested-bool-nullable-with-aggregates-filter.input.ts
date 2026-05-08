import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input.ts';
import { NestedBoolNullableFilter } from './nested-bool-nullable-filter.input.ts';

@InputType()
export class NestedBoolNullableWithAggregatesFilter {
  @Field(() => Boolean, { nullable: true })
  equals?: boolean;

  @Field(() => NestedBoolNullableWithAggregatesFilter, { nullable: true })
  not?: Identity<NestedBoolNullableWithAggregatesFilter>;

  @Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: Identity<NestedIntNullableFilter>;

  @Field(() => NestedBoolNullableFilter, { nullable: true })
  _min?: Identity<NestedBoolNullableFilter>;

  @Field(() => NestedBoolNullableFilter, { nullable: true })
  _max?: Identity<NestedBoolNullableFilter>;
}
