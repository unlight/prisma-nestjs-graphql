import { Field, InputType } from '@nestjs/graphql';

import { UserWhereInput } from './user-where.input';

@InputType({})
export class UserFilter {
    @Field(() => UserWhereInput, {
        nullable: true,
        description: undefined,
    })
    every?: UserWhereInput | UserWhereInput[] | null;

    @Field(() => UserWhereInput, {
        nullable: true,
        description: undefined,
    })
    some?: UserWhereInput | UserWhereInput[] | null;

    @Field(() => UserWhereInput, {
        nullable: true,
        description: undefined,
    })
    none?: UserWhereInput | UserWhereInput[] | null;
}
