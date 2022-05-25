import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFollowersInput } from './user-create-without-followers.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFollowersInput } from './user-create-or-connect-without-followers.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedManyWithoutFollowersInput {
  @Field(() => [UserCreateWithoutFollowersInput], { nullable: true })
  @Type(() => UserCreateWithoutFollowersInput)
  create?: Array<UserCreateWithoutFollowersInput>;

  @Field(() => [UserCreateOrConnectWithoutFollowersInput], { nullable: true })
  @Type(() => UserCreateOrConnectWithoutFollowersInput)
  connectOrCreate?: Array<UserCreateOrConnectWithoutFollowersInput>;

  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Array<UserWhereUniqueInput>;
}
