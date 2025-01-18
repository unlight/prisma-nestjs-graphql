import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { Role } from '../prisma/role.enum';
import { Article } from '../article/article.model';
import { Comment } from '../comment/comment.model';
import { Profile } from '../profile/profile.model';
import { UserCount } from './user-count.output';

/**
 * User really
 */
@ObjectType({ description: 'User really' })
export class User {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  email!: string;

  /**
   * User's name
   */
  @Field(() => String, { description: "User's name", nullable: false })
  name!: string;

  @HideField()
  password!: string;

  @Field(() => String, { nullable: true })
  bio!: string | null;

  @Field(() => String, { nullable: true })
  image!: string | null;

  @Field(() => Int, { nullable: true })
  countComments!: number | null;

  @Field(() => Float, { nullable: true })
  rating!: number | null;

  @Field(() => GraphQLDecimal, { nullable: true })
  money!: Decimal | null;

  @Field(() => Role, { nullable: true })
  role!: keyof typeof Role | null;

  @Field(() => [User], { nullable: true })
  following?: Array<User>;

  @Field(() => [User], { nullable: true })
  followers?: Array<User>;

  @Field(() => [Article], { nullable: true })
  favoriteArticles?: Array<Article>;

  @Field(() => [Article], { nullable: true })
  articles?: Array<Article>;

  @Field(() => [Comment], { nullable: true })
  comments?: Array<Comment>;

  @Field(() => Profile, { nullable: true })
  profile?: Profile | null;

  @Field(() => UserCount, { nullable: false })
  _count?: UserCount;
}
