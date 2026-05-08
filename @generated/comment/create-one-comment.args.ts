import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { CommentCreateInput } from './comment-create.input.ts';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCommentArgs {
  @Field(() => CommentCreateInput, { nullable: false })
  @Type(() => CommentCreateInput)
  data!: Identity<CommentCreateInput>;
}
