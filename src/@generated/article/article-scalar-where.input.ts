import { Field, InputType } from '@nestjs/graphql';

import { CommentFilter } from '../comment/comment-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { NullableBooleanFilter } from '../prisma/nullable-boolean-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { TagFilter } from '../tag/tag-filter.input';
import { UserFilter } from '../user/user-filter.input';

@InputType({})
export class ArticleScalarWhereInput {
    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    id?: StringFilter | null;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    slug?: StringFilter | null;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    title?: StringFilter | null;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    description?: StringFilter | null;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    body?: StringFilter | null;

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
    favoritesCount?: IntFilter | null;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    authorId?: StringFilter | null;

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
    active?: NullableBooleanFilter | null;

    @Field(() => [ArticleScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    AND?: ArticleScalarWhereInput[] | null;

    @Field(() => [ArticleScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    OR?: ArticleScalarWhereInput[] | null;

    @Field(() => [ArticleScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    NOT?: ArticleScalarWhereInput[] | null;
}
