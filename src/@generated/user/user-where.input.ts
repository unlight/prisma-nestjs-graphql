import { Field, InputType } from '@nestjs/graphql';

import { ArticleFilter } from '../article/article-filter.input';
import { CommentFilter } from '../comment/comment-filter.input';
import { NullableStringFilter } from '../prisma/nullable-string-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UserFilter } from './user-filter.input';

@InputType({})
export class UserWhereInput {
    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    id?: string | StringFilter | null;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    email?: string | StringFilter | null;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    name?: string | StringFilter | null;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    password?: string | StringFilter | null;

    @Field(() => NullableStringFilter, {
        nullable: true,
        description: undefined,
    })
    bio?: string | NullableStringFilter | null;

    @Field(() => NullableStringFilter, {
        nullable: true,
        description: undefined,
    })
    image?: string | NullableStringFilter | null;

    @Field(() => UserFilter, {
        nullable: true,
        description: undefined,
    })
    following?: UserFilter | null;

    @Field(() => UserFilter, {
        nullable: true,
        description: undefined,
    })
    followers?: UserFilter | null;

    @Field(() => ArticleFilter, {
        nullable: true,
        description: undefined,
    })
    favoriteArticles?: ArticleFilter | null;

    @Field(() => ArticleFilter, {
        nullable: true,
        description: undefined,
    })
    articles?: ArticleFilter | null;

    @Field(() => CommentFilter, {
        nullable: true,
        description: undefined,
    })
    comments?: CommentFilter | null;

    @Field(() => [UserWhereInput], {
        nullable: true,
        description: undefined,
    })
    AND?: UserWhereInput[] | null;

    @Field(() => [UserWhereInput], {
        nullable: true,
        description: undefined,
    })
    OR?: UserWhereInput[] | null;

    @Field(() => [UserWhereInput], {
        nullable: true,
        description: undefined,
    })
    NOT?: UserWhereInput[] | null;
}
