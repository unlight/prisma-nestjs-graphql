import { ArgsType, Field, Int } from '@nestjs/graphql';

import { UserOrderByWithRelationInput } from './user-order-by-with-relation.input';
import { UserScalarFieldEnum } from './user-scalar-field.enum';
import { UserWhereInput } from './user-where.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@ArgsType()
export class FindManyUserArgs {
    @Field(() => UserWhereInput, { nullable: true })
    where?: UserWhereInput;

    @Field(() => [UserOrderByWithRelationInput], { nullable: true })
    orderBy?: Array<UserOrderByWithRelationInput>;

    @Field(() => UserWhereUniqueInput, { nullable: true })
    cursor?: UserWhereUniqueInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => [UserScalarFieldEnum], { nullable: true })
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
