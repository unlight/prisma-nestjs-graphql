import { Field, InputType } from '@nestjs/graphql';

import { ArticleFilter } from '../article/article-filter.input';
import { CommentFilter } from '../comment/comment-filter.input';
import { NullableStringFilter } from '../prisma/nullable-string-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UserFilter } from './user-filter.input';

@InputType({})
export class UserScalarWhereInput {
    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    id?: StringFilter | null;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    email?: StringFilter | null;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    name?: StringFilter | null;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    password?: StringFilter | null;

    @Field(() => NullableStringFilter, {
        nullable: true,
        description: undefined,
    })
    bio?: NullableStringFilter | null;

    @Field(() => NullableStringFilter, {
        nullable: true,
        description: undefined,
    })
    image?: NullableStringFilter | null;

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

    @Field(() => [UserScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    AND?: UserScalarWhereInput[] | null;

    @Field(() => [UserScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    OR?: UserScalarWhereInput[] | null;

    @Field(() => [UserScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    NOT?: UserScalarWhereInput[] | null;
}
