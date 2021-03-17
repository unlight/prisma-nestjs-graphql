import { ArgsType, Field, Int } from '@nestjs/graphql';

import { DummyAvgAggregateInput } from './dummy-avg-aggregate.input';
import { DummyCountAggregateInput } from './dummy-count-aggregate.input';
import { DummyMaxAggregateInput } from './dummy-max-aggregate.input';
import { DummyMinAggregateInput } from './dummy-min-aggregate.input';
import { DummyOrderByInput } from './dummy-order-by.input';
import { DummyScalarFieldEnum } from './dummy-scalar-field.enum';
import { DummyScalarWhereWithAggregatesInput } from './dummy-scalar-where-with-aggregates.input';
import { DummySumAggregateInput } from './dummy-sum-aggregate.input';
import { DummyWhereInput } from './dummy-where.input';

@ArgsType()
export class GroupByDummyArgs {
    @Field(() => DummyWhereInput, { nullable: true })
    where?: DummyWhereInput;

    @Field(() => [DummyOrderByInput], { nullable: true })
    orderBy?: Array<DummyOrderByInput>;

    @Field(() => [DummyScalarFieldEnum], { nullable: false })
    by!: Array<DummyScalarFieldEnum>;

    @Field(() => DummyScalarWhereWithAggregatesInput, { nullable: true })
    having?: DummyScalarWhereWithAggregatesInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => DummyCountAggregateInput, { nullable: true })
    count?: DummyCountAggregateInput;

    @Field(() => DummyAvgAggregateInput, { nullable: true })
    avg?: DummyAvgAggregateInput;

    @Field(() => DummySumAggregateInput, { nullable: true })
    sum?: DummySumAggregateInput;

    @Field(() => DummyMinAggregateInput, { nullable: true })
    min?: DummyMinAggregateInput;

    @Field(() => DummyMaxAggregateInput, { nullable: true })
    max?: DummyMaxAggregateInput;
}
