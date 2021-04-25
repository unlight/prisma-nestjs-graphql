import { Query, Resolver } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

import { Dummy } from '../../@generated/dummy/dummy.model';

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
}
