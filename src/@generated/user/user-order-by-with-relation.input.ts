import { Field, InputType } from '@nestjs/graphql';

import { ArticleOrderByAggregateInput } from '../article/article-order-by-aggregate.input';
import { CommentOrderByAggregateInput } from '../comment/comment-order-by-aggregate.input';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByAggregateInput } from './user-order-by-aggregate.input';

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

    @Field(() => UserOrderByAggregateInput, { nullable: true })
    following?: UserOrderByAggregateInput;

    @Field(() => UserOrderByAggregateInput, { nullable: true })
    followers?: UserOrderByAggregateInput;

    @Field(() => ArticleOrderByAggregateInput, { nullable: true })
    favoriteArticles?: ArticleOrderByAggregateInput;

    @Field(() => ArticleOrderByAggregateInput, { nullable: true })
    articles?: ArticleOrderByAggregateInput;

    @Field(() => CommentOrderByAggregateInput, { nullable: true })
    comments?: CommentOrderByAggregateInput;

    @Field(() => SortOrder, { nullable: true })
    countComments?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    rating?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    role?: SortOrder;
}
