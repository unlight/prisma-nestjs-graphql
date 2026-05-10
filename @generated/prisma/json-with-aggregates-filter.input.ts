import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { QueryMode } from './query-mode.enum.ts';
import type { Identity } from 'identity-type';
import { IntFilter } from './int-filter.input.ts';
import { JsonFilter } from './json-filter.input.ts';

@InputType()
export class JsonWithAggregatesFilter {
  @Field(() => GraphQLJSON, { nullable: true })
  equals?: any;

  @Field(() => [String], { nullable: true })
  path?: Array<string>;

  @Field(() => QueryMode, { nullable: true })
  mode?: `${QueryMode}`;

  @Field(() => String, { nullable: true })
  string_contains?: string;

  @Field(() => String, { nullable: true })
  string_starts_with?: string;

  @Field(() => String, { nullable: true })
  string_ends_with?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  array_starts_with?: any;

  @Field(() => GraphQLJSON, { nullable: true })
  array_ends_with?: any;

  @Field(() => GraphQLJSON, { nullable: true })
  array_contains?: any;

  @Field(() => GraphQLJSON, { nullable: true })
  lt?: any;

  @Field(() => GraphQLJSON, { nullable: true })
  lte?: any;

  @Field(() => GraphQLJSON, { nullable: true })
  gt?: any;

  @Field(() => GraphQLJSON, { nullable: true })
  gte?: any;

  @Field(() => GraphQLJSON, { nullable: true })
  not?: any;

  @Field(() => IntFilter, { nullable: true })
  _count?: Identity<IntFilter>;

  @Field(() => JsonFilter, { nullable: true })
  _min?: Identity<JsonFilter>;

  @Field(() => JsonFilter, { nullable: true })
  _max?: Identity<JsonFilter>;
}
