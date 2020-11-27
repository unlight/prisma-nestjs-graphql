import { Field, InputType } from '@nestjs/graphql';

import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class CommentScalarWhereInput {
    @Field(() => [CommentScalarWhereInput], {
        nullable: true,
    })
    AND?: CommentScalarWhereInput | Array<CommentScalarWhereInput>;

    @Field(() => [CommentScalarWhereInput], {
        nullable: true,
    })
    OR?: CommentScalarWhereInput | Array<CommentScalarWhereInput>;

    @Field(() => [CommentScalarWhereInput], {
        nullable: true,
    })
    NOT?: CommentScalarWhereInput | Array<CommentScalarWhereInput>;

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

    @Field(() => StringFilter, {
        nullable: true,
    })
    authorId?: StringFilter | string;

    @Field(() => StringFilter, {
        nullable: true,
    })
    articleId?: StringFilter | string | null;
}
