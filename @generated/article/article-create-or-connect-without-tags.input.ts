import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { Type } from 'class-transformer';
import { ArticleCreateWithoutTagsInput } from './article-create-without-tags.input';

@InputType()
export class ArticleCreateOrConnectWithoutTagsInput {
  @Field(() => ArticleWhereUniqueInput, { nullable: false })
  @Type(() => ArticleWhereUniqueInput)
  where!: Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'slug'>;

  @Field(() => ArticleCreateWithoutTagsInput, { nullable: false })
  @Type(() => ArticleCreateWithoutTagsInput)
  create!: ArticleCreateWithoutTagsInput;
}
