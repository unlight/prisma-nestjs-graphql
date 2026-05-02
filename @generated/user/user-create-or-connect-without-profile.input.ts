import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input.ts';
import { Type } from 'class-transformer';
import { UserCreateWithoutProfileInput } from './user-create-without-profile.input.ts';

@InputType()
export class UserCreateOrConnectWithoutProfileInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<
    UserWhereUniqueInput,
    'id' | 'email' | 'name' | 'email_name'
  >;

  @Field(() => UserCreateWithoutProfileInput, { nullable: false })
  @Type(() => UserCreateWithoutProfileInput)
  create!: UserCreateWithoutProfileInput;
}
