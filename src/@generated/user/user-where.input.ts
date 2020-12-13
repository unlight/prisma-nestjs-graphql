import { Field, InputType } from '@nestjs/graphql';

import { ArticleListRelationFilter } from '../article/article-list-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { Role } from '../prisma/role.enum';
import { StringFilter } from '../prisma/string-filter.input';
import { UserListRelationFilter } from './user-list-relation-filter.input';

@InputType()
export class UserWhereInput {
  @Field(() => [UserWhereInput], {
    nullable: true,
  })
  AND?: UserWhereInput | Array<UserWhereInput>;

  @Field(() => [UserWhereInput], {
    nullable: true,
  })
  OR?: UserWhereInput | Array<UserWhereInput>;

  @Field(() => [UserWhereInput], {
    nullable: true,
  })
  NOT?: UserWhereInput | Array<UserWhereInput>;

  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | string;

  @Field(() => StringFilter, {
    nullable: true,
  })
  email?: StringFilter | string;

  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter | string;

  @Field(() => StringFilter, {
    nullable: true,
  })
  password?: StringFilter | string;

  @Field(() => StringFilter, {
    nullable: true,
  })
  bio?: StringFilter | string;

  @Field(() => StringFilter, {
    nullable: true,
  })
  image?: StringFilter | string;

  @Field(() => UserListRelationFilter, {
    nullable: true,
  })
  following?: UserListRelationFilter;

  @Field(() => UserListRelationFilter, {
    nullable: true,
  })
  followers?: UserListRelationFilter;

  @Field(() => ArticleListRelationFilter, {
    nullable: true,
  })
  favoriteArticles?: ArticleListRelationFilter;

  @Field(() => ArticleListRelationFilter, {
    nullable: true,
  })
  articles?: ArticleListRelationFilter;

  @Field(() => CommentListRelationFilter, {
    nullable: true,
  })
  comments?: CommentListRelationFilter;

  @Field(() => IntFilter, {
    nullable: true,
  })
  countComments?: IntFilter | number;

  @Field(() => FloatFilter, {
    nullable: true,
  })
  rating?: FloatFilter | number;

  @Field(() => EnumRoleFilter, {
    nullable: true,
  })
  role?: EnumRoleFilter | Role;
}
