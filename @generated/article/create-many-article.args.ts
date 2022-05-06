import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleCreateManyInput } from './article-create-many.input';

@ArgsType()
export class CreateManyArticleArgs {
  @Field(() => [ArticleCreateManyInput], { nullable: false })
  data!: Array<ArticleCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
