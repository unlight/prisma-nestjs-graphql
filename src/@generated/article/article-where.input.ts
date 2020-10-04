import { Field, InputType } from '@nestjs/graphql';

import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
import { BooleanFilter } from '../prisma/boolean-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { TagListRelationFilter } from '../tag/tag-list-relation-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
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
    OR?: ArticleWhereInput | Array<ArticleWhereInput>;

    @Field(() => [ArticleWhereInput], {
        nullable: true,
        description: undefined,
    })
    NOT?: ArticleWhereInput | Array<ArticleWhereInput>;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    id?: StringFilter | string;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    slug?: StringFilter | string;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    title?: StringFilter | string;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    description?: StringFilter | string;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    body?: StringFilter | string;

    @Field(() => TagListRelationFilter, {
        nullable: true,
        description: undefined,
    })
    tags?: TagListRelationFilter;

    @Field(() => DateTimeFilter, {
        nullable: true,
        description: undefined,
    })
    createdAt?: DateTimeFilter | Date | string;

    @Field(() => DateTimeFilter, {
        nullable: true,
        description: undefined,
    })
    updatedAt?: DateTimeFilter | Date | string;

    @Field(() => IntFilter, {
        nullable: true,
        description: undefined,
    })
    favoritesCount?: IntFilter | number;

    @Field(() => UserWhereInput, {
        nullable: true,
        description: undefined,
    })
    author?: UserRelationFilter | UserWhereInput;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    authorId?: StringFilter | string;

    @Field(() => UserListRelationFilter, {
        nullable: true,
        description: undefined,
    })
    favoritedBy?: UserListRelationFilter;

    @Field(() => CommentListRelationFilter, {
        nullable: true,
        description: undefined,
    })
    comments?: CommentListRelationFilter;

    @Field(() => BooleanFilter, {
        nullable: true,
        description: undefined,
    })
    active?: BooleanFilter | boolean | null;
}
