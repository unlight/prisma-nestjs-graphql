import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum.ts';
import { SortOrderInput } from '../prisma/sort-order.input.ts';
import { TagOrderByRelationAggregateInput } from '../tag/tag-order-by-relation-aggregate.input.ts';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input.ts';
import { Type } from 'class-transformer';
import { UserOrderByRelationAggregateInput } from '../user/user-order-by-relation-aggregate.input.ts';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input.ts';

@InputType()
export class ArticleOrderByWithRelationInput {
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
  active?: SortOrderInput;

  @Field(() => TagOrderByRelationAggregateInput, { nullable: true })
  tags?: TagOrderByRelationAggregateInput;

  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  @Type(() => UserOrderByWithRelationInput)
  author?: UserOrderByWithRelationInput;

  @Field(() => UserOrderByRelationAggregateInput, { nullable: true })
  @Type(() => UserOrderByRelationAggregateInput)
  favoritedBy?: UserOrderByRelationAggregateInput;

  @Field(() => CommentOrderByRelationAggregateInput, { nullable: true })
  @Type(() => CommentOrderByRelationAggregateInput)
  comments?: CommentOrderByRelationAggregateInput;
}
