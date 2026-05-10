import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input.ts';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input.ts';

@InputType()
export class CommentScalarWhereWithAggregatesInput {
  @Field(() => [CommentScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<CommentScalarWhereWithAggregatesInput>;

  @Field(() => [CommentScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<CommentScalarWhereWithAggregatesInput>;

  @Field(() => [CommentScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<CommentScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: Identity<StringWithAggregatesFilter>;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: Identity<DateTimeWithAggregatesFilter>;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: Identity<DateTimeWithAggregatesFilter>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  body?: Identity<StringWithAggregatesFilter>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  authorId?: Identity<StringWithAggregatesFilter>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  articleId?: Identity<StringWithAggregatesFilter>;
}
