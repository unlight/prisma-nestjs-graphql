import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model.ts';
import type { Identity } from 'identity-type';
import { Article } from '../article/article.model.ts';

@ObjectType()
export class Comment {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => String, { nullable: false })
  body!: string;

  @Field(() => String, { nullable: false })
  authorId!: string;

  @Field(() => String, { nullable: true })
  articleId!: string | null;

  @Field(() => User, { nullable: false })
  author?: Identity<User>;

  @Field(() => Article, { nullable: true })
  article?: Identity<Article> | null;
}
