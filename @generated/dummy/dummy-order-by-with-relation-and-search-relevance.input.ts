import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DummyOrderByRelevanceInput } from './dummy-order-by-relevance.input';

@InputType()
export class DummyOrderByWithRelationAndSearchRelevanceInput {
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

  @Field(() => DummyOrderByRelevanceInput, { nullable: true })
  _relevance?: DummyOrderByRelevanceInput;
}
