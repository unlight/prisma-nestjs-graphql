import { Field, InputType } from '@nestjs/graphql';

import { CommentCreateWithoutArticleInput } from './comment-create-without-article.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentCreateOrConnectWithoutarticleInput {
  @Field(() => CommentWhereUniqueInput, {
    nullable: true,
  })
  where?: CommentWhereUniqueInput;

  @Field(() => CommentCreateWithoutArticleInput, {
    nullable: true,
  })
  create?: CommentCreateWithoutArticleInput;
}