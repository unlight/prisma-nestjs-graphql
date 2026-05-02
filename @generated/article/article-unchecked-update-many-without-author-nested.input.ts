import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateWithoutAuthorInput } from './article-create-without-author.input.ts';
import { Type } from 'class-transformer';
import { ArticleCreateOrConnectWithoutAuthorInput } from './article-create-or-connect-without-author.input.ts';
import { ArticleUpsertWithWhereUniqueWithoutAuthorInput } from './article-upsert-with-where-unique-without-author.input.ts';
import { ArticleCreateManyAuthorInputEnvelope } from './article-create-many-author-input-envelope.input.ts';
import { Prisma } from '@prisma/client';
import { ArticleWhereUniqueInput } from './article-where-unique.input.ts';
import { ArticleUpdateWithWhereUniqueWithoutAuthorInput } from './article-update-with-where-unique-without-author.input.ts';
import { ArticleUpdateManyWithWhereWithoutAuthorInput } from './article-update-many-with-where-without-author.input.ts';
import { ArticleScalarWhereInput } from './article-scalar-where.input.ts';

@InputType()
export class ArticleUncheckedUpdateManyWithoutAuthorNestedInput {
  @Field(() => [ArticleCreateWithoutAuthorInput], { nullable: true })
  @Type(() => ArticleCreateWithoutAuthorInput)
  create?: Array<ArticleCreateWithoutAuthorInput>;

  @Field(() => [ArticleCreateOrConnectWithoutAuthorInput], { nullable: true })
  @Type(() => ArticleCreateOrConnectWithoutAuthorInput)
  connectOrCreate?: Array<ArticleCreateOrConnectWithoutAuthorInput>;

  @Field(() => [ArticleUpsertWithWhereUniqueWithoutAuthorInput], {
    nullable: true,
  })
  @Type(() => ArticleUpsertWithWhereUniqueWithoutAuthorInput)
  upsert?: Array<ArticleUpsertWithWhereUniqueWithoutAuthorInput>;

  @Field(() => ArticleCreateManyAuthorInputEnvelope, { nullable: true })
  @Type(() => ArticleCreateManyAuthorInputEnvelope)
  createMany?: ArticleCreateManyAuthorInputEnvelope;

  @Field(() => [ArticleWhereUniqueInput], { nullable: true })
  @Type(() => ArticleWhereUniqueInput)
  set?: Array<Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'slug'>>;

  @Field(() => [ArticleWhereUniqueInput], { nullable: true })
  @Type(() => ArticleWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'slug'>>;

  @Field(() => [ArticleWhereUniqueInput], { nullable: true })
  @Type(() => ArticleWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'slug'>>;

  @Field(() => [ArticleWhereUniqueInput], { nullable: true })
  @Type(() => ArticleWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'slug'>>;

  @Field(() => [ArticleUpdateWithWhereUniqueWithoutAuthorInput], {
    nullable: true,
  })
  @Type(() => ArticleUpdateWithWhereUniqueWithoutAuthorInput)
  update?: Array<ArticleUpdateWithWhereUniqueWithoutAuthorInput>;

  @Field(() => [ArticleUpdateManyWithWhereWithoutAuthorInput], {
    nullable: true,
  })
  @Type(() => ArticleUpdateManyWithWhereWithoutAuthorInput)
  updateMany?: Array<ArticleUpdateManyWithWhereWithoutAuthorInput>;

  @Field(() => [ArticleScalarWhereInput], { nullable: true })
  @Type(() => ArticleScalarWhereInput)
  deleteMany?: Array<ArticleScalarWhereInput>;
}
