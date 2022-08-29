import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { TagUpdateManyWithoutArticlesNestedInput } from '../tag/tag-update-many-without-articles-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { UserUpdateManyWithoutFavoriteArticlesNestedInput } from '../user/user-update-many-without-favorite-articles-nested.input';
import { Type } from 'class-transformer';
import { CommentUpdateManyWithoutArticleNestedInput } from '../comment/comment-update-many-without-article-nested.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';

@InputType()
export class ArticleUpdateWithoutAuthorInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  slug?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  description?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  body?: StringFieldUpdateOperationsInput;

  @Field(() => TagUpdateManyWithoutArticlesNestedInput, { nullable: true })
  tags?: TagUpdateManyWithoutArticlesNestedInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  favoritesCount?: IntFieldUpdateOperationsInput;

  @Field(() => UserUpdateManyWithoutFavoriteArticlesNestedInput, { nullable: true })
  @Type(() => UserUpdateManyWithoutFavoriteArticlesNestedInput)
  favoritedBy?: UserUpdateManyWithoutFavoriteArticlesNestedInput;

  @Field(() => CommentUpdateManyWithoutArticleNestedInput, { nullable: true })
  @Type(() => CommentUpdateManyWithoutArticleNestedInput)
  comments?: CommentUpdateManyWithoutArticleNestedInput;

  @Field(() => NullableBoolFieldUpdateOperationsInput, { nullable: true })
  active?: NullableBoolFieldUpdateOperationsInput;
}
