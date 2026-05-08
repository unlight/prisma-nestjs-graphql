import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { UserUpdateWithoutProfileInput } from './user-update-without-profile.input.ts';
import { Type } from 'class-transformer';
import { UserCreateWithoutProfileInput } from './user-create-without-profile.input.ts';
import { UserWhereInput } from './user-where.input.ts';

@InputType()
export class UserUpsertWithoutProfileInput {
  @Field(() => UserUpdateWithoutProfileInput, { nullable: false })
  @Type(() => UserUpdateWithoutProfileInput)
  update!: Identity<UserUpdateWithoutProfileInput>;

  @Field(() => UserCreateWithoutProfileInput, { nullable: false })
  @Type(() => UserCreateWithoutProfileInput)
  create!: Identity<UserCreateWithoutProfileInput>;

  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: Identity<UserWhereInput>;
}
