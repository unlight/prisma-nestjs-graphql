import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ArticleWhereUniqueInput } from './article-where-unique.input.ts';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { ArticleCreateWithoutCommentsInput } from './article-create-without-comments.input.ts';

@InputType()
export class ArticleCreateOrConnectWithoutCommentsInput {
  @Field(() => ArticleWhereUniqueInput, { nullable: false })
  @Type(() => ArticleWhereUniqueInput)
  where!: Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'slug'>;

  @Field(() => ArticleCreateWithoutCommentsInput, { nullable: false })
  @Type(() => ArticleCreateWithoutCommentsInput)
  create!: Identity<ArticleCreateWithoutCommentsInput>;
}
