import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input.ts';
import { Type } from 'class-transformer';
import { UserCreateWithoutFollowingInput } from './user-create-without-following.input.ts';

@InputType()
export class UserCreateOrConnectWithoutFollowingInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<
    UserWhereUniqueInput,
    'id' | 'email' | 'name' | 'email_name'
  >;

  @Field(() => UserCreateWithoutFollowingInput, { nullable: false })
  @Type(() => UserCreateWithoutFollowingInput)
  create!: UserCreateWithoutFollowingInput;
}
