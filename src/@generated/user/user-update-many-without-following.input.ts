import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutFollowingInput } from './user-create-without-following.input';
import { UserScalarWhereInput } from './user-scalar-where.input';
import { UserUpdateManyWithWhereNestedInput } from './user-update-many-with-where-nested.input';
import { UserUpdateWithWhereUniqueWithoutFollowingInput } from './user-update-with-where-unique-without-following.input';
import { UserUpsertWithWhereUniqueWithoutFollowingInput } from './user-upsert-with-where-unique-without-following.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType({})
export class UserUpdateManyWithoutFollowingInput {
    @Field(() => [UserCreateWithoutFollowingInput], {
        nullable: true,
        description: undefined,
    })
    create?: UserCreateWithoutFollowingInput[] | null;

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

    @Field(() => [UserUpdateWithWhereUniqueWithoutFollowingInput], {
        nullable: true,
        description: undefined,
    })
    update?: UserUpdateWithWhereUniqueWithoutFollowingInput[] | null;

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

    @Field(() => [UserUpsertWithWhereUniqueWithoutFollowingInput], {
        nullable: true,
        description: undefined,
    })
    upsert?: UserUpsertWithWhereUniqueWithoutFollowingInput[] | null;
}
