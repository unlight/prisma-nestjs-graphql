import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutFollowingInput } from './user-create-without-following.input';

@InputType()
export class UserCreateOrConnectWithoutFollowingInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;

  @Field(() => UserCreateWithoutFollowingInput, { nullable: false })
  create!: UserCreateWithoutFollowingInput;
}
