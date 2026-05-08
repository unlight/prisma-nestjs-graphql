import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateWithoutAuthorInput } from './article-create-without-author.input.ts';
import { Type } from 'class-transformer';
import { ArticleCreateOrConnectWithoutAuthorInput } from './article-create-or-connect-without-author.input.ts';
import type { Identity } from 'identity-type';
import { ArticleCreateManyAuthorInputEnvelope } from './article-create-many-author-input-envelope.input.ts';
import { Prisma } from '@prisma/client';
import { ArticleWhereUniqueInput } from './article-where-unique.input.ts';

@InputType()
export class ArticleUncheckedCreateNestedManyWithoutAuthorInput {
  @Field(() => [ArticleCreateWithoutAuthorInput], { nullable: true })
  @Type(() => ArticleCreateWithoutAuthorInput)
  create?: Array<ArticleCreateWithoutAuthorInput>;

  @Field(() => [ArticleCreateOrConnectWithoutAuthorInput], { nullable: true })
  @Type(() => ArticleCreateOrConnectWithoutAuthorInput)
  connectOrCreate?: Array<ArticleCreateOrConnectWithoutAuthorInput>;

  @Field(() => ArticleCreateManyAuthorInputEnvelope, { nullable: true })
  @Type(() => ArticleCreateManyAuthorInputEnvelope)
  createMany?: Identity<ArticleCreateManyAuthorInputEnvelope>;

  @Field(() => [ArticleWhereUniqueInput], { nullable: true })
  @Type(() => ArticleWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'slug'>>;
}
