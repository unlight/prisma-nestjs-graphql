import { Field, InputType } from '@nestjs/graphql';

import { ArticleRelationFilter } from '../article/article-relation-filter.input';
import { ArticleWhereInput } from '../article/article-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
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
    OR?: CommentWhereInput | Array<CommentWhereInput>;

    @Field(() => [CommentWhereInput], {
        nullable: true,
        description: undefined,
    })
    NOT?: CommentWhereInput | Array<CommentWhereInput>;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    id?: StringFilter | string;

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

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    body?: StringFilter | string;

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

    @Field(() => ArticleWhereInput, {
        nullable: true,
        description: undefined,
    })
    article?: ArticleRelationFilter | ArticleWhereInput | null;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    articleId?: StringFilter | string | null;
}
