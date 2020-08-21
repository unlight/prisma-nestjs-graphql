import { InputType, Field } from '@nestjs/graphql';
import { CommentCreateWithoutArticleInput } from './comment-create-without-article.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType({})
export class CommentCreateManyWithoutArticleInput {
    @Field(() => [CommentCreateWithoutArticleInput], {
        nullable: true,
        description: undefined,
    })
    create?: CommentCreateWithoutArticleInput[] | null;

    @Field(() => [CommentWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    connect?: CommentWhereUniqueInput[] | null;
}
