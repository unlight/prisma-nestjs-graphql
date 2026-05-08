import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { NestedBoolNullableFilter } from './nested-bool-nullable-filter.input.ts';

@InputType()
export class BoolNullableFilter {
  @Field(() => Boolean, { nullable: true })
  equals?: boolean;

  @Field(() => NestedBoolNullableFilter, { nullable: true })
  not?: Identity<NestedBoolNullableFilter>;
}
