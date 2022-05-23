import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DummyCountOrderByAggregateInput } from './dummy-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { DummyAvgOrderByAggregateInput } from './dummy-avg-order-by-aggregate.input';
import { DummyMaxOrderByAggregateInput } from './dummy-max-order-by-aggregate.input';
import { DummyMinOrderByAggregateInput } from './dummy-min-order-by-aggregate.input';
import { DummySumOrderByAggregateInput } from './dummy-sum-order-by-aggregate.input';

@InputType()
export class DummyOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  int?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  float?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  bytes?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  decimal?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  decimals?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  bigInt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  json?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  friends?: keyof typeof SortOrder;

  @Field(() => DummyCountOrderByAggregateInput, { nullable: true })
  @Type(() => DummyCountOrderByAggregateInput)
  _count?: DummyCountOrderByAggregateInput;

  @Field(() => DummyAvgOrderByAggregateInput, { nullable: true })
  @Type(() => DummyAvgOrderByAggregateInput)
  _avg?: DummyAvgOrderByAggregateInput;

  @Field(() => DummyMaxOrderByAggregateInput, { nullable: true })
  @Type(() => DummyMaxOrderByAggregateInput)
  _max?: DummyMaxOrderByAggregateInput;

  @Field(() => DummyMinOrderByAggregateInput, { nullable: true })
  @Type(() => DummyMinOrderByAggregateInput)
  _min?: DummyMinOrderByAggregateInput;

  @Field(() => DummySumOrderByAggregateInput, { nullable: true })
  @Type(() => DummySumOrderByAggregateInput)
  _sum?: DummySumOrderByAggregateInput;
}
