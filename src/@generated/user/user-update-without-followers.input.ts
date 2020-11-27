import { Field, Float, InputType, Int } from '@nestjs/graphql';

import { ArticleUpdateManyWithoutAuthorInput } from '../article/article-update-many-without-author.input';
import { ArticleUpdateManyWithoutFavoritedByInput } from '../article/article-update-many-without-favorited-by.input';
import { CommentUpdateManyWithoutAuthorInput } from '../comment/comment-update-many-without-author.input';
import { Role } from '../prisma/role.enum';
import { UserUpdateManyWithoutFollowersInput } from './user-update-many-without-followers.input';

@InputType()
export class UserUpdateWithoutFollowersInput {
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
    bio?: string | null;

    @Field(() => String, {
        nullable: true,
    })
    image?: string | null;

    @Field(() => Int, {
        nullable: true,
    })
    countComments?: number | null;

    @Field(() => Float, {
        nullable: true,
    })
    rating?: number | null;

    @Field(() => Role, {
        nullable: true,
    })
    role?: Role | null;

    @Field(() => UserUpdateManyWithoutFollowersInput, {
        nullable: true,
    })
    following?: UserUpdateManyWithoutFollowersInput;

    @Field(() => ArticleUpdateManyWithoutFavoritedByInput, {
        nullable: true,
    })
    favoriteArticles?: ArticleUpdateManyWithoutFavoritedByInput;

    @Field(() => ArticleUpdateManyWithoutAuthorInput, {
        nullable: true,
    })
    articles?: ArticleUpdateManyWithoutAuthorInput;

    @Field(() => CommentUpdateManyWithoutAuthorInput, {
        nullable: true,
    })
    comments?: CommentUpdateManyWithoutAuthorInput;
}
