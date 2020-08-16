import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutFollowersInput } from './user-create-without-followers.input';
import { UserScalarWhereInput } from './user-scalar-where.input';
import { UserUpdateManyWithWhereNestedInput } from './user-update-many-with-where-nested.input';
import { UserUpdateWithWhereUniqueWithoutFollowersInput } from './user-update-with-where-unique-without-followers.input';
import { UserUpsertWithWhereUniqueWithoutFollowersInput } from './user-upsert-with-where-unique-without-followers.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType({})
export class UserUpdateManyWithoutFollowersInput {
    @Field(() => [UserCreateWithoutFollowersInput], {
        nullable: true,
        description: undefined,
    })
    create?: UserCreateWithoutFollowersInput[] | null;

    @Field(() => [UserWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    connect?: UserWhereUniqueInput[] | null;

    @Field(() => [UserWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    set?: UserWhereUniqueInput[] | null;

    @Field(() => [UserWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    disconnect?: UserWhereUniqueInput[] | null;

    @Field(() => [UserWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    delete?: UserWhereUniqueInput[] | null;

    @Field(() => [UserUpdateWithWhereUniqueWithoutFollowersInput], {
        nullable: true,
        description: undefined,
    })
    update?: UserUpdateWithWhereUniqueWithoutFollowersInput[] | null;

    @Field(() => [UserUpdateManyWithWhereNestedInput], {
        nullable: true,
        description: undefined,
    })
    updateMany?: UserUpdateManyWithWhereNestedInput[] | null;

    @Field(() => [UserScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    deleteMany?: UserScalarWhereInput[] | null;

    @Field(() => [UserUpsertWithWhereUniqueWithoutFollowersInput], {
        nullable: true,
        description: undefined,
    })
    upsert?: UserUpsertWithWhereUniqueWithoutFollowersInput[] | null;
}
