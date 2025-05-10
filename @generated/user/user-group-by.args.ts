import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserOrderByWithAggregationInput } from './user-order-by-with-aggregation.input';
import { UserScalarFieldEnum } from './user-scalar-field.enum';
import { UserScalarWhereWithAggregatesInput } from './user-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserCountAggregateInput } from './user-count-aggregate.input';
import { UserAvgAggregateInput } from './user-avg-aggregate.input';
import { UserSumAggregateInput } from './user-sum-aggregate.input';
import { UserMinAggregateInput } from './user-min-aggregate.input';
import { UserMaxAggregateInput } from './user-max-aggregate.input';

@ArgsType()
export class UserGroupByArgs {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => [UserOrderByWithAggregationInput], {nullable:true})
    @Type(() => UserOrderByWithAggregationInput)
    orderBy?: Array<UserOrderByWithAggregationInput>;

    @Field(() => [UserScalarFieldEnum], {nullable:false})
    by!: Array<`${UserScalarFieldEnum}`>;

    @Field(() => UserScalarWhereWithAggregatesInput, {nullable:true})
    @Type(() => UserScalarWhereWithAggregatesInput)
    having?: UserScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserCountAggregateInput, {nullable:true})
    @Type(() => UserCountAggregateInput)
    _count?: UserCountAggregateInput;

    @Field(() => UserAvgAggregateInput, {nullable:true})
    @Type(() => UserAvgAggregateInput)
    _avg?: UserAvgAggregateInput;

    @Field(() => UserSumAggregateInput, {nullable:true})
    @Type(() => UserSumAggregateInput)
    _sum?: UserSumAggregateInput;

    @Field(() => UserMinAggregateInput, {nullable:true})
    @Type(() => UserMinAggregateInput)
    _min?: UserMinAggregateInput;

    @Field(() => UserMaxAggregateInput, {nullable:true})
    @Type(() => UserMaxAggregateInput)
    _max?: UserMaxAggregateInput;
}
