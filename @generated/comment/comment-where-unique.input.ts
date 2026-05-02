import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereInput } from './comment-where.input.ts';
import { DateTimeFilter } from '../prisma/date-time-filter.input.ts';
import { StringFilter } from '../prisma/string-filter.input.ts';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input.ts';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input.ts';
import { Type } from 'class-transformer';
import { ArticleNullableScalarRelationFilter } from '../article/article-nullable-scalar-relation-filter.input.ts';

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
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  body?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  authorId?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  articleId?: StringNullableFilter;

  @Field(() => UserScalarRelationFilter, { nullable: true })
  @Type(() => UserScalarRelationFilter)
  author?: UserScalarRelationFilter;

  @Field(() => ArticleNullableScalarRelationFilter, { nullable: true })
  @Type(() => ArticleNullableScalarRelationFilter)
  article?: ArticleNullableScalarRelationFilter;
}
