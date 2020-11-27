import { Field, InputType } from '@nestjs/graphql';

import { UserUpdateWithoutFollowersInput } from './user-update-without-followers.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutFollowersInput {
    @Field(() => UserWhereUniqueInput, {
        nullable: true,
    })
    where?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutFollowersInput, {
        nullable: true,
    })
    data?: UserUpdateWithoutFollowersInput;
}
