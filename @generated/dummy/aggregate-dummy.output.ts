import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DummyCountAggregate } from './dummy-count-aggregate.output.ts';
import { DummyAvgAggregate } from './dummy-avg-aggregate.output.ts';
import { DummySumAggregate } from './dummy-sum-aggregate.output.ts';
import { DummyMinAggregate } from './dummy-min-aggregate.output.ts';
import { DummyMaxAggregate } from './dummy-max-aggregate.output.ts';

@ObjectType()
export class AggregateDummy {
  @Field(() => DummyCountAggregate, { nullable: true })
  _count?: DummyCountAggregate;

  @Field(() => DummyAvgAggregate, { nullable: true })
  _avg?: DummyAvgAggregate;

  @Field(() => DummySumAggregate, { nullable: true })
  _sum?: DummySumAggregate;

  @Field(() => DummyMinAggregate, { nullable: true })
  _min?: DummyMinAggregate;

  @Field(() => DummyMaxAggregate, { nullable: true })
  _max?: DummyMaxAggregate;
}
