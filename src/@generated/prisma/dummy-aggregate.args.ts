import { ArgsType, Field, Int } from '@nestjs/graphql';

import { DummyAvgAggregateInput } from '../dummy/dummy-avg-aggregate.input';
import { DummyCountAggregateInput } from '../dummy/dummy-count-aggregate.input';
import { DummyMaxAggregateInput } from '../dummy/dummy-max-aggregate.input';
import { DummyMinAggregateInput } from '../dummy/dummy-min-aggregate.input';
import { DummyOrderByWithRelationInput } from '../dummy/dummy-order-by-with-relation.input';
import { DummySumAggregateInput } from '../dummy/dummy-sum-aggregate.input';
import { DummyWhereInput } from '../dummy/dummy-where.input';
import { DummyWhereUniqueInput } from '../dummy/dummy-where-unique.input';

@ArgsType()
export class DummyAggregateArgs {
    @Field(() => DummyWhereInput, { nullable: true })
    where?: DummyWhereInput;

    @Field(() => [DummyOrderByWithRelationInput], { nullable: true })
    orderBy?: Array<DummyOrderByWithRelationInput>;

    @Field(() => DummyWhereUniqueInput, { nullable: true })
    cursor?: DummyWhereUniqueInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => DummyCountAggregateInput, { nullable: true })
    _count?: DummyCountAggregateInput;

    @Field(() => DummyAvgAggregateInput, { nullable: true })
    _avg?: DummyAvgAggregateInput;

    @Field(() => DummySumAggregateInput, { nullable: true })
    _sum?: DummySumAggregateInput;

    @Field(() => DummyMinAggregateInput, { nullable: true })
    _min?: DummyMinAggregateInput;

    @Field(() => DummyMaxAggregateInput, { nullable: true })
    _max?: DummyMaxAggregateInput;
}
