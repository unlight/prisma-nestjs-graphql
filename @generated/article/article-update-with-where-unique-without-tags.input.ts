import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { Type } from 'class-transformer';
import { ArticleUpdateWithoutTagsInput } from './article-update-without-tags.input';

@InputType()
export class ArticleUpdateWithWhereUniqueWithoutTagsInput {
  @Field(() => ArticleWhereUniqueInput, { nullable: false })
  @Type(() => ArticleWhereUniqueInput)
  where!: ArticleWhereUniqueInput;

  @Field(() => ArticleUpdateWithoutTagsInput, { nullable: false })
  @Type(() => ArticleUpdateWithoutTagsInput)
  data!: ArticleUpdateWithoutTagsInput;
}
