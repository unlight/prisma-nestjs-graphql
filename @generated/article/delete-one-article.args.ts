import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneArticleArgs {
  @Field(() => ArticleWhereUniqueInput, { nullable: false })
  @Type(() => ArticleWhereUniqueInput)
  where!: Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'slug'>;
}
