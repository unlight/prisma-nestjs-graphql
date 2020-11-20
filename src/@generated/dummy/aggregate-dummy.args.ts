import { ArgsType, Field, Int } from '@nestjs/graphql';

import { DummyAvgAggregateInput } from './dummy-avg-aggregate.input';
import { DummyDistinctFieldEnum } from './dummy-distinct-field.enum';
import { DummyMaxAggregateInput } from './dummy-max-aggregate.input';
import { DummyMinAggregateInput } from './dummy-min-aggregate.input';
import { DummyOrderByInput } from './dummy-order-by.input';
import { DummySumAggregateInput } from './dummy-sum-aggregate.input';
import { DummyWhereInput } from './dummy-where.input';
import { DummyWhereUniqueInput } from './dummy-where-unique.input';

@ArgsType()
export class AggregateDummyArgs {
    @Field(() => DummyWhereInput, {
        nullable: true,
        description: undefined,
    })
    where?: DummyWhereInput;

    @Field(() => [DummyOrderByInput], {
        nullable: true,
        description: undefined,
    })
    orderBy?: Array<DummyOrderByInput> | DummyOrderByInput;

    @Field(() => DummyWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    cursor?: DummyWhereUniqueInput;

    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    take?: number;

    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    skip?: number;

    @Field(() => [DummyDistinctFieldEnum], {
        nullable: true,
        description: undefined,
    })
    distinct?: Array<DummyDistinctFieldEnum>;

    @Field(() => Boolean, {
        nullable: true,
        description: undefined,
    })
    count?: true;

    @Field(() => DummyAvgAggregateInput, {
        nullable: true,
        description: undefined,
    })
    avg?: DummyAvgAggregateInput;

    @Field(() => DummySumAggregateInput, {
        nullable: true,
        description: undefined,
    })
    sum?: DummySumAggregateInput;

    @Field(() => DummyMinAggregateInput, {
        nullable: true,
        description: undefined,
    })
    min?: DummyMinAggregateInput;

    @Field(() => DummyMaxAggregateInput, {
        nullable: true,
        description: undefined,
    })
    max?: DummyMaxAggregateInput;
}
