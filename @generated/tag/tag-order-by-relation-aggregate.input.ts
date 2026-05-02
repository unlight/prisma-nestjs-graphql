import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum.ts';

@InputType()
export class TagOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count?: `${SortOrder}`;
}
