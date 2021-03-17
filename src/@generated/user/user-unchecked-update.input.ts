import { Field, InputType } from '@nestjs/graphql';

import { ArticleUncheckedUpdateManyWithoutAuthorInput } from '../article/article-unchecked-update-many-without-author.input';
import { CommentUncheckedUpdateManyWithoutAuthorInput } from '../comment/comment-unchecked-update-many-without-author.input';
import { NullableEnumRoleFieldUpdateOperationsInput } from '../prisma/nullable-enum-role-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class UserUncheckedUpdateInput {
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

    @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
    countComments?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, { nullable: true })
    rating?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableEnumRoleFieldUpdateOperationsInput, { nullable: true })
    role?: NullableEnumRoleFieldUpdateOperationsInput;

    @Field(() => ArticleUncheckedUpdateManyWithoutAuthorInput, { nullable: true })
    articles?: ArticleUncheckedUpdateManyWithoutAuthorInput;

    @Field(() => CommentUncheckedUpdateManyWithoutAuthorInput, { nullable: true })
    comments?: CommentUncheckedUpdateManyWithoutAuthorInput;
}
