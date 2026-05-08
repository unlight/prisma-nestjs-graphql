import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input.ts';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { CommentUpdateWithoutAuthorInput } from './comment-update-without-author.input.ts';
import { CommentCreateWithoutAuthorInput } from './comment-create-without-author.input.ts';

@InputType()
export class CommentUpsertWithWhereUniqueWithoutAuthorInput {
  @Field(() => CommentWhereUniqueInput, { nullable: false })
  @Type(() => CommentWhereUniqueInput)
  where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

  @Field(() => CommentUpdateWithoutAuthorInput, { nullable: false })
  @Type(() => CommentUpdateWithoutAuthorInput)
  update!: Identity<CommentUpdateWithoutAuthorInput>;

  @Field(() => CommentCreateWithoutAuthorInput, { nullable: false })
  @Type(() => CommentCreateWithoutAuthorInput)
  create!: Identity<CommentCreateWithoutAuthorInput>;
}
