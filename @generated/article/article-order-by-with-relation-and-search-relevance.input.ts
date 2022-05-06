import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TagOrderByRelationAggregateInput } from '../tag/tag-order-by-relation-aggregate.input';
import { UserOrderByWithRelationAndSearchRelevanceInput } from '../user/user-order-by-with-relation-and-search-relevance.input';
import { UserOrderByRelationAggregateInput } from '../user/user-order-by-relation-aggregate.input';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';
import { ArticleOrderByRelevanceInput } from './article-order-by-relevance.input';

@InputType()
export class ArticleOrderByWithRelationAndSearchRelevanceInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  slug?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  title?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  description?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  body?: keyof typeof SortOrder;

  @Field(() => TagOrderByRelationAggregateInput, { nullable: true })
  tags?: TagOrderByRelationAggregateInput;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  favoritesCount?: keyof typeof SortOrder;

  @Field(() => UserOrderByWithRelationAndSearchRelevanceInput, { nullable: true })
  author?: UserOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => SortOrder, { nullable: true })
  authorId?: keyof typeof SortOrder;

  @Field(() => UserOrderByRelationAggregateInput, { nullable: true })
  favoritedBy?: UserOrderByRelationAggregateInput;

  @Field(() => CommentOrderByRelationAggregateInput, { nullable: true })
  comments?: CommentOrderByRelationAggregateInput;

  @Field(() => SortOrder, { nullable: true })
  active?: keyof typeof SortOrder;

  @Field(() => ArticleOrderByRelevanceInput, { nullable: true })
  _relevance?: ArticleOrderByRelevanceInput;
}
