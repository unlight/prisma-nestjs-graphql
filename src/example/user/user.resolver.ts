import { Args, Info, Query, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { PrismaClient } from '@prisma/client';

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
}
