import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { DummyCountAggregate } from './dummy-count-aggregate.output.ts';
import { DummyAvgAggregate } from './dummy-avg-aggregate.output.ts';
import { DummySumAggregate } from './dummy-sum-aggregate.output.ts';
import { DummyMinAggregate } from './dummy-min-aggregate.output.ts';
import { DummyMaxAggregate } from './dummy-max-aggregate.output.ts';

@ObjectType()
export class AggregateDummy {
  @Field(() => DummyCountAggregate, { nullable: true })
  _count?: Identity<DummyCountAggregate>;

  @Field(() => DummyAvgAggregate, { nullable: true })
  _avg?: Identity<DummyAvgAggregate>;

  @Field(() => DummySumAggregate, { nullable: true })
  _sum?: Identity<DummySumAggregate>;

  @Field(() => DummyMinAggregate, { nullable: true })
  _min?: Identity<DummyMinAggregate>;

  @Field(() => DummyMaxAggregate, { nullable: true })
  _max?: Identity<DummyMaxAggregate>;
}
