import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleUpdateWithoutAuthorInput } from './article-update-without-author.input';
import { ArticleCreateWithoutAuthorInput } from './article-create-without-author.input';

@InputType()
export class ArticleUpsertWithWhereUniqueWithoutAuthorInput {
  @Field(() => ArticleWhereUniqueInput, { nullable: false })
  where!: ArticleWhereUniqueInput;

  @Field(() => ArticleUpdateWithoutAuthorInput, { nullable: false })
  update!: ArticleUpdateWithoutAuthorInput;

  @Field(() => ArticleCreateWithoutAuthorInput, { nullable: false })
  create!: ArticleCreateWithoutAuthorInput;
}
