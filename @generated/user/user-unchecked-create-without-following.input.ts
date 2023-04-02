import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { Role } from '../prisma/role.enum';
import { UserUncheckedCreateNestedManyWithoutFollowingInput } from './user-unchecked-create-nested-many-without-following.input';
import { ArticleUncheckedCreateNestedManyWithoutFavoritedByInput } from '../article/article-unchecked-create-nested-many-without-favorited-by.input';
import { ArticleUncheckedCreateNestedManyWithoutAuthorInput } from '../article/article-unchecked-create-nested-many-without-author.input';
import { CommentUncheckedCreateNestedManyWithoutAuthorInput } from '../comment/comment-unchecked-create-nested-many-without-author.input';
import { ProfileUncheckedCreateNestedOneWithoutUserInput } from '../profile/profile-unchecked-create-nested-one-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutFollowingInput {
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
  role?: keyof typeof Role;

  @Field(() => UserUncheckedCreateNestedManyWithoutFollowingInput, { nullable: true })
  @Type(() => UserUncheckedCreateNestedManyWithoutFollowingInput)
  followers?: UserUncheckedCreateNestedManyWithoutFollowingInput;

  @Field(() => ArticleUncheckedCreateNestedManyWithoutFavoritedByInput, {
    nullable: true,
  })
  @Type(() => ArticleUncheckedCreateNestedManyWithoutFavoritedByInput)
  favoriteArticles?: ArticleUncheckedCreateNestedManyWithoutFavoritedByInput;

  @Field(() => ArticleUncheckedCreateNestedManyWithoutAuthorInput, { nullable: true })
  @Type(() => ArticleUncheckedCreateNestedManyWithoutAuthorInput)
  articles?: ArticleUncheckedCreateNestedManyWithoutAuthorInput;

  @Field(() => CommentUncheckedCreateNestedManyWithoutAuthorInput, { nullable: true })
  @Type(() => CommentUncheckedCreateNestedManyWithoutAuthorInput)
  comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput;

  @Field(() => ProfileUncheckedCreateNestedOneWithoutUserInput, { nullable: true })
  @Type(() => ProfileUncheckedCreateNestedOneWithoutUserInput)
  profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;
}
