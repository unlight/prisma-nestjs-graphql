import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ArticleWhereInput } from './article-where.input.ts';

@InputType()
export class ArticleScalarRelationFilter {
  @Field(() => ArticleWhereInput, { nullable: true })
  is?: Identity<ArticleWhereInput>;

  @Field(() => ArticleWhereInput, { nullable: true })
  isNot?: Identity<ArticleWhereInput>;
}
