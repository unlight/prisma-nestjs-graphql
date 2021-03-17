import { Field, InputType } from '@nestjs/graphql';

import { UserWhereInput } from './user-where.input';

@InputType()
export class UserListRelationFilter {
    @Field(() => UserWhereInput, { nullable: true })
    every?: UserWhereInput;

    @Field(() => UserWhereInput, { nullable: true })
    some?: UserWhereInput;

    @Field(() => UserWhereInput, { nullable: true })
    none?: UserWhereInput;
}
