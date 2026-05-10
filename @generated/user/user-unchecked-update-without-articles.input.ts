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
import { UserUncheckedUpdateManyWithoutFollowersNestedInput } from './user-unchecked-update-many-without-followers-nested.input.ts';
import { UserUncheckedUpdateManyWithoutFollowingNestedInput } from './user-unchecked-update-many-without-following-nested.input.ts';
import { ArticleUncheckedUpdateManyWithoutFavoritedByNestedInput } from '../article/article-unchecked-update-many-without-favorited-by-nested.input.ts';
import { CommentUncheckedUpdateManyWithoutAuthorNestedInput } from '../comment/comment-unchecked-update-many-without-author-nested.input.ts';
import { ProfileUncheckedUpdateOneWithoutUserNestedInput } from '../profile/profile-unchecked-update-one-without-user-nested.input.ts';

@InputType()
export class UserUncheckedUpdateWithoutArticlesInput {
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

  @Field(() => UserUncheckedUpdateManyWithoutFollowersNestedInput, {
    nullable: true,
  })
  @Type(() => UserUncheckedUpdateManyWithoutFollowersNestedInput)
  following?: Identity<UserUncheckedUpdateManyWithoutFollowersNestedInput>;

  @Field(() => UserUncheckedUpdateManyWithoutFollowingNestedInput, {
    nullable: true,
  })
  @Type(() => UserUncheckedUpdateManyWithoutFollowingNestedInput)
  followers?: Identity<UserUncheckedUpdateManyWithoutFollowingNestedInput>;

  @Field(() => ArticleUncheckedUpdateManyWithoutFavoritedByNestedInput, {
    nullable: true,
  })
  @Type(() => ArticleUncheckedUpdateManyWithoutFavoritedByNestedInput)
  favoriteArticles?: Identity<ArticleUncheckedUpdateManyWithoutFavoritedByNestedInput>;

  @Field(() => CommentUncheckedUpdateManyWithoutAuthorNestedInput, {
    nullable: true,
  })
  @Type(() => CommentUncheckedUpdateManyWithoutAuthorNestedInput)
  comments?: Identity<CommentUncheckedUpdateManyWithoutAuthorNestedInput>;

  @Field(() => ProfileUncheckedUpdateOneWithoutUserNestedInput, {
    nullable: true,
  })
  @Type(() => ProfileUncheckedUpdateOneWithoutUserNestedInput)
  profile?: Identity<ProfileUncheckedUpdateOneWithoutUserNestedInput>;
}
