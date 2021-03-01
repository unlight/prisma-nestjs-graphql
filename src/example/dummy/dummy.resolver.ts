import { Query, Resolver } from '@nestjs/graphql';

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
        return [dummy];
    }
}
