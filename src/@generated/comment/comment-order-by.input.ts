import { Field, InputType } from '@nestjs/graphql';

import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class CommentOrderByInput {
    @Field(() => SortOrder, {
        nullable: true,
    })
    id?: SortOrder;

    @Field(() => SortOrder, {
        nullable: true,
    })
    createdAt?: SortOrder;

    @Field(() => SortOrder, {
        nullable: true,
    })
    updatedAt?: SortOrder;

    @Field(() => SortOrder, {
        nullable: true,
    })
    body?: SortOrder;

    @Field(() => SortOrder, {
        nullable: true,
    })
    authorId?: SortOrder;

    @Field(() => SortOrder, {
        nullable: true,
    })
    articleId?: SortOrder;
}
