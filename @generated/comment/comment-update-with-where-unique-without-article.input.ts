import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentUpdateWithoutArticleInput } from './comment-update-without-article.input';

@InputType()
export class CommentUpdateWithWhereUniqueWithoutArticleInput {
  @Field(() => CommentWhereUniqueInput, { nullable: false })
  @Type(() => CommentWhereUniqueInput)
  where!: CommentWhereUniqueInput;

  @Field(() => CommentUpdateWithoutArticleInput, { nullable: false })
  @Type(() => CommentUpdateWithoutArticleInput)
  data!: CommentUpdateWithoutArticleInput;
}
