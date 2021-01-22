import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutFollowingInput } from './user-create-without-following.input';
import { UserUncheckedCreateWithoutFollowingInput } from './user-unchecked-create-without-following.input';
import { UserUncheckedUpdateWithoutFollowingInput } from './user-unchecked-update-without-following.input';
import { UserUpdateWithoutFollowingInput } from './user-update-without-following.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutFollowingInput {
    @Field(() => UserWhereUniqueInput, {
        nullable: false,
    })
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutFollowingInput, {
        nullable: false,
    })
    update!: UserUpdateWithoutFollowingInput | UserUncheckedUpdateWithoutFollowingInput;

    @Field(() => UserCreateWithoutFollowingInput, {
        nullable: false,
    })
    create!: UserCreateWithoutFollowingInput | UserUncheckedCreateWithoutFollowingInput;
}
