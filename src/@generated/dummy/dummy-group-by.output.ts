import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

import { DummyAvgAggregate } from './dummy-avg-aggregate.output';
import { DummyCountAggregate } from './dummy-count-aggregate.output';
import { DummyMaxAggregate } from './dummy-max-aggregate.output';
import { DummyMinAggregate } from './dummy-min-aggregate.output';
import { DummySumAggregate } from './dummy-sum-aggregate.output';

@ObjectType()
export class DummyGroupBy {
    @Field(() => String, {
        nullable: true,
    })
    id?: string;

    @Field(() => String, {
        nullable: true,
    })
    bytes?: Buffer;

    @Field(() => String, {
        nullable: true,
    })
    decimal?: string;

    @Field(() => String, {
        nullable: true,
    })
    bigInt?: BigInt;

    @Field(() => GraphQLJSON, {
        nullable: true,
    })
    json?: object;

    @Field(() => DummyCountAggregate, {
        nullable: true,
    })
    count?: DummyCountAggregate;

    @Field(() => DummyAvgAggregate, {
        nullable: true,
    })
    avg?: DummyAvgAggregate;

    @Field(() => DummySumAggregate, {
        nullable: true,
    })
    sum?: DummySumAggregate;

    @Field(() => DummyMinAggregate, {
        nullable: true,
    })
    min?: DummyMinAggregate;

    @Field(() => DummyMaxAggregate, {
        nullable: true,
    })
    max?: DummyMaxAggregate;
}
