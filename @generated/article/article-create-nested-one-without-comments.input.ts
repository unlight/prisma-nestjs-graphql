import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ArticleCreateWithoutCommentsInput } from './article-create-without-comments.input.ts';
import { Type } from 'class-transformer';
import { ArticleCreateOrConnectWithoutCommentsInput } from './article-create-or-connect-without-comments.input.ts';
import { Prisma } from '@prisma/client';
import { ArticleWhereUniqueInput } from './article-where-unique.input.ts';

@InputType()
export class ArticleCreateNestedOneWithoutCommentsInput {
  @Field(() => ArticleCreateWithoutCommentsInput, { nullable: true })
  @Type(() => ArticleCreateWithoutCommentsInput)
  create?: Identity<ArticleCreateWithoutCommentsInput>;

  @Field(() => ArticleCreateOrConnectWithoutCommentsInput, { nullable: true })
  @Type(() => ArticleCreateOrConnectWithoutCommentsInput)
  connectOrCreate?: Identity<ArticleCreateOrConnectWithoutCommentsInput>;

  @Field(() => ArticleWhereUniqueInput, { nullable: true })
  @Type(() => ArticleWhereUniqueInput)
  connect?: Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'slug'>;
}
