import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ArticleWhereUniqueInput } from './article-where-unique.input.ts';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { ArticleUpdateWithoutAuthorInput } from './article-update-without-author.input.ts';
import { ArticleCreateWithoutAuthorInput } from './article-create-without-author.input.ts';

@InputType()
export class ArticleUpsertWithWhereUniqueWithoutAuthorInput {
  @Field(() => ArticleWhereUniqueInput, { nullable: false })
  @Type(() => ArticleWhereUniqueInput)
  where!: Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'slug'>;

  @Field(() => ArticleUpdateWithoutAuthorInput, { nullable: false })
  @Type(() => ArticleUpdateWithoutAuthorInput)
  update!: Identity<ArticleUpdateWithoutAuthorInput>;

  @Field(() => ArticleCreateWithoutAuthorInput, { nullable: false })
  @Type(() => ArticleCreateWithoutAuthorInput)
  create!: Identity<ArticleCreateWithoutAuthorInput>;
}
