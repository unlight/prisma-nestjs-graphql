import { Field, InputType } from '@nestjs/graphql';

import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
import { BooleanFilter } from '../prisma/boolean-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { TagListRelationFilter } from '../tag/tag-list-relation-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { UserWhereInput } from '../user/user-where.input';

@InputType()
export class ArticleWhereInput {
    @Field(() => [ArticleWhereInput], {
        nullable: true,
        description: undefined,
    })
    AND?: ArticleWhereInput | Array<ArticleWhereInput>;

    @Field(() => [ArticleWhereInput], {
        nullable: true,
        description: undefined,
    })
    OR?: Array<ArticleWhereInput>;

    @Field(() => [ArticleWhereInput], {
        nullable: true,
        description: undefined,
    })
    NOT?: ArticleWhereInput | Array<ArticleWhereInput>;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    id?: string | StringFilter;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    slug?: string | StringFilter;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    title?: string | StringFilter;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    description?: string | StringFilter;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    body?: string | StringFilter;

    @Field(() => TagListRelationFilter, {
        nullable: true,
        description: undefined,
    })
    tags?: TagListRelationFilter | null;

    @Field(() => DateTimeFilter, {
        nullable: true,
        description: undefined,
    })
    createdAt?: Date | string | DateTimeFilter;

    @Field(() => DateTimeFilter, {
        nullable: true,
        description: undefined,
    })
    updatedAt?: Date | string | DateTimeFilter;

    @Field(() => IntFilter, {
        nullable: true,
        description: undefined,
    })
    favoritesCount?: number | IntFilter;

    @Field(() => UserWhereInput, {
        nullable: true,
        description: undefined,
    })
    author?: UserWhereInput;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    authorId?: string | StringFilter;

    @Field(() => UserListRelationFilter, {
        nullable: true,
        description: undefined,
    })
    favoritedBy?: UserListRelationFilter | null;

    @Field(() => CommentListRelationFilter, {
        nullable: true,
        description: undefined,
    })
    comments?: CommentListRelationFilter | null;

    @Field(() => BooleanFilter, {
        nullable: true,
        description: undefined,
    })
    active?: boolean | BooleanFilter | null;
}
