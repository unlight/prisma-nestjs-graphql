import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleCreateWithoutCommentsInput } from './article-create-without-comments.input';

@InputType()
export class ArticleCreateOrConnectWithoutCommentsInput {
  @Field(() => ArticleWhereUniqueInput, { nullable: false })
  where!: ArticleWhereUniqueInput;

  @Field(() => ArticleCreateWithoutCommentsInput, { nullable: false })
  create!: ArticleCreateWithoutCommentsInput;
}
