import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { UserUncheckedUpdateManyWithoutFollowersInput } from './user-unchecked-update-many-without-followers.input';
import { Type } from 'class-transformer';
import { ArticleUncheckedUpdateManyWithoutFavoritedByInput } from '../article/article-unchecked-update-many-without-favorited-by.input';
import { ArticleUncheckedUpdateManyWithoutAuthorInput } from '../article/article-unchecked-update-many-without-author.input';
import { CommentUncheckedUpdateManyWithoutAuthorInput } from '../comment/comment-unchecked-update-many-without-author.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { NullableDecimalFieldUpdateOperationsInput } from '../prisma/nullable-decimal-field-update-operations.input';
import { NullableEnumRoleFieldUpdateOperationsInput } from '../prisma/nullable-enum-role-field-update-operations.input';
import { ProfileUncheckedUpdateOneWithoutUserInput } from '../profile/profile-unchecked-update-one-without-user.input';

@InputType()
export class UserUncheckedUpdateWithoutFollowersInput {
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

  @Field(() => ProfileUncheckedUpdateOneWithoutUserInput, { nullable: true })
  profile?: ProfileUncheckedUpdateOneWithoutUserInput;
}
