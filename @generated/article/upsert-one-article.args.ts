import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ArticleWhereUniqueInput } from './article-where-unique.input.ts';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { ArticleCreateInput } from './article-create.input.ts';
import { ArticleUpdateInput } from './article-update.input.ts';

@ArgsType()
export class UpsertOneArticleArgs {
  @Field(() => ArticleWhereUniqueInput, { nullable: false })
  @Type(() => ArticleWhereUniqueInput)
  where!: Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'slug'>;

  @Field(() => ArticleCreateInput, { nullable: false })
  @Type(() => ArticleCreateInput)
  create!: Identity<ArticleCreateInput>;

  @Field(() => ArticleUpdateInput, { nullable: false })
  @Type(() => ArticleUpdateInput)
  update!: Identity<ArticleUpdateInput>;
}
