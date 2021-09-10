import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserWhereInput } from '../user/user-where.input';
import { ArticleWhereInput } from '../article/article-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

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

    @Field(() => UserWhereInput, { nullable: true })
    author?: UserWhereInput;

    @Field(() => StringFilter, { nullable: true })
    authorId?: StringFilter;

    @Field(() => ArticleWhereInput, { nullable: true })
    article?: ArticleWhereInput;

    @Field(() => StringNullableFilter, { nullable: true })
    articleId?: StringNullableFilter;
}
