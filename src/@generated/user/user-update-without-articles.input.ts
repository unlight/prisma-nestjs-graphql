import { Field, Float, InputType, Int } from '@nestjs/graphql';

import { ArticleUpdateManyWithoutFavoritedByInput } from '../article/article-update-many-without-favorited-by.input';
import { CommentUpdateManyWithoutAuthorInput } from '../comment/comment-update-many-without-author.input';
import { Role } from '../prisma/role.enum';
import { UserUpdateManyWithoutFollowersInput } from './user-update-many-without-followers.input';
import { UserUpdateManyWithoutFollowingInput } from './user-update-many-without-following.input';

@InputType()
export class UserUpdateWithoutArticlesInput {
    @Field(() => String, {
        nullable: true,
    })
    id?: string;

    @Field(() => String, {
        nullable: true,
    })
    email?: string;

    @Field(() => String, {
        nullable: true,
    })
    name?: string;

    @Field(() => String, {
        nullable: true,
    })
    password?: string;

    @Field(() => String, {
        nullable: true,
    })
    bio?: string;

    @Field(() => String, {
        nullable: true,
    })
    image?: string;

    @Field(() => Int, {
        nullable: true,
    })
    countComments?: number;

    @Field(() => Float, {
        nullable: true,
    })
    rating?: number;

    @Field(() => Role, {
        nullable: true,
    })
    role?: Role;

    @Field(() => UserUpdateManyWithoutFollowersInput, {
        nullable: true,
    })
    following?: UserUpdateManyWithoutFollowersInput;

    @Field(() => UserUpdateManyWithoutFollowingInput, {
        nullable: true,
    })
    followers?: UserUpdateManyWithoutFollowingInput;

    @Field(() => ArticleUpdateManyWithoutFavoritedByInput, {
        nullable: true,
    })
    favoriteArticles?: ArticleUpdateManyWithoutFavoritedByInput;

    @Field(() => CommentUpdateManyWithoutAuthorInput, {
        nullable: true,
    })
    comments?: CommentUpdateManyWithoutAuthorInput;
}
