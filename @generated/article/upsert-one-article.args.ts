import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { Type } from 'class-transformer';
import { ArticleCreateInput } from './article-create.input';
import { ArticleUpdateInput } from './article-update.input';

@ArgsType()
export class UpsertOneArticleArgs {
  @Field(() => ArticleWhereUniqueInput, { nullable: false })
  @Type(() => ArticleWhereUniqueInput)
  where!: ArticleWhereUniqueInput;

  @Field(() => ArticleCreateInput, { nullable: false })
  @Type(() => ArticleCreateInput)
  create!: ArticleCreateInput;

  @Field(() => ArticleUpdateInput, { nullable: false })
  @Type(() => ArticleUpdateInput)
  update!: ArticleUpdateInput;
}
