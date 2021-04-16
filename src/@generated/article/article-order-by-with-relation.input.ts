import { Field, InputType } from '@nestjs/graphql';

import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';
import { SortOrder } from '../prisma/sort-order.enum';
import { TagOrderByRelationAggregateInput } from '../tag/tag-order-by-relation-aggregate.input';
import { UserOrderByRelationAggregateInput } from '../user/user-order-by-relation-aggregate.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class ArticleOrderByWithRelationInput {
    @Field(() => SortOrder, { nullable: true })
    id?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    slug?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    title?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    description?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    body?: SortOrder;

    @Field(() => TagOrderByRelationAggregateInput, { nullable: true })
    tags?: TagOrderByRelationAggregateInput;

    @Field(() => SortOrder, { nullable: true })
    createdAt?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    updatedAt?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    favoritesCount?: SortOrder;

    @Field(() => UserOrderByWithRelationInput, { nullable: true })
    author?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, { nullable: true })
    authorId?: SortOrder;

    @Field(() => UserOrderByRelationAggregateInput, { nullable: true })
    favoritedBy?: UserOrderByRelationAggregateInput;

    @Field(() => CommentOrderByRelationAggregateInput, { nullable: true })
    comments?: CommentOrderByRelationAggregateInput;

    @Field(() => SortOrder, { nullable: true })
    active?: SortOrder;
}
