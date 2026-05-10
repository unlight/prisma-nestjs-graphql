import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TagUpdateManyWithoutArticlesNestedInput } from '../tag/tag-update-many-without-articles-nested.input.ts';
import { UserUpdateManyWithoutFavoriteArticlesNestedInput } from '../user/user-update-many-without-favorite-articles-nested.input.ts';
import { Type } from 'class-transformer';
import { CommentUpdateManyWithoutArticleNestedInput } from '../comment/comment-update-many-without-article-nested.input.ts';

@InputType()
export class ArticleUpdateWithoutAuthorInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  slug?: string;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  body?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => Int, { nullable: true })
  favoritesCount?: number;

  @Field(() => Boolean, { nullable: true })
  active?: boolean;

  @Field(() => TagUpdateManyWithoutArticlesNestedInput, { nullable: true })
  tags?: Identity<TagUpdateManyWithoutArticlesNestedInput>;

  @Field(() => UserUpdateManyWithoutFavoriteArticlesNestedInput, {
    nullable: true,
  })
  @Type(() => UserUpdateManyWithoutFavoriteArticlesNestedInput)
  favoritedBy?: Identity<UserUpdateManyWithoutFavoriteArticlesNestedInput>;

  @Field(() => CommentUpdateManyWithoutArticleNestedInput, { nullable: true })
  @Type(() => CommentUpdateManyWithoutArticleNestedInput)
  comments?: Identity<CommentUpdateManyWithoutArticleNestedInput>;
}
