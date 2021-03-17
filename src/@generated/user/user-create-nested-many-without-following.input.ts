import { Field, InputType } from '@nestjs/graphql';

import { UserCreateOrConnectWithoutFollowingInput } from './user-create-or-connect-without-following.input';
import { UserCreateWithoutFollowingInput } from './user-create-without-following.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedManyWithoutFollowingInput {
    @Field(() => [UserCreateWithoutFollowingInput], { nullable: true })
    create?: Array<UserCreateWithoutFollowingInput>;

    @Field(() => [UserCreateOrConnectWithoutFollowingInput], { nullable: true })
    connectOrCreate?: Array<UserCreateOrConnectWithoutFollowingInput>;

    @Field(() => [UserWhereUniqueInput], { nullable: true })
    connect?: Array<UserWhereUniqueInput>;
}
