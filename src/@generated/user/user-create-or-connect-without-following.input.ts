import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutFollowingInput } from './user-create-without-following.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateOrConnectWithoutFollowingInput {
    @Field(() => UserWhereUniqueInput, { nullable: false })
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutFollowingInput, { nullable: false })
    create!: UserCreateWithoutFollowingInput;
}
