import { Field, Int, ObjectType } from '@nestjs/graphql';

import { UserAvgAggregate } from './user-avg-aggregate.output';
import { UserMaxAggregate } from './user-max-aggregate.output';
import { UserMinAggregate } from './user-min-aggregate.output';
import { UserSumAggregate } from './user-sum-aggregate.output';

@ObjectType()
export class AggregateUser {
    @Field(() => Int, {
        nullable: true,
    })
    count?: number;

    @Field(() => UserAvgAggregate, {
        nullable: true,
    })
    avg?: UserAvgAggregate;

    @Field(() => UserSumAggregate, {
        nullable: true,
    })
    sum?: UserSumAggregate;

    @Field(() => UserMinAggregate, {
        nullable: true,
    })
    min?: UserMinAggregate;

    @Field(() => UserMaxAggregate, {
        nullable: true,
    })
    max?: UserMaxAggregate;
}
