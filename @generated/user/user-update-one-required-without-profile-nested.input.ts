import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { UserCreateWithoutProfileInput } from './user-create-without-profile.input.ts';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutProfileInput } from './user-create-or-connect-without-profile.input.ts';
import { UserUpsertWithoutProfileInput } from './user-upsert-without-profile.input.ts';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input.ts';
import { UserUpdateToOneWithWhereWithoutProfileInput } from './user-update-to-one-with-where-without-profile.input.ts';

@InputType()
export class UserUpdateOneRequiredWithoutProfileNestedInput {
  @Field(() => UserCreateWithoutProfileInput, { nullable: true })
  @Type(() => UserCreateWithoutProfileInput)
  create?: Identity<UserCreateWithoutProfileInput>;

  @Field(() => UserCreateOrConnectWithoutProfileInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutProfileInput)
  connectOrCreate?: Identity<UserCreateOrConnectWithoutProfileInput>;

  @Field(() => UserUpsertWithoutProfileInput, { nullable: true })
  @Type(() => UserUpsertWithoutProfileInput)
  upsert?: Identity<UserUpsertWithoutProfileInput>;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<
    UserWhereUniqueInput,
    'id' | 'email' | 'name' | 'email_name'
  >;

  @Field(() => UserUpdateToOneWithWhereWithoutProfileInput, { nullable: true })
  @Type(() => UserUpdateToOneWithWhereWithoutProfileInput)
  update?: Identity<UserUpdateToOneWithWhereWithoutProfileInput>;
}
