import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { TagUncheckedUpdateManyWithoutArticlesInput } from '../tag/tag-unchecked-update-many-without-articles.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { UserUncheckedUpdateManyWithoutFavoriteArticlesInput } from '../user/user-unchecked-update-many-without-favorite-articles.input';
import { CommentUncheckedUpdateManyWithoutArticleInput } from '../comment/comment-unchecked-update-many-without-article.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';

@InputType()
export class ArticleUncheckedUpdateInput {
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

  @Field(() => TagUncheckedUpdateManyWithoutArticlesInput, { nullable: true })
  tags?: TagUncheckedUpdateManyWithoutArticlesInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  favoritesCount?: IntFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  authorId?: StringFieldUpdateOperationsInput;

  @Field(() => UserUncheckedUpdateManyWithoutFavoriteArticlesInput, { nullable: true })
  favoritedBy?: UserUncheckedUpdateManyWithoutFavoriteArticlesInput;

  @Field(() => CommentUncheckedUpdateManyWithoutArticleInput, { nullable: true })
  comments?: CommentUncheckedUpdateManyWithoutArticleInput;

  @Field(() => NullableBoolFieldUpdateOperationsInput, { nullable: true })
  active?: NullableBoolFieldUpdateOperationsInput;
}
