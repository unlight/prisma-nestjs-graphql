import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleUpdateWithoutTagsInput } from './article-update-without-tags.input';
import { ArticleCreateWithoutTagsInput } from './article-create-without-tags.input';

@InputType()
export class ArticleUpsertWithWhereUniqueWithoutTagsInput {
  @Field(() => ArticleWhereUniqueInput, { nullable: false })
  where!: ArticleWhereUniqueInput;

  @Field(() => ArticleUpdateWithoutTagsInput, { nullable: false })
  update!: ArticleUpdateWithoutTagsInput;

  @Field(() => ArticleCreateWithoutTagsInput, { nullable: false })
  create!: ArticleCreateWithoutTagsInput;
}
