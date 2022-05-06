import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { UserOrderByWithRelationAndSearchRelevanceInput } from './user-order-by-with-relation-and-search-relevance.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserCountAggregateInput } from './user-count-aggregate.input';
import { UserAvgAggregateInput } from './user-avg-aggregate.input';
import { UserSumAggregateInput } from './user-sum-aggregate.input';
import { UserMinAggregateInput } from './user-min-aggregate.input';
import { UserMaxAggregateInput } from './user-max-aggregate.input';

@ArgsType()
export class UserAggregateArgs {
  @Field(() => UserWhereInput, { nullable: true })
  where?: UserWhereInput;

  @Field(() => [UserOrderByWithRelationAndSearchRelevanceInput], { nullable: true })
  orderBy?: Array<UserOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  cursor?: UserWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => UserCountAggregateInput, { nullable: true })
  _count?: UserCountAggregateInput;

  @Field(() => UserAvgAggregateInput, { nullable: true })
  _avg?: UserAvgAggregateInput;

  @Field(() => UserSumAggregateInput, { nullable: true })
  _sum?: UserSumAggregateInput;

  @Field(() => UserMinAggregateInput, { nullable: true })
  _min?: UserMinAggregateInput;

  @Field(() => UserMaxAggregateInput, { nullable: true })
  _max?: UserMaxAggregateInput;
}
