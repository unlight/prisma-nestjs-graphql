import { ArgsType, Field, Int } from '@nestjs/graphql';

import { UserDistinctFieldEnum } from './user-distinct-field.enum';
import { UserOrderByInput } from './user-order-by.input';
import { UserWhereInput } from './user-where.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@ArgsType()
export class FindManyUserArgs {
    @Field(() => UserWhereInput, {
        nullable: true,
        description: undefined,
    })
    where?: UserWhereInput;

    @Field(() => [UserOrderByInput], {
        nullable: true,
        description: undefined,
    })
    orderBy?: Array<UserOrderByInput> | UserOrderByInput;

    @Field(() => UserWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    cursor?: UserWhereUniqueInput;

    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    take?: number;

    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    skip?: number;

    @Field(() => [UserDistinctFieldEnum], {
        nullable: true,
        description: undefined,
    })
    distinct?: Array<UserDistinctFieldEnum>;
}
