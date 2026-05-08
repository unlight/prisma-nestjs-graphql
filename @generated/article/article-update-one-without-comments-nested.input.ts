import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ArticleCreateWithoutCommentsInput } from './article-create-without-comments.input.ts';
import { Type } from 'class-transformer';
import { ArticleCreateOrConnectWithoutCommentsInput } from './article-create-or-connect-without-comments.input.ts';
import { ArticleUpsertWithoutCommentsInput } from './article-upsert-without-comments.input.ts';
import { ArticleWhereInput } from './article-where.input.ts';
import { Prisma } from '@prisma/client';
import { ArticleWhereUniqueInput } from './article-where-unique.input.ts';
import { ArticleUpdateToOneWithWhereWithoutCommentsInput } from './article-update-to-one-with-where-without-comments.input.ts';

@InputType()
export class ArticleUpdateOneWithoutCommentsNestedInput {
  @Field(() => ArticleCreateWithoutCommentsInput, { nullable: true })
  @Type(() => ArticleCreateWithoutCommentsInput)
  create?: Identity<ArticleCreateWithoutCommentsInput>;

  @Field(() => ArticleCreateOrConnectWithoutCommentsInput, { nullable: true })
  @Type(() => ArticleCreateOrConnectWithoutCommentsInput)
  connectOrCreate?: Identity<ArticleCreateOrConnectWithoutCommentsInput>;

  @Field(() => ArticleUpsertWithoutCommentsInput, { nullable: true })
  @Type(() => ArticleUpsertWithoutCommentsInput)
  upsert?: Identity<ArticleUpsertWithoutCommentsInput>;

  @Field(() => ArticleWhereInput, { nullable: true })
  @Type(() => ArticleWhereInput)
  disconnect?: Identity<ArticleWhereInput>;

  @Field(() => ArticleWhereInput, { nullable: true })
  @Type(() => ArticleWhereInput)
  delete?: Identity<ArticleWhereInput>;

  @Field(() => ArticleWhereUniqueInput, { nullable: true })
  @Type(() => ArticleWhereUniqueInput)
  connect?: Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'slug'>;

  @Field(() => ArticleUpdateToOneWithWhereWithoutCommentsInput, {
    nullable: true,
  })
  @Type(() => ArticleUpdateToOneWithWhereWithoutCommentsInput)
  update?: Identity<ArticleUpdateToOneWithWhereWithoutCommentsInput>;
}
