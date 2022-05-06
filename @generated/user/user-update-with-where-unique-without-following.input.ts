import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutFollowingInput } from './user-update-without-following.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutFollowingInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;

  @Field(() => UserUpdateWithoutFollowingInput, { nullable: false })
  data!: UserUpdateWithoutFollowingInput;
}
