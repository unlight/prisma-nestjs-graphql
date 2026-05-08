import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { UserCreateNestedOneWithoutArticlesInput } from '../user/user-create-nested-one-without-articles.input.ts';
import { Type } from 'class-transformer';
import { UserCreateNestedManyWithoutFavoriteArticlesInput } from '../user/user-create-nested-many-without-favorite-articles.input.ts';
import { CommentCreateNestedManyWithoutArticleInput } from '../comment/comment-create-nested-many-without-article.input.ts';

@InputType()
export class ArticleCreateWithoutTagsInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  slug!: string;

  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => String, { nullable: false })
  description!: string;

  @Field(() => String, { nullable: false })
  body!: string;

  @HideField()
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => Int, { nullable: true })
  favoritesCount?: number;

  @Field(() => Boolean, { nullable: true })
  active?: boolean;

  @Field(() => UserCreateNestedOneWithoutArticlesInput, { nullable: false })
  @Type(() => UserCreateNestedOneWithoutArticlesInput)
  author!: Identity<UserCreateNestedOneWithoutArticlesInput>;

  @Field(() => UserCreateNestedManyWithoutFavoriteArticlesInput, {
    nullable: true,
  })
  @Type(() => UserCreateNestedManyWithoutFavoriteArticlesInput)
  favoritedBy?: Identity<UserCreateNestedManyWithoutFavoriteArticlesInput>;

  @Field(() => CommentCreateNestedManyWithoutArticleInput, { nullable: true })
  @Type(() => CommentCreateNestedManyWithoutArticleInput)
  comments?: Identity<CommentCreateNestedManyWithoutArticleInput>;
}
