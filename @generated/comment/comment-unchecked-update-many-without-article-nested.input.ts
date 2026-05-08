import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutArticleInput } from './comment-create-without-article.input.ts';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutArticleInput } from './comment-create-or-connect-without-article.input.ts';
import { CommentUpsertWithWhereUniqueWithoutArticleInput } from './comment-upsert-with-where-unique-without-article.input.ts';
import type { Identity } from 'identity-type';
import { CommentCreateManyArticleInputEnvelope } from './comment-create-many-article-input-envelope.input.ts';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input.ts';
import { CommentUpdateWithWhereUniqueWithoutArticleInput } from './comment-update-with-where-unique-without-article.input.ts';
import { CommentUpdateManyWithWhereWithoutArticleInput } from './comment-update-many-with-where-without-article.input.ts';
import { CommentScalarWhereInput } from './comment-scalar-where.input.ts';

@InputType()
export class CommentUncheckedUpdateManyWithoutArticleNestedInput {
  @Field(() => [CommentCreateWithoutArticleInput], { nullable: true })
  @Type(() => CommentCreateWithoutArticleInput)
  create?: Array<CommentCreateWithoutArticleInput>;

  @Field(() => [CommentCreateOrConnectWithoutArticleInput], { nullable: true })
  @Type(() => CommentCreateOrConnectWithoutArticleInput)
  connectOrCreate?: Array<CommentCreateOrConnectWithoutArticleInput>;

  @Field(() => [CommentUpsertWithWhereUniqueWithoutArticleInput], {
    nullable: true,
  })
  @Type(() => CommentUpsertWithWhereUniqueWithoutArticleInput)
  upsert?: Array<CommentUpsertWithWhereUniqueWithoutArticleInput>;

  @Field(() => CommentCreateManyArticleInputEnvelope, { nullable: true })
  @Type(() => CommentCreateManyArticleInputEnvelope)
  createMany?: Identity<CommentCreateManyArticleInputEnvelope>;

  @Field(() => [CommentWhereUniqueInput], { nullable: true })
  @Type(() => CommentWhereUniqueInput)
  set?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

  @Field(() => [CommentWhereUniqueInput], { nullable: true })
  @Type(() => CommentWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

  @Field(() => [CommentWhereUniqueInput], { nullable: true })
  @Type(() => CommentWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

  @Field(() => [CommentWhereUniqueInput], { nullable: true })
  @Type(() => CommentWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

  @Field(() => [CommentUpdateWithWhereUniqueWithoutArticleInput], {
    nullable: true,
  })
  @Type(() => CommentUpdateWithWhereUniqueWithoutArticleInput)
  update?: Array<CommentUpdateWithWhereUniqueWithoutArticleInput>;

  @Field(() => [CommentUpdateManyWithWhereWithoutArticleInput], {
    nullable: true,
  })
  @Type(() => CommentUpdateManyWithWhereWithoutArticleInput)
  updateMany?: Array<CommentUpdateManyWithWhereWithoutArticleInput>;

  @Field(() => [CommentScalarWhereInput], { nullable: true })
  @Type(() => CommentScalarWhereInput)
  deleteMany?: Array<CommentScalarWhereInput>;
}
