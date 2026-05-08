import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input.ts';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { UserUpdateWithoutFavoriteArticlesInput } from './user-update-without-favorite-articles.input.ts';
import { UserCreateWithoutFavoriteArticlesInput } from './user-create-without-favorite-articles.input.ts';

@InputType()
export class UserUpsertWithWhereUniqueWithoutFavoriteArticlesInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<
    UserWhereUniqueInput,
    'id' | 'email' | 'name' | 'email_name'
  >;

  @Field(() => UserUpdateWithoutFavoriteArticlesInput, { nullable: false })
  @Type(() => UserUpdateWithoutFavoriteArticlesInput)
  update!: Identity<UserUpdateWithoutFavoriteArticlesInput>;

  @Field(() => UserCreateWithoutFavoriteArticlesInput, { nullable: false })
  @Type(() => UserCreateWithoutFavoriteArticlesInput)
  create!: Identity<UserCreateWithoutFavoriteArticlesInput>;
}
