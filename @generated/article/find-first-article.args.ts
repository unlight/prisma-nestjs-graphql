import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ArticleWhereInput } from './article-where.input.ts';
import { Type } from 'class-transformer';
import { ArticleOrderByWithRelationInput } from './article-order-by-with-relation.input.ts';
import { Prisma } from '@prisma/client';
import { ArticleWhereUniqueInput } from './article-where-unique.input.ts';
import { Int } from '@nestjs/graphql';
import { ArticleScalarFieldEnum } from './article-scalar-field.enum.ts';

@ArgsType()
export class FindFirstArticleArgs {
  @Field(() => ArticleWhereInput, { nullable: true })
  @Type(() => ArticleWhereInput)
  where?: Identity<ArticleWhereInput>;

  @Field(() => [ArticleOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ArticleOrderByWithRelationInput>;

  @Field(() => ArticleWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'slug'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [ArticleScalarFieldEnum], { nullable: true })
  distinct?: Array<`${ArticleScalarFieldEnum}`>;
}
