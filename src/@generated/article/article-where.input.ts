import { InputType, Field } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { TagFilter } from '../tag/tag-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { UserFilter } from '../user/user-filter.input';
import { CommentFilter } from '../comment/comment-filter.input';
import { NullableBooleanFilter } from '../prisma/nullable-boolean-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType({})
export class ArticleWhereInput {
    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    id?: string | StringFilter | null;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    slug?: string | StringFilter | null;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    title?: string | StringFilter | null;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    description?: string | StringFilter | null;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    body?: string | StringFilter | null;

    @Field(() => TagFilter, {
        nullable: true,
        description: undefined,
    })
    tags?: TagFilter | null;

    @Field(() => DateTimeFilter, {
        nullable: true,
        description: undefined,
    })
    createdAt?: DateTimeFilter | null;

    @Field(() => DateTimeFilter, {
        nullable: true,
        description: undefined,
    })
    updatedAt?: DateTimeFilter | null;

    @Field(() => IntFilter, {
        nullable: true,
        description: undefined,
    })
    favoritesCount?: number | IntFilter | null;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    authorId?: string | StringFilter | null;

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

    @Field(() => NullableBooleanFilter, {
        nullable: true,
        description: undefined,
    })
    active?: boolean | NullableBooleanFilter | null;

    @Field(() => [ArticleWhereInput], {
        nullable: true,
        description: undefined,
    })
    AND?: ArticleWhereInput[] | null;

    @Field(() => [ArticleWhereInput], {
        nullable: true,
        description: undefined,
    })
    OR?: ArticleWhereInput[] | null;

    @Field(() => [ArticleWhereInput], {
        nullable: true,
        description: undefined,
    })
    NOT?: ArticleWhereInput[] | null;

    @Field(() => UserRelationFilter, {
        nullable: true,
        description: undefined,
    })
    author?: UserRelationFilter | null;
}
