import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { StringFilter } from '../prisma/string-filter.input.ts';
import { DateTimeFilter } from '../prisma/date-time-filter.input.ts';

@InputType()
export class CommentScalarWhereInput {
  @Field(() => [CommentScalarWhereInput], { nullable: true })
  AND?: Array<CommentScalarWhereInput>;

  @Field(() => [CommentScalarWhereInput], { nullable: true })
  OR?: Array<CommentScalarWhereInput>;

  @Field(() => [CommentScalarWhereInput], { nullable: true })
  NOT?: Array<CommentScalarWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: Identity<StringFilter>;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: Identity<DateTimeFilter>;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: Identity<DateTimeFilter>;

  @Field(() => StringFilter, { nullable: true })
  body?: Identity<StringFilter>;

  @Field(() => StringFilter, { nullable: true })
  authorId?: Identity<StringFilter>;

  @Field(() => StringFilter, { nullable: true })
  articleId?: Identity<StringFilter>;
}
