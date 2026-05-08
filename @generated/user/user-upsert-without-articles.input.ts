import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { UserUpdateWithoutArticlesInput } from './user-update-without-articles.input.ts';
import { Type } from 'class-transformer';
import { UserCreateWithoutArticlesInput } from './user-create-without-articles.input.ts';
import { UserWhereInput } from './user-where.input.ts';

@InputType()
export class UserUpsertWithoutArticlesInput {
  @Field(() => UserUpdateWithoutArticlesInput, { nullable: false })
  @Type(() => UserUpdateWithoutArticlesInput)
  update!: Identity<UserUpdateWithoutArticlesInput>;

  @Field(() => UserCreateWithoutArticlesInput, { nullable: false })
  @Type(() => UserCreateWithoutArticlesInput)
  create!: Identity<UserCreateWithoutArticlesInput>;

  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: Identity<UserWhereInput>;
}
