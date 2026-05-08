import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input.ts';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input.ts';
import { HideField } from '@nestjs/graphql';
import { ArticleUpdateOneWithoutCommentsNestedInput } from '../article/article-update-one-without-comments-nested.input.ts';
import { Type } from 'class-transformer';

@InputType()
export class CommentUpdateWithoutAuthorInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: Identity<StringFieldUpdateOperationsInput>;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: Identity<DateTimeFieldUpdateOperationsInput>;

  @HideField()
  updatedAt?: Identity<DateTimeFieldUpdateOperationsInput>;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  body?: Identity<StringFieldUpdateOperationsInput>;

  @Field(() => ArticleUpdateOneWithoutCommentsNestedInput, { nullable: true })
  @Type(() => ArticleUpdateOneWithoutCommentsNestedInput)
  article?: Identity<ArticleUpdateOneWithoutCommentsNestedInput>;
}
