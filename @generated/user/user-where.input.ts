import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { StringFilter } from '../prisma/string-filter.input.ts';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input.ts';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input.ts';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input.ts';
import { DecimalNullableFilter } from '../prisma/decimal-nullable-filter.input.ts';
import { EnumRoleNullableFilter } from '../prisma/enum-role-nullable-filter.input.ts';
import { UserListRelationFilter } from './user-list-relation-filter.input.ts';
import { ArticleListRelationFilter } from '../article/article-list-relation-filter.input.ts';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input.ts';
import { ProfileWhereInput } from '../profile/profile-where.input.ts';

@InputType()
export class UserWhereInput {
  @Field(() => [UserWhereInput], { nullable: true })
  @Type(() => UserWhereInput)
  AND?: Array<UserWhereInput>;

  @Field(() => [UserWhereInput], { nullable: true })
  @Type(() => UserWhereInput)
  OR?: Array<UserWhereInput>;

  @Field(() => [UserWhereInput], { nullable: true })
  @Type(() => UserWhereInput)
  NOT?: Array<UserWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: Identity<StringFilter>;

  @Field(() => StringFilter, { nullable: true })
  email?: Identity<StringFilter>;

  @Field(() => StringFilter, { nullable: true })
  name?: Identity<StringFilter>;

  @Field(() => StringFilter, { nullable: true })
  password?: Identity<StringFilter>;

  @Field(() => StringNullableFilter, { nullable: true })
  bio?: Identity<StringNullableFilter>;

  @Field(() => StringNullableFilter, { nullable: true })
  image?: Identity<StringNullableFilter>;

  @Field(() => IntNullableFilter, { nullable: true })
  countComments?: Identity<IntNullableFilter>;

  @Field(() => FloatNullableFilter, { nullable: true })
  rating?: Identity<FloatNullableFilter>;

  @Field(() => DecimalNullableFilter, { nullable: true })
  @Type(() => DecimalNullableFilter)
  money?: Identity<DecimalNullableFilter>;

  @Field(() => EnumRoleNullableFilter, { nullable: true })
  role?: Identity<EnumRoleNullableFilter>;

  @Field(() => UserListRelationFilter, { nullable: true })
  @Type(() => UserListRelationFilter)
  following?: Identity<UserListRelationFilter>;

  @Field(() => UserListRelationFilter, { nullable: true })
  @Type(() => UserListRelationFilter)
  followers?: Identity<UserListRelationFilter>;

  @Field(() => ArticleListRelationFilter, { nullable: true })
  @Type(() => ArticleListRelationFilter)
  favoriteArticles?: Identity<ArticleListRelationFilter>;

  @Field(() => ArticleListRelationFilter, { nullable: true })
  @Type(() => ArticleListRelationFilter)
  articles?: Identity<ArticleListRelationFilter>;

  @Field(() => CommentListRelationFilter, { nullable: true })
  @Type(() => CommentListRelationFilter)
  comments?: Identity<CommentListRelationFilter>;

  @Field(() => ProfileWhereInput, { nullable: true })
  @Type(() => ProfileWhereInput)
  profile?: Identity<ProfileWhereInput>;
}
