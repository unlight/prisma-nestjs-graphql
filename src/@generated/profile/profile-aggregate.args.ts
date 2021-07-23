import { ArgsType, Field, Int } from '@nestjs/graphql';

import { ProfileAvgAggregateInput } from './profile-avg-aggregate.input';
import { ProfileCountAggregateInput } from './profile-count-aggregate.input';
import { ProfileMaxAggregateInput } from './profile-max-aggregate.input';
import { ProfileMinAggregateInput } from './profile-min-aggregate.input';
import { ProfileOrderByWithRelationInput } from './profile-order-by-with-relation.input';
import { ProfileSumAggregateInput } from './profile-sum-aggregate.input';
import { ProfileWhereInput } from './profile-where.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@ArgsType()
export class ProfileAggregateArgs {
    @Field(() => ProfileWhereInput, { nullable: true })
    where?: ProfileWhereInput;

    @Field(() => [ProfileOrderByWithRelationInput], { nullable: true })
    orderBy?: Array<ProfileOrderByWithRelationInput>;

    @Field(() => ProfileWhereUniqueInput, { nullable: true })
    cursor?: ProfileWhereUniqueInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => ProfileCountAggregateInput, { nullable: true })
    _count?: ProfileCountAggregateInput;

    @Field(() => ProfileAvgAggregateInput, { nullable: true })
    _avg?: ProfileAvgAggregateInput;

    @Field(() => ProfileSumAggregateInput, { nullable: true })
    _sum?: ProfileSumAggregateInput;

    @Field(() => ProfileMinAggregateInput, { nullable: true })
    _min?: ProfileMinAggregateInput;

    @Field(() => ProfileMaxAggregateInput, { nullable: true })
    _max?: ProfileMaxAggregateInput;
}
