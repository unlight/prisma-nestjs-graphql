import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input.ts';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { UserUpdateWithoutFollowingInput } from './user-update-without-following.input.ts';
import { UserCreateWithoutFollowingInput } from './user-create-without-following.input.ts';

@InputType()
export class UserUpsertWithWhereUniqueWithoutFollowingInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<
    UserWhereUniqueInput,
    'id' | 'email' | 'name' | 'email_name'
  >;

  @Field(() => UserUpdateWithoutFollowingInput, { nullable: false })
  @Type(() => UserUpdateWithoutFollowingInput)
  update!: Identity<UserUpdateWithoutFollowingInput>;

  @Field(() => UserCreateWithoutFollowingInput, { nullable: false })
  @Type(() => UserCreateWithoutFollowingInput)
  create!: Identity<UserCreateWithoutFollowingInput>;
}
