import { Field, InputType } from '@nestjs/graphql';

import { CommentCreateManyArticleEnvelopeInput } from './comment-create-many-article-envelope.input';
import { CommentCreateOrConnectWithoutarticleInput } from './comment-create-or-connect-withoutarticle.input';
import { CommentCreateWithoutArticleInput } from './comment-create-without-article.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentCreateManyWithoutArticleInput {
    @Field(() => [CommentCreateWithoutArticleInput], {
        nullable: true,
    })
    create?: Array<CommentCreateWithoutArticleInput>;

    @Field(() => [CommentCreateOrConnectWithoutarticleInput], {
        nullable: true,
    })
    connectOrCreate?: Array<CommentCreateOrConnectWithoutarticleInput>;

    @Field(() => CommentCreateManyArticleEnvelopeInput, {
        nullable: true,
    })
    createMany?: CommentCreateManyArticleEnvelopeInput;

    @Field(() => [CommentWhereUniqueInput], {
        nullable: true,
    })
    connect?: Array<CommentWhereUniqueInput>;
}
