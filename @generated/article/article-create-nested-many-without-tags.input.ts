import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateWithoutTagsInput } from './article-create-without-tags.input.ts';
import { Type } from 'class-transformer';
import { ArticleCreateOrConnectWithoutTagsInput } from './article-create-or-connect-without-tags.input.ts';
import { Prisma } from '@prisma/client';
import { ArticleWhereUniqueInput } from './article-where-unique.input.ts';

@InputType()
export class ArticleCreateNestedManyWithoutTagsInput {
  @Field(() => [ArticleCreateWithoutTagsInput], { nullable: true })
  @Type(() => ArticleCreateWithoutTagsInput)
  create?: Array<ArticleCreateWithoutTagsInput>;

  @Field(() => [ArticleCreateOrConnectWithoutTagsInput], { nullable: true })
  @Type(() => ArticleCreateOrConnectWithoutTagsInput)
  connectOrCreate?: Array<ArticleCreateOrConnectWithoutTagsInput>;

  @Field(() => [ArticleWhereUniqueInput], { nullable: true })
  @Type(() => ArticleWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'slug'>>;
}
