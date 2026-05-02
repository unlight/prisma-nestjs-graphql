import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Article } from '../article/article.model.ts';
import { TagCount } from './tag-count.output.ts';

@ObjectType()
export class Tag {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => [Article], { nullable: true })
  articles?: Array<Article>;

  @Field(() => TagCount, { nullable: false })
  _count?: TagCount;
}
