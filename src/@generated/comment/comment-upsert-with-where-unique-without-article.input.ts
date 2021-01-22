import { Field, InputType } from '@nestjs/graphql';

import { CommentCreateWithoutArticleInput } from './comment-create-without-article.input';
import { CommentUncheckedCreateWithoutArticleInput } from './comment-unchecked-create-without-article.input';
import { CommentUncheckedUpdateWithoutArticleInput } from './comment-unchecked-update-without-article.input';
import { CommentUpdateWithoutArticleInput } from './comment-update-without-article.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentUpsertWithWhereUniqueWithoutArticleInput {
    @Field(() => CommentWhereUniqueInput, {
        nullable: false,
    })
    where!: CommentWhereUniqueInput;

    @Field(() => CommentUpdateWithoutArticleInput, {
        nullable: false,
    })
    update!:
        | CommentUpdateWithoutArticleInput
        | CommentUncheckedUpdateWithoutArticleInput;

    @Field(() => CommentCreateWithoutArticleInput, {
        nullable: false,
    })
    create!:
        | CommentCreateWithoutArticleInput
        | CommentUncheckedCreateWithoutArticleInput;
}
