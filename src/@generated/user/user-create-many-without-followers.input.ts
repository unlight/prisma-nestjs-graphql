import { Field, InputType } from '@nestjs/graphql';

import { UserCreateOrConnectWithoutfollowersInput } from './user-create-or-connect-withoutfollowers.input';
import { UserCreateWithoutFollowersInput } from './user-create-without-followers.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateManyWithoutFollowersInput {
    @Field(() => [UserCreateWithoutFollowersInput], {
        nullable: true,
    })
    create?: Array<UserCreateWithoutFollowersInput>;

    @Field(() => [UserWhereUniqueInput], {
        nullable: true,
    })
    connect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserCreateOrConnectWithoutfollowersInput], {
        nullable: true,
    })
    connectOrCreate?: Array<UserCreateOrConnectWithoutfollowersInput>;
}
