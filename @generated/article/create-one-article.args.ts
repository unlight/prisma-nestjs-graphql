import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleCreateInput } from './article-create.input';

@ArgsType()
export class CreateOneArticleArgs {
  @Field(() => ArticleCreateInput, { nullable: false })
  data!: ArticleCreateInput;
}
