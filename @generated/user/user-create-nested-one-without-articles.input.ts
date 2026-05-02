import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutArticlesInput } from './user-create-without-articles.input.ts';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutArticlesInput } from './user-create-or-connect-without-articles.input.ts';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input.ts';

@InputType()
export class UserCreateNestedOneWithoutArticlesInput {
  @Field(() => UserCreateWithoutArticlesInput, { nullable: true })
  @Type(() => UserCreateWithoutArticlesInput)
  create?: UserCreateWithoutArticlesInput;

  @Field(() => UserCreateOrConnectWithoutArticlesInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutArticlesInput)
  connectOrCreate?: UserCreateOrConnectWithoutArticlesInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<
    UserWhereUniqueInput,
    'id' | 'email' | 'name' | 'email_name'
  >;
}
