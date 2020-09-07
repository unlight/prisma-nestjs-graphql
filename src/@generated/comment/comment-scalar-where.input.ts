import { Field, InputType } from '@nestjs/graphql';

import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class CommentScalarWhereInput {
    @Field(() => [CommentScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    AND?: CommentScalarWhereInput | Array<CommentScalarWhereInput>;

    @Field(() => [CommentScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    OR?: Array<CommentScalarWhereInput>;

    @Field(() => [CommentScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    NOT?: CommentScalarWhereInput | Array<CommentScalarWhereInput>;

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
}
