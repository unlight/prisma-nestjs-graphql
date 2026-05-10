import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereInput } from './comment-where.input.ts';
import type { Identity } from 'identity-type';
import { DateTimeFilter } from '../prisma/date-time-filter.input.ts';
import { StringFilter } from '../prisma/string-filter.input.ts';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input.ts';
import { Type } from 'class-transformer';
import { ArticleScalarRelationFilter } from '../article/article-scalar-relation-filter.input.ts';

@InputType()
export class CommentWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => [CommentWhereInput], { nullable: true })
  AND?: Array<CommentWhereInput>;

  @Field(() => [CommentWhereInput], { nullable: true })
  OR?: Array<CommentWhereInput>;

  @Field(() => [CommentWhereInput], { nullable: true })
  NOT?: Array<CommentWhereInput>;

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

  @Field(() => UserScalarRelationFilter, { nullable: true })
  @Type(() => UserScalarRelationFilter)
  author?: Identity<UserScalarRelationFilter>;

  @Field(() => ArticleScalarRelationFilter, { nullable: true })
  @Type(() => ArticleScalarRelationFilter)
  article?: Identity<ArticleScalarRelationFilter>;
}
