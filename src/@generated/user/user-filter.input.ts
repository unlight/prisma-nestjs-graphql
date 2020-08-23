import { Field, InputType } from '@nestjs/graphql';

import { UserWhereInput } from './user-where.input';

@InputType({})
export class UserFilter {
    @Field(() => UserWhereInput, {
        nullable: true,
        description: undefined,
    })
    every?: UserWhereInput;

    @Field(() => UserWhereInput, {
        nullable: true,
        description: undefined,
    })
    some?: UserWhereInput;

    @Field(() => UserWhereInput, {
        nullable: true,
        description: undefined,
    })
    none?: UserWhereInput;
}
