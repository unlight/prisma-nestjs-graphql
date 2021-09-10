import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutFollowersInput } from './user-create-without-followers.input';

@InputType()
export class UserCreateOrConnectWithoutFollowersInput {
    @Field(() => UserWhereUniqueInput, { nullable: false })
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutFollowersInput, { nullable: false })
    create!: UserCreateWithoutFollowersInput;
}
