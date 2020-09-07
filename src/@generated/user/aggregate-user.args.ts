import { ArgsType, Field, Int } from '@nestjs/graphql';

import { UserAvgAggregateInput } from './user-avg-aggregate.input';
import { UserDistinctFieldEnum } from './user-distinct-field.enum';
import { UserMaxAggregateInput } from './user-max-aggregate.input';
import { UserMinAggregateInput } from './user-min-aggregate.input';
import { UserOrderByInput } from './user-order-by.input';
import { UserSumAggregateInput } from './user-sum-aggregate.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserWhereInput } from './user-where.input';

@ArgsType()
export class AggregateUserArgs {
    @Field(() => UserWhereInput, {
        nullable: true,
        description: undefined,
    })
    where?: UserWhereInput;

    @Field(() => [UserOrderByInput], {
        nullable: true,
        description: undefined,
    })
    orderBy?: Array<UserOrderByInput>;

    @Field(() => UserWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    cursor?: UserWhereUniqueInput;

    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    take?: number;

    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    skip?: number;

    @Field(() => [UserDistinctFieldEnum], {
        nullable: true,
        description: undefined,
    })
    distinct?: Array<UserDistinctFieldEnum>;

    @Field(() => Boolean, {
        nullable: true,
        description: undefined,
    })
    count?: true | null;

    @Field(() => UserAvgAggregateInput, {
        nullable: true,
        description: undefined,
    })
    avg?: UserAvgAggregateInput | null;

    @Field(() => UserSumAggregateInput, {
        nullable: true,
        description: undefined,
    })
    sum?: UserSumAggregateInput | null;

    @Field(() => UserMinAggregateInput, {
        nullable: true,
        description: undefined,
    })
    min?: UserMinAggregateInput | null;

    @Field(() => UserMaxAggregateInput, {
        nullable: true,
        description: undefined,
    })
    max?: UserMaxAggregateInput | null;
}
