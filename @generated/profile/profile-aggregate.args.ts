import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProfileWhereInput } from './profile-where.input.ts';
import { Type } from 'class-transformer';
import { ProfileOrderByWithRelationInput } from './profile-order-by-with-relation.input.ts';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input.ts';
import { Int } from '@nestjs/graphql';
import { ProfileCountAggregateInput } from './profile-count-aggregate.input.ts';
import { ProfileAvgAggregateInput } from './profile-avg-aggregate.input.ts';
import { ProfileSumAggregateInput } from './profile-sum-aggregate.input.ts';
import { ProfileMinAggregateInput } from './profile-min-aggregate.input.ts';
import { ProfileMaxAggregateInput } from './profile-max-aggregate.input.ts';

@ArgsType()
export class ProfileAggregateArgs {
  @Field(() => ProfileWhereInput, { nullable: true })
  @Type(() => ProfileWhereInput)
  where?: ProfileWhereInput;

  @Field(() => [ProfileOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ProfileOrderByWithRelationInput>;

  @Field(() => ProfileWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;

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
