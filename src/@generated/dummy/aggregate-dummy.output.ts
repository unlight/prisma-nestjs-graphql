import { Field, Int, ObjectType } from '@nestjs/graphql';

import { DummyAvgAggregate } from './dummy-avg-aggregate.output';
import { DummyMaxAggregate } from './dummy-max-aggregate.output';
import { DummyMinAggregate } from './dummy-min-aggregate.output';
import { DummySumAggregate } from './dummy-sum-aggregate.output';

@ObjectType()
export class AggregateDummy {
    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    count?: number;

    @Field(() => DummyAvgAggregate, {
        nullable: true,
        description: undefined,
    })
    avg?: DummyAvgAggregate;

    @Field(() => DummySumAggregate, {
        nullable: true,
        description: undefined,
    })
    sum?: DummySumAggregate;

    @Field(() => DummyMinAggregate, {
        nullable: true,
        description: undefined,
    })
    min?: DummyMinAggregate;

    @Field(() => DummyMaxAggregate, {
        nullable: true,
        description: undefined,
    })
    max?: DummyMaxAggregate;
}
