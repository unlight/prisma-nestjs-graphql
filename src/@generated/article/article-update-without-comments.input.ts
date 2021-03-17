import { Field, InputType } from '@nestjs/graphql';

import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { TagUpdateManyWithoutArticlesInput } from '../tag/tag-update-many-without-articles.input';
import { UserUpdateManyWithoutFavoriteArticlesInput } from '../user/user-update-many-without-favorite-articles.input';
import { UserUpdateOneRequiredWithoutArticlesInput } from '../user/user-update-one-required-without-articles.input';

@InputType()
export class ArticleUpdateWithoutCommentsInput {
    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    description?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    body?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
    favoritesCount?: IntFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, { nullable: true })
    active?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => TagUpdateManyWithoutArticlesInput, { nullable: true })
    tags?: TagUpdateManyWithoutArticlesInput;

    @Field(() => UserUpdateOneRequiredWithoutArticlesInput, { nullable: true })
    author?: UserUpdateOneRequiredWithoutArticlesInput;

    @Field(() => UserUpdateManyWithoutFavoriteArticlesInput, { nullable: true })
    favoritedBy?: UserUpdateManyWithoutFavoriteArticlesInput;
}
