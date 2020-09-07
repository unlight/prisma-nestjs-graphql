import { Field, Int, ObjectType } from '@nestjs/graphql';

import { UserAvgAggregate } from './user-avg-aggregate.output';
import { UserMaxAggregate } from './user-max-aggregate.output';
import { UserMinAggregate } from './user-min-aggregate.output';
import { UserSumAggregate } from './user-sum-aggregate.output';

@ObjectType()
export class AggregateUser {
    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    count?: number | null;

    @Field(() => UserAvgAggregate, {
        nullable: true,
        description: undefined,
    })
    avg?: UserAvgAggregate | null;

    @Field(() => UserSumAggregate, {
        nullable: true,
        description: undefined,
    })
    sum?: UserSumAggregate | null;

    @Field(() => UserMinAggregate, {
        nullable: true,
        description: undefined,
    })
    min?: UserMinAggregate | null;

    @Field(() => UserMaxAggregate, {
        nullable: true,
        description: undefined,
    })
    max?: UserMaxAggregate | null;
}
