import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { TagUncheckedUpdateManyWithoutArticlesNestedInput } from '../tag/tag-unchecked-update-many-without-articles-nested.input';
import { UserUncheckedUpdateManyWithoutFavoriteArticlesNestedInput } from '../user/user-unchecked-update-many-without-favorite-articles-nested.input';
import { Type } from 'class-transformer';
import { CommentUncheckedUpdateManyWithoutArticleNestedInput } from '../comment/comment-unchecked-update-many-without-article-nested.input';

@InputType()
export class ArticleUncheckedUpdateWithoutAuthorInput {
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

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  favoritesCount?: IntFieldUpdateOperationsInput;

  @Field(() => NullableBoolFieldUpdateOperationsInput, { nullable: true })
  active?: NullableBoolFieldUpdateOperationsInput;

  @Field(() => TagUncheckedUpdateManyWithoutArticlesNestedInput, { nullable: true })
  tags?: TagUncheckedUpdateManyWithoutArticlesNestedInput;

  @Field(() => UserUncheckedUpdateManyWithoutFavoriteArticlesNestedInput, {
    nullable: true,
  })
  @Type(() => UserUncheckedUpdateManyWithoutFavoriteArticlesNestedInput)
  favoritedBy?: UserUncheckedUpdateManyWithoutFavoriteArticlesNestedInput;

  @Field(() => CommentUncheckedUpdateManyWithoutArticleNestedInput, { nullable: true })
  @Type(() => CommentUncheckedUpdateManyWithoutArticleNestedInput)
  comments?: CommentUncheckedUpdateManyWithoutArticleNestedInput;
}
