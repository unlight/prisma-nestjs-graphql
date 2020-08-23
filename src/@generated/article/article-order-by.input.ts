import { Field, InputType } from '@nestjs/graphql';

import { SortOrder } from '../prisma/sort-order.enum';

@InputType({})
export class ArticleOrderByInput {
    @Field(() => SortOrder, {
        nullable: true,
        description: undefined,
    })
    id?: SortOrder;

    @Field(() => SortOrder, {
        nullable: true,
        description: undefined,
    })
    slug?: SortOrder;

    @Field(() => SortOrder, {
        nullable: true,
        description: undefined,
    })
    title?: SortOrder;

    @Field(() => SortOrder, {
        nullable: true,
        description: undefined,
    })
    description?: SortOrder;

    @Field(() => SortOrder, {
        nullable: true,
        description: undefined,
    })
    body?: SortOrder;

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
    favoritesCount?: SortOrder;

    @Field(() => SortOrder, {
        nullable: true,
        description: undefined,
    })
    authorId?: SortOrder;

    @Field(() => SortOrder, {
        nullable: true,
        description: undefined,
    })
    active?: SortOrder | null;
}
