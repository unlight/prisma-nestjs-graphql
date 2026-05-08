import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ArticleUpdateWithoutCommentsInput } from './article-update-without-comments.input.ts';
import { Type } from 'class-transformer';
import { ArticleCreateWithoutCommentsInput } from './article-create-without-comments.input.ts';
import { ArticleWhereInput } from './article-where.input.ts';

@InputType()
export class ArticleUpsertWithoutCommentsInput {
  @Field(() => ArticleUpdateWithoutCommentsInput, { nullable: false })
  @Type(() => ArticleUpdateWithoutCommentsInput)
  update!: Identity<ArticleUpdateWithoutCommentsInput>;

  @Field(() => ArticleCreateWithoutCommentsInput, { nullable: false })
  @Type(() => ArticleCreateWithoutCommentsInput)
  create!: Identity<ArticleCreateWithoutCommentsInput>;

  @Field(() => ArticleWhereInput, { nullable: true })
  @Type(() => ArticleWhereInput)
  where?: Identity<ArticleWhereInput>;
}
