import { Field, ObjectType } from '@nestjs/graphql';

import { UserAvgAggregate } from './user-avg-aggregate.output';
import { UserCountAggregate } from './user-count-aggregate.output';
import { UserMaxAggregate } from './user-max-aggregate.output';
import { UserMinAggregate } from './user-min-aggregate.output';
import { UserSumAggregate } from './user-sum-aggregate.output';

@ObjectType()
export class AggregateUser {
    @Field(() => UserCountAggregate, { nullable: true })
    count?: UserCountAggregate;

    @Field(() => UserAvgAggregate, { nullable: true })
    avg?: UserAvgAggregate;

    @Field(() => UserSumAggregate, { nullable: true })
    sum?: UserSumAggregate;

    @Field(() => UserMinAggregate, { nullable: true })
    min?: UserMinAggregate;

    @Field(() => UserMaxAggregate, { nullable: true })
    max?: UserMaxAggregate;
}
