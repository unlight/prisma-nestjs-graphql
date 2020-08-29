import { Field, InputType } from '@nestjs/graphql';

import { CommentFilter } from '../comment/comment-filter.input';
import { BooleanFilter } from '../prisma/boolean-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { TagFilter } from '../tag/tag-filter.input';
import { UserFilter } from '../user/user-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType({})
export class ArticleWhereInput {
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

    @Field(() => TagFilter, {
        nullable: true,
        description: undefined,
    })
    tags?: TagFilter | null;

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

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    authorId?: string | StringFilter;

    @Field(() => UserFilter, {
        nullable: true,
        description: undefined,
    })
    favoritedBy?: UserFilter | null;

    @Field(() => CommentFilter, {
        nullable: true,
        description: undefined,
    })
    comments?: CommentFilter | null;

    @Field(() => BooleanFilter, {
        nullable: true,
        description: undefined,
    })
    active?: boolean | BooleanFilter | null;

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

    @Field(() => UserRelationFilter, {
        nullable: true,
        description: undefined,
    })
    author?: UserRelationFilter;
}
