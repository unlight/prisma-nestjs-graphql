import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import type { Identity } from 'identity-type';
import { UserEmailNameCompoundUniqueInput } from './user-email-name-compound-unique.input.ts';
import { Type } from 'class-transformer';
import { UserWhereInput } from './user-where.input.ts';
import { StringFilter } from '../prisma/string-filter.input.ts';
import { IntFilter } from '../prisma/int-filter.input.ts';
import { FloatFilter } from '../prisma/float-filter.input.ts';
import { DecimalFilter } from '../prisma/decimal-filter.input.ts';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input.ts';
import { UserListRelationFilter } from './user-list-relation-filter.input.ts';
import { ArticleListRelationFilter } from '../article/article-list-relation-filter.input.ts';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input.ts';
import { ProfileScalarRelationFilter } from '../profile/profile-scalar-relation-filter.input.ts';

@InputType()
export class UserWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Scalars.GraphQLEmailAddress, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  @Validator.MinLength(3)
  @Validator.MaxLength(50)
  name?: string;

  @Field(() => UserEmailNameCompoundUniqueInput, { nullable: true })
  @Type(() => UserEmailNameCompoundUniqueInput)
  email_name?: Identity<UserEmailNameCompoundUniqueInput>;

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
  password?: Identity<StringFilter>;

  @Field(() => StringFilter, { nullable: true })
  bio?: Identity<StringFilter>;

  @Field(() => StringFilter, { nullable: true })
  image?: Identity<StringFilter>;

  @Field(() => IntFilter, { nullable: true })
  countComments?: Identity<IntFilter>;

  @Field(() => FloatFilter, { nullable: true })
  rating?: Identity<FloatFilter>;

  @Field(() => DecimalFilter, { nullable: true })
  @Type(() => DecimalFilter)
  money?: Identity<DecimalFilter>;

  @Field(() => EnumRoleFilter, { nullable: true })
  role?: Identity<EnumRoleFilter>;

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

  @Field(() => ProfileScalarRelationFilter, { nullable: true })
  @Type(() => ProfileScalarRelationFilter)
  profile?: Identity<ProfileScalarRelationFilter>;
}
