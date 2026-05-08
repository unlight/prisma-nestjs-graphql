import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutArticleInput } from './comment-create-without-article.input.ts';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutArticleInput } from './comment-create-or-connect-without-article.input.ts';
import type { Identity } from 'identity-type';
import { CommentCreateManyArticleInputEnvelope } from './comment-create-many-article-input-envelope.input.ts';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input.ts';

@InputType()
export class CommentCreateNestedManyWithoutArticleInput {
  @Field(() => [CommentCreateWithoutArticleInput], { nullable: true })
  @Type(() => CommentCreateWithoutArticleInput)
  create?: Array<CommentCreateWithoutArticleInput>;

  @Field(() => [CommentCreateOrConnectWithoutArticleInput], { nullable: true })
  @Type(() => CommentCreateOrConnectWithoutArticleInput)
  connectOrCreate?: Array<CommentCreateOrConnectWithoutArticleInput>;

  @Field(() => CommentCreateManyArticleInputEnvelope, { nullable: true })
  @Type(() => CommentCreateManyArticleInputEnvelope)
  createMany?: Identity<CommentCreateManyArticleInputEnvelope>;

  @Field(() => [CommentWhereUniqueInput], { nullable: true })
  @Type(() => CommentWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}
