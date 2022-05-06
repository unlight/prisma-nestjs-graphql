import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleUpdateWithoutCommentsInput } from './article-update-without-comments.input';
import { ArticleCreateWithoutCommentsInput } from './article-create-without-comments.input';

@InputType()
export class ArticleUpsertWithoutCommentsInput {
  @Field(() => ArticleUpdateWithoutCommentsInput, { nullable: false })
  update!: ArticleUpdateWithoutCommentsInput;

  @Field(() => ArticleCreateWithoutCommentsInput, { nullable: false })
  create!: ArticleCreateWithoutCommentsInput;
}
