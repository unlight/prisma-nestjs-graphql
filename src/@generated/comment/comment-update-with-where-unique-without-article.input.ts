import { Field, InputType } from '@nestjs/graphql';

import { CommentUncheckedUpdateWithoutArticleInput } from './comment-unchecked-update-without-article.input';
import { CommentUpdateWithoutArticleInput } from './comment-update-without-article.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentUpdateWithWhereUniqueWithoutArticleInput {
    @Field(() => CommentWhereUniqueInput, {
        nullable: false,
    })
    where!: CommentWhereUniqueInput;

    @Field(() => CommentUpdateWithoutArticleInput, {
        nullable: false,
    })
    data!: CommentUpdateWithoutArticleInput | CommentUncheckedUpdateWithoutArticleInput;
}
