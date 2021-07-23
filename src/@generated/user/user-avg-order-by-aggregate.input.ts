import { Field, InputType } from '@nestjs/graphql';

import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class UserAvgOrderByAggregateInput {
    @Field(() => SortOrder, { nullable: true })
    countComments?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    rating?: keyof typeof SortOrder;
}
