import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutArticleInput } from './comment-create-without-article.input';
import { CommentCreateOrConnectWithoutArticleInput } from './comment-create-or-connect-without-article.input';
import { CommentCreateManyArticleInputEnvelope } from './comment-create-many-article-input-envelope.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentCreateNestedManyWithoutArticleInput {
  @Field(() => [CommentCreateWithoutArticleInput], { nullable: true })
  create?: Array<CommentCreateWithoutArticleInput>;

  @Field(() => [CommentCreateOrConnectWithoutArticleInput], { nullable: true })
  connectOrCreate?: Array<CommentCreateOrConnectWithoutArticleInput>;

  @Field(() => CommentCreateManyArticleInputEnvelope, { nullable: true })
  createMany?: CommentCreateManyArticleInputEnvelope;

  @Field(() => [CommentWhereUniqueInput], { nullable: true })
  connect?: Array<CommentWhereUniqueInput>;
}
