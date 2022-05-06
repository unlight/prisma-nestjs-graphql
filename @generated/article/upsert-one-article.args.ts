import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleCreateInput } from './article-create.input';
import { ArticleUpdateInput } from './article-update.input';

@ArgsType()
export class UpsertOneArticleArgs {
  @Field(() => ArticleWhereUniqueInput, { nullable: false })
  where!: ArticleWhereUniqueInput;

  @Field(() => ArticleCreateInput, { nullable: false })
  create!: ArticleCreateInput;

  @Field(() => ArticleUpdateInput, { nullable: false })
  update!: ArticleUpdateInput;
}
