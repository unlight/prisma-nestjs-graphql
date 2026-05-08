import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input.ts';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input.ts';
import { HideField } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutCommentsNestedInput } from '../user/user-update-one-required-without-comments-nested.input.ts';
import { Type } from 'class-transformer';

@InputType()
export class CommentUpdateWithoutArticleInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: Identity<StringFieldUpdateOperationsInput>;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: Identity<DateTimeFieldUpdateOperationsInput>;

  @HideField()
  updatedAt?: Identity<DateTimeFieldUpdateOperationsInput>;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  body?: Identity<StringFieldUpdateOperationsInput>;

  @Field(() => UserUpdateOneRequiredWithoutCommentsNestedInput, {
    nullable: true,
  })
  @Type(() => UserUpdateOneRequiredWithoutCommentsNestedInput)
  author?: Identity<UserUpdateOneRequiredWithoutCommentsNestedInput>;
}
