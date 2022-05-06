import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithoutAuthorInput } from './comment-update-without-author.input';

@InputType()
export class CommentUpdateWithWhereUniqueWithoutAuthorInput {
  @Field(() => CommentWhereUniqueInput, { nullable: false })
  where!: CommentWhereUniqueInput;

  @Field(() => CommentUpdateWithoutAuthorInput, { nullable: false })
  data!: CommentUpdateWithoutAuthorInput;
}
