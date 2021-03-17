import { Field, InputType } from '@nestjs/graphql';

import { ArticleOrderByInput } from '../article/article-order-by.input';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByInput } from '../user/user-order-by.input';

@InputType()
export class CommentOrderByInput {
    @Field(() => SortOrder, { nullable: true })
    id?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    createdAt?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    updatedAt?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    body?: SortOrder;

    @Field(() => UserOrderByInput, { nullable: true })
    author?: UserOrderByInput;

    @Field(() => SortOrder, { nullable: true })
    authorId?: SortOrder;

    @Field(() => ArticleOrderByInput, { nullable: true })
    article?: ArticleOrderByInput;

    @Field(() => SortOrder, { nullable: true })
    articleId?: SortOrder;
}
