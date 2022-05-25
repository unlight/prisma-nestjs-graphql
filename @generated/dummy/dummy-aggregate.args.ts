import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DummyWhereInput } from './dummy-where.input';
import { Type } from 'class-transformer';
import { DummyOrderByWithRelationAndSearchRelevanceInput } from './dummy-order-by-with-relation-and-search-relevance.input';
import { DummyWhereUniqueInput } from './dummy-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DummyCountAggregateInput } from './dummy-count-aggregate.input';
import { DummyAvgAggregateInput } from './dummy-avg-aggregate.input';
import { DummySumAggregateInput } from './dummy-sum-aggregate.input';
import { DummyMinAggregateInput } from './dummy-min-aggregate.input';
import { DummyMaxAggregateInput } from './dummy-max-aggregate.input';

@ArgsType()
export class DummyAggregateArgs {
  @Field(() => DummyWhereInput, { nullable: true })
  @Type(() => DummyWhereInput)
  where?: DummyWhereInput;

  @Field(() => [DummyOrderByWithRelationAndSearchRelevanceInput], { nullable: true })
  @Type(() => DummyOrderByWithRelationAndSearchRelevanceInput)
  orderBy?: Array<DummyOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => DummyWhereUniqueInput, { nullable: true })
  @Type(() => DummyWhereUniqueInput)
  cursor?: DummyWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => DummyCountAggregateInput, { nullable: true })
  @Type(() => DummyCountAggregateInput)
  _count?: DummyCountAggregateInput;

  @Field(() => DummyAvgAggregateInput, { nullable: true })
  @Type(() => DummyAvgAggregateInput)
  _avg?: DummyAvgAggregateInput;

  @Field(() => DummySumAggregateInput, { nullable: true })
  @Type(() => DummySumAggregateInput)
  _sum?: DummySumAggregateInput;

  @Field(() => DummyMinAggregateInput, { nullable: true })
  @Type(() => DummyMinAggregateInput)
  _min?: DummyMinAggregateInput;

  @Field(() => DummyMaxAggregateInput, { nullable: true })
  @Type(() => DummyMaxAggregateInput)
  _max?: DummyMaxAggregateInput;
}
