import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFollowingInput } from './user-create-without-following.input';

@InputType()
export class UserCreateOrConnectWithoutFollowingInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'name' | 'email_name'>;

  @Field(() => UserCreateWithoutFollowingInput, { nullable: false })
  @Type(() => UserCreateWithoutFollowingInput)
  create!: UserCreateWithoutFollowingInput;
}
