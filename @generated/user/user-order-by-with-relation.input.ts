import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum.ts';
import type { Identity } from 'identity-type';
import { SortOrderInput } from '../prisma/sort-order.input.ts';
import { Type } from 'class-transformer';
import { UserOrderByRelationAggregateInput } from './user-order-by-relation-aggregate.input.ts';
import { ArticleOrderByRelationAggregateInput } from '../article/article-order-by-relation-aggregate.input.ts';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input.ts';
import { ProfileOrderByWithRelationInput } from '../profile/profile-order-by-with-relation.input.ts';

@InputType()
export class UserOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  email?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  name?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  password?: `${SortOrder}`;

  @Field(() => SortOrderInput, { nullable: true })
  bio?: Identity<SortOrderInput>;

  @Field(() => SortOrderInput, { nullable: true })
  image?: Identity<SortOrderInput>;

  @Field(() => SortOrderInput, { nullable: true })
  countComments?: Identity<SortOrderInput>;

  @Field(() => SortOrderInput, { nullable: true })
  rating?: Identity<SortOrderInput>;

  @Field(() => SortOrderInput, { nullable: true })
  @Type(() => SortOrderInput)
  money?: Identity<SortOrderInput>;

  @Field(() => SortOrderInput, { nullable: true })
  role?: Identity<SortOrderInput>;

  @Field(() => UserOrderByRelationAggregateInput, { nullable: true })
  @Type(() => UserOrderByRelationAggregateInput)
  following?: Identity<UserOrderByRelationAggregateInput>;

  @Field(() => UserOrderByRelationAggregateInput, { nullable: true })
  @Type(() => UserOrderByRelationAggregateInput)
  followers?: Identity<UserOrderByRelationAggregateInput>;

  @Field(() => ArticleOrderByRelationAggregateInput, { nullable: true })
  @Type(() => ArticleOrderByRelationAggregateInput)
  favoriteArticles?: Identity<ArticleOrderByRelationAggregateInput>;

  @Field(() => ArticleOrderByRelationAggregateInput, { nullable: true })
  @Type(() => ArticleOrderByRelationAggregateInput)
  articles?: Identity<ArticleOrderByRelationAggregateInput>;

  @Field(() => CommentOrderByRelationAggregateInput, { nullable: true })
  @Type(() => CommentOrderByRelationAggregateInput)
  comments?: Identity<CommentOrderByRelationAggregateInput>;

  @Field(() => ProfileOrderByWithRelationInput, { nullable: true })
  @Type(() => ProfileOrderByWithRelationInput)
  profile?: Identity<ProfileOrderByWithRelationInput>;
}
