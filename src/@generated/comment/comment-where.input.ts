import { Field, InputType } from '@nestjs/graphql';

import { ArticleWhereInput } from '../article/article-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UserWhereInput } from '../user/user-where.input';

@InputType()
export class CommentWhereInput {
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

    @Field(() => ArticleWhereInput, {
        nullable: true,
        description: undefined,
    })
    article?: ArticleWhereInput | null;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    articleId?: string | StringFilter | null;
}
