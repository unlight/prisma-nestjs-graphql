import { Field, InputType } from '@nestjs/graphql';

import { ArticleOrderByWithRelationInput } from '../article/article-order-by-with-relation.input';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class CommentOrderByWithRelationInput {
    @Field(() => SortOrder, { nullable: true })
    id?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    createdAt?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    updatedAt?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    body?: SortOrder;

    @Field(() => UserOrderByWithRelationInput, { nullable: true })
    author?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, { nullable: true })
    authorId?: SortOrder;

    @Field(() => ArticleOrderByWithRelationInput, { nullable: true })
    article?: ArticleOrderByWithRelationInput;

    @Field(() => SortOrder, { nullable: true })
    articleId?: SortOrder;
}
