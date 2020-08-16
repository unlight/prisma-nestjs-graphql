import { Args, Query, Resolver } from '@nestjs/graphql';
import { PrismaClient } from '@prisma/client';

import { UserWhereInput } from '../../@generated/user/user-where.input';
import { User } from '../../@generated/user/user.model';

const prisma = new PrismaClient();

/**
 * Resolves user object type.
 */
@Resolver(() => User)
export class UserResolver {
    /**
     * Query for single user.
     */
    @Query(() => [User])
    async users(@Args('where') where: UserWhereInput) {
        // prisma.user.findMany({where})
        console.log('where', where);
        return [];
    }
}
