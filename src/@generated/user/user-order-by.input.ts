import { Field, InputType } from '@nestjs/graphql';

import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class UserOrderByInput {
    @Field(() => SortOrder, {
        nullable: true,
        description: undefined,
    })
    id?: SortOrder;

    @Field(() => SortOrder, {
        nullable: true,
        description: undefined,
    })
    email?: SortOrder;

    @Field(() => SortOrder, {
        nullable: true,
        description: undefined,
    })
    name?: SortOrder;

    @Field(() => SortOrder, {
        nullable: true,
        description: undefined,
    })
    password?: SortOrder;

    @Field(() => SortOrder, {
        nullable: true,
        description: undefined,
    })
    bio?: SortOrder | null;

    @Field(() => SortOrder, {
        nullable: true,
        description: undefined,
    })
    image?: SortOrder | null;

    @Field(() => SortOrder, {
        nullable: true,
        description: undefined,
    })
    countComments?: SortOrder | null;

    @Field(() => SortOrder, {
        nullable: true,
        description: undefined,
    })
    rating?: SortOrder | null;
}
