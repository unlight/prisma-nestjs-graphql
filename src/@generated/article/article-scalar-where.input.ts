import { Field, InputType } from '@nestjs/graphql';

import { BooleanFilter } from '../prisma/boolean-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class ArticleScalarWhereInput {
    @Field(() => [ArticleScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    AND?: ArticleScalarWhereInput | Array<ArticleScalarWhereInput>;

    @Field(() => [ArticleScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    OR?: Array<ArticleScalarWhereInput>;

    @Field(() => [ArticleScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    NOT?: ArticleScalarWhereInput | Array<ArticleScalarWhereInput>;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    id?: string | StringFilter;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    slug?: string | StringFilter;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    title?: string | StringFilter;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    description?: string | StringFilter;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    body?: string | StringFilter;

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

    @Field(() => IntFilter, {
        nullable: true,
        description: undefined,
    })
    favoritesCount?: number | IntFilter;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    authorId?: string | StringFilter;

    @Field(() => BooleanFilter, {
        nullable: true,
        description: undefined,
    })
    active?: boolean | BooleanFilter | null;
}
