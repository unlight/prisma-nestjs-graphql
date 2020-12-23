import { Field, InputType } from '@nestjs/graphql';

import { UserCreateOrConnectWithoutfollowingInput } from './user-create-or-connect-withoutfollowing.input';
import { UserCreateWithoutFollowingInput } from './user-create-without-following.input';
import { UserScalarWhereInput } from './user-scalar-where.input';
import { UserUpdateManyWithWhereWithoutFollowingInput } from './user-update-many-with-where-without-following.input';
import { UserUpdateWithWhereUniqueWithoutFollowingInput } from './user-update-with-where-unique-without-following.input';
import { UserUpsertWithWhereUniqueWithoutFollowingInput } from './user-upsert-with-where-unique-without-following.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUpdateManyWithoutFollowingInput {
    @Field(() => [UserCreateWithoutFollowingInput], {
        nullable: true,
    })
    create?:
        | UserCreateWithoutFollowingInput
        | Array<UserCreateWithoutFollowingInput>;

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

    @Field(() => [UserUpdateWithWhereUniqueWithoutFollowingInput], {
        nullable: true,
    })
    update?:
        | UserUpdateWithWhereUniqueWithoutFollowingInput
        | Array<UserUpdateWithWhereUniqueWithoutFollowingInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutFollowingInput], {
        nullable: true,
    })
    updateMany?:
        | UserUpdateManyWithWhereWithoutFollowingInput
        | Array<UserUpdateManyWithWhereWithoutFollowingInput>;

    @Field(() => [UserScalarWhereInput], {
        nullable: true,
    })
    deleteMany?: UserScalarWhereInput | Array<UserScalarWhereInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutFollowingInput], {
        nullable: true,
    })
    upsert?:
        | UserUpsertWithWhereUniqueWithoutFollowingInput
        | Array<UserUpsertWithWhereUniqueWithoutFollowingInput>;

    @Field(() => [UserCreateOrConnectWithoutfollowingInput], {
        nullable: true,
    })
    connectOrCreate?:
        | UserCreateOrConnectWithoutfollowingInput
        | Array<UserCreateOrConnectWithoutfollowingInput>;
}
