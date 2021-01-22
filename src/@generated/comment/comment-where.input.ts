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
    })
    AND?: CommentWhereInput | Array<CommentWhereInput>;

    @Field(() => [CommentWhereInput], {
        nullable: true,
    })
    OR?: Array<CommentWhereInput>;

    @Field(() => [CommentWhereInput], {
        nullable: true,
    })
    NOT?: CommentWhereInput | Array<CommentWhereInput>;

    @Field(() => StringFilter, {
        nullable: true,
    })
    id?: StringFilter | string;

    @Field(() => DateTimeFilter, {
        nullable: true,
    })
    createdAt?: DateTimeFilter | Date | string;

    @Field(() => DateTimeFilter, {
        nullable: true,
    })
    updatedAt?: DateTimeFilter | Date | string;

    @Field(() => StringFilter, {
        nullable: true,
    })
    body?: StringFilter | string;

    @Field(() => UserWhereInput, {
        nullable: true,
    })
    author?: UserRelationFilter | UserWhereInput;

    @Field(() => StringFilter, {
        nullable: true,
    })
    authorId?: StringFilter | string;

    @Field(() => ArticleWhereInput, {
        nullable: true,
    })
    article?: ArticleRelationFilter | ArticleWhereInput;

    @Field(() => StringFilter, {
        nullable: true,
    })
    articleId?: StringFilter | string;
}
