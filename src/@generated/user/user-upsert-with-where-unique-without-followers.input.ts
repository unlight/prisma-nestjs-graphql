import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutFollowersInput } from './user-create-without-followers.input';
import { UserUpdateWithoutFollowersInput } from './user-update-without-followers.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutFollowersInput {
    @Field(() => UserWhereUniqueInput, {
        nullable: true,
    })
    where?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutFollowersInput, {
        nullable: true,
    })
    update?: UserUpdateWithoutFollowersInput;

    @Field(() => UserCreateWithoutFollowersInput, {
        nullable: true,
    })
    create?: UserCreateWithoutFollowersInput;
}
