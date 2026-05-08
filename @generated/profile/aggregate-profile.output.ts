import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ProfileCountAggregate } from './profile-count-aggregate.output.ts';
import { ProfileAvgAggregate } from './profile-avg-aggregate.output.ts';
import { ProfileSumAggregate } from './profile-sum-aggregate.output.ts';
import { ProfileMinAggregate } from './profile-min-aggregate.output.ts';
import { ProfileMaxAggregate } from './profile-max-aggregate.output.ts';

@ObjectType()
export class AggregateProfile {
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
