import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { UserCreateNestedManyWithoutFollowersInput } from './user-create-nested-many-without-followers.input';
import { UserCreateNestedManyWithoutFollowingInput } from './user-create-nested-many-without-following.input';
import { ArticleCreateNestedManyWithoutAuthorInput } from '../article/article-create-nested-many-without-author.input';
import { CommentCreateNestedManyWithoutAuthorInput } from '../comment/comment-create-nested-many-without-author.input';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { ProfileCreateNestedOneWithoutUserInput } from '../profile/profile-create-nested-one-without-user.input';

@InputType()
export class UserCreateWithoutFavoriteArticlesInput {
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

  @Field(() => UserCreateNestedManyWithoutFollowersInput, { nullable: true })
  following?: UserCreateNestedManyWithoutFollowersInput;

  @Field(() => UserCreateNestedManyWithoutFollowingInput, { nullable: true })
  followers?: UserCreateNestedManyWithoutFollowingInput;

  @Field(() => ArticleCreateNestedManyWithoutAuthorInput, { nullable: true })
  articles?: ArticleCreateNestedManyWithoutAuthorInput;

  @Field(() => CommentCreateNestedManyWithoutAuthorInput, { nullable: true })
  comments?: CommentCreateNestedManyWithoutAuthorInput;

  @Field(() => Int, { nullable: true })
  countComments?: number;

  @Field(() => Float, { nullable: true })
  rating?: number;

  @Field(() => Role, { nullable: true })
  role?: keyof typeof Role;

  @Field(() => ProfileCreateNestedOneWithoutUserInput, { nullable: true })
  profile?: ProfileCreateNestedOneWithoutUserInput;
}
