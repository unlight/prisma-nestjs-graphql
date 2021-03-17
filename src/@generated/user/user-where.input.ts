import { Field, InputType } from '@nestjs/graphql';

import { ArticleListRelationFilter } from '../article/article-list-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
import { EnumRoleNullableFilter } from '../prisma/enum-role-nullable-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UserListRelationFilter } from './user-list-relation-filter.input';

@InputType()
export class UserWhereInput {
    @Field(() => [UserWhereInput], { nullable: true })
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], { nullable: true })
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], { nullable: true })
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, { nullable: true })
    id?: StringFilter;

    @Field(() => StringFilter, { nullable: true })
    email?: StringFilter;

    @Field(() => StringFilter, { nullable: true })
    name?: StringFilter;

    @Field(() => StringFilter, { nullable: true })
    password?: StringFilter;

    @Field(() => StringNullableFilter, { nullable: true })
    bio?: StringNullableFilter;

    @Field(() => StringNullableFilter, { nullable: true })
    image?: StringNullableFilter;

    @Field(() => UserListRelationFilter, { nullable: true })
    following?: UserListRelationFilter;

    @Field(() => UserListRelationFilter, { nullable: true })
    followers?: UserListRelationFilter;

    @Field(() => ArticleListRelationFilter, { nullable: true })
    favoriteArticles?: ArticleListRelationFilter;

    @Field(() => ArticleListRelationFilter, { nullable: true })
    articles?: ArticleListRelationFilter;

    @Field(() => CommentListRelationFilter, { nullable: true })
    comments?: CommentListRelationFilter;

    @Field(() => IntNullableFilter, { nullable: true })
    countComments?: IntNullableFilter;

    @Field(() => FloatNullableFilter, { nullable: true })
    rating?: FloatNullableFilter;

    @Field(() => EnumRoleNullableFilter, { nullable: true })
    role?: EnumRoleNullableFilter;
}
