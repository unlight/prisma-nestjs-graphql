import { Field, Int, ObjectType } from '@nestjs/graphql';

import { ProfileAvgAggregate } from './profile-avg-aggregate.output';
import { ProfileCountAggregate } from './profile-count-aggregate.output';
import { ProfileMaxAggregate } from './profile-max-aggregate.output';
import { ProfileMinAggregate } from './profile-min-aggregate.output';
import { ProfileSumAggregate } from './profile-sum-aggregate.output';

@ObjectType()
export class ProfileGroupBy {
    @Field(() => Int, { nullable: false })
    id!: number;

    @Field(() => String, { nullable: false })
    userId!: string;

    @Field(() => String, { nullable: true })
    dummy?: string;

    @Field(() => ProfileCountAggregate, { nullable: true })
    _count?: ProfileCountAggregate;

    @Field(() => ProfileAvgAggregate, { nullable: true })
    _avg?: ProfileAvgAggregate;

    @Field(() => ProfileSumAggregate, { nullable: true })
    _sum?: ProfileSumAggregate;

    @Field(() => ProfileMinAggregate, { nullable: true })
    _min?: ProfileMinAggregate;

    @Field(() => ProfileMaxAggregate, { nullable: true })
    _max?: ProfileMaxAggregate;
}
