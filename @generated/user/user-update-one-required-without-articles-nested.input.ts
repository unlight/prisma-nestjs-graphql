import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { UserCreateWithoutArticlesInput } from './user-create-without-articles.input.ts';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutArticlesInput } from './user-create-or-connect-without-articles.input.ts';
import { UserUpsertWithoutArticlesInput } from './user-upsert-without-articles.input.ts';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input.ts';
import { UserUpdateToOneWithWhereWithoutArticlesInput } from './user-update-to-one-with-where-without-articles.input.ts';

@InputType()
export class UserUpdateOneRequiredWithoutArticlesNestedInput {
  @Field(() => UserCreateWithoutArticlesInput, { nullable: true })
  @Type(() => UserCreateWithoutArticlesInput)
  create?: Identity<UserCreateWithoutArticlesInput>;

  @Field(() => UserCreateOrConnectWithoutArticlesInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutArticlesInput)
  connectOrCreate?: Identity<UserCreateOrConnectWithoutArticlesInput>;

  @Field(() => UserUpsertWithoutArticlesInput, { nullable: true })
  @Type(() => UserUpsertWithoutArticlesInput)
  upsert?: Identity<UserUpsertWithoutArticlesInput>;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<
    UserWhereUniqueInput,
    'id' | 'email' | 'name' | 'email_name'
  >;

  @Field(() => UserUpdateToOneWithWhereWithoutArticlesInput, { nullable: true })
  @Type(() => UserUpdateToOneWithWhereWithoutArticlesInput)
  update?: Identity<UserUpdateToOneWithWhereWithoutArticlesInput>;
}
