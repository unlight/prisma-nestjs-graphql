import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

import { DummyAvgAggregate } from './dummy-avg-aggregate.output';
import { DummyCountAggregate } from './dummy-count-aggregate.output';
import { DummyMaxAggregate } from './dummy-max-aggregate.output';
import { DummyMinAggregate } from './dummy-min-aggregate.output';
import { DummySumAggregate } from './dummy-sum-aggregate.output';

@ObjectType()
export class DummyGroupBy {
    @Field(() => String, { nullable: false })
    id!: string;

    @Field(() => Date, { nullable: false })
    created!: Date | string;

    @Field(() => Float, { nullable: false })
    floaty!: number;

    @Field(() => Int, { nullable: true })
    int?: number;

    @Field(() => Float, { nullable: true })
    float?: number;

    @Field(() => String, { nullable: true })
    bytes?: Buffer;

    @Field(() => GraphQLDecimal, { nullable: true })
    decimal?: any;

    @Field(() => String, { nullable: true })
    bigInt?: bigint | number;

    @Field(() => GraphQLJSON, { nullable: true })
    json?: any;

    @Field(() => [String], { nullable: true })
    friends?: Array<string>;

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
