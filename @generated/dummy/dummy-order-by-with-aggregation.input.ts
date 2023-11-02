import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DummyCountOrderByAggregateInput } from './dummy-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { DummyAvgOrderByAggregateInput } from './dummy-avg-order-by-aggregate.input';
import { DummyMaxOrderByAggregateInput } from './dummy-max-order-by-aggregate.input';
import { DummyMinOrderByAggregateInput } from './dummy-min-order-by-aggregate.input';
import { DummySumOrderByAggregateInput } from './dummy-sum-order-by-aggregate.input';

@InputType()
export class DummyOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    date?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    int?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    float?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    bytes?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    decimal?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    decimals?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    bigInt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    json?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    friends?: keyof typeof SortOrder;

    @Field(() => DummyCountOrderByAggregateInput, {nullable:true})
    @Type(() => DummyCountOrderByAggregateInput)
    _count?: DummyCountOrderByAggregateInput;

    @Field(() => DummyAvgOrderByAggregateInput, {nullable:true})
    @Type(() => DummyAvgOrderByAggregateInput)
    _avg?: DummyAvgOrderByAggregateInput;

    @Field(() => DummyMaxOrderByAggregateInput, {nullable:true})
    @Type(() => DummyMaxOrderByAggregateInput)
    _max?: DummyMaxOrderByAggregateInput;

    @Field(() => DummyMinOrderByAggregateInput, {nullable:true})
    @Type(() => DummyMinOrderByAggregateInput)
    _min?: DummyMinOrderByAggregateInput;

    @Field(() => DummySumOrderByAggregateInput, {nullable:true})
    @Type(() => DummySumOrderByAggregateInput)
    _sum?: DummySumOrderByAggregateInput;
}
