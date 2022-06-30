import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateWithoutAuthorInput } from './article-create-without-author.input';
import { Type } from 'class-transformer';
import { ArticleCreateOrConnectWithoutAuthorInput } from './article-create-or-connect-without-author.input';
import { ArticleUpsertWithWhereUniqueWithoutAuthorInput } from './article-upsert-with-where-unique-without-author.input';
import { ArticleCreateManyAuthorInputEnvelope } from './article-create-many-author-input-envelope.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleUpdateWithWhereUniqueWithoutAuthorInput } from './article-update-with-where-unique-without-author.input';
import { ArticleUpdateManyWithWhereWithoutAuthorInput } from './article-update-many-with-where-without-author.input';
import { ArticleScalarWhereInput } from './article-scalar-where.input';

@InputType()
export class ArticleUncheckedUpdateManyWithoutAuthorNestedInput {
  @Field(() => [ArticleCreateWithoutAuthorInput], { nullable: true })
  @Type(() => ArticleCreateWithoutAuthorInput)
  create?: Array<ArticleCreateWithoutAuthorInput>;

  @Field(() => [ArticleCreateOrConnectWithoutAuthorInput], { nullable: true })
  @Type(() => ArticleCreateOrConnectWithoutAuthorInput)
  connectOrCreate?: Array<ArticleCreateOrConnectWithoutAuthorInput>;

  @Field(() => [ArticleUpsertWithWhereUniqueWithoutAuthorInput], { nullable: true })
  @Type(() => ArticleUpsertWithWhereUniqueWithoutAuthorInput)
  upsert?: Array<ArticleUpsertWithWhereUniqueWithoutAuthorInput>;

  @Field(() => ArticleCreateManyAuthorInputEnvelope, { nullable: true })
  @Type(() => ArticleCreateManyAuthorInputEnvelope)
  createMany?: ArticleCreateManyAuthorInputEnvelope;

  @Field(() => [ArticleWhereUniqueInput], { nullable: true })
  @Type(() => ArticleWhereUniqueInput)
  set?: Array<ArticleWhereUniqueInput>;

  @Field(() => [ArticleWhereUniqueInput], { nullable: true })
  @Type(() => ArticleWhereUniqueInput)
  disconnect?: Array<ArticleWhereUniqueInput>;

  @Field(() => [ArticleWhereUniqueInput], { nullable: true })
  @Type(() => ArticleWhereUniqueInput)
  delete?: Array<ArticleWhereUniqueInput>;

  @Field(() => [ArticleWhereUniqueInput], { nullable: true })
  @Type(() => ArticleWhereUniqueInput)
  connect?: Array<ArticleWhereUniqueInput>;

  @Field(() => [ArticleUpdateWithWhereUniqueWithoutAuthorInput], { nullable: true })
  @Type(() => ArticleUpdateWithWhereUniqueWithoutAuthorInput)
  update?: Array<ArticleUpdateWithWhereUniqueWithoutAuthorInput>;

  @Field(() => [ArticleUpdateManyWithWhereWithoutAuthorInput], { nullable: true })
  @Type(() => ArticleUpdateManyWithWhereWithoutAuthorInput)
  updateMany?: Array<ArticleUpdateManyWithWhereWithoutAuthorInput>;

  @Field(() => [ArticleScalarWhereInput], { nullable: true })
  @Type(() => ArticleScalarWhereInput)
  deleteMany?: Array<ArticleScalarWhereInput>;
}
