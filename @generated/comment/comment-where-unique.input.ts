import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereInput } from './comment-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { Type } from 'class-transformer';
import { ArticleNullableRelationFilter } from '../prisma/article-nullable-relation-filter.input';

@InputType()
export class CommentWhereUniqueInput {
  @Field(() => String, { nullable: false })
  id!: string;

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

  @Field(() => UserRelationFilter, { nullable: true })
  @Type(() => UserRelationFilter)
  author?: UserRelationFilter;

  @Field(() => ArticleNullableRelationFilter, { nullable: true })
  @Type(() => ArticleNullableRelationFilter)
  article?: ArticleNullableRelationFilter;
}
