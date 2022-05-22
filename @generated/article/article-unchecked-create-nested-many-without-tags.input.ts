import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateWithoutTagsInput } from './article-create-without-tags.input';
import { Type } from 'class-transformer';
import { ArticleCreateOrConnectWithoutTagsInput } from './article-create-or-connect-without-tags.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleUncheckedCreateNestedManyWithoutTagsInput {
  @Field(() => [ArticleCreateWithoutTagsInput], { nullable: true })
  @Type(() => ArticleCreateWithoutTagsInput)
  create?: Array<ArticleCreateWithoutTagsInput>;

  @Field(() => [ArticleCreateOrConnectWithoutTagsInput], { nullable: true })
  @Type(() => ArticleCreateOrConnectWithoutTagsInput)
  connectOrCreate?: Array<ArticleCreateOrConnectWithoutTagsInput>;

  @Field(() => [ArticleWhereUniqueInput], { nullable: true })
  @Type(() => ArticleWhereUniqueInput)
  connect?: Array<ArticleWhereUniqueInput>;
}
