import { Field, InputType } from '@nestjs/graphql';

import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class CommentScalarWhereInput {
    @Field(() => [CommentScalarWhereInput], { nullable: true })
    AND?: Array<CommentScalarWhereInput>;

    @Field(() => [CommentScalarWhereInput], { nullable: true })
    OR?: Array<CommentScalarWhereInput>;

    @Field(() => [CommentScalarWhereInput], { nullable: true })
    NOT?: Array<CommentScalarWhereInput>;

    @Field(() => StringFilter, { nullable: true })
    id?: StringFilter;

    @Field(() => DateTimeFilter, { nullable: true })
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, { nullable: true })
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, { nullable: true })
    body?: StringFilter;

    @Field(() => StringFilter, { nullable: true })
    authorId?: StringFilter;

    @Field(() => StringNullableFilter, { nullable: true })
    articleId?: StringNullableFilter;
}
