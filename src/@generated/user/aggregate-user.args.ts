import { ArgsType, Field, Int } from '@nestjs/graphql';

import { UserAvgAggregateInput } from './user-avg-aggregate.input';
import { UserCountAggregateInput } from './user-count-aggregate.input';
import { UserMaxAggregateInput } from './user-max-aggregate.input';
import { UserMinAggregateInput } from './user-min-aggregate.input';
import { UserOrderByInput } from './user-order-by.input';
import { UserSumAggregateInput } from './user-sum-aggregate.input';
import { UserWhereInput } from './user-where.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@ArgsType()
export class AggregateUserArgs {
    @Field(() => UserWhereInput, { nullable: true })
    where?: UserWhereInput;

    @Field(() => [UserOrderByInput], { nullable: true })
    orderBy?: Array<UserOrderByInput>;

    @Field(() => UserWhereUniqueInput, { nullable: true })
    cursor?: UserWhereUniqueInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => UserCountAggregateInput, { nullable: true })
    count?: UserCountAggregateInput;

    @Field(() => UserAvgAggregateInput, { nullable: true })
    avg?: UserAvgAggregateInput;

    @Field(() => UserSumAggregateInput, { nullable: true })
    sum?: UserSumAggregateInput;

    @Field(() => UserMinAggregateInput, { nullable: true })
    min?: UserMinAggregateInput;

    @Field(() => UserMaxAggregateInput, { nullable: true })
    max?: UserMaxAggregateInput;
}
