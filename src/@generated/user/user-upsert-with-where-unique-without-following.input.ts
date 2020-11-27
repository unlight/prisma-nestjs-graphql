import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutFollowingInput } from './user-create-without-following.input';
import { UserUpdateWithoutFollowingInput } from './user-update-without-following.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutFollowingInput {
    @Field(() => UserWhereUniqueInput, {
        nullable: true,
    })
    where?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutFollowingInput, {
        nullable: true,
    })
    update?: UserUpdateWithoutFollowingInput;

    @Field(() => UserCreateWithoutFollowingInput, {
        nullable: true,
    })
    create?: UserCreateWithoutFollowingInput;
}
