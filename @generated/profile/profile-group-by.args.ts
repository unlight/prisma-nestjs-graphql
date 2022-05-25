import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProfileWhereInput } from './profile-where.input';
import { Type } from 'class-transformer';
import { ProfileOrderByWithAggregationInput } from './profile-order-by-with-aggregation.input';
import { ProfileScalarFieldEnum } from './profile-scalar-field.enum';
import { ProfileScalarWhereWithAggregatesInput } from './profile-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProfileCountAggregateInput } from './profile-count-aggregate.input';
import { ProfileAvgAggregateInput } from './profile-avg-aggregate.input';
import { ProfileSumAggregateInput } from './profile-sum-aggregate.input';
import { ProfileMinAggregateInput } from './profile-min-aggregate.input';
import { ProfileMaxAggregateInput } from './profile-max-aggregate.input';

@ArgsType()
export class ProfileGroupByArgs {
  @Field(() => ProfileWhereInput, { nullable: true })
  @Type(() => ProfileWhereInput)
  where?: ProfileWhereInput;

  @Field(() => [ProfileOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<ProfileOrderByWithAggregationInput>;

  @Field(() => [ProfileScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof ProfileScalarFieldEnum>;

  @Field(() => ProfileScalarWhereWithAggregatesInput, { nullable: true })
  having?: ProfileScalarWhereWithAggregatesInput;

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
