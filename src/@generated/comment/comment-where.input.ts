import { Field, InputType } from '@nestjs/graphql';

import { ArticleWhereInput } from '../article/article-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { NullableStringFilter } from '../prisma/nullable-string-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UserWhereInput } from '../user/user-where.input';

@InputType({})
export class CommentWhereInput {
    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    id?: string | StringFilter | null;

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
    body?: string | StringFilter | null;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    authorId?: string | StringFilter | null;

    @Field(() => NullableStringFilter, {
        nullable: true,
        description: undefined,
    })
    articleId?: string | NullableStringFilter | null;

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

    @Field(() => UserWhereInput, {
        nullable: true,
        description: undefined,
    })
    author?: UserWhereInput | null;

    @Field(() => ArticleWhereInput, {
        nullable: true,
        description: undefined,
    })
    article?: ArticleWhereInput | null;
}
