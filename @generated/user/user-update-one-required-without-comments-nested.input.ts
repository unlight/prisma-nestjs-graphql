import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { UserCreateWithoutCommentsInput } from './user-create-without-comments.input.ts';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCommentsInput } from './user-create-or-connect-without-comments.input.ts';
import { UserUpsertWithoutCommentsInput } from './user-upsert-without-comments.input.ts';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input.ts';
import { UserUpdateToOneWithWhereWithoutCommentsInput } from './user-update-to-one-with-where-without-comments.input.ts';

@InputType()
export class UserUpdateOneRequiredWithoutCommentsNestedInput {
  @Field(() => UserCreateWithoutCommentsInput, { nullable: true })
  @Type(() => UserCreateWithoutCommentsInput)
  create?: Identity<UserCreateWithoutCommentsInput>;

  @Field(() => UserCreateOrConnectWithoutCommentsInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutCommentsInput)
  connectOrCreate?: Identity<UserCreateOrConnectWithoutCommentsInput>;

  @Field(() => UserUpsertWithoutCommentsInput, { nullable: true })
  @Type(() => UserUpsertWithoutCommentsInput)
  upsert?: Identity<UserUpsertWithoutCommentsInput>;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<
    UserWhereUniqueInput,
    'id' | 'email' | 'name' | 'email_name'
  >;

  @Field(() => UserUpdateToOneWithWhereWithoutCommentsInput, { nullable: true })
  @Type(() => UserUpdateToOneWithWhereWithoutCommentsInput)
  update?: Identity<UserUpdateToOneWithWhereWithoutCommentsInput>;
}
