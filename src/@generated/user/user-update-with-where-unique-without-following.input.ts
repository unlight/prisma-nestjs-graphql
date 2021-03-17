import { Field, InputType } from '@nestjs/graphql';

import { UserUpdateWithoutFollowingInput } from './user-update-without-following.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutFollowingInput {
    @Field(() => UserWhereUniqueInput, { nullable: false })
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutFollowingInput, { nullable: false })
    data!: UserUpdateWithoutFollowingInput;
}
