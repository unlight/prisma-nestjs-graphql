import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TagUncheckedUpdateManyWithoutArticlesNestedInput } from '../tag/tag-unchecked-update-many-without-articles-nested.input.ts';
import { CommentUncheckedUpdateManyWithoutArticleNestedInput } from '../comment/comment-unchecked-update-many-without-article-nested.input.ts';
import { Type } from 'class-transformer';

@InputType()
export class ArticleUncheckedUpdateWithoutFavoritedByInput {
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

  @Field(() => String, { nullable: true })
  authorId?: string;

  @Field(() => Boolean, { nullable: true })
  active?: boolean;

  @Field(() => TagUncheckedUpdateManyWithoutArticlesNestedInput, {
    nullable: true,
  })
  tags?: Identity<TagUncheckedUpdateManyWithoutArticlesNestedInput>;

  @Field(() => CommentUncheckedUpdateManyWithoutArticleNestedInput, {
    nullable: true,
  })
  @Type(() => CommentUncheckedUpdateManyWithoutArticleNestedInput)
  comments?: Identity<CommentUncheckedUpdateManyWithoutArticleNestedInput>;
}
