import { Field, InputType } from '@nestjs/graphql';

import { SortOrder } from '../prisma/sort-order.enum';
import { UserAvgOrderByAggregateInput } from './user-avg-order-by-aggregate.input';
import { UserCountOrderByAggregateInput } from './user-count-order-by-aggregate.input';
import { UserMaxOrderByAggregateInput } from './user-max-order-by-aggregate.input';
import { UserMinOrderByAggregateInput } from './user-min-order-by-aggregate.input';
import { UserSumOrderByAggregateInput } from './user-sum-order-by-aggregate.input';

@InputType()
export class UserOrderByWithAggregationInput {
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

    @Field(() => UserCountOrderByAggregateInput, { nullable: true })
    _count?: UserCountOrderByAggregateInput;

    @Field(() => UserAvgOrderByAggregateInput, { nullable: true })
    _avg?: UserAvgOrderByAggregateInput;

    @Field(() => UserMaxOrderByAggregateInput, { nullable: true })
    _max?: UserMaxOrderByAggregateInput;

    @Field(() => UserMinOrderByAggregateInput, { nullable: true })
    _min?: UserMinOrderByAggregateInput;

    @Field(() => UserSumOrderByAggregateInput, { nullable: true })
    _sum?: UserSumOrderByAggregateInput;
}
