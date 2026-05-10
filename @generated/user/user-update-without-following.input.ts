import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client-runtime-utils';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { Role } from '../prisma/role.enum.ts';
import type { Identity } from 'identity-type';
import { UserUpdateManyWithoutFollowingNestedInput } from './user-update-many-without-following-nested.input.ts';
import { ArticleUpdateManyWithoutFavoritedByNestedInput } from '../article/article-update-many-without-favorited-by-nested.input.ts';
import { ArticleUpdateManyWithoutAuthorNestedInput } from '../article/article-update-many-without-author-nested.input.ts';
import { CommentUpdateManyWithoutAuthorNestedInput } from '../comment/comment-update-many-without-author-nested.input.ts';
import { ProfileUpdateOneWithoutUserNestedInput } from '../profile/profile-update-one-without-user-nested.input.ts';

@InputType()
export class UserUpdateWithoutFollowingInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Scalars.GraphQLEmailAddress, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  @Validator.MinLength(3)
  @Validator.MaxLength(50)
  name?: string;

  @Field(() => String, { nullable: true })
  password?: string;

  @Field(() => String, { nullable: true })
  bio?: string;

  @Field(() => String, { nullable: true })
  image?: string;

  @Field(() => Int, { nullable: true })
  countComments?: number;

  @Field(() => Float, { nullable: true })
  rating?: number;

  @Field(() => GraphQLDecimal, { nullable: true })
  @Type(() => Object)
  @Transform(transformToDecimal)
  money?: Decimal;

  @Field(() => Role, { nullable: true })
  role?: `${Role}`;

  @Field(() => UserUpdateManyWithoutFollowingNestedInput, { nullable: true })
  @Type(() => UserUpdateManyWithoutFollowingNestedInput)
  followers?: Identity<UserUpdateManyWithoutFollowingNestedInput>;

  @Field(() => ArticleUpdateManyWithoutFavoritedByNestedInput, {
    nullable: true,
  })
  @Type(() => ArticleUpdateManyWithoutFavoritedByNestedInput)
  favoriteArticles?: Identity<ArticleUpdateManyWithoutFavoritedByNestedInput>;

  @Field(() => ArticleUpdateManyWithoutAuthorNestedInput, { nullable: true })
  @Type(() => ArticleUpdateManyWithoutAuthorNestedInput)
  articles?: Identity<ArticleUpdateManyWithoutAuthorNestedInput>;

  @Field(() => CommentUpdateManyWithoutAuthorNestedInput, { nullable: true })
  @Type(() => CommentUpdateManyWithoutAuthorNestedInput)
  comments?: Identity<CommentUpdateManyWithoutAuthorNestedInput>;

  @Field(() => ProfileUpdateOneWithoutUserNestedInput, { nullable: true })
  @Type(() => ProfileUpdateOneWithoutUserNestedInput)
  profile?: Identity<ProfileUpdateOneWithoutUserNestedInput>;
}
