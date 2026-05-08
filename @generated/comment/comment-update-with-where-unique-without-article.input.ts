import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input.ts';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { CommentUpdateWithoutArticleInput } from './comment-update-without-article.input.ts';

@InputType()
export class CommentUpdateWithWhereUniqueWithoutArticleInput {
  @Field(() => CommentWhereUniqueInput, { nullable: false })
  @Type(() => CommentWhereUniqueInput)
  where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

  @Field(() => CommentUpdateWithoutArticleInput, { nullable: false })
  @Type(() => CommentUpdateWithoutArticleInput)
  data!: Identity<CommentUpdateWithoutArticleInput>;
}
