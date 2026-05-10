import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input.ts';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input.ts';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input.ts';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input.ts';

@InputType()
export class ArticleScalarWhereWithAggregatesInput {
  @Field(() => [ArticleScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<ArticleScalarWhereWithAggregatesInput>;

  @Field(() => [ArticleScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<ArticleScalarWhereWithAggregatesInput>;

  @Field(() => [ArticleScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<ArticleScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: Identity<StringWithAggregatesFilter>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  slug?: Identity<StringWithAggregatesFilter>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  title?: Identity<StringWithAggregatesFilter>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  description?: Identity<StringWithAggregatesFilter>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  body?: Identity<StringWithAggregatesFilter>;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: Identity<DateTimeWithAggregatesFilter>;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: Identity<DateTimeWithAggregatesFilter>;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  favoritesCount?: Identity<IntWithAggregatesFilter>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  authorId?: Identity<StringWithAggregatesFilter>;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  active?: Identity<BoolWithAggregatesFilter>;
}
