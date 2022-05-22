import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { Type } from 'class-transformer';
import { ArticleUpdateWithoutAuthorInput } from './article-update-without-author.input';
import { ArticleCreateWithoutAuthorInput } from './article-create-without-author.input';

@InputType()
export class ArticleUpsertWithWhereUniqueWithoutAuthorInput {
  @Field(() => ArticleWhereUniqueInput, { nullable: false })
  @Type(() => ArticleWhereUniqueInput)
  where!: ArticleWhereUniqueInput;

  @Field(() => ArticleUpdateWithoutAuthorInput, { nullable: false })
  @Type(() => ArticleUpdateWithoutAuthorInput)
  update!: ArticleUpdateWithoutAuthorInput;

  @Field(() => ArticleCreateWithoutAuthorInput, { nullable: false })
  @Type(() => ArticleCreateWithoutAuthorInput)
  create!: ArticleCreateWithoutAuthorInput;
}
