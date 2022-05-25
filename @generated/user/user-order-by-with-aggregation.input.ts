import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserCountOrderByAggregateInput } from './user-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { UserAvgOrderByAggregateInput } from './user-avg-order-by-aggregate.input';
import { UserMaxOrderByAggregateInput } from './user-max-order-by-aggregate.input';
import { UserMinOrderByAggregateInput } from './user-min-order-by-aggregate.input';
import { UserSumOrderByAggregateInput } from './user-sum-order-by-aggregate.input';

@InputType()
export class UserOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  bio?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  image?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  countComments?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  rating?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  money?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;

  @Field(() => UserCountOrderByAggregateInput, { nullable: true })
  @Type(() => UserCountOrderByAggregateInput)
  _count?: UserCountOrderByAggregateInput;

  @Field(() => UserAvgOrderByAggregateInput, { nullable: true })
  @Type(() => UserAvgOrderByAggregateInput)
  _avg?: UserAvgOrderByAggregateInput;

  @Field(() => UserMaxOrderByAggregateInput, { nullable: true })
  @Type(() => UserMaxOrderByAggregateInput)
  _max?: UserMaxOrderByAggregateInput;

  @Field(() => UserMinOrderByAggregateInput, { nullable: true })
  @Type(() => UserMinOrderByAggregateInput)
  _min?: UserMinOrderByAggregateInput;

  @Field(() => UserSumOrderByAggregateInput, { nullable: true })
  @Type(() => UserSumOrderByAggregateInput)
  _sum?: UserSumOrderByAggregateInput;
}
