import { Field, InputType, Int } from '@nestjs/graphql';

import { CommentCreateManyWithoutArticleInput } from '../comment/comment-create-many-without-article.input';
import { TagCreateManyWithoutArticlesInput } from '../tag/tag-create-many-without-articles.input';
import { UserCreateOneWithoutArticlesInput } from '../user/user-create-one-without-articles.input';

@InputType({})
export class ArticleCreateWithoutFavoritedByInput {
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

    @Field(() => TagCreateManyWithoutArticlesInput, {
        nullable: true,
        description: undefined,
    })
    tags?: TagCreateManyWithoutArticlesInput | null;

    @Field(() => UserCreateOneWithoutArticlesInput, {
        nullable: true,
        description: undefined,
    })
    author?: UserCreateOneWithoutArticlesInput;

    @Field(() => CommentCreateManyWithoutArticleInput, {
        nullable: true,
        description: undefined,
    })
    comments?: CommentCreateManyWithoutArticleInput | null;
}
