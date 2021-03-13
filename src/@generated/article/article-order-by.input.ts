import { Field, InputType } from '@nestjs/graphql';

import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByInput } from '../user/user-order-by.input';

@InputType()
export class ArticleOrderByInput {
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

    @Field(() => SortOrder, { nullable: true })
    createdAt?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    updatedAt?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    favoritesCount?: SortOrder;

    @Field(() => UserOrderByInput, { nullable: true })
    author?: UserOrderByInput;

    @Field(() => SortOrder, { nullable: true })
    authorId?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    active?: SortOrder;
}
