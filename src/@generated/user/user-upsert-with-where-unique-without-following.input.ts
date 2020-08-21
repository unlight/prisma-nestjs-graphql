import { InputType, Field } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutFollowingDataInput } from './user-update-without-following-data.input';
import { UserCreateWithoutFollowingInput } from './user-create-without-following.input';

@InputType({})
export class UserUpsertWithWhereUniqueWithoutFollowingInput {
    @Field(() => UserWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: UserWhereUniqueInput | null;

    @Field(() => UserUpdateWithoutFollowingDataInput, {
        nullable: true,
        description: undefined,
    })
    update?: UserUpdateWithoutFollowingDataInput | null;

    @Field(() => UserCreateWithoutFollowingInput, {
        nullable: true,
        description: undefined,
    })
    create?: UserCreateWithoutFollowingInput | null;
}
