import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFollowersInput } from './user-create-without-followers.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFollowersInput } from './user-create-or-connect-without-followers.input';
import { UserUpsertWithWhereUniqueWithoutFollowersInput } from './user-upsert-with-where-unique-without-followers.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutFollowersInput } from './user-update-with-where-unique-without-followers.input';
import { UserUpdateManyWithWhereWithoutFollowersInput } from './user-update-many-with-where-without-followers.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutFollowersNestedInput {
  @Field(() => [UserCreateWithoutFollowersInput], { nullable: true })
  @Type(() => UserCreateWithoutFollowersInput)
  create?: Array<UserCreateWithoutFollowersInput>;

  @Field(() => [UserCreateOrConnectWithoutFollowersInput], { nullable: true })
  @Type(() => UserCreateOrConnectWithoutFollowersInput)
  connectOrCreate?: Array<UserCreateOrConnectWithoutFollowersInput>;

  @Field(() => [UserUpsertWithWhereUniqueWithoutFollowersInput], { nullable: true })
  @Type(() => UserUpsertWithWhereUniqueWithoutFollowersInput)
  upsert?: Array<UserUpsertWithWhereUniqueWithoutFollowersInput>;

  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  set?: Array<
    Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'name' | 'email_name'>
  >;

  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'name' | 'email_name'>
  >;

  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  delete?: Array<
    Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'name' | 'email_name'>
  >;

  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'name' | 'email_name'>
  >;

  @Field(() => [UserUpdateWithWhereUniqueWithoutFollowersInput], { nullable: true })
  @Type(() => UserUpdateWithWhereUniqueWithoutFollowersInput)
  update?: Array<UserUpdateWithWhereUniqueWithoutFollowersInput>;

  @Field(() => [UserUpdateManyWithWhereWithoutFollowersInput], { nullable: true })
  @Type(() => UserUpdateManyWithWhereWithoutFollowersInput)
  updateMany?: Array<UserUpdateManyWithWhereWithoutFollowersInput>;

  @Field(() => [UserScalarWhereInput], { nullable: true })
  @Type(() => UserScalarWhereInput)
  deleteMany?: Array<UserScalarWhereInput>;
}
