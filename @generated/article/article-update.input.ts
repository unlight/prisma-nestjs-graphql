import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { TagUpdateManyWithoutArticlesNestedInput } from '../tag/tag-update-many-without-articles-nested.input';
import { UserUpdateOneRequiredWithoutArticlesNestedInput } from '../user/user-update-one-required-without-articles-nested.input';
import { Type } from 'class-transformer';
import { UserUpdateManyWithoutFavoriteArticlesNestedInput } from '../user/user-update-many-without-favorite-articles-nested.input';
import { CommentUpdateManyWithoutArticleNestedInput } from '../comment/comment-update-many-without-article-nested.input';

@InputType()
export class ArticleUpdateInput {
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

  @Field(() => TagUpdateManyWithoutArticlesNestedInput, { nullable: true })
  tags?: TagUpdateManyWithoutArticlesNestedInput;

  @Field(() => UserUpdateOneRequiredWithoutArticlesNestedInput, { nullable: true })
  @Type(() => UserUpdateOneRequiredWithoutArticlesNestedInput)
  author?: UserUpdateOneRequiredWithoutArticlesNestedInput;

  @Field(() => UserUpdateManyWithoutFavoriteArticlesNestedInput, { nullable: true })
  @Type(() => UserUpdateManyWithoutFavoriteArticlesNestedInput)
  favoritedBy?: UserUpdateManyWithoutFavoriteArticlesNestedInput;

  @Field(() => CommentUpdateManyWithoutArticleNestedInput, { nullable: true })
  @Type(() => CommentUpdateManyWithoutArticleNestedInput)
  comments?: CommentUpdateManyWithoutArticleNestedInput;
}
