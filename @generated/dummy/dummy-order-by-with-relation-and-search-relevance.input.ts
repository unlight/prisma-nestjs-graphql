import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DummyOrderByRelevanceInput } from './dummy-order-by-relevance.input';
import { Type } from 'class-transformer';

@InputType()
export class DummyOrderByWithRelationAndSearchRelevanceInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  date?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  int?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  float?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  bytes?: SortOrderInput;

  @Field(() => SortOrder, { nullable: true })
  decimal?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  decimals?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  bigInt?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  json?: SortOrderInput;

  @Field(() => SortOrder, { nullable: true })
  jsonDefault?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  friends?: keyof typeof SortOrder;

  @Field(() => DummyOrderByRelevanceInput, { nullable: true })
  @Type(() => DummyOrderByRelevanceInput)
  _relevance?: DummyOrderByRelevanceInput;
}
