import { ArgsType, Field, Int } from '@nestjs/graphql';

import { UserDistinctFieldEnum } from './user-distinct-field.enum';
import { UserOrderByInput } from './user-order-by.input';
import { UserWhereInput } from './user-where.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@ArgsType()
export class FindManyUserArgs {
    @Field(() => UserWhereInput, {
        nullable: true,
    })
    where?: UserWhereInput;

    @Field(() => [UserOrderByInput], {
        nullable: true,
    })
    orderBy?: Array<UserOrderByInput> | UserOrderByInput;

    @Field(() => UserWhereUniqueInput, {
        nullable: true,
    })
    cursor?: UserWhereUniqueInput;

    @Field(() => Int, {
        nullable: true,
    })
    take?: number;

    @Field(() => Int, {
        nullable: true,
    })
    skip?: number;

    @Field(() => [UserDistinctFieldEnum], {
        nullable: true,
    })
    distinct?: Array<UserDistinctFieldEnum>;
}
