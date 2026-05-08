import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum.ts';
import type { Identity } from 'identity-type';
import { SortOrderInput } from '../prisma/sort-order.input.ts';
import { ArticleCountOrderByAggregateInput } from './article-count-order-by-aggregate.input.ts';
import { ArticleAvgOrderByAggregateInput } from './article-avg-order-by-aggregate.input.ts';
import { ArticleMaxOrderByAggregateInput } from './article-max-order-by-aggregate.input.ts';
import { ArticleMinOrderByAggregateInput } from './article-min-order-by-aggregate.input.ts';
import { ArticleSumOrderByAggregateInput } from './article-sum-order-by-aggregate.input.ts';

@InputType()
export class ArticleOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  slug?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  title?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  description?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  body?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  favoritesCount?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  authorId?: `${SortOrder}`;

  @Field(() => SortOrderInput, { nullable: true })
  active?: Identity<SortOrderInput>;

  @Field(() => ArticleCountOrderByAggregateInput, { nullable: true })
  _count?: Identity<ArticleCountOrderByAggregateInput>;

  @Field(() => ArticleAvgOrderByAggregateInput, { nullable: true })
  _avg?: Identity<ArticleAvgOrderByAggregateInput>;

  @Field(() => ArticleMaxOrderByAggregateInput, { nullable: true })
  _max?: Identity<ArticleMaxOrderByAggregateInput>;

  @Field(() => ArticleMinOrderByAggregateInput, { nullable: true })
  _min?: Identity<ArticleMinOrderByAggregateInput>;

  @Field(() => ArticleSumOrderByAggregateInput, { nullable: true })
  _sum?: Identity<ArticleSumOrderByAggregateInput>;
}
