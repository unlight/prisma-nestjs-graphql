import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutCommentsInput } from '../user/user-update-one-required-without-comments.input';
import { ArticleUpdateOneWithoutCommentsInput } from '../article/article-update-one-without-comments.input';

@InputType()
export class CommentUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @HideField()
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  body?: StringFieldUpdateOperationsInput;

  @Field(() => UserUpdateOneRequiredWithoutCommentsInput, { nullable: true })
  author?: UserUpdateOneRequiredWithoutCommentsInput;

  @Field(() => ArticleUpdateOneWithoutCommentsInput, { nullable: true })
  article?: ArticleUpdateOneWithoutCommentsInput;
}
