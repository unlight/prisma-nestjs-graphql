import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleWhereInput } from './article-where.input.ts';
import { StringFilter } from '../prisma/string-filter.input.ts';
import { DateTimeFilter } from '../prisma/date-time-filter.input.ts';
import { IntFilter } from '../prisma/int-filter.input.ts';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input.ts';
import { TagListRelationFilter } from '../tag/tag-list-relation-filter.input.ts';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input.ts';
import { Type } from 'class-transformer';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input.ts';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input.ts';

@InputType()
export class ArticleWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  slug?: string;

  @Field(() => [ArticleWhereInput], { nullable: true })
  AND?: Array<ArticleWhereInput>;

  @Field(() => [ArticleWhereInput], { nullable: true })
  OR?: Array<ArticleWhereInput>;

  @Field(() => [ArticleWhereInput], { nullable: true })
  NOT?: Array<ArticleWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  title?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  description?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  body?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => IntFilter, { nullable: true })
  favoritesCount?: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  authorId?: StringFilter;

  @Field(() => BoolNullableFilter, { nullable: true })
  active?: BoolNullableFilter;

  @Field(() => TagListRelationFilter, { nullable: true })
  tags?: TagListRelationFilter;

  @Field(() => UserScalarRelationFilter, { nullable: true })
  @Type(() => UserScalarRelationFilter)
  author?: UserScalarRelationFilter;

  @Field(() => UserListRelationFilter, { nullable: true })
  @Type(() => UserListRelationFilter)
  favoritedBy?: UserListRelationFilter;

  @Field(() => CommentListRelationFilter, { nullable: true })
  @Type(() => CommentListRelationFilter)
  comments?: CommentListRelationFilter;
}
