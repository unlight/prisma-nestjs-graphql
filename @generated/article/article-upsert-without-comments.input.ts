import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleUpdateWithoutCommentsInput } from './article-update-without-comments.input.ts';
import { Type } from 'class-transformer';
import { ArticleCreateWithoutCommentsInput } from './article-create-without-comments.input.ts';
import { ArticleWhereInput } from './article-where.input.ts';

@InputType()
export class ArticleUpsertWithoutCommentsInput {
  @Field(() => ArticleUpdateWithoutCommentsInput, { nullable: false })
  @Type(() => ArticleUpdateWithoutCommentsInput)
  update!: ArticleUpdateWithoutCommentsInput;

  @Field(() => ArticleCreateWithoutCommentsInput, { nullable: false })
  @Type(() => ArticleCreateWithoutCommentsInput)
  create!: ArticleCreateWithoutCommentsInput;

  @Field(() => ArticleWhereInput, { nullable: true })
  @Type(() => ArticleWhereInput)
  where?: ArticleWhereInput;
}
