import { Field, Float, HideField, Int, ObjectType } from '@nestjs/graphql';

import { Role } from '../prisma/role.enum';
import { UserAvgAggregate } from './user-avg-aggregate.output';
import { UserCountAggregate } from './user-count-aggregate.output';
import { UserMaxAggregate } from './user-max-aggregate.output';
import { UserMinAggregate } from './user-min-aggregate.output';
import { UserSumAggregate } from './user-sum-aggregate.output';

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

    @Field(() => Role, { nullable: true })
    role?: Role;

    @Field(() => UserCountAggregate, { nullable: true })
    _count?: UserCountAggregate;

    @Field(() => UserAvgAggregate, { nullable: true })
    _avg?: UserAvgAggregate;

    @Field(() => UserSumAggregate, { nullable: true })
    _sum?: UserSumAggregate;

    @Field(() => UserMinAggregate, { nullable: true })
    _min?: UserMinAggregate;

    @Field(() => UserMaxAggregate, { nullable: true })
    _max?: UserMaxAggregate;
}
