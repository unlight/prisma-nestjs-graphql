import { Field, InputType } from '@nestjs/graphql';

import { ArticleRelationFilter } from '../article/article-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { NullableStringFilter } from '../prisma/nullable-string-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType({})
export class CommentWhereInput {
    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    id?: StringFilter | null;

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

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    body?: StringFilter | null;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    authorId?: StringFilter | null;

    @Field(() => NullableStringFilter, {
        nullable: true,
        description: undefined,
    })
    articleId?: NullableStringFilter | null;

    @Field(() => [CommentWhereInput], {
        nullable: true,
        description: undefined,
    })
    AND?: CommentWhereInput[] | null;

    @Field(() => [CommentWhereInput], {
        nullable: true,
        description: undefined,
    })
    OR?: CommentWhereInput[] | null;

    @Field(() => [CommentWhereInput], {
        nullable: true,
        description: undefined,
    })
    NOT?: CommentWhereInput[] | null;

    @Field(() => UserRelationFilter, {
        nullable: true,
        description: undefined,
    })
    author?: UserRelationFilter | null;

    @Field(() => ArticleRelationFilter, {
        nullable: true,
        description: undefined,
    })
    article?: ArticleRelationFilter | null;
}
