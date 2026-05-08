import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { NestedIntFilter } from './nested-int-filter.input.ts';
import { NestedStringFilter } from './nested-string-filter.input.ts';

@InputType()
export class NestedStringWithAggregatesFilter {
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

  @Field(() => NestedStringWithAggregatesFilter, { nullable: true })
  not?: Identity<NestedStringWithAggregatesFilter>;

  @Field(() => NestedIntFilter, { nullable: true })
  _count?: Identity<NestedIntFilter>;

  @Field(() => NestedStringFilter, { nullable: true })
  _min?: Identity<NestedStringFilter>;

  @Field(() => NestedStringFilter, { nullable: true })
  _max?: Identity<NestedStringFilter>;
}
