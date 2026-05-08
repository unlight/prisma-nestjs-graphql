import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { CommentUpdateInput } from './comment-update.input.ts';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input.ts';

@ArgsType()
export class UpdateOneCommentArgs {
  @Field(() => CommentUpdateInput, { nullable: false })
  @Type(() => CommentUpdateInput)
  data!: Identity<CommentUpdateInput>;

  @Field(() => CommentWhereUniqueInput, { nullable: false })
  @Type(() => CommentWhereUniqueInput)
  where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
}
