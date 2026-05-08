import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input.ts';
import { ArticleUncheckedUpdateManyWithoutTagsNestedInput } from '../article/article-unchecked-update-many-without-tags-nested.input.ts';
import { Type } from 'class-transformer';

@InputType()
export class TagUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: Identity<StringFieldUpdateOperationsInput>;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: Identity<StringFieldUpdateOperationsInput>;

  @Field(() => ArticleUncheckedUpdateManyWithoutTagsNestedInput, {
    nullable: true,
  })
  @Type(() => ArticleUncheckedUpdateManyWithoutTagsNestedInput)
  articles?: Identity<ArticleUncheckedUpdateManyWithoutTagsNestedInput>;
}
