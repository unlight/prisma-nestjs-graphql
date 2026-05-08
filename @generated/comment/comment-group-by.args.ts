import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { CommentWhereInput } from './comment-where.input.ts';
import { Type } from 'class-transformer';
import { CommentOrderByWithAggregationInput } from './comment-order-by-with-aggregation.input.ts';
import { CommentScalarFieldEnum } from './comment-scalar-field.enum.ts';
import { CommentScalarWhereWithAggregatesInput } from './comment-scalar-where-with-aggregates.input.ts';
import { Int } from '@nestjs/graphql';
import { CommentCountAggregateInput } from './comment-count-aggregate.input.ts';
import { CommentMinAggregateInput } from './comment-min-aggregate.input.ts';
import { CommentMaxAggregateInput } from './comment-max-aggregate.input.ts';

@ArgsType()
export class CommentGroupByArgs {
  @Field(() => CommentWhereInput, { nullable: true })
  @Type(() => CommentWhereInput)
  where?: Identity<CommentWhereInput>;

  @Field(() => [CommentOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<CommentOrderByWithAggregationInput>;

  @Field(() => [CommentScalarFieldEnum], { nullable: false })
  by!: Array<`${CommentScalarFieldEnum}`>;

  @Field(() => CommentScalarWhereWithAggregatesInput, { nullable: true })
  having?: Identity<CommentScalarWhereWithAggregatesInput>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => CommentCountAggregateInput, { nullable: true })
  _count?: Identity<CommentCountAggregateInput>;

  @Field(() => CommentMinAggregateInput, { nullable: true })
  _min?: Identity<CommentMinAggregateInput>;

  @Field(() => CommentMaxAggregateInput, { nullable: true })
  _max?: Identity<CommentMaxAggregateInput>;
}
