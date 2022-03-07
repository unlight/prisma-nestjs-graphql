import { Args, Query, Resolver } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

import { Dummy } from '../../@generated/dummy/dummy.model';
import { FindManyDummyArgs } from '../../@generated/dummy/find-many-dummy.args';

/**
 * Resolves user object type.
 */
@Resolver(() => Dummy)
export class DummyResolver {
    /**
     * Query for single user.
     */
    @Query(() => [Dummy])
    dummies() {
        const dummy = new Dummy();
        dummy.json = {
            a: 1,
        };
        dummy.decimal = new Prisma.Decimal(1.002);
        return [dummy];
    }

    @Query(() => [Dummy])
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    findDummies(@Args() args: FindManyDummyArgs) {
        console.log('args.where.bigInt?.equals', args.where.bigInt?.equals);
        const dummy = new Dummy();
        dummy.id = ~~(Math.random() * 1000);
        dummy.bigInt = args.where.bigInt?.equals;
        return [dummy];
    }
}
