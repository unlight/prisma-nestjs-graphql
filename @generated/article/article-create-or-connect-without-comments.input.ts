import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { Type } from 'class-transformer';
import { ArticleCreateWithoutCommentsInput } from './article-create-without-comments.input';

@InputType()
export class ArticleCreateOrConnectWithoutCommentsInput {
  @Field(() => ArticleWhereUniqueInput, { nullable: false })
  @Type(() => ArticleWhereUniqueInput)
  where!: ArticleWhereUniqueInput;

  @Field(() => ArticleCreateWithoutCommentsInput, { nullable: false })
  @Type(() => ArticleCreateWithoutCommentsInput)
  create!: ArticleCreateWithoutCommentsInput;
}
