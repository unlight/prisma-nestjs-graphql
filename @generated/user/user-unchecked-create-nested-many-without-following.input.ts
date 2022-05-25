import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFollowingInput } from './user-create-without-following.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFollowingInput } from './user-create-or-connect-without-following.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedManyWithoutFollowingInput {
  @Field(() => [UserCreateWithoutFollowingInput], { nullable: true })
  @Type(() => UserCreateWithoutFollowingInput)
  create?: Array<UserCreateWithoutFollowingInput>;

  @Field(() => [UserCreateOrConnectWithoutFollowingInput], { nullable: true })
  @Type(() => UserCreateOrConnectWithoutFollowingInput)
  connectOrCreate?: Array<UserCreateOrConnectWithoutFollowingInput>;

  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Array<UserWhereUniqueInput>;
}
