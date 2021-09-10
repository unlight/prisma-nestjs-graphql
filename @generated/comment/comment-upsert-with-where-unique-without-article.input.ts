import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithoutArticleInput } from './comment-update-without-article.input';
import { CommentCreateWithoutArticleInput } from './comment-create-without-article.input';

@InputType()
export class CommentUpsertWithWhereUniqueWithoutArticleInput {
    @Field(() => CommentWhereUniqueInput, { nullable: false })
    where!: CommentWhereUniqueInput;

    @Field(() => CommentUpdateWithoutArticleInput, { nullable: false })
    update!: CommentUpdateWithoutArticleInput;

    @Field(() => CommentCreateWithoutArticleInput, { nullable: false })
    create!: CommentCreateWithoutArticleInput;
}
