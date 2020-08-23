import { Field, InputType, Int } from '@nestjs/graphql';

import { CommentUpdateManyWithoutArticleInput } from '../comment/comment-update-many-without-article.input';
import { TagUpdateManyWithoutArticlesInput } from '../tag/tag-update-many-without-articles.input';
import { UserUpdateManyWithoutFavoriteArticlesInput } from '../user/user-update-many-without-favorite-articles.input';
import { UserUpdateOneRequiredWithoutArticlesInput } from '../user/user-update-one-required-without-articles.input';

@InputType({})
export class ArticleUpdateInput {
    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    id?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    slug?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    title?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    description?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    body?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    createdAt?: Date | string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    updatedAt?: Date | string;

    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    favoritesCount?: number;

    @Field(() => Boolean, {
        nullable: true,
        description: undefined,
    })
    active?: boolean | null;

    @Field(() => TagUpdateManyWithoutArticlesInput, {
        nullable: true,
        description: undefined,
    })
    tags?: TagUpdateManyWithoutArticlesInput | null;

    @Field(() => UserUpdateOneRequiredWithoutArticlesInput, {
        nullable: true,
        description: undefined,
    })
    author?: UserUpdateOneRequiredWithoutArticlesInput;

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
