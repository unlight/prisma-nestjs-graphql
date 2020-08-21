import { InputType, Field } from '@nestjs/graphql';
import { UserCreateManyWithoutFollowingInput } from './user-create-many-without-following.input';
import { ArticleCreateManyWithoutFavoritedByInput } from '../article/article-create-many-without-favorited-by.input';
import { ArticleCreateManyWithoutAuthorInput } from '../article/article-create-many-without-author.input';
import { CommentCreateManyWithoutAuthorInput } from '../comment/comment-create-many-without-author.input';

@InputType({})
export class UserCreateWithoutFollowingInput {
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

    @Field(() => CommentCreateManyWithoutAuthorInput, {
        nullable: true,
        description: undefined,
    })
    comments?: CommentCreateManyWithoutAuthorInput | null;
}
