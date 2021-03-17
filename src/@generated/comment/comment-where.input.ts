import { Field, InputType } from '@nestjs/graphql';

import { ArticleRelationFilter } from '../article/article-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class CommentWhereInput {
    @Field(() => [CommentWhereInput], { nullable: true })
    AND?: Array<CommentWhereInput>;

    @Field(() => [CommentWhereInput], { nullable: true })
    OR?: Array<CommentWhereInput>;

    @Field(() => [CommentWhereInput], { nullable: true })
    NOT?: Array<CommentWhereInput>;

    @Field(() => StringFilter, { nullable: true })
    id?: StringFilter;

    @Field(() => DateTimeFilter, { nullable: true })
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, { nullable: true })
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, { nullable: true })
    body?: StringFilter;

    @Field(() => UserRelationFilter, { nullable: true })
    author?: UserRelationFilter;

    @Field(() => StringFilter, { nullable: true })
    authorId?: StringFilter;

    @Field(() => ArticleRelationFilter, { nullable: true })
    article?: ArticleRelationFilter;

    @Field(() => StringNullableFilter, { nullable: true })
    articleId?: StringNullableFilter;
}
