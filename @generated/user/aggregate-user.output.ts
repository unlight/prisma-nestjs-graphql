import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { UserCountAggregate } from './user-count-aggregate.output.ts';
import { UserAvgAggregate } from './user-avg-aggregate.output.ts';
import { UserSumAggregate } from './user-sum-aggregate.output.ts';
import { UserMinAggregate } from './user-min-aggregate.output.ts';
import { UserMaxAggregate } from './user-max-aggregate.output.ts';

@ObjectType()
export class AggregateUser {
  @Field(() => UserCountAggregate, { nullable: true })
  _count?: Identity<UserCountAggregate>;

  @Field(() => UserAvgAggregate, { nullable: true })
  _avg?: Identity<UserAvgAggregate>;

  @Field(() => UserSumAggregate, { nullable: true })
  _sum?: Identity<UserSumAggregate>;

  @Field(() => UserMinAggregate, { nullable: true })
  _min?: Identity<UserMinAggregate>;

  @Field(() => UserMaxAggregate, { nullable: true })
  _max?: Identity<UserMaxAggregate>;
}
