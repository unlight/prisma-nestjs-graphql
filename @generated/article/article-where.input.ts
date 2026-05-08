import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { StringFilter } from '../prisma/string-filter.input.ts';
import { DateTimeFilter } from '../prisma/date-time-filter.input.ts';
import { IntFilter } from '../prisma/int-filter.input.ts';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input.ts';
import { TagListRelationFilter } from '../tag/tag-list-relation-filter.input.ts';
import { UserWhereInput } from '../user/user-where.input.ts';
import { Type } from 'class-transformer';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input.ts';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input.ts';

@InputType()
export class ArticleWhereInput {
  @Field(() => [ArticleWhereInput], { nullable: true })
  AND?: Array<ArticleWhereInput>;

  @Field(() => [ArticleWhereInput], { nullable: true })
  OR?: Array<ArticleWhereInput>;

  @Field(() => [ArticleWhereInput], { nullable: true })
  NOT?: Array<ArticleWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: Identity<StringFilter>;

  @Field(() => StringFilter, { nullable: true })
  slug?: Identity<StringFilter>;

  @Field(() => StringFilter, { nullable: true })
  title?: Identity<StringFilter>;

  @Field(() => StringFilter, { nullable: true })
  description?: Identity<StringFilter>;

  @Field(() => StringFilter, { nullable: true })
  body?: Identity<StringFilter>;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: Identity<DateTimeFilter>;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: Identity<DateTimeFilter>;

  @Field(() => IntFilter, { nullable: true })
  favoritesCount?: Identity<IntFilter>;

  @Field(() => StringFilter, { nullable: true })
  authorId?: Identity<StringFilter>;

  @Field(() => BoolNullableFilter, { nullable: true })
  active?: Identity<BoolNullableFilter>;

  @Field(() => TagListRelationFilter, { nullable: true })
  tags?: Identity<TagListRelationFilter>;

  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  author?: Identity<UserWhereInput>;

  @Field(() => UserListRelationFilter, { nullable: true })
  @Type(() => UserListRelationFilter)
  favoritedBy?: Identity<UserListRelationFilter>;

  @Field(() => CommentListRelationFilter, { nullable: true })
  @Type(() => CommentListRelationFilter)
  comments?: Identity<CommentListRelationFilter>;
}
