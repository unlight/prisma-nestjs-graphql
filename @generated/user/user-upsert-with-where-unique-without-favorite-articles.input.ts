import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutFavoriteArticlesInput } from './user-update-without-favorite-articles.input';
import { UserCreateWithoutFavoriteArticlesInput } from './user-create-without-favorite-articles.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutFavoriteArticlesInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: UserWhereUniqueInput;

  @Field(() => UserUpdateWithoutFavoriteArticlesInput, { nullable: false })
  @Type(() => UserUpdateWithoutFavoriteArticlesInput)
  update!: UserUpdateWithoutFavoriteArticlesInput;

  @Field(() => UserCreateWithoutFavoriteArticlesInput, { nullable: false })
  @Type(() => UserCreateWithoutFavoriteArticlesInput)
  create!: UserCreateWithoutFavoriteArticlesInput;
}
