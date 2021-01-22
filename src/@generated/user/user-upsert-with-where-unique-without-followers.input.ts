import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutFollowersInput } from './user-create-without-followers.input';
import { UserUncheckedCreateWithoutFollowersInput } from './user-unchecked-create-without-followers.input';
import { UserUncheckedUpdateWithoutFollowersInput } from './user-unchecked-update-without-followers.input';
import { UserUpdateWithoutFollowersInput } from './user-update-without-followers.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutFollowersInput {
    @Field(() => UserWhereUniqueInput, {
        nullable: false,
    })
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutFollowersInput, {
        nullable: false,
    })
    update!: UserUpdateWithoutFollowersInput | UserUncheckedUpdateWithoutFollowersInput;

    @Field(() => UserCreateWithoutFollowersInput, {
        nullable: false,
    })
    create!: UserCreateWithoutFollowersInput | UserUncheckedCreateWithoutFollowersInput;
}
