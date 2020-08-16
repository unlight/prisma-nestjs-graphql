import { Field, InputType, Int } from '@nestjs/graphql';

import { CommentUpdateManyWithoutArticleInput } from '../comment/comment-update-many-without-article.input';
import { UserUpdateManyWithoutFavoriteArticlesInput } from '../user/user-update-many-without-favorite-articles.input';
import { UserUpdateOneRequiredWithoutArticlesInput } from '../user/user-update-one-required-without-articles.input';

@InputType({})
export class ArticleUpdateWithoutTagsDataInput {
    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    id?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    slug?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    title?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    description?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    body?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    createdAt?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    updatedAt?: string | null;

    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    favoritesCount?: number | null;

    @Field(() => Boolean, {
        nullable: true,
        description: undefined,
    })
    active?: boolean | null;

    @Field(() => UserUpdateOneRequiredWithoutArticlesInput, {
        nullable: true,
        description: undefined,
    })
    author?: UserUpdateOneRequiredWithoutArticlesInput | null;

    @Field(() => UserUpdateManyWithoutFavoriteArticlesInput, {
        nullable: true,
        description: undefined,
    })
    favoritedBy?: UserUpdateManyWithoutFavoriteArticlesInput | null;

    @Field(() => CommentUpdateManyWithoutArticleInput, {
        nullable: true,
        description: undefined,
    })
    comments?: CommentUpdateManyWithoutArticleInput | null;
}
