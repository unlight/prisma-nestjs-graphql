import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { UserEmailNameCompoundUniqueInput } from './user-email-name-compound-unique.input';
import { Type } from 'class-transformer';
import { UserWhereInput } from './user-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { DecimalNullableFilter } from '../prisma/decimal-nullable-filter.input';
import { EnumRoleNullableFilter } from '../prisma/enum-role-nullable-filter.input';
import { UserListRelationFilter } from './user-list-relation-filter.input';
import { ArticleListRelationFilter } from '../article/article-list-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
import { ProfileNullableRelationFilter } from '../profile/profile-nullable-relation-filter.input';

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
  email_name?: UserEmailNameCompoundUniqueInput;

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
  password?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  bio?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  image?: StringNullableFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  countComments?: IntNullableFilter;

  @Field(() => FloatNullableFilter, { nullable: true })
  rating?: FloatNullableFilter;

  @Field(() => DecimalNullableFilter, { nullable: true })
  @Type(() => DecimalNullableFilter)
  money?: DecimalNullableFilter;

  @Field(() => EnumRoleNullableFilter, { nullable: true })
  role?: EnumRoleNullableFilter;

  @Field(() => UserListRelationFilter, { nullable: true })
  @Type(() => UserListRelationFilter)
  following?: UserListRelationFilter;

  @Field(() => UserListRelationFilter, { nullable: true })
  @Type(() => UserListRelationFilter)
  followers?: UserListRelationFilter;

  @Field(() => ArticleListRelationFilter, { nullable: true })
  @Type(() => ArticleListRelationFilter)
  favoriteArticles?: ArticleListRelationFilter;

  @Field(() => ArticleListRelationFilter, { nullable: true })
  @Type(() => ArticleListRelationFilter)
  articles?: ArticleListRelationFilter;

  @Field(() => CommentListRelationFilter, { nullable: true })
  @Type(() => CommentListRelationFilter)
  comments?: CommentListRelationFilter;

  @Field(() => ProfileNullableRelationFilter, { nullable: true })
  @Type(() => ProfileNullableRelationFilter)
  profile?: ProfileNullableRelationFilter;
}
