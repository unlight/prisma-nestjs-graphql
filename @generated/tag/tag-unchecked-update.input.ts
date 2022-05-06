import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ArticleUncheckedUpdateManyWithoutTagsInput } from '../article/article-unchecked-update-many-without-tags.input';

@InputType()
export class TagUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => ArticleUncheckedUpdateManyWithoutTagsInput, { nullable: true })
  articles?: ArticleUncheckedUpdateManyWithoutTagsInput;
}
