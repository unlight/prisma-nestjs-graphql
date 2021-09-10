import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByRelationAggregateInput } from './user-order-by-relation-aggregate.input';
import { ArticleOrderByRelationAggregateInput } from '../article/article-order-by-relation-aggregate.input';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';
import { ProfileOrderByWithRelationInput } from '../profile/profile-order-by-with-relation.input';

@InputType()
export class UserOrderByWithRelationInput {
    @Field(() => SortOrder, { nullable: true })
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    bio?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    image?: keyof typeof SortOrder;

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
    countComments?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    rating?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    role?: keyof typeof SortOrder;

    @Field(() => ProfileOrderByWithRelationInput, { nullable: true })
    profile?: ProfileOrderByWithRelationInput;
}
