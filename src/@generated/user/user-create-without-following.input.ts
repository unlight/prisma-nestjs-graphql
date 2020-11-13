import { Field, Float, InputType, Int } from '@nestjs/graphql';

import { ArticleCreateManyWithoutAuthorInput } from '../article/article-create-many-without-author.input';
import { ArticleCreateManyWithoutFavoritedByInput } from '../article/article-create-many-without-favorited-by.input';
import { CommentCreateManyWithoutAuthorInput } from '../comment/comment-create-many-without-author.input';
import { Role } from '../prisma/role.enum';
import { UserCreateManyWithoutFollowingInput } from './user-create-many-without-following.input';

@InputType()
export class UserCreateWithoutFollowingInput {
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

    @Field(() => Role, {
        nullable: true,
        description: undefined,
    })
    role?: Role | null;

    @Field(() => UserCreateManyWithoutFollowingInput, {
        nullable: true,
        description: undefined,
    })
    followers?: UserCreateManyWithoutFollowingInput;

    @Field(() => ArticleCreateManyWithoutFavoritedByInput, {
        nullable: true,
        description: undefined,
    })
    favoriteArticles?: ArticleCreateManyWithoutFavoritedByInput;

    @Field(() => ArticleCreateManyWithoutAuthorInput, {
        nullable: true,
        description: undefined,
    })
    articles?: ArticleCreateManyWithoutAuthorInput;

    @Field(() => CommentCreateManyWithoutAuthorInput, {
        nullable: true,
        description: undefined,
    })
    comments?: CommentCreateManyWithoutAuthorInput;
}
