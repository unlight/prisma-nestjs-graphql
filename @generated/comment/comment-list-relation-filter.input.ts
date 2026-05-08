import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { CommentWhereInput } from './comment-where.input.ts';

@InputType()
export class CommentListRelationFilter {
  @Field(() => CommentWhereInput, { nullable: true })
  every?: Identity<CommentWhereInput>;

  @Field(() => CommentWhereInput, { nullable: true })
  some?: Identity<CommentWhereInput>;

  @Field(() => CommentWhereInput, { nullable: true })
  none?: Identity<CommentWhereInput>;
}
