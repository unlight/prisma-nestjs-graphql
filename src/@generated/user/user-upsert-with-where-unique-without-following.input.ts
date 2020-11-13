import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutFollowingInput } from './user-create-without-following.input';
import { UserUpdateWithoutFollowingInput } from './user-update-without-following.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutFollowingInput {
    @Field(() => UserWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutFollowingInput, {
        nullable: true,
        description: undefined,
    })
    update?: UserUpdateWithoutFollowingInput;

    @Field(() => UserCreateWithoutFollowingInput, {
        nullable: true,
        description: undefined,
    })
    create?: UserCreateWithoutFollowingInput;
}
