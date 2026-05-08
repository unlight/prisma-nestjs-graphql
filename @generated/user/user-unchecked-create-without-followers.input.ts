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
import { UserUncheckedCreateNestedManyWithoutFollowersInput } from './user-unchecked-create-nested-many-without-followers.input.ts';
import { ArticleUncheckedCreateNestedManyWithoutFavoritedByInput } from '../article/article-unchecked-create-nested-many-without-favorited-by.input.ts';
import { ArticleUncheckedCreateNestedManyWithoutAuthorInput } from '../article/article-unchecked-create-nested-many-without-author.input.ts';
import { CommentUncheckedCreateNestedManyWithoutAuthorInput } from '../comment/comment-unchecked-create-nested-many-without-author.input.ts';
import { ProfileUncheckedCreateNestedOneWithoutUserInput } from '../profile/profile-unchecked-create-nested-one-without-user.input.ts';

@InputType()
export class UserUncheckedCreateWithoutFollowersInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Scalars.GraphQLEmailAddress, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: false })
  @Validator.MinLength(3)
  @Validator.MaxLength(50)
  name!: string;

  @Field(() => String, { nullable: false })
  password!: string;

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

  @Field(() => UserUncheckedCreateNestedManyWithoutFollowersInput, {
    nullable: true,
  })
  @Type(() => UserUncheckedCreateNestedManyWithoutFollowersInput)
  following?: Identity<UserUncheckedCreateNestedManyWithoutFollowersInput>;

  @Field(() => ArticleUncheckedCreateNestedManyWithoutFavoritedByInput, {
    nullable: true,
  })
  @Type(() => ArticleUncheckedCreateNestedManyWithoutFavoritedByInput)
  favoriteArticles?: Identity<ArticleUncheckedCreateNestedManyWithoutFavoritedByInput>;

  @Field(() => ArticleUncheckedCreateNestedManyWithoutAuthorInput, {
    nullable: true,
  })
  @Type(() => ArticleUncheckedCreateNestedManyWithoutAuthorInput)
  articles?: Identity<ArticleUncheckedCreateNestedManyWithoutAuthorInput>;

  @Field(() => CommentUncheckedCreateNestedManyWithoutAuthorInput, {
    nullable: true,
  })
  @Type(() => CommentUncheckedCreateNestedManyWithoutAuthorInput)
  comments?: Identity<CommentUncheckedCreateNestedManyWithoutAuthorInput>;

  @Field(() => ProfileUncheckedCreateNestedOneWithoutUserInput, {
    nullable: true,
  })
  @Type(() => ProfileUncheckedCreateNestedOneWithoutUserInput)
  profile?: Identity<ProfileUncheckedCreateNestedOneWithoutUserInput>;
}
