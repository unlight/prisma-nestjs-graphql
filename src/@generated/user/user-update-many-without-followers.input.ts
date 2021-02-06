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
    create?: Array<UserCreateWithoutFollowersInput>;

    @Field(() => [UserCreateOrConnectWithoutfollowersInput], {
        nullable: true,
    })
    connectOrCreate?: Array<UserCreateOrConnectWithoutfollowersInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutFollowersInput], {
        nullable: true,
    })
    upsert?: Array<UserUpsertWithWhereUniqueWithoutFollowersInput>;

    @Field(() => [UserWhereUniqueInput], {
        nullable: true,
    })
    connect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {
        nullable: true,
    })
    set?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {
        nullable: true,
    })
    disconnect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {
        nullable: true,
    })
    delete?: Array<UserWhereUniqueInput>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutFollowersInput], {
        nullable: true,
    })
    update?: Array<UserUpdateWithWhereUniqueWithoutFollowersInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutFollowersInput], {
        nullable: true,
    })
    updateMany?: Array<UserUpdateManyWithWhereWithoutFollowersInput>;

    @Field(() => [UserScalarWhereInput], {
        nullable: true,
    })
    deleteMany?: Array<UserScalarWhereInput>;
}
