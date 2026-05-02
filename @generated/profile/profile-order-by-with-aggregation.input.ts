import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum.ts';
import { SortOrderInput } from '../prisma/sort-order.input.ts';
import { ProfileCountOrderByAggregateInput } from './profile-count-order-by-aggregate.input.ts';
import { ProfileAvgOrderByAggregateInput } from './profile-avg-order-by-aggregate.input.ts';
import { ProfileMaxOrderByAggregateInput } from './profile-max-order-by-aggregate.input.ts';
import { ProfileMinOrderByAggregateInput } from './profile-min-order-by-aggregate.input.ts';
import { ProfileSumOrderByAggregateInput } from './profile-sum-order-by-aggregate.input.ts';

@InputType()
export class ProfileOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  userId?: `${SortOrder}`;

  @Field(() => SortOrderInput, { nullable: true })
  dummy?: SortOrderInput;

  @Field(() => ProfileCountOrderByAggregateInput, { nullable: true })
  _count?: ProfileCountOrderByAggregateInput;

  @Field(() => ProfileAvgOrderByAggregateInput, { nullable: true })
  _avg?: ProfileAvgOrderByAggregateInput;

  @Field(() => ProfileMaxOrderByAggregateInput, { nullable: true })
  _max?: ProfileMaxOrderByAggregateInput;

  @Field(() => ProfileMinOrderByAggregateInput, { nullable: true })
  _min?: ProfileMinOrderByAggregateInput;

  @Field(() => ProfileSumOrderByAggregateInput, { nullable: true })
  _sum?: ProfileSumOrderByAggregateInput;
}
