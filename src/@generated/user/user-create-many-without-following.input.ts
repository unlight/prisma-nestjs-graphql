import { Field, InputType } from '@nestjs/graphql';

import { UserCreateOrConnectWithoutfollowingInput } from './user-create-or-connect-withoutfollowing.input';
import { UserCreateWithoutFollowingInput } from './user-create-without-following.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateManyWithoutFollowingInput {
    @Field(() => [UserCreateWithoutFollowingInput], {
        nullable: true,
    })
    create?: Array<UserCreateWithoutFollowingInput>;

    @Field(() => [UserCreateOrConnectWithoutfollowingInput], {
        nullable: true,
    })
    connectOrCreate?: Array<UserCreateOrConnectWithoutfollowingInput>;

    @Field(() => [UserWhereUniqueInput], {
        nullable: true,
    })
    connect?: Array<UserWhereUniqueInput>;
}
