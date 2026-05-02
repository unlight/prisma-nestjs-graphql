import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input.ts';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input.ts';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input.ts';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input.ts';
import { NullableDecimalFieldUpdateOperationsInput } from '../prisma/nullable-decimal-field-update-operations.input.ts';
import { Type } from 'class-transformer';
import { NullableEnumRoleFieldUpdateOperationsInput } from '../prisma/nullable-enum-role-field-update-operations.input.ts';
import { UserUncheckedUpdateManyWithoutFollowersNestedInput } from './user-unchecked-update-many-without-followers-nested.input.ts';
import { UserUncheckedUpdateManyWithoutFollowingNestedInput } from './user-unchecked-update-many-without-following-nested.input.ts';
import { ArticleUncheckedUpdateManyWithoutFavoritedByNestedInput } from '../article/article-unchecked-update-many-without-favorited-by-nested.input.ts';
import { ArticleUncheckedUpdateManyWithoutAuthorNestedInput } from '../article/article-unchecked-update-many-without-author-nested.input.ts';
import { CommentUncheckedUpdateManyWithoutAuthorNestedInput } from '../comment/comment-unchecked-update-many-without-author-nested.input.ts';
import { ProfileUncheckedUpdateOneWithoutUserNestedInput } from '../profile/profile-unchecked-update-one-without-user-nested.input.ts';

@InputType()
export class UserUncheckedUpdateInput {
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

  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  countComments?: NullableIntFieldUpdateOperationsInput;

  @Field(() => NullableFloatFieldUpdateOperationsInput, { nullable: true })
  rating?: NullableFloatFieldUpdateOperationsInput;

  @Field(() => NullableDecimalFieldUpdateOperationsInput, { nullable: true })
  @Type(() => NullableDecimalFieldUpdateOperationsInput)
  money?: NullableDecimalFieldUpdateOperationsInput;

  @Field(() => NullableEnumRoleFieldUpdateOperationsInput, { nullable: true })
  role?: NullableEnumRoleFieldUpdateOperationsInput;

  @Field(() => UserUncheckedUpdateManyWithoutFollowersNestedInput, {
    nullable: true,
  })
  @Type(() => UserUncheckedUpdateManyWithoutFollowersNestedInput)
  following?: UserUncheckedUpdateManyWithoutFollowersNestedInput;

  @Field(() => UserUncheckedUpdateManyWithoutFollowingNestedInput, {
    nullable: true,
  })
  @Type(() => UserUncheckedUpdateManyWithoutFollowingNestedInput)
  followers?: UserUncheckedUpdateManyWithoutFollowingNestedInput;

  @Field(() => ArticleUncheckedUpdateManyWithoutFavoritedByNestedInput, {
    nullable: true,
  })
  @Type(() => ArticleUncheckedUpdateManyWithoutFavoritedByNestedInput)
  favoriteArticles?: ArticleUncheckedUpdateManyWithoutFavoritedByNestedInput;

  @Field(() => ArticleUncheckedUpdateManyWithoutAuthorNestedInput, {
    nullable: true,
  })
  @Type(() => ArticleUncheckedUpdateManyWithoutAuthorNestedInput)
  articles?: ArticleUncheckedUpdateManyWithoutAuthorNestedInput;

  @Field(() => CommentUncheckedUpdateManyWithoutAuthorNestedInput, {
    nullable: true,
  })
  @Type(() => CommentUncheckedUpdateManyWithoutAuthorNestedInput)
  comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput;

  @Field(() => ProfileUncheckedUpdateOneWithoutUserNestedInput, {
    nullable: true,
  })
  @Type(() => ProfileUncheckedUpdateOneWithoutUserNestedInput)
  profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput;
}
