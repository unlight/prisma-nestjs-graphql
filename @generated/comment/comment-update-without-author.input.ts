import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ArticleUpdateOneWithoutCommentsNestedInput } from '../article/article-update-one-without-comments-nested.input.ts';
import { Type } from 'class-transformer';

@InputType()
export class CommentUpdateWithoutAuthorInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;

  @Field(() => String, { nullable: true })
  body?: string;

  @Field(() => ArticleUpdateOneWithoutCommentsNestedInput, { nullable: true })
  @Type(() => ArticleUpdateOneWithoutCommentsNestedInput)
  article?: Identity<ArticleUpdateOneWithoutCommentsNestedInput>;
}
