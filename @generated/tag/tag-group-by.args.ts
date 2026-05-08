import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TagWhereInput } from './tag-where.input.ts';
import { Type } from 'class-transformer';
import { TagOrderByWithAggregationInput } from './tag-order-by-with-aggregation.input.ts';
import { TagScalarFieldEnum } from './tag-scalar-field.enum.ts';
import { TagScalarWhereWithAggregatesInput } from './tag-scalar-where-with-aggregates.input.ts';
import { Int } from '@nestjs/graphql';
import { TagCountAggregateInput } from './tag-count-aggregate.input.ts';
import { TagMinAggregateInput } from './tag-min-aggregate.input.ts';
import { TagMaxAggregateInput } from './tag-max-aggregate.input.ts';

@ArgsType()
export class TagGroupByArgs {
  @Field(() => TagWhereInput, { nullable: true })
  @Type(() => TagWhereInput)
  where?: Identity<TagWhereInput>;

  @Field(() => [TagOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<TagOrderByWithAggregationInput>;

  @Field(() => [TagScalarFieldEnum], { nullable: false })
  by!: Array<`${TagScalarFieldEnum}`>;

  @Field(() => TagScalarWhereWithAggregatesInput, { nullable: true })
  having?: Identity<TagScalarWhereWithAggregatesInput>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => TagCountAggregateInput, { nullable: true })
  _count?: Identity<TagCountAggregateInput>;

  @Field(() => TagMinAggregateInput, { nullable: true })
  _min?: Identity<TagMinAggregateInput>;

  @Field(() => TagMaxAggregateInput, { nullable: true })
  _max?: Identity<TagMaxAggregateInput>;
}
