import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ProfileCountAggregate } from './profile-count-aggregate.output.ts';
import { ProfileAvgAggregate } from './profile-avg-aggregate.output.ts';
import { ProfileSumAggregate } from './profile-sum-aggregate.output.ts';
import { ProfileMinAggregate } from './profile-min-aggregate.output.ts';
import { ProfileMaxAggregate } from './profile-max-aggregate.output.ts';

@ObjectType()
export class ProfileGroupBy {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  userId!: string;

  @Field(() => String, { nullable: true })
  dummy?: string;

  @Field(() => ProfileCountAggregate, { nullable: true })
  _count?: Identity<ProfileCountAggregate>;

  @Field(() => ProfileAvgAggregate, { nullable: true })
  _avg?: Identity<ProfileAvgAggregate>;

  @Field(() => ProfileSumAggregate, { nullable: true })
  _sum?: Identity<ProfileSumAggregate>;

  @Field(() => ProfileMinAggregate, { nullable: true })
  _min?: Identity<ProfileMinAggregate>;

  @Field(() => ProfileMaxAggregate, { nullable: true })
  _max?: Identity<ProfileMaxAggregate>;
}
