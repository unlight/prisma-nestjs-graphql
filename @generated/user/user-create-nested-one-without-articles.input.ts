import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { UserCreateWithoutArticlesInput } from './user-create-without-articles.input.ts';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutArticlesInput } from './user-create-or-connect-without-articles.input.ts';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input.ts';

@InputType()
export class UserCreateNestedOneWithoutArticlesInput {
  @Field(() => UserCreateWithoutArticlesInput, { nullable: true })
  @Type(() => UserCreateWithoutArticlesInput)
  create?: Identity<UserCreateWithoutArticlesInput>;

  @Field(() => UserCreateOrConnectWithoutArticlesInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutArticlesInput)
  connectOrCreate?: Identity<UserCreateOrConnectWithoutArticlesInput>;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<
    UserWhereUniqueInput,
    'id' | 'email' | 'name' | 'email_name'
  >;
}
