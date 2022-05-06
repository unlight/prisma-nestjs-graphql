import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFollowingInput } from './user-create-without-following.input';
import { UserCreateOrConnectWithoutFollowingInput } from './user-create-or-connect-without-following.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedManyWithoutFollowingInput {
  @Field(() => [UserCreateWithoutFollowingInput], { nullable: true })
  create?: Array<UserCreateWithoutFollowingInput>;

  @Field(() => [UserCreateOrConnectWithoutFollowingInput], { nullable: true })
  connectOrCreate?: Array<UserCreateOrConnectWithoutFollowingInput>;

  @Field(() => [UserWhereUniqueInput], { nullable: true })
  connect?: Array<UserWhereUniqueInput>;
}
