import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { PrismaClient } from '@prisma/client';
import { GraphQLResolveInfo } from 'graphql';

import { AggregateUserArgs } from '../../@generated/user/aggregate-user.args';
import { AggregateUser } from '../../@generated/user/aggregate-user.output';
import { User } from '../../@generated/user/user.model';
import { UserUpdateInput } from '../../@generated/user/user-update.input';
import { UserWhereInput } from '../../@generated/user/user-where.input';
import { UserDateInput } from './user-date.input';

const prisma = new PrismaClient({
    errorFormat: 'colorless',
    log: [
        {
            emit: 'event',
            level: 'query',
        },
    ],
});

prisma.$on('query', event => {
    console.log(event);
});

/**
 * Resolves user object type.
 */
@Resolver(() => User)
export class UserResolver {
    /**
     * Query for single user.
     */
    @Query(() => [User])
    async users(
        @Args('where') where: UserWhereInput,
        @Info() info: GraphQLResolveInfo,
    ) {
        const select = new PrismaSelect(info).value;
        // console.log('select', select);
        return await prisma.user.findMany({ where, ...select });
    }

    @Mutation(() => User, { nullable: true })
    async userUpdate(@Args('user') user: UserUpdateInput): Promise<any> {
        return;
    }

    @Mutation(() => User, { nullable: true })
    async userInfo(@Args('user') user: UserDateInput): Promise<any> {
        console.log(
            'userInfo Args',
            user.date,
            typeof user.date,
            user.date?.constructor,
        );
        return;
    }

    @Query(() => AggregateUser)
    userAggregate(@Args() args: AggregateUserArgs) {
        return prisma.user.aggregate(args);
    }
}
