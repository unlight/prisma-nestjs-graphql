import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithoutArticleInput } from './comment-update-without-article.input';

@InputType()
export class CommentUpdateWithWhereUniqueWithoutArticleInput {
    @Field(() => CommentWhereUniqueInput, { nullable: false })
    where!: CommentWhereUniqueInput;

    @Field(() => CommentUpdateWithoutArticleInput, { nullable: false })
    data!: CommentUpdateWithoutArticleInput;
}
