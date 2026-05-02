import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleWhereInput } from './article-where.input.ts';

@InputType()
export class ArticleNullableScalarRelationFilter {
  @Field(() => ArticleWhereInput, { nullable: true })
  is?: ArticleWhereInput;

  @Field(() => ArticleWhereInput, { nullable: true })
  isNot?: ArticleWhereInput;
}
