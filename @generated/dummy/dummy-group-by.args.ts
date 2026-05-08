import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { DummyWhereInput } from './dummy-where.input.ts';
import { Type } from 'class-transformer';
import { DummyOrderByWithAggregationInput } from './dummy-order-by-with-aggregation.input.ts';
import { DummyScalarFieldEnum } from './dummy-scalar-field.enum.ts';
import { DummyScalarWhereWithAggregatesInput } from './dummy-scalar-where-with-aggregates.input.ts';
import { Int } from '@nestjs/graphql';
import { DummyCountAggregateInput } from './dummy-count-aggregate.input.ts';
import { DummyAvgAggregateInput } from './dummy-avg-aggregate.input.ts';
import { DummySumAggregateInput } from './dummy-sum-aggregate.input.ts';
import { DummyMinAggregateInput } from './dummy-min-aggregate.input.ts';
import { DummyMaxAggregateInput } from './dummy-max-aggregate.input.ts';

@ArgsType()
export class DummyGroupByArgs {
  @Field(() => DummyWhereInput, { nullable: true })
  @Type(() => DummyWhereInput)
  where?: Identity<DummyWhereInput>;

  @Field(() => [DummyOrderByWithAggregationInput], { nullable: true })
  @Type(() => DummyOrderByWithAggregationInput)
  orderBy?: Array<DummyOrderByWithAggregationInput>;

  @Field(() => [DummyScalarFieldEnum], { nullable: false })
  by!: Array<`${DummyScalarFieldEnum}`>;

  @Field(() => DummyScalarWhereWithAggregatesInput, { nullable: true })
  @Type(() => DummyScalarWhereWithAggregatesInput)
  having?: Identity<DummyScalarWhereWithAggregatesInput>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => DummyCountAggregateInput, { nullable: true })
  @Type(() => DummyCountAggregateInput)
  _count?: Identity<DummyCountAggregateInput>;

  @Field(() => DummyAvgAggregateInput, { nullable: true })
  @Type(() => DummyAvgAggregateInput)
  _avg?: Identity<DummyAvgAggregateInput>;

  @Field(() => DummySumAggregateInput, { nullable: true })
  @Type(() => DummySumAggregateInput)
  _sum?: Identity<DummySumAggregateInput>;

  @Field(() => DummyMinAggregateInput, { nullable: true })
  @Type(() => DummyMinAggregateInput)
  _min?: Identity<DummyMinAggregateInput>;

  @Field(() => DummyMaxAggregateInput, { nullable: true })
  @Type(() => DummyMaxAggregateInput)
  _max?: Identity<DummyMaxAggregateInput>;
}
