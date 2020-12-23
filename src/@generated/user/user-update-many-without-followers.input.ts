import { Field, InputType } from '@nestjs/graphql';

import { UserCreateOrConnectWithoutfollowersInput } from './user-create-or-connect-withoutfollowers.input';
import { UserCreateWithoutFollowersInput } from './user-create-without-followers.input';
import { UserScalarWhereInput } from './user-scalar-where.input';
import { UserUpdateManyWithWhereWithoutFollowersInput } from './user-update-many-with-where-without-followers.input';
import { UserUpdateWithWhereUniqueWithoutFollowersInput } from './user-update-with-where-unique-without-followers.input';
import { UserUpsertWithWhereUniqueWithoutFollowersInput } from './user-upsert-with-where-unique-without-followers.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUpdateManyWithoutFollowersInput {
    @Field(() => [UserCreateWithoutFollowersInput], {
        nullable: true,
    })
    create?:
        | UserCreateWithoutFollowersInput
        | Array<UserCreateWithoutFollowersInput>;

    @Field(() => [UserWhereUniqueInput], {
        nullable: true,
    })
    connect?: UserWhereUniqueInput | Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {
        nullable: true,
    })
    set?: UserWhereUniqueInput | Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {
        nullable: true,
    })
    disconnect?: UserWhereUniqueInput | Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {
        nullable: true,
    })
    delete?: UserWhereUniqueInput | Array<UserWhereUniqueInput>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutFollowersInput], {
        nullable: true,
    })
    update?:
        | UserUpdateWithWhereUniqueWithoutFollowersInput
        | Array<UserUpdateWithWhereUniqueWithoutFollowersInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutFollowersInput], {
        nullable: true,
    })
    updateMany?:
        | UserUpdateManyWithWhereWithoutFollowersInput
        | Array<UserUpdateManyWithWhereWithoutFollowersInput>;

    @Field(() => [UserScalarWhereInput], {
        nullable: true,
    })
    deleteMany?: UserScalarWhereInput | Array<UserScalarWhereInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutFollowersInput], {
        nullable: true,
    })
    upsert?:
        | UserUpsertWithWhereUniqueWithoutFollowersInput
        | Array<UserUpsertWithWhereUniqueWithoutFollowersInput>;

    @Field(() => [UserCreateOrConnectWithoutfollowersInput], {
        nullable: true,
    })
    connectOrCreate?:
        | UserCreateOrConnectWithoutfollowersInput
        | Array<UserCreateOrConnectWithoutfollowersInput>;
}
