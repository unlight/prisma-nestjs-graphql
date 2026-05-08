import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum.ts';
import type { Identity } from 'identity-type';
import { SortOrderInput } from '../prisma/sort-order.input.ts';
import { CommentCountOrderByAggregateInput } from './comment-count-order-by-aggregate.input.ts';
import { CommentMaxOrderByAggregateInput } from './comment-max-order-by-aggregate.input.ts';
import { CommentMinOrderByAggregateInput } from './comment-min-order-by-aggregate.input.ts';

@InputType()
export class CommentOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  body?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  authorId?: `${SortOrder}`;

  @Field(() => SortOrderInput, { nullable: true })
  articleId?: Identity<SortOrderInput>;

  @Field(() => CommentCountOrderByAggregateInput, { nullable: true })
  _count?: Identity<CommentCountOrderByAggregateInput>;

  @Field(() => CommentMaxOrderByAggregateInput, { nullable: true })
  _max?: Identity<CommentMaxOrderByAggregateInput>;

  @Field(() => CommentMinOrderByAggregateInput, { nullable: true })
  _min?: Identity<CommentMinOrderByAggregateInput>;
}
