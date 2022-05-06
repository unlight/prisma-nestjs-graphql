import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentCreateWithoutAuthorInput } from './comment-create-without-author.input';

@InputType()
export class CommentCreateOrConnectWithoutAuthorInput {
  @Field(() => CommentWhereUniqueInput, { nullable: false })
  where!: CommentWhereUniqueInput;

  @Field(() => CommentCreateWithoutAuthorInput, { nullable: false })
  create!: CommentCreateWithoutAuthorInput;
}
