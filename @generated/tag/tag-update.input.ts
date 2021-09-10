import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ArticleUpdateManyWithoutTagsInput } from '../article/article-update-many-without-tags.input';

@InputType()
export class TagUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    name?: StringFieldUpdateOperationsInput;

    @Field(() => ArticleUpdateManyWithoutTagsInput, { nullable: true })
    articles?: ArticleUpdateManyWithoutTagsInput;
}
