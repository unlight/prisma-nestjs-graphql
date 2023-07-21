import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationAndSearchRelevanceInput } from '../user/user-order-by-with-relation-and-search-relevance.input';
import { Type } from 'class-transformer';
import { ArticleOrderByWithRelationAndSearchRelevanceInput } from '../article/article-order-by-with-relation-and-search-relevance.input';
import { CommentOrderByRelevanceInput } from './comment-order-by-relevance.input';

@InputType()
export class CommentOrderByWithRelationAndSearchRelevanceInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  body?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  authorId?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  articleId?: SortOrderInput;

  @Field(() => UserOrderByWithRelationAndSearchRelevanceInput, { nullable: true })
  @Type(() => UserOrderByWithRelationAndSearchRelevanceInput)
  author?: UserOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => ArticleOrderByWithRelationAndSearchRelevanceInput, { nullable: true })
  @Type(() => ArticleOrderByWithRelationAndSearchRelevanceInput)
  article?: ArticleOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => CommentOrderByRelevanceInput, { nullable: true })
  _relevance?: CommentOrderByRelevanceInput;
}
