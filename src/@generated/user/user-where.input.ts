import { Field, InputType } from '@nestjs/graphql';

import { ArticleListRelationFilter } from '../article/article-list-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UserListRelationFilter } from './user-list-relation-filter.input';

@InputType({})
export class UserWhereInput {
    @Field(() => [UserWhereInput], {
        nullable: true,
        description: undefined,
    })
    AND?: UserWhereInput | Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {
        nullable: true,
        description: undefined,
    })
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {
        nullable: true,
        description: undefined,
    })
    NOT?: UserWhereInput | Array<UserWhereInput>;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    id?: string | StringFilter;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    email?: string | StringFilter;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    name?: string | StringFilter;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    password?: string | StringFilter;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    bio?: string | StringFilter | null;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    image?: string | StringFilter | null;

    @Field(() => UserListRelationFilter, {
        nullable: true,
        description: undefined,
    })
    following?: UserListRelationFilter | null;

    @Field(() => UserListRelationFilter, {
        nullable: true,
        description: undefined,
    })
    followers?: UserListRelationFilter | null;

    @Field(() => ArticleListRelationFilter, {
        nullable: true,
        description: undefined,
    })
    favoriteArticles?: ArticleListRelationFilter | null;

    @Field(() => ArticleListRelationFilter, {
        nullable: true,
        description: undefined,
    })
    articles?: ArticleListRelationFilter | null;

    @Field(() => CommentListRelationFilter, {
        nullable: true,
        description: undefined,
    })
    comments?: CommentListRelationFilter | null;

    @Field(() => IntFilter, {
        nullable: true,
        description: undefined,
    })
    countComments?: number | IntFilter | null;

    @Field(() => FloatFilter, {
        nullable: true,
        description: undefined,
    })
    rating?: number | FloatFilter | null;
}
