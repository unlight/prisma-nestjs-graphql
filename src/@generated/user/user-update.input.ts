import { Field, Float, InputType, Int } from '@nestjs/graphql';

import { ArticleUpdateManyWithoutAuthorInput } from '../article/article-update-many-without-author.input';
import { ArticleUpdateManyWithoutFavoritedByInput } from '../article/article-update-many-without-favorited-by.input';
import { CommentUpdateManyWithoutAuthorInput } from '../comment/comment-update-many-without-author.input';
import { UserUpdateManyWithoutFollowersInput } from './user-update-many-without-followers.input';
import { UserUpdateManyWithoutFollowingInput } from './user-update-many-without-following.input';

@InputType()
export class UserUpdateInput {
    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    id?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    email?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    name?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    password?: string;

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

    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    countComments?: number | null;

    @Field(() => Float, {
        nullable: true,
        description: undefined,
    })
    rating?: number | null;

    @Field(() => UserUpdateManyWithoutFollowersInput, {
        nullable: true,
        description: undefined,
    })
    following?: UserUpdateManyWithoutFollowersInput | null;

    @Field(() => UserUpdateManyWithoutFollowingInput, {
        nullable: true,
        description: undefined,
    })
    followers?: UserUpdateManyWithoutFollowingInput | null;

    @Field(() => ArticleUpdateManyWithoutFavoritedByInput, {
        nullable: true,
        description: undefined,
    })
    favoriteArticles?: ArticleUpdateManyWithoutFavoritedByInput | null;

    @Field(() => ArticleUpdateManyWithoutAuthorInput, {
        nullable: true,
        description: undefined,
    })
    articles?: ArticleUpdateManyWithoutAuthorInput | null;

    @Field(() => CommentUpdateManyWithoutAuthorInput, {
        nullable: true,
        description: undefined,
    })
    comments?: CommentUpdateManyWithoutAuthorInput | null;
}
