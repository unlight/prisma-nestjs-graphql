import { Field, InputType } from '@nestjs/graphql';

import { ArticleRelationFilter } from '../article/article-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType({})
export class CommentWhereInput {
    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    id?: string | StringFilter;

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

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    body?: string | StringFilter;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    authorId?: string | StringFilter;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    articleId?: string | StringFilter | null;

    @Field(() => [CommentWhereInput], {
        nullable: true,
        description: undefined,
    })
    AND?: CommentWhereInput | Array<CommentWhereInput>;

    @Field(() => [CommentWhereInput], {
        nullable: true,
        description: undefined,
    })
    OR?: Array<CommentWhereInput>;

    @Field(() => [CommentWhereInput], {
        nullable: true,
        description: undefined,
    })
    NOT?: CommentWhereInput | Array<CommentWhereInput>;

    @Field(() => UserRelationFilter, {
        nullable: true,
        description: undefined,
    })
    author?: UserRelationFilter;

    @Field(() => ArticleRelationFilter, {
        nullable: true,
        description: undefined,
    })
    article?: ArticleRelationFilter | null;
}
