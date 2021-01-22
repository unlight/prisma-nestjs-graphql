import { Field, InputType } from '@nestjs/graphql';

import { CommentCreateOrConnectWithoutarticleInput } from './comment-create-or-connect-withoutarticle.input';
import { CommentCreateWithoutArticleInput } from './comment-create-without-article.input';
import { CommentUncheckedCreateWithoutArticleInput } from './comment-unchecked-create-without-article.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentUncheckedCreateManyWithoutArticleInput {
    @Field(() => [CommentCreateWithoutArticleInput], {
        nullable: true,
    })
    create?:
        | CommentCreateWithoutArticleInput
        | Array<CommentCreateWithoutArticleInput>
        | CommentUncheckedCreateWithoutArticleInput
        | Array<CommentUncheckedCreateWithoutArticleInput>;

    @Field(() => [CommentWhereUniqueInput], {
        nullable: true,
    })
    connect?: CommentWhereUniqueInput | Array<CommentWhereUniqueInput>;

    @Field(() => [CommentCreateOrConnectWithoutarticleInput], {
        nullable: true,
    })
    connectOrCreate?:
        | CommentCreateOrConnectWithoutarticleInput
        | Array<CommentCreateOrConnectWithoutarticleInput>;
}
