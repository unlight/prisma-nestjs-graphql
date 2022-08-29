import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
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

  @Field(() => UserOrderByWithRelationAndSearchRelevanceInput, { nullable: true })
  @Type(() => UserOrderByWithRelationAndSearchRelevanceInput)
  author?: UserOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => SortOrder, { nullable: true })
  authorId?: keyof typeof SortOrder;

  @Field(() => ArticleOrderByWithRelationAndSearchRelevanceInput, { nullable: true })
  @Type(() => ArticleOrderByWithRelationAndSearchRelevanceInput)
  article?: ArticleOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => SortOrder, { nullable: true })
  articleId?: keyof typeof SortOrder;

  @Field(() => CommentOrderByRelevanceInput, { nullable: true })
  _relevance?: CommentOrderByRelevanceInput;
}
