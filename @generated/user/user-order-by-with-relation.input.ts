import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum.ts';
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
  bio?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  image?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  countComments?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  rating?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  @Type(() => SortOrderInput)
  money?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  role?: SortOrderInput;

  @Field(() => UserOrderByRelationAggregateInput, { nullable: true })
  @Type(() => UserOrderByRelationAggregateInput)
  following?: UserOrderByRelationAggregateInput;

  @Field(() => UserOrderByRelationAggregateInput, { nullable: true })
  @Type(() => UserOrderByRelationAggregateInput)
  followers?: UserOrderByRelationAggregateInput;

  @Field(() => ArticleOrderByRelationAggregateInput, { nullable: true })
  @Type(() => ArticleOrderByRelationAggregateInput)
  favoriteArticles?: ArticleOrderByRelationAggregateInput;

  @Field(() => ArticleOrderByRelationAggregateInput, { nullable: true })
  @Type(() => ArticleOrderByRelationAggregateInput)
  articles?: ArticleOrderByRelationAggregateInput;

  @Field(() => CommentOrderByRelationAggregateInput, { nullable: true })
  @Type(() => CommentOrderByRelationAggregateInput)
  comments?: CommentOrderByRelationAggregateInput;

  @Field(() => ProfileOrderByWithRelationInput, { nullable: true })
  @Type(() => ProfileOrderByWithRelationInput)
  profile?: ProfileOrderByWithRelationInput;
}
