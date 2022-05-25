import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFavoriteArticlesInput } from './user-create-without-favorite-articles.input';

@InputType()
export class UserCreateOrConnectWithoutFavoriteArticlesInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: UserWhereUniqueInput;

  @Field(() => UserCreateWithoutFavoriteArticlesInput, { nullable: false })
  @Type(() => UserCreateWithoutFavoriteArticlesInput)
  create!: UserCreateWithoutFavoriteArticlesInput;
}
