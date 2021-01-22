import { Field, InputType } from '@nestjs/graphql';

import { UserCreateOrConnectWithoutfollowersInput } from './user-create-or-connect-withoutfollowers.input';
import { UserCreateWithoutFollowersInput } from './user-create-without-followers.input';
import { UserUncheckedCreateWithoutFollowersInput } from './user-unchecked-create-without-followers.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateManyWithoutFollowersInput {
    @Field(() => [UserCreateWithoutFollowersInput], {
        nullable: true,
    })
    create?:
        | UserCreateWithoutFollowersInput
        | Array<UserCreateWithoutFollowersInput>
        | UserUncheckedCreateWithoutFollowersInput
        | Array<UserUncheckedCreateWithoutFollowersInput>;

    @Field(() => [UserWhereUniqueInput], {
        nullable: true,
    })
    connect?: UserWhereUniqueInput | Array<UserWhereUniqueInput>;

    @Field(() => [UserCreateOrConnectWithoutfollowersInput], {
        nullable: true,
    })
    connectOrCreate?:
        | UserCreateOrConnectWithoutfollowersInput
        | Array<UserCreateOrConnectWithoutfollowersInput>;
}
