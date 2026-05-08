import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ArticleCreateInput } from './article-create.input.ts';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneArticleArgs {
  @Field(() => ArticleCreateInput, { nullable: false })
  @Type(() => ArticleCreateInput)
  data!: Identity<ArticleCreateInput>;
}
