import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { ArticleUpdateOneWithoutCommentsNestedInput } from '../article/article-update-one-without-comments-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class CommentUpdateWithoutAuthorInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    body?: StringFieldUpdateOperationsInput;

    @Field(() => ArticleUpdateOneWithoutCommentsNestedInput, {nullable:true})
    @Type(() => ArticleUpdateOneWithoutCommentsNestedInput)
    article?: ArticleUpdateOneWithoutCommentsNestedInput;
}
