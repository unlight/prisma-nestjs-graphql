import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutFollowingInput } from './user-create-without-following.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateOrConnectWithoutfollowingInput {
    @Field(() => UserWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutFollowingInput, {
        nullable: true,
        description: undefined,
    })
    create?: UserCreateWithoutFollowingInput;
}
