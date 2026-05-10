import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from './int-filter.input.ts';
import { FloatFilter } from './float-filter.input.ts';

@InputType()
export class FloatWithAggregatesFilter {
  @Field(() => Float, { nullable: true })
  equals?: number;

  @Field(() => [Float], { nullable: true })
  in?: Array<number>;

  @Field(() => [Float], { nullable: true })
  notIn?: Array<number>;

  @Field(() => Float, { nullable: true })
  lt?: number;

  @Field(() => Float, { nullable: true })
  lte?: number;

  @Field(() => Float, { nullable: true })
  gt?: number;

  @Field(() => Float, { nullable: true })
  gte?: number;

  @Field(() => FloatWithAggregatesFilter, { nullable: true })
  not?: Identity<FloatWithAggregatesFilter>;

  @Field(() => IntFilter, { nullable: true })
  _count?: Identity<IntFilter>;

  @Field(() => FloatFilter, { nullable: true })
  _avg?: Identity<FloatFilter>;

  @Field(() => FloatFilter, { nullable: true })
  _sum?: Identity<FloatFilter>;

  @Field(() => FloatFilter, { nullable: true })
  _min?: Identity<FloatFilter>;

  @Field(() => FloatFilter, { nullable: true })
  _max?: Identity<FloatFilter>;
}
