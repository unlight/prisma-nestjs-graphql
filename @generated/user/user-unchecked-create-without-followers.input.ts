import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { UserUncheckedCreateNestedManyWithoutFollowersInput } from './user-unchecked-create-nested-many-without-followers.input';
import { ArticleUncheckedCreateNestedManyWithoutFavoritedByInput } from '../article/article-unchecked-create-nested-many-without-favorited-by.input';
import { ArticleUncheckedCreateNestedManyWithoutAuthorInput } from '../article/article-unchecked-create-nested-many-without-author.input';
import { CommentUncheckedCreateNestedManyWithoutAuthorInput } from '../comment/comment-unchecked-create-nested-many-without-author.input';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { ProfileUncheckedCreateNestedOneWithoutUserInput } from '../profile/profile-unchecked-create-nested-one-without-user.input';

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

  @Field(() => UserUncheckedCreateNestedManyWithoutFollowersInput, { nullable: true })
  following?: UserUncheckedCreateNestedManyWithoutFollowersInput;

  @Field(() => ArticleUncheckedCreateNestedManyWithoutFavoritedByInput, {
    nullable: true,
  })
  favoriteArticles?: ArticleUncheckedCreateNestedManyWithoutFavoritedByInput;

  @Field(() => ArticleUncheckedCreateNestedManyWithoutAuthorInput, { nullable: true })
  articles?: ArticleUncheckedCreateNestedManyWithoutAuthorInput;

  @Field(() => CommentUncheckedCreateNestedManyWithoutAuthorInput, { nullable: true })
  comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput;

  @Field(() => Int, { nullable: true })
  countComments?: number;

  @Field(() => Float, { nullable: true })
  rating?: number;

  @Field(() => Role, { nullable: true })
  role?: keyof typeof Role;

  @Field(() => ProfileUncheckedCreateNestedOneWithoutUserInput, { nullable: true })
  profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;
}
