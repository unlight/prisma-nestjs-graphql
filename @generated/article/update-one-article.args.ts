import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleUpdateInput } from './article-update.input.ts';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ArticleWhereUniqueInput } from './article-where-unique.input.ts';

@ArgsType()
export class UpdateOneArticleArgs {
  @Field(() => ArticleUpdateInput, { nullable: false })
  @Type(() => ArticleUpdateInput)
  data!: ArticleUpdateInput;

  @Field(() => ArticleWhereUniqueInput, { nullable: false })
  @Type(() => ArticleWhereUniqueInput)
  where!: Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'slug'>;
}
