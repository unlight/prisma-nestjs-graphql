import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { UserCreateWithoutProfileInput } from './user-create-without-profile.input.ts';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutProfileInput } from './user-create-or-connect-without-profile.input.ts';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input.ts';

@InputType()
export class UserCreateNestedOneWithoutProfileInput {
  @Field(() => UserCreateWithoutProfileInput, { nullable: true })
  @Type(() => UserCreateWithoutProfileInput)
  create?: Identity<UserCreateWithoutProfileInput>;

  @Field(() => UserCreateOrConnectWithoutProfileInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutProfileInput)
  connectOrCreate?: Identity<UserCreateOrConnectWithoutProfileInput>;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<
    UserWhereUniqueInput,
    'id' | 'email' | 'name' | 'email_name'
  >;
}
