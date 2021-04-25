import { Field, InputType } from '@nestjs/graphql';

import { SortOrder } from '../prisma/sort-order.enum';
import { DummyAvgOrderByAggregateInput } from './dummy-avg-order-by-aggregate.input';
import { DummyCountOrderByAggregateInput } from './dummy-count-order-by-aggregate.input';
import { DummyMaxOrderByAggregateInput } from './dummy-max-order-by-aggregate.input';
import { DummyMinOrderByAggregateInput } from './dummy-min-order-by-aggregate.input';
import { DummySumOrderByAggregateInput } from './dummy-sum-order-by-aggregate.input';

@InputType()
export class DummyOrderByWithAggregationInput {
    @Field(() => SortOrder, { nullable: true })
    id?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    floaty?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    int?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    float?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    bytes?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    decimal?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    bigInt?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    json?: SortOrder;

    @Field(() => DummyCountOrderByAggregateInput, { nullable: true })
    _count?: DummyCountOrderByAggregateInput;

    @Field(() => DummyAvgOrderByAggregateInput, { nullable: true })
    _avg?: DummyAvgOrderByAggregateInput;

    @Field(() => DummyMaxOrderByAggregateInput, { nullable: true })
    _max?: DummyMaxOrderByAggregateInput;

    @Field(() => DummyMinOrderByAggregateInput, { nullable: true })
    _min?: DummyMinOrderByAggregateInput;

    @Field(() => DummySumOrderByAggregateInput, { nullable: true })
    _sum?: DummySumOrderByAggregateInput;
}
