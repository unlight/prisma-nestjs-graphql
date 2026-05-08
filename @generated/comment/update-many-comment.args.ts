import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { CommentUpdateManyMutationInput } from './comment-update-many-mutation.input.ts';
import { Type } from 'class-transformer';
import { CommentWhereInput } from './comment-where.input.ts';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyCommentArgs {
  @Field(() => CommentUpdateManyMutationInput, { nullable: false })
  @Type(() => CommentUpdateManyMutationInput)
  data!: Identity<CommentUpdateManyMutationInput>;

  @Field(() => CommentWhereInput, { nullable: true })
  @Type(() => CommentWhereInput)
  where?: Identity<CommentWhereInput>;

  @Field(() => Int, { nullable: true })
  limit?: number;
}
