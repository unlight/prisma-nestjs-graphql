import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client-runtime-utils';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Role } from '../prisma/role.enum.ts';
import type { Identity } from 'identity-type';
import { UserCountAggregate } from './user-count-aggregate.output.ts';
import { UserAvgAggregate } from './user-avg-aggregate.output.ts';
import { UserSumAggregate } from './user-sum-aggregate.output.ts';
import { UserMinAggregate } from './user-min-aggregate.output.ts';
import { UserMaxAggregate } from './user-max-aggregate.output.ts';

@ObjectType()
export class UserGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @HideField()
  password!: string;

  @Field(() => String, { nullable: true })
  bio?: string;

  @Field(() => String, { nullable: true })
  image?: string;

  @Field(() => Int, { nullable: true })
  countComments?: number;

  @Field(() => Float, { nullable: true })
  rating?: number;

  @Field(() => GraphQLDecimal, { nullable: true })
  money?: Decimal;

  @Field(() => Role, { nullable: true })
  role?: `${Role}`;

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
