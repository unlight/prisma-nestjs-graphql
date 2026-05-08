import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum.ts';
import type { Identity } from 'identity-type';
import { SortOrderInput } from '../prisma/sort-order.input.ts';
import { Type } from 'class-transformer';
import { UserCountOrderByAggregateInput } from './user-count-order-by-aggregate.input.ts';
import { UserAvgOrderByAggregateInput } from './user-avg-order-by-aggregate.input.ts';
import { UserMaxOrderByAggregateInput } from './user-max-order-by-aggregate.input.ts';
import { UserMinOrderByAggregateInput } from './user-min-order-by-aggregate.input.ts';
import { UserSumOrderByAggregateInput } from './user-sum-order-by-aggregate.input.ts';

@InputType()
export class UserOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  email?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  name?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  password?: `${SortOrder}`;

  @Field(() => SortOrderInput, { nullable: true })
  bio?: Identity<SortOrderInput>;

  @Field(() => SortOrderInput, { nullable: true })
  image?: Identity<SortOrderInput>;

  @Field(() => SortOrderInput, { nullable: true })
  countComments?: Identity<SortOrderInput>;

  @Field(() => SortOrderInput, { nullable: true })
  rating?: Identity<SortOrderInput>;

  @Field(() => SortOrderInput, { nullable: true })
  @Type(() => SortOrderInput)
  money?: Identity<SortOrderInput>;

  @Field(() => SortOrderInput, { nullable: true })
  role?: Identity<SortOrderInput>;

  @Field(() => UserCountOrderByAggregateInput, { nullable: true })
  @Type(() => UserCountOrderByAggregateInput)
  _count?: Identity<UserCountOrderByAggregateInput>;

  @Field(() => UserAvgOrderByAggregateInput, { nullable: true })
  @Type(() => UserAvgOrderByAggregateInput)
  _avg?: Identity<UserAvgOrderByAggregateInput>;

  @Field(() => UserMaxOrderByAggregateInput, { nullable: true })
  @Type(() => UserMaxOrderByAggregateInput)
  _max?: Identity<UserMaxOrderByAggregateInput>;

  @Field(() => UserMinOrderByAggregateInput, { nullable: true })
  @Type(() => UserMinOrderByAggregateInput)
  _min?: Identity<UserMinOrderByAggregateInput>;

  @Field(() => UserSumOrderByAggregateInput, { nullable: true })
  @Type(() => UserSumOrderByAggregateInput)
  _sum?: Identity<UserSumOrderByAggregateInput>;
}
