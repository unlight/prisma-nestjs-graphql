import { Field, InputType, Int } from '@nestjs/graphql';

import { TagCreateManyWithoutArticlesInput } from '../tag/tag-create-many-without-articles.input';
import { UserCreateManyWithoutFavoriteArticlesInput } from '../user/user-create-many-without-favorite-articles.input';
import { UserCreateOneWithoutArticlesInput } from '../user/user-create-one-without-articles.input';

@InputType()
export class ArticleCreateWithoutCommentsInput {
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
    active?: boolean;

    @Field(() => TagCreateManyWithoutArticlesInput, {
        nullable: true,
    })
    tags?: TagCreateManyWithoutArticlesInput;

    @Field(() => UserCreateOneWithoutArticlesInput, {
        nullable: true,
    })
    author?: UserCreateOneWithoutArticlesInput;

    @Field(() => UserCreateManyWithoutFavoriteArticlesInput, {
        nullable: true,
    })
    favoritedBy?: UserCreateManyWithoutFavoriteArticlesInput;
}
