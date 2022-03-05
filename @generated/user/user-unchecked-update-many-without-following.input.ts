import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFollowingInput } from './user-create-without-following.input';
import { UserCreateOrConnectWithoutFollowingInput } from './user-create-or-connect-without-following.input';
import { UserUpsertWithWhereUniqueWithoutFollowingInput } from './user-upsert-with-where-unique-without-following.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutFollowingInput } from './user-update-with-where-unique-without-following.input';
import { UserUpdateManyWithWhereWithoutFollowingInput } from './user-update-many-with-where-without-following.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUncheckedUpdateManyWithoutFollowingInput {
    @Field(() => [UserCreateWithoutFollowingInput], { nullable: true })
    create?: Array<UserCreateWithoutFollowingInput>;

    @Field(() => [UserCreateOrConnectWithoutFollowingInput], { nullable: true })
    connectOrCreate?: Array<UserCreateOrConnectWithoutFollowingInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutFollowingInput], { nullable: true })
    upsert?: Array<UserUpsertWithWhereUniqueWithoutFollowingInput>;

    @Field(() => [UserWhereUniqueInput], { nullable: true })
    set?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], { nullable: true })
    disconnect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], { nullable: true })
    delete?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], { nullable: true })
    connect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutFollowingInput], { nullable: true })
    update?: Array<UserUpdateWithWhereUniqueWithoutFollowingInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutFollowingInput], { nullable: true })
    updateMany?: Array<UserUpdateManyWithWhereWithoutFollowingInput>;

    @Field(() => [UserScalarWhereInput], { nullable: true })
    deleteMany?: Array<UserScalarWhereInput>;
}
