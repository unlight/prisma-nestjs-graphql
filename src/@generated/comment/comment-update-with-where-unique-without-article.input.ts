import { InputType, Field } from '@nestjs/graphql';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithoutArticleDataInput } from './comment-update-without-article-data.input';

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
