import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { PrismaClient } from '@prisma/client';
import * as Prisma from '@prisma/client';

import { AggregateUserArgs } from '../../@generated/user/aggregate-user.args';
import { UserUpdateInput } from '../../@generated/user/user-update.input';
import { UserWhereInput } from '../../@generated/user/user-where.input';
import { User } from '../../@generated/user/user.model';

const prisma = new PrismaClient({
    errorFormat: 'colorless',
    log: [
        {
            emit: 'event',
            level: 'query',
        },
    ],
    datasources: {
        database: {
            url: 'file:~data.db',
        },
    },
});

// @ts-ignore
prisma.$on('query', (e) => {
    console.log(e);
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
    async users(@Args('where') where: UserWhereInput, @Info() info) {
        const select = new PrismaSelect(info).value;
        // console.log('select', select);
        return await prisma.user.findMany({ where, ...select });
    }

    @Mutation(() => User, { nullable: true })
    async userUpdate(@Args('user') user: UserUpdateInput): Promise<any> {
        return null;
    }

    @Query(() => [User])
    async userAggregate(@Args() args: AggregateUserArgs, @Info() info) {
        console.log('args', args);
        const result = await prisma.user.aggregate(args as Prisma.AggregateUserArgs);
        console.log('result', result);
    }
}
