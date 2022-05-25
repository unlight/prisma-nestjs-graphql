import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { UserUpdateManyWithoutFollowersInput } from './user-update-many-without-followers.input';
import { Type } from 'class-transformer';
import { UserUpdateManyWithoutFollowingInput } from './user-update-many-without-following.input';
import { ArticleUpdateManyWithoutFavoritedByInput } from '../article/article-update-many-without-favorited-by.input';
import { ArticleUpdateManyWithoutAuthorInput } from '../article/article-update-many-without-author.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { NullableDecimalFieldUpdateOperationsInput } from '../prisma/nullable-decimal-field-update-operations.input';
import { NullableEnumRoleFieldUpdateOperationsInput } from '../prisma/nullable-enum-role-field-update-operations.input';
import { ProfileUpdateOneWithoutUserInput } from '../profile/profile-update-one-without-user.input';

@InputType()
export class UserUpdateWithoutCommentsInput {
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

  @Field(() => UserUpdateManyWithoutFollowersInput, { nullable: true })
  @Type(() => UserUpdateManyWithoutFollowersInput)
  following?: UserUpdateManyWithoutFollowersInput;

  @Field(() => UserUpdateManyWithoutFollowingInput, { nullable: true })
  @Type(() => UserUpdateManyWithoutFollowingInput)
  followers?: UserUpdateManyWithoutFollowingInput;

  @Field(() => ArticleUpdateManyWithoutFavoritedByInput, { nullable: true })
  favoriteArticles?: ArticleUpdateManyWithoutFavoritedByInput;

  @Field(() => ArticleUpdateManyWithoutAuthorInput, { nullable: true })
  articles?: ArticleUpdateManyWithoutAuthorInput;

  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  countComments?: NullableIntFieldUpdateOperationsInput;

  @Field(() => NullableFloatFieldUpdateOperationsInput, { nullable: true })
  rating?: NullableFloatFieldUpdateOperationsInput;

  @Field(() => NullableDecimalFieldUpdateOperationsInput, { nullable: true })
  @Type(() => NullableDecimalFieldUpdateOperationsInput)
  money?: NullableDecimalFieldUpdateOperationsInput;

  @Field(() => NullableEnumRoleFieldUpdateOperationsInput, { nullable: true })
  role?: NullableEnumRoleFieldUpdateOperationsInput;

  @Field(() => ProfileUpdateOneWithoutUserInput, { nullable: true })
  profile?: ProfileUpdateOneWithoutUserInput;
}
