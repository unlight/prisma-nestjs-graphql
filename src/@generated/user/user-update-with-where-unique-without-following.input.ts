import { Field, InputType } from '@nestjs/graphql';

import { UserUpdateWithoutFollowingDataInput } from './user-update-without-following-data.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutFollowingInput {
    @Field(() => UserWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutFollowingDataInput, {
        nullable: true,
        description: undefined,
    })
    data?: UserUpdateWithoutFollowingDataInput;
}
