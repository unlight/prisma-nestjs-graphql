import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutFollowersInput } from './user-update-without-followers.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutFollowersInput {
    @Field(() => UserWhereUniqueInput, { nullable: false })
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutFollowersInput, { nullable: false })
    data!: UserUpdateWithoutFollowersInput;
}
