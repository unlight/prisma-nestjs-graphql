import { Field, InputType } from '@nestjs/graphql';

import { BooleanWithAggregatesFilter } from '../prisma/boolean-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ArticleScalarWhereWithAggregatesInput {
    @Field(() => [ArticleScalarWhereWithAggregatesInput], {
        nullable: true,
    })
    AND?:
        | ArticleScalarWhereWithAggregatesInput
        | Array<ArticleScalarWhereWithAggregatesInput>;

    @Field(() => [ArticleScalarWhereWithAggregatesInput], {
        nullable: true,
    })
    OR?: Array<ArticleScalarWhereWithAggregatesInput>;

    @Field(() => [ArticleScalarWhereWithAggregatesInput], {
        nullable: true,
    })
    NOT?:
        | ArticleScalarWhereWithAggregatesInput
        | Array<ArticleScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {
        nullable: true,
    })
    id?: StringWithAggregatesFilter | string;

    @Field(() => StringWithAggregatesFilter, {
        nullable: true,
    })
    slug?: StringWithAggregatesFilter | string;

    @Field(() => StringWithAggregatesFilter, {
        nullable: true,
    })
    title?: StringWithAggregatesFilter | string;

    @Field(() => StringWithAggregatesFilter, {
        nullable: true,
    })
    description?: StringWithAggregatesFilter | string;

    @Field(() => StringWithAggregatesFilter, {
        nullable: true,
    })
    body?: StringWithAggregatesFilter | string;

    @Field(() => DateTimeWithAggregatesFilter, {
        nullable: true,
    })
    createdAt?: DateTimeWithAggregatesFilter | Date | string;

    @Field(() => DateTimeWithAggregatesFilter, {
        nullable: true,
    })
    updatedAt?: DateTimeWithAggregatesFilter | Date | string;

    @Field(() => IntWithAggregatesFilter, {
        nullable: true,
    })
    favoritesCount?: IntWithAggregatesFilter | number;

    @Field(() => StringWithAggregatesFilter, {
        nullable: true,
    })
    authorId?: StringWithAggregatesFilter | string;

    @Field(() => BooleanWithAggregatesFilter, {
        nullable: true,
    })
    active?: BooleanWithAggregatesFilter | boolean;
}
