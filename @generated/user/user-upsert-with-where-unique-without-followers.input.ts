import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutFollowersInput } from './user-update-without-followers.input';
import { UserCreateWithoutFollowersInput } from './user-create-without-followers.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutFollowersInput {
    @Field(() => UserWhereUniqueInput, { nullable: false })
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutFollowersInput, { nullable: false })
    update!: UserUpdateWithoutFollowersInput;

    @Field(() => UserCreateWithoutFollowersInput, { nullable: false })
    create!: UserCreateWithoutFollowersInput;
}
