import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutFavoriteArticlesInput } from './user-update-without-favorite-articles.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutFavoriteArticlesInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'name' | 'email_name'>;

  @Field(() => UserUpdateWithoutFavoriteArticlesInput, { nullable: false })
  @Type(() => UserUpdateWithoutFavoriteArticlesInput)
  data!: UserUpdateWithoutFavoriteArticlesInput;
}
