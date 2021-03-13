import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

import { DummyAvgAggregate } from './dummy-avg-aggregate.output';
import { DummyCountAggregate } from './dummy-count-aggregate.output';
import { DummyMaxAggregate } from './dummy-max-aggregate.output';
import { DummyMinAggregate } from './dummy-min-aggregate.output';
import { DummySumAggregate } from './dummy-sum-aggregate.output';

@ObjectType()
export class DummyGroupBy {
    @Field(() => String, { nullable: false })
    id!: string;

    @Field(() => Float, { nullable: false })
    floaty!: number;

    @Field(() => Int, { nullable: true })
    int?: number;

    @Field(() => Float, { nullable: true })
    float?: number;

    @Field(() => String, { nullable: true })
    bytes?: Buffer;

    @Field(() => String, { nullable: true })
    decimal?: number | string;

    @Field(() => String, { nullable: true })
    bigInt?: bigint | number;

    @Field(() => GraphQLJSON, { nullable: true })
    json?: any;

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
