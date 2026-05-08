import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ArticleWhereInput } from './article-where.input.ts';
import { Type } from 'class-transformer';
import { ArticleOrderByWithAggregationInput } from './article-order-by-with-aggregation.input.ts';
import { ArticleScalarFieldEnum } from './article-scalar-field.enum.ts';
import { ArticleScalarWhereWithAggregatesInput } from './article-scalar-where-with-aggregates.input.ts';
import { Int } from '@nestjs/graphql';
import { ArticleCountAggregateInput } from './article-count-aggregate.input.ts';
import { ArticleAvgAggregateInput } from './article-avg-aggregate.input.ts';
import { ArticleSumAggregateInput } from './article-sum-aggregate.input.ts';
import { ArticleMinAggregateInput } from './article-min-aggregate.input.ts';
import { ArticleMaxAggregateInput } from './article-max-aggregate.input.ts';

@ArgsType()
export class ArticleGroupByArgs {
  @Field(() => ArticleWhereInput, { nullable: true })
  @Type(() => ArticleWhereInput)
  where?: Identity<ArticleWhereInput>;

  @Field(() => [ArticleOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<ArticleOrderByWithAggregationInput>;

  @Field(() => [ArticleScalarFieldEnum], { nullable: false })
  by!: Array<`${ArticleScalarFieldEnum}`>;

  @Field(() => ArticleScalarWhereWithAggregatesInput, { nullable: true })
  having?: Identity<ArticleScalarWhereWithAggregatesInput>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => ArticleCountAggregateInput, { nullable: true })
  _count?: Identity<ArticleCountAggregateInput>;

  @Field(() => ArticleAvgAggregateInput, { nullable: true })
  _avg?: Identity<ArticleAvgAggregateInput>;

  @Field(() => ArticleSumAggregateInput, { nullable: true })
  _sum?: Identity<ArticleSumAggregateInput>;

  @Field(() => ArticleMinAggregateInput, { nullable: true })
  _min?: Identity<ArticleMinAggregateInput>;

  @Field(() => ArticleMaxAggregateInput, { nullable: true })
  _max?: Identity<ArticleMaxAggregateInput>;
}
