import { Field, InputType } from '@nestjs/graphql';

import { CommentOrderByAggregateInput } from '../comment/comment-order-by-aggregate.input';
import { SortOrder } from '../prisma/sort-order.enum';
import { TagOrderByAggregateInput } from '../tag/tag-order-by-aggregate.input';
import { UserOrderByAggregateInput } from '../user/user-order-by-aggregate.input';
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

    @Field(() => TagOrderByAggregateInput, { nullable: true })
    tags?: TagOrderByAggregateInput;

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

    @Field(() => UserOrderByAggregateInput, { nullable: true })
    favoritedBy?: UserOrderByAggregateInput;

    @Field(() => CommentOrderByAggregateInput, { nullable: true })
    comments?: CommentOrderByAggregateInput;

    @Field(() => SortOrder, { nullable: true })
    active?: SortOrder;
}
