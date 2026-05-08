import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ArticleWhereInput } from './article-where.input.ts';

@InputType()
export class ArticleListRelationFilter {
  @Field(() => ArticleWhereInput, { nullable: true })
  every?: Identity<ArticleWhereInput>;

  @Field(() => ArticleWhereInput, { nullable: true })
  some?: Identity<ArticleWhereInput>;

  @Field(() => ArticleWhereInput, { nullable: true })
  none?: Identity<ArticleWhereInput>;
}
