import { Field, InputType } from '@nestjs/graphql';

import { ArticleUpdateManyWithoutTagsInput } from '../article/article-update-many-without-tags.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class TagUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    name?: StringFieldUpdateOperationsInput;

    @Field(() => ArticleUpdateManyWithoutTagsInput, { nullable: true })
    articles?: ArticleUpdateManyWithoutTagsInput;
}
