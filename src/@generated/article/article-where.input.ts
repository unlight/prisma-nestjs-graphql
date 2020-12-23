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
    })
    AND?: ArticleWhereInput | Array<ArticleWhereInput>;

    @Field(() => [ArticleWhereInput], {
        nullable: true,
    })
    OR?: ArticleWhereInput | Array<ArticleWhereInput>;

    @Field(() => [ArticleWhereInput], {
        nullable: true,
    })
    NOT?: ArticleWhereInput | Array<ArticleWhereInput>;

    @Field(() => StringFilter, {
        nullable: true,
    })
    id?: StringFilter | string;

    @Field(() => StringFilter, {
        nullable: true,
    })
    slug?: StringFilter | string;

    @Field(() => StringFilter, {
        nullable: true,
    })
    title?: StringFilter | string;

    @Field(() => StringFilter, {
        nullable: true,
    })
    description?: StringFilter | string;

    @Field(() => StringFilter, {
        nullable: true,
    })
    body?: StringFilter | string;

    @Field(() => TagListRelationFilter, {
        nullable: true,
    })
    tags?: TagListRelationFilter;

    @Field(() => DateTimeFilter, {
        nullable: true,
    })
    createdAt?: DateTimeFilter | Date | string;

    @Field(() => DateTimeFilter, {
        nullable: true,
    })
    updatedAt?: DateTimeFilter | Date | string;

    @Field(() => IntFilter, {
        nullable: true,
    })
    favoritesCount?: IntFilter | number;

    @Field(() => UserWhereInput, {
        nullable: true,
    })
    author?: UserRelationFilter | UserWhereInput;

    @Field(() => StringFilter, {
        nullable: true,
    })
    authorId?: StringFilter | string;

    @Field(() => UserListRelationFilter, {
        nullable: true,
    })
    favoritedBy?: UserListRelationFilter;

    @Field(() => CommentListRelationFilter, {
        nullable: true,
    })
    comments?: CommentListRelationFilter;

    @Field(() => BooleanFilter, {
        nullable: true,
    })
    active?: BooleanFilter | boolean;
}
