import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input.ts';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input.ts';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input.ts';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input.ts';
import { Decimal } from '@prisma/client-runtime-utils';
import { NullableDecimalFieldUpdateOperationsInput } from '../prisma/nullable-decimal-field-update-operations.input.ts';
import { Type } from 'class-transformer';
import { NullableEnumRoleFieldUpdateOperationsInput } from '../prisma/nullable-enum-role-field-update-operations.input.ts';
import { UserUncheckedUpdateManyWithoutFollowersNestedInput } from './user-unchecked-update-many-without-followers-nested.input.ts';
import { UserUncheckedUpdateManyWithoutFollowingNestedInput } from './user-unchecked-update-many-without-following-nested.input.ts';
import { ArticleUncheckedUpdateManyWithoutAuthorNestedInput } from '../article/article-unchecked-update-many-without-author-nested.input.ts';
import { CommentUncheckedUpdateManyWithoutAuthorNestedInput } from '../comment/comment-unchecked-update-many-without-author-nested.input.ts';
import { ProfileUncheckedUpdateOneWithoutUserNestedInput } from '../profile/profile-unchecked-update-one-without-user-nested.input.ts';

@InputType()
export class UserUncheckedUpdateWithoutFavoriteArticlesInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: Identity<StringFieldUpdateOperationsInput>;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: Identity<StringFieldUpdateOperationsInput>;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: Identity<StringFieldUpdateOperationsInput>;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: Identity<StringFieldUpdateOperationsInput>;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  bio?: Identity<NullableStringFieldUpdateOperationsInput>;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  image?: Identity<NullableStringFieldUpdateOperationsInput>;

  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  countComments?: Identity<NullableIntFieldUpdateOperationsInput>;

  @Field(() => NullableFloatFieldUpdateOperationsInput, { nullable: true })
  rating?: Identity<NullableFloatFieldUpdateOperationsInput>;

  @Field(() => NullableDecimalFieldUpdateOperationsInput, { nullable: true })
  @Type(() => NullableDecimalFieldUpdateOperationsInput)
  money?: Identity<NullableDecimalFieldUpdateOperationsInput>;

  @Field(() => NullableEnumRoleFieldUpdateOperationsInput, { nullable: true })
  role?: Identity<NullableEnumRoleFieldUpdateOperationsInput>;

  @Field(() => UserUncheckedUpdateManyWithoutFollowersNestedInput, {
    nullable: true,
  })
  @Type(() => UserUncheckedUpdateManyWithoutFollowersNestedInput)
  following?: Identity<UserUncheckedUpdateManyWithoutFollowersNestedInput>;

  @Field(() => UserUncheckedUpdateManyWithoutFollowingNestedInput, {
    nullable: true,
  })
  @Type(() => UserUncheckedUpdateManyWithoutFollowingNestedInput)
  followers?: Identity<UserUncheckedUpdateManyWithoutFollowingNestedInput>;

  @Field(() => ArticleUncheckedUpdateManyWithoutAuthorNestedInput, {
    nullable: true,
  })
  @Type(() => ArticleUncheckedUpdateManyWithoutAuthorNestedInput)
  articles?: Identity<ArticleUncheckedUpdateManyWithoutAuthorNestedInput>;

  @Field(() => CommentUncheckedUpdateManyWithoutAuthorNestedInput, {
    nullable: true,
  })
  @Type(() => CommentUncheckedUpdateManyWithoutAuthorNestedInput)
  comments?: Identity<CommentUncheckedUpdateManyWithoutAuthorNestedInput>;

  @Field(() => ProfileUncheckedUpdateOneWithoutUserNestedInput, {
    nullable: true,
  })
  @Type(() => ProfileUncheckedUpdateOneWithoutUserNestedInput)
  profile?: Identity<ProfileUncheckedUpdateOneWithoutUserNestedInput>;
}
