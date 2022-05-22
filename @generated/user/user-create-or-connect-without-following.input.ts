import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFollowingInput } from './user-create-without-following.input';

@InputType()
export class UserCreateOrConnectWithoutFollowingInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: UserWhereUniqueInput;

  @Field(() => UserCreateWithoutFollowingInput, { nullable: false })
  @Type(() => UserCreateWithoutFollowingInput)
  create!: UserCreateWithoutFollowingInput;
}
