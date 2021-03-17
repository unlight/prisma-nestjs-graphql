import { Field, InputType } from '@nestjs/graphql';

import { UserCreateOrConnectWithoutFollowersInput } from './user-create-or-connect-without-followers.input';
import { UserCreateWithoutFollowersInput } from './user-create-without-followers.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedManyWithoutFollowersInput {
    @Field(() => [UserCreateWithoutFollowersInput], { nullable: true })
    create?: Array<UserCreateWithoutFollowersInput>;

    @Field(() => [UserCreateOrConnectWithoutFollowersInput], { nullable: true })
    connectOrCreate?: Array<UserCreateOrConnectWithoutFollowersInput>;

    @Field(() => [UserWhereUniqueInput], { nullable: true })
    connect?: Array<UserWhereUniqueInput>;
}
