import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFollowersInput } from './user-create-without-followers.input';

@InputType()
export class UserCreateOrConnectWithoutFollowersInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: UserWhereUniqueInput;

  @Field(() => UserCreateWithoutFollowersInput, { nullable: false })
  @Type(() => UserCreateWithoutFollowersInput)
  create!: UserCreateWithoutFollowersInput;
}
