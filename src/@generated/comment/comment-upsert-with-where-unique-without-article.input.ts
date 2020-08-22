import { Field, InputType } from '@nestjs/graphql';

import { CommentCreateWithoutArticleInput } from './comment-create-without-article.input';
import { CommentUpdateWithoutArticleDataInput } from './comment-update-without-article-data.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType({})
export class CommentUpsertWithWhereUniqueWithoutArticleInput {
    @Field(() => CommentWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: CommentWhereUniqueInput | null;

    @Field(() => CommentUpdateWithoutArticleDataInput, {
        nullable: true,
        description: undefined,
    })
    update?: CommentUpdateWithoutArticleDataInput | null;

    @Field(() => CommentCreateWithoutArticleInput, {
        nullable: true,
        description: undefined,
    })
    create?: CommentCreateWithoutArticleInput | null;
}
