import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ArticleUpdateInput } from './article-update.input.ts';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ArticleWhereUniqueInput } from './article-where-unique.input.ts';

@ArgsType()
export class UpdateOneArticleArgs {
  @Field(() => ArticleUpdateInput, { nullable: false })
  @Type(() => ArticleUpdateInput)
  data!: Identity<ArticleUpdateInput>;

  @Field(() => ArticleWhereUniqueInput, { nullable: false })
  @Type(() => ArticleWhereUniqueInput)
  where!: Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'slug'>;
}
