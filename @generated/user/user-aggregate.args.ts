import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input.ts';
import { Type } from 'class-transformer';
import { UserOrderByWithRelationInput } from './user-order-by-with-relation.input.ts';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input.ts';
import { Int } from '@nestjs/graphql';
import { UserCountAggregateInput } from './user-count-aggregate.input.ts';
import { UserAvgAggregateInput } from './user-avg-aggregate.input.ts';
import { UserSumAggregateInput } from './user-sum-aggregate.input.ts';
import { UserMinAggregateInput } from './user-min-aggregate.input.ts';
import { UserMaxAggregateInput } from './user-max-aggregate.input.ts';

@ArgsType()
export class UserAggregateArgs {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: UserWhereInput;

  @Field(() => [UserOrderByWithRelationInput], { nullable: true })
  @Type(() => UserOrderByWithRelationInput)
  orderBy?: Array<UserOrderByWithRelationInput>;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  cursor?: Prisma.AtLeast<
    UserWhereUniqueInput,
    'id' | 'email' | 'name' | 'email_name'
  >;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => UserCountAggregateInput, { nullable: true })
  @Type(() => UserCountAggregateInput)
  _count?: UserCountAggregateInput;

  @Field(() => UserAvgAggregateInput, { nullable: true })
  @Type(() => UserAvgAggregateInput)
  _avg?: UserAvgAggregateInput;

  @Field(() => UserSumAggregateInput, { nullable: true })
  @Type(() => UserSumAggregateInput)
  _sum?: UserSumAggregateInput;

  @Field(() => UserMinAggregateInput, { nullable: true })
  @Type(() => UserMinAggregateInput)
  _min?: UserMinAggregateInput;

  @Field(() => UserMaxAggregateInput, { nullable: true })
  @Type(() => UserMaxAggregateInput)
  _max?: UserMaxAggregateInput;
}
