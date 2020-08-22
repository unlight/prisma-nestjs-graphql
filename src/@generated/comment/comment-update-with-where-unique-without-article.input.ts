import { Field, InputType } from '@nestjs/graphql';

import { CommentUpdateWithoutArticleDataInput } from './comment-update-without-article-data.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType({})
export class CommentUpdateWithWhereUniqueWithoutArticleInput {
    @Field(() => CommentWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: CommentWhereUniqueInput | null;

    @Field(() => CommentUpdateWithoutArticleDataInput, {
        nullable: true,
        description: undefined,
    })
    data?: CommentUpdateWithoutArticleDataInput | null;
}
