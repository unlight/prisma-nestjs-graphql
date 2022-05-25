import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { UserUncheckedUpdateManyWithoutFollowersInput } from './user-unchecked-update-many-without-followers.input';
import { Type } from 'class-transformer';
import { UserUncheckedUpdateManyWithoutFollowingInput } from './user-unchecked-update-many-without-following.input';
import { ArticleUncheckedUpdateManyWithoutFavoritedByInput } from '../article/article-unchecked-update-many-without-favorited-by.input';
import { ArticleUncheckedUpdateManyWithoutAuthorInput } from '../article/article-unchecked-update-many-without-author.input';
import { CommentUncheckedUpdateManyWithoutAuthorInput } from '../comment/comment-unchecked-update-many-without-author.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { NullableDecimalFieldUpdateOperationsInput } from '../prisma/nullable-decimal-field-update-operations.input';
import { NullableEnumRoleFieldUpdateOperationsInput } from '../prisma/nullable-enum-role-field-update-operations.input';

@InputType()
export class UserUncheckedUpdateWithoutProfileInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: StringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  bio?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  image?: NullableStringFieldUpdateOperationsInput;

  @Field(() => UserUncheckedUpdateManyWithoutFollowersInput, { nullable: true })
  @Type(() => UserUncheckedUpdateManyWithoutFollowersInput)
  following?: UserUncheckedUpdateManyWithoutFollowersInput;

  @Field(() => UserUncheckedUpdateManyWithoutFollowingInput, { nullable: true })
  @Type(() => UserUncheckedUpdateManyWithoutFollowingInput)
  followers?: UserUncheckedUpdateManyWithoutFollowingInput;

  @Field(() => ArticleUncheckedUpdateManyWithoutFavoritedByInput, { nullable: true })
  favoriteArticles?: ArticleUncheckedUpdateManyWithoutFavoritedByInput;

  @Field(() => ArticleUncheckedUpdateManyWithoutAuthorInput, { nullable: true })
  articles?: ArticleUncheckedUpdateManyWithoutAuthorInput;

  @Field(() => CommentUncheckedUpdateManyWithoutAuthorInput, { nullable: true })
  comments?: CommentUncheckedUpdateManyWithoutAuthorInput;

  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  countComments?: NullableIntFieldUpdateOperationsInput;

  @Field(() => NullableFloatFieldUpdateOperationsInput, { nullable: true })
  rating?: NullableFloatFieldUpdateOperationsInput;

  @Field(() => NullableDecimalFieldUpdateOperationsInput, { nullable: true })
  @Type(() => NullableDecimalFieldUpdateOperationsInput)
  money?: NullableDecimalFieldUpdateOperationsInput;

  @Field(() => NullableEnumRoleFieldUpdateOperationsInput, { nullable: true })
  role?: NullableEnumRoleFieldUpdateOperationsInput;
}
