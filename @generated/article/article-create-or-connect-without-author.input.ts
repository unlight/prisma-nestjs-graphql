import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleCreateWithoutAuthorInput } from './article-create-without-author.input';

@InputType()
export class ArticleCreateOrConnectWithoutAuthorInput {
  @Field(() => ArticleWhereUniqueInput, { nullable: false })
  where!: ArticleWhereUniqueInput;

  @Field(() => ArticleCreateWithoutAuthorInput, { nullable: false })
  create!: ArticleCreateWithoutAuthorInput;
}
