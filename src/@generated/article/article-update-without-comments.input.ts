import { Field, InputType, Int } from '@nestjs/graphql';

import { TagUpdateManyWithoutArticlesInput } from '../tag/tag-update-many-without-articles.input';
import { UserUpdateManyWithoutFavoriteArticlesInput } from '../user/user-update-many-without-favorite-articles.input';
import { UserUpdateOneRequiredWithoutArticlesInput } from '../user/user-update-one-required-without-articles.input';

@InputType()
export class ArticleUpdateWithoutCommentsInput {
    @Field(() => String, {
        nullable: true,
    })
    id?: string;

    @Field(() => String, {
        nullable: true,
    })
    slug?: string;

    @Field(() => String, {
        nullable: true,
    })
    title?: string;

    @Field(() => String, {
        nullable: true,
    })
    description?: string;

    @Field(() => String, {
        nullable: true,
    })
    body?: string;

    @Field(() => String, {
        nullable: true,
    })
    createdAt?: Date | string;

    @Field(() => String, {
        nullable: true,
    })
    updatedAt?: Date | string;

    @Field(() => Int, {
        nullable: true,
    })
    favoritesCount?: number;

    @Field(() => Boolean, {
        nullable: true,
    })
    active?: boolean | null;

    @Field(() => TagUpdateManyWithoutArticlesInput, {
        nullable: true,
    })
    tags?: TagUpdateManyWithoutArticlesInput;

    @Field(() => UserUpdateOneRequiredWithoutArticlesInput, {
        nullable: true,
    })
    author?: UserUpdateOneRequiredWithoutArticlesInput;

    @Field(() => UserUpdateManyWithoutFavoriteArticlesInput, {
        nullable: true,
    })
    favoritedBy?: UserUpdateManyWithoutFavoriteArticlesInput;
}
