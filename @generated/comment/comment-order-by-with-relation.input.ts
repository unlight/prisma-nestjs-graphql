import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { ArticleOrderByWithRelationInput } from '../article/article-order-by-with-relation.input';
import { CommentOrderByRelevanceInput } from './comment-order-by-relevance.input';

@InputType()
export class CommentOrderByWithRelationInput {
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
  articleId?: SortOrderInput;

  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  @Type(() => UserOrderByWithRelationInput)
  author?: UserOrderByWithRelationInput;

  @Field(() => ArticleOrderByWithRelationInput, { nullable: true })
  @Type(() => ArticleOrderByWithRelationInput)
  article?: ArticleOrderByWithRelationInput;

  @Field(() => CommentOrderByRelevanceInput, { nullable: true })
  _relevance?: CommentOrderByRelevanceInput;
}
