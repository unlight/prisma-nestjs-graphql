import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutFavoriteArticlesInput } from './user-update-without-favorite-articles.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutFavoriteArticlesInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: UserWhereUniqueInput;

  @Field(() => UserUpdateWithoutFavoriteArticlesInput, { nullable: false })
  @Type(() => UserUpdateWithoutFavoriteArticlesInput)
  data!: UserUpdateWithoutFavoriteArticlesInput;
}
