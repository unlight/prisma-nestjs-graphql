import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum.ts';
import { SortOrderInput } from '../prisma/sort-order.input.ts';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input.ts';
import { Type } from 'class-transformer';
import { ArticleOrderByWithRelationInput } from '../article/article-order-by-with-relation.input.ts';

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
}
