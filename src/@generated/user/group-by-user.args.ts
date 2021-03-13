import { ArgsType, Field, Int } from '@nestjs/graphql';

import { UserAvgAggregateInput } from './user-avg-aggregate.input';
import { UserCountAggregateInput } from './user-count-aggregate.input';
import { UserMaxAggregateInput } from './user-max-aggregate.input';
import { UserMinAggregateInput } from './user-min-aggregate.input';
import { UserOrderByInput } from './user-order-by.input';
import { UserScalarFieldEnum } from './user-scalar-field.enum';
import { UserScalarWhereWithAggregatesInput } from './user-scalar-where-with-aggregates.input';
import { UserSumAggregateInput } from './user-sum-aggregate.input';
import { UserWhereInput } from './user-where.input';

@ArgsType()
export class GroupByUserArgs {
    @Field(() => UserWhereInput, { nullable: true })
    where?: UserWhereInput;

    @Field(() => [UserOrderByInput], { nullable: true })
    orderBy?: Array<UserOrderByInput>;

    @Field(() => [UserScalarFieldEnum], { nullable: false })
    by!: Array<UserScalarFieldEnum>;

    @Field(() => UserScalarWhereWithAggregatesInput, { nullable: true })
    having?: UserScalarWhereWithAggregatesInput;

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
