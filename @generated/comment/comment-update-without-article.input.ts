import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { UserUpdateOneRequiredWithoutCommentsNestedInput } from '../user/user-update-one-required-without-comments-nested.input.ts';
import { Type } from 'class-transformer';

@InputType()
export class CommentUpdateWithoutArticleInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;

  @Field(() => String, { nullable: true })
  body?: string;

  @Field(() => UserUpdateOneRequiredWithoutCommentsNestedInput, {
    nullable: true,
  })
  @Type(() => UserUpdateOneRequiredWithoutCommentsNestedInput)
  author?: Identity<UserUpdateOneRequiredWithoutCommentsNestedInput>;
}
