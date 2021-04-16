import { Field, InputType } from '@nestjs/graphql';

import { ArticleOrderByRelationAggregateInput } from '../article/article-order-by-relation-aggregate.input';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByRelationAggregateInput } from './user-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {
    @Field(() => SortOrder, { nullable: true })
    id?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    email?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    name?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    password?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    bio?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    image?: SortOrder;

    @Field(() => UserOrderByRelationAggregateInput, { nullable: true })
    following?: UserOrderByRelationAggregateInput;

    @Field(() => UserOrderByRelationAggregateInput, { nullable: true })
    followers?: UserOrderByRelationAggregateInput;

    @Field(() => ArticleOrderByRelationAggregateInput, { nullable: true })
    favoriteArticles?: ArticleOrderByRelationAggregateInput;

    @Field(() => ArticleOrderByRelationAggregateInput, { nullable: true })
    articles?: ArticleOrderByRelationAggregateInput;

    @Field(() => CommentOrderByRelationAggregateInput, { nullable: true })
    comments?: CommentOrderByRelationAggregateInput;

    @Field(() => SortOrder, { nullable: true })
    countComments?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    rating?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    role?: SortOrder;
}
