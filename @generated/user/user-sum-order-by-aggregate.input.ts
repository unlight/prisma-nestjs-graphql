import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class UserSumOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  countComments?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  rating?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  money?: keyof typeof SortOrder;
}
