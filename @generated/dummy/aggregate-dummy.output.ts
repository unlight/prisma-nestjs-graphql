import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DummyCountAggregate } from './dummy-count-aggregate.output';
import { DummyAvgAggregate } from './dummy-avg-aggregate.output';
import { DummySumAggregate } from './dummy-sum-aggregate.output';
import { DummyMinAggregate } from './dummy-min-aggregate.output';
import { DummyMaxAggregate } from './dummy-max-aggregate.output';

@ObjectType()
export class AggregateDummy {

    @Field(() => DummyCountAggregate, {nullable:true})
    _count?: DummyCountAggregate;

    @Field(() => DummyAvgAggregate, {nullable:true})
    _avg?: DummyAvgAggregate;

    @Field(() => DummySumAggregate, {nullable:true})
    _sum?: DummySumAggregate;

    @Field(() => DummyMinAggregate, {nullable:true})
    _min?: DummyMinAggregate;

    @Field(() => DummyMaxAggregate, {nullable:true})
    _max?: DummyMaxAggregate;
}
