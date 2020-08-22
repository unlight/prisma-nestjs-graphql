import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutFollowersInput } from './user-create-without-followers.input';
import { UserUpdateWithoutFollowersDataInput } from './user-update-without-followers-data.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType({})
export class UserUpsertWithWhereUniqueWithoutFollowersInput {
    @Field(() => UserWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: UserWhereUniqueInput | null;

    @Field(() => UserUpdateWithoutFollowersDataInput, {
        nullable: true,
        description: undefined,
    })
    update?: UserUpdateWithoutFollowersDataInput | null;

    @Field(() => UserCreateWithoutFollowersInput, {
        nullable: true,
        description: undefined,
    })
    create?: UserCreateWithoutFollowersInput | null;
}
