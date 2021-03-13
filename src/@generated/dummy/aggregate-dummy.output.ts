import { Field, ObjectType } from '@nestjs/graphql';

import { DummyAvgAggregate } from './dummy-avg-aggregate.output';
import { DummyCountAggregate } from './dummy-count-aggregate.output';
import { DummyMaxAggregate } from './dummy-max-aggregate.output';
import { DummyMinAggregate } from './dummy-min-aggregate.output';
import { DummySumAggregate } from './dummy-sum-aggregate.output';

@ObjectType()
export class AggregateDummy {
    @Field(() => DummyCountAggregate, { nullable: true })
    count?: DummyCountAggregate;

    @Field(() => DummyAvgAggregate, { nullable: true })
    avg?: DummyAvgAggregate;

    @Field(() => DummySumAggregate, { nullable: true })
    sum?: DummySumAggregate;

    @Field(() => DummyMinAggregate, { nullable: true })
    min?: DummyMinAggregate;

    @Field(() => DummyMaxAggregate, { nullable: true })
    max?: DummyMaxAggregate;
}
