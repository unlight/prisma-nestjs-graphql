import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { UserWhereInput } from './user-where.input.ts';
import { Type } from 'class-transformer';
import { UserOrderByWithAggregationInput } from './user-order-by-with-aggregation.input.ts';
import { UserScalarFieldEnum } from './user-scalar-field.enum.ts';
import { UserScalarWhereWithAggregatesInput } from './user-scalar-where-with-aggregates.input.ts';
import { Int } from '@nestjs/graphql';
import { UserCountAggregateInput } from './user-count-aggregate.input.ts';
import { UserAvgAggregateInput } from './user-avg-aggregate.input.ts';
import { UserSumAggregateInput } from './user-sum-aggregate.input.ts';
import { UserMinAggregateInput } from './user-min-aggregate.input.ts';
import { UserMaxAggregateInput } from './user-max-aggregate.input.ts';

@ArgsType()
export class UserGroupByArgs {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: Identity<UserWhereInput>;

  @Field(() => [UserOrderByWithAggregationInput], { nullable: true })
  @Type(() => UserOrderByWithAggregationInput)
  orderBy?: Array<UserOrderByWithAggregationInput>;

  @Field(() => [UserScalarFieldEnum], { nullable: false })
  by!: Array<`${UserScalarFieldEnum}`>;

  @Field(() => UserScalarWhereWithAggregatesInput, { nullable: true })
  @Type(() => UserScalarWhereWithAggregatesInput)
  having?: Identity<UserScalarWhereWithAggregatesInput>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => UserCountAggregateInput, { nullable: true })
  @Type(() => UserCountAggregateInput)
  _count?: Identity<UserCountAggregateInput>;

  @Field(() => UserAvgAggregateInput, { nullable: true })
  @Type(() => UserAvgAggregateInput)
  _avg?: Identity<UserAvgAggregateInput>;

  @Field(() => UserSumAggregateInput, { nullable: true })
  @Type(() => UserSumAggregateInput)
  _sum?: Identity<UserSumAggregateInput>;

  @Field(() => UserMinAggregateInput, { nullable: true })
  @Type(() => UserMinAggregateInput)
  _min?: Identity<UserMinAggregateInput>;

  @Field(() => UserMaxAggregateInput, { nullable: true })
  @Type(() => UserMaxAggregateInput)
  _max?: Identity<UserMaxAggregateInput>;
}
