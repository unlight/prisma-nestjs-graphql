import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input.ts';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input.ts';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input.ts';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input.ts';
import { TagUncheckedUpdateManyWithoutArticlesNestedInput } from '../tag/tag-unchecked-update-many-without-articles-nested.input.ts';
import { CommentUncheckedUpdateManyWithoutArticleNestedInput } from '../comment/comment-unchecked-update-many-without-article-nested.input.ts';
import { Type } from 'class-transformer';

@InputType()
export class ArticleUncheckedUpdateWithoutFavoritedByInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: Identity<StringFieldUpdateOperationsInput>;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  slug?: Identity<StringFieldUpdateOperationsInput>;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: Identity<StringFieldUpdateOperationsInput>;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  description?: Identity<StringFieldUpdateOperationsInput>;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  body?: Identity<StringFieldUpdateOperationsInput>;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: Identity<DateTimeFieldUpdateOperationsInput>;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: Identity<DateTimeFieldUpdateOperationsInput>;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  favoritesCount?: Identity<IntFieldUpdateOperationsInput>;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  authorId?: Identity<StringFieldUpdateOperationsInput>;

  @Field(() => NullableBoolFieldUpdateOperationsInput, { nullable: true })
  active?: Identity<NullableBoolFieldUpdateOperationsInput>;

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
