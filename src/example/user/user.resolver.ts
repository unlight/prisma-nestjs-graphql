import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { PrismaClient } from '@prisma/client';
import * as Prisma from '@prisma/client';

import { AggregateUserArgs } from '../../@generated/user/aggregate-user.args';
import { AggregateUser } from '../../@generated/user/aggregate-user.output';
import { User } from '../../@generated/user/user.model';
import { UserUpdateInput } from '../../@generated/user/user-update.input';
import { UserWhereInput } from '../../@generated/user/user-where.input';

const prisma = new PrismaClient({
    errorFormat: 'colorless',
    log: [
        {
            emit: 'event',
            level: 'query',
        },
    ],
});

// @ts-ignore
prisma.$on('query', (event) => {
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
    async users(@Args('where') where: UserWhereInput, @Info() info) {
        const select = new PrismaSelect(info).value;
        // console.log('select', select);
        return await prisma.user.findMany({ where, ...select });
    }

    @Mutation(() => User, { nullable: true })
    async userUpdate(@Args('user') user: UserUpdateInput): Promise<any> {
        return;
    }

    @Query(() => AggregateUser)
    async userAggregate(@Args() args: AggregateUserArgs, @Info() info) {
        console.log('args', args);
        const result = await prisma.user.aggregate(args as Prisma.AggregateUserArgs);
        console.log('result', result);
        return result;
    }
}
