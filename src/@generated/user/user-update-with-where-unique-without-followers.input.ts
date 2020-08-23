import { Field, InputType } from '@nestjs/graphql';

import { UserUpdateWithoutFollowersDataInput } from './user-update-without-followers-data.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType({})
export class UserUpdateWithWhereUniqueWithoutFollowersInput {
    @Field(() => UserWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutFollowersDataInput, {
        nullable: true,
        description: undefined,
    })
    data?: UserUpdateWithoutFollowersDataInput;
}
