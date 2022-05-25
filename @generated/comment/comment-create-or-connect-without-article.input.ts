import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentCreateWithoutArticleInput } from './comment-create-without-article.input';

@InputType()
export class CommentCreateOrConnectWithoutArticleInput {
  @Field(() => CommentWhereUniqueInput, { nullable: false })
  @Type(() => CommentWhereUniqueInput)
  where!: CommentWhereUniqueInput;

  @Field(() => CommentCreateWithoutArticleInput, { nullable: false })
  @Type(() => CommentCreateWithoutArticleInput)
  create!: CommentCreateWithoutArticleInput;
}
