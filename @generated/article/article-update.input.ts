import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input.ts';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input.ts';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input.ts';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input.ts';
import { TagUpdateManyWithoutArticlesNestedInput } from '../tag/tag-update-many-without-articles-nested.input.ts';
import { UserUpdateOneRequiredWithoutArticlesNestedInput } from '../user/user-update-one-required-without-articles-nested.input.ts';
import { Type } from 'class-transformer';
import { UserUpdateManyWithoutFavoriteArticlesNestedInput } from '../user/user-update-many-without-favorite-articles-nested.input.ts';
import { CommentUpdateManyWithoutArticleNestedInput } from '../comment/comment-update-many-without-article-nested.input.ts';

@InputType()
export class ArticleUpdateInput {
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

  @Field(() => NullableBoolFieldUpdateOperationsInput, { nullable: true })
  active?: Identity<NullableBoolFieldUpdateOperationsInput>;

  @Field(() => TagUpdateManyWithoutArticlesNestedInput, { nullable: true })
  tags?: Identity<TagUpdateManyWithoutArticlesNestedInput>;

  @Field(() => UserUpdateOneRequiredWithoutArticlesNestedInput, {
    nullable: true,
  })
  @Type(() => UserUpdateOneRequiredWithoutArticlesNestedInput)
  author?: Identity<UserUpdateOneRequiredWithoutArticlesNestedInput>;

  @Field(() => UserUpdateManyWithoutFavoriteArticlesNestedInput, {
    nullable: true,
  })
  @Type(() => UserUpdateManyWithoutFavoriteArticlesNestedInput)
  favoritedBy?: Identity<UserUpdateManyWithoutFavoriteArticlesNestedInput>;

  @Field(() => CommentUpdateManyWithoutArticleNestedInput, { nullable: true })
  @Type(() => CommentUpdateManyWithoutArticleNestedInput)
  comments?: Identity<CommentUpdateManyWithoutArticleNestedInput>;
}
