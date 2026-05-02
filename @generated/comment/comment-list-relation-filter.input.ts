import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereInput } from './comment-where.input.ts';

@InputType()
export class CommentListRelationFilter {
  @Field(() => CommentWhereInput, { nullable: true })
  every?: CommentWhereInput;

  @Field(() => CommentWhereInput, { nullable: true })
  some?: CommentWhereInput;

  @Field(() => CommentWhereInput, { nullable: true })
  none?: CommentWhereInput;
}
