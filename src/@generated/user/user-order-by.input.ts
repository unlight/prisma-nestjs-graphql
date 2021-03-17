import { Field, InputType } from '@nestjs/graphql';

import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class UserOrderByInput {
    @Field(() => SortOrder, { nullable: true })
    id?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    email?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    name?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    password?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    bio?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    image?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    countComments?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    rating?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    role?: SortOrder;
}
