import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentCreateWithoutArticleInput } from './comment-create-without-article.input';

@InputType()
export class CommentCreateOrConnectWithoutArticleInput {
  @Field(() => CommentWhereUniqueInput, { nullable: false })
  where!: CommentWhereUniqueInput;

  @Field(() => CommentCreateWithoutArticleInput, { nullable: false })
  create!: CommentCreateWithoutArticleInput;
}
