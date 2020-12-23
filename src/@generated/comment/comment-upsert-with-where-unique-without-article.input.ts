import { Field, InputType } from '@nestjs/graphql';

import { CommentCreateWithoutArticleInput } from './comment-create-without-article.input';
import { CommentUpdateWithoutArticleInput } from './comment-update-without-article.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentUpsertWithWhereUniqueWithoutArticleInput {
    @Field(() => CommentWhereUniqueInput, {
        nullable: true,
    })
    where?: CommentWhereUniqueInput;

    @Field(() => CommentUpdateWithoutArticleInput, {
        nullable: true,
    })
    update?: CommentUpdateWithoutArticleInput;

    @Field(() => CommentCreateWithoutArticleInput, {
        nullable: true,
    })
    create?: CommentCreateWithoutArticleInput;
}
