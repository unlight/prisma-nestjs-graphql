import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutFollowingInput } from './user-update-without-following.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutFollowingInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: UserWhereUniqueInput;

  @Field(() => UserUpdateWithoutFollowingInput, { nullable: false })
  @Type(() => UserUpdateWithoutFollowingInput)
  data!: UserUpdateWithoutFollowingInput;
}
