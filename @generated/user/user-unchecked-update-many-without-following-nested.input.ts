import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFollowingInput } from './user-create-without-following.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFollowingInput } from './user-create-or-connect-without-following.input';
import { UserUpsertWithWhereUniqueWithoutFollowingInput } from './user-upsert-with-where-unique-without-following.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutFollowingInput } from './user-update-with-where-unique-without-following.input';
import { UserUpdateManyWithWhereWithoutFollowingInput } from './user-update-many-with-where-without-following.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUncheckedUpdateManyWithoutFollowingNestedInput {
  @Field(() => [UserCreateWithoutFollowingInput], { nullable: true })
  @Type(() => UserCreateWithoutFollowingInput)
  create?: Array<UserCreateWithoutFollowingInput>;

  @Field(() => [UserCreateOrConnectWithoutFollowingInput], { nullable: true })
  @Type(() => UserCreateOrConnectWithoutFollowingInput)
  connectOrCreate?: Array<UserCreateOrConnectWithoutFollowingInput>;

  @Field(() => [UserUpsertWithWhereUniqueWithoutFollowingInput], { nullable: true })
  @Type(() => UserUpsertWithWhereUniqueWithoutFollowingInput)
  upsert?: Array<UserUpsertWithWhereUniqueWithoutFollowingInput>;

  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  set?: Array<UserWhereUniqueInput>;

  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  disconnect?: Array<UserWhereUniqueInput>;

  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  delete?: Array<UserWhereUniqueInput>;

  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Array<UserWhereUniqueInput>;

  @Field(() => [UserUpdateWithWhereUniqueWithoutFollowingInput], { nullable: true })
  @Type(() => UserUpdateWithWhereUniqueWithoutFollowingInput)
  update?: Array<UserUpdateWithWhereUniqueWithoutFollowingInput>;

  @Field(() => [UserUpdateManyWithWhereWithoutFollowingInput], { nullable: true })
  @Type(() => UserUpdateManyWithWhereWithoutFollowingInput)
  updateMany?: Array<UserUpdateManyWithWhereWithoutFollowingInput>;

  @Field(() => [UserScalarWhereInput], { nullable: true })
  @Type(() => UserScalarWhereInput)
  deleteMany?: Array<UserScalarWhereInput>;
}
