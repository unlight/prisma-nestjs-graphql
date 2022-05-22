import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DummyWhereInput } from './dummy-where.input';
import { Type } from 'class-transformer';
import { DummyOrderByWithAggregationInput } from './dummy-order-by-with-aggregation.input';
import { DummyScalarFieldEnum } from './dummy-scalar-field.enum';
import { DummyScalarWhereWithAggregatesInput } from './dummy-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DummyCountAggregateInput } from './dummy-count-aggregate.input';
import { DummyAvgAggregateInput } from './dummy-avg-aggregate.input';
import { DummySumAggregateInput } from './dummy-sum-aggregate.input';
import { DummyMinAggregateInput } from './dummy-min-aggregate.input';
import { DummyMaxAggregateInput } from './dummy-max-aggregate.input';

@ArgsType()
export class DummyGroupByArgs {
  @Field(() => DummyWhereInput, { nullable: true })
  @Type(() => DummyWhereInput)
  where?: DummyWhereInput;

  @Field(() => [DummyOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<DummyOrderByWithAggregationInput>;

  @Field(() => [DummyScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof DummyScalarFieldEnum>;

  @Field(() => DummyScalarWhereWithAggregatesInput, { nullable: true })
  having?: DummyScalarWhereWithAggregatesInput;

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
