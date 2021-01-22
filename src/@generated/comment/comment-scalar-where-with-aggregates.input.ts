import { Field, InputType } from '@nestjs/graphql';

import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class CommentScalarWhereWithAggregatesInput {
    @Field(() => [CommentScalarWhereWithAggregatesInput], {
        nullable: true,
    })
    AND?:
        | CommentScalarWhereWithAggregatesInput
        | Array<CommentScalarWhereWithAggregatesInput>;

    @Field(() => [CommentScalarWhereWithAggregatesInput], {
        nullable: true,
    })
    OR?: Array<CommentScalarWhereWithAggregatesInput>;

    @Field(() => [CommentScalarWhereWithAggregatesInput], {
        nullable: true,
    })
    NOT?:
        | CommentScalarWhereWithAggregatesInput
        | Array<CommentScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {
        nullable: true,
    })
    id?: StringWithAggregatesFilter | string;

    @Field(() => DateTimeWithAggregatesFilter, {
        nullable: true,
    })
    createdAt?: DateTimeWithAggregatesFilter | Date | string;

    @Field(() => DateTimeWithAggregatesFilter, {
        nullable: true,
    })
    updatedAt?: DateTimeWithAggregatesFilter | Date | string;

    @Field(() => StringWithAggregatesFilter, {
        nullable: true,
    })
    body?: StringWithAggregatesFilter | string;

    @Field(() => StringWithAggregatesFilter, {
        nullable: true,
    })
    authorId?: StringWithAggregatesFilter | string;

    @Field(() => StringWithAggregatesFilter, {
        nullable: true,
    })
    articleId?: StringWithAggregatesFilter | string;
}
