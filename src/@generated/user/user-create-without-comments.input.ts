import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateManyWithoutAuthorInput } from '../article/article-create-many-without-author.input';
import { ArticleCreateManyWithoutFavoritedByInput } from '../article/article-create-many-without-favorited-by.input';
import { UserCreateManyWithoutFollowersInput } from './user-create-many-without-followers.input';
import { UserCreateManyWithoutFollowingInput } from './user-create-many-without-following.input';

@InputType({})
export class UserCreateWithoutCommentsInput {
    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    id?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    email?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    name?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    password?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    bio?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    image?: string | null;

    @Field(() => UserCreateManyWithoutFollowersInput, {
        nullable: true,
        description: undefined,
    })
    following?: UserCreateManyWithoutFollowersInput | null;

    @Field(() => UserCreateManyWithoutFollowingInput, {
        nullable: true,
        description: undefined,
    })
    followers?: UserCreateManyWithoutFollowingInput | null;

    @Field(() => ArticleCreateManyWithoutFavoritedByInput, {
        nullable: true,
        description: undefined,
    })
    favoriteArticles?: ArticleCreateManyWithoutFavoritedByInput | null;

    @Field(() => ArticleCreateManyWithoutAuthorInput, {
        nullable: true,
        description: undefined,
    })
    articles?: ArticleCreateManyWithoutAuthorInput | null;
}
