import { Field, InputType } from '@nestjs/graphql';

import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class CommentOrderByInput {
    @Field(() => SortOrder, {
        nullable: true,
        description: undefined,
    })
    id?: SortOrder;

    @Field(() => SortOrder, {
        nullable: true,
        description: undefined,
    })
    createdAt?: SortOrder;

    @Field(() => SortOrder, {
        nullable: true,
        description: undefined,
    })
    updatedAt?: SortOrder;

    @Field(() => SortOrder, {
        nullable: true,
        description: undefined,
    })
    body?: SortOrder;

    @Field(() => SortOrder, {
        nullable: true,
        description: undefined,
    })
    authorId?: SortOrder;

    @Field(() => SortOrder, {
        nullable: true,
        description: undefined,
    })
    articleId?: SortOrder;
}
