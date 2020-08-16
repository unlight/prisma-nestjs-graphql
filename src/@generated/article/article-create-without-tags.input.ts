import { Field, InputType, Int } from '@nestjs/graphql';

import { CommentCreateManyWithoutArticleInput } from '../comment/comment-create-many-without-article.input';
import { UserCreateManyWithoutFavoriteArticlesInput } from '../user/user-create-many-without-favorite-articles.input';
import { UserCreateOneWithoutArticlesInput } from '../user/user-create-one-without-articles.input';

@InputType({})
export class ArticleCreateWithoutTagsInput {
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

    @Field(() => UserCreateOneWithoutArticlesInput, {
        nullable: true,
        description: undefined,
    })
    author?: UserCreateOneWithoutArticlesInput | null;

    @Field(() => UserCreateManyWithoutFavoriteArticlesInput, {
        nullable: true,
        description: undefined,
    })
    favoritedBy?: UserCreateManyWithoutFavoriteArticlesInput | null;

    @Field(() => CommentCreateManyWithoutArticleInput, {
        nullable: true,
        description: undefined,
    })
    comments?: CommentCreateManyWithoutArticleInput | null;
}
