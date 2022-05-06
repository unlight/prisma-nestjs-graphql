import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutFollowingInput } from './user-update-without-following.input';
import { UserCreateWithoutFollowingInput } from './user-create-without-following.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutFollowingInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;

  @Field(() => UserUpdateWithoutFollowingInput, { nullable: false })
  update!: UserUpdateWithoutFollowingInput;

  @Field(() => UserCreateWithoutFollowingInput, { nullable: false })
  create!: UserCreateWithoutFollowingInput;
}
