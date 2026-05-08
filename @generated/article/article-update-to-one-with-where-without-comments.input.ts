import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ArticleWhereInput } from './article-where.input.ts';
import { Type } from 'class-transformer';
import { ArticleUpdateWithoutCommentsInput } from './article-update-without-comments.input.ts';

@InputType()
export class ArticleUpdateToOneWithWhereWithoutCommentsInput {
  @Field(() => ArticleWhereInput, { nullable: true })
  @Type(() => ArticleWhereInput)
  where?: Identity<ArticleWhereInput>;

  @Field(() => ArticleUpdateWithoutCommentsInput, { nullable: false })
  @Type(() => ArticleUpdateWithoutCommentsInput)
  data!: Identity<ArticleUpdateWithoutCommentsInput>;
}
