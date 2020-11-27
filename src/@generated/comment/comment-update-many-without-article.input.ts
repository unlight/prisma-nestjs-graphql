import { Field, InputType } from '@nestjs/graphql';

import { CommentCreateOrConnectWithoutarticleInput } from './comment-create-or-connect-withoutarticle.input';
import { CommentCreateWithoutArticleInput } from './comment-create-without-article.input';
import { CommentScalarWhereInput } from './comment-scalar-where.input';
import { CommentUpdateManyWithWhereWithoutArticleInput } from './comment-update-many-with-where-without-article.input';
import { CommentUpdateWithWhereUniqueWithoutArticleInput } from './comment-update-with-where-unique-without-article.input';
import { CommentUpsertWithWhereUniqueWithoutArticleInput } from './comment-upsert-with-where-unique-without-article.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentUpdateManyWithoutArticleInput {
    @Field(() => [CommentCreateWithoutArticleInput], {
        nullable: true,
    })
    create?: CommentCreateWithoutArticleInput | Array<CommentCreateWithoutArticleInput>;

    @Field(() => [CommentWhereUniqueInput], {
        nullable: true,
    })
    connect?: CommentWhereUniqueInput | Array<CommentWhereUniqueInput>;

    @Field(() => [CommentWhereUniqueInput], {
        nullable: true,
    })
    set?: CommentWhereUniqueInput | Array<CommentWhereUniqueInput>;

    @Field(() => [CommentWhereUniqueInput], {
        nullable: true,
    })
    disconnect?: CommentWhereUniqueInput | Array<CommentWhereUniqueInput>;

    @Field(() => [CommentWhereUniqueInput], {
        nullable: true,
    })
    delete?: CommentWhereUniqueInput | Array<CommentWhereUniqueInput>;

    @Field(() => [CommentUpdateWithWhereUniqueWithoutArticleInput], {
        nullable: true,
    })
    update?:
        | CommentUpdateWithWhereUniqueWithoutArticleInput
        | Array<CommentUpdateWithWhereUniqueWithoutArticleInput>;

    @Field(() => [CommentUpdateManyWithWhereWithoutArticleInput], {
        nullable: true,
    })
    updateMany?:
        | CommentUpdateManyWithWhereWithoutArticleInput
        | Array<CommentUpdateManyWithWhereWithoutArticleInput>;

    @Field(() => [CommentScalarWhereInput], {
        nullable: true,
    })
    deleteMany?: CommentScalarWhereInput | Array<CommentScalarWhereInput>;

    @Field(() => [CommentUpsertWithWhereUniqueWithoutArticleInput], {
        nullable: true,
    })
    upsert?:
        | CommentUpsertWithWhereUniqueWithoutArticleInput
        | Array<CommentUpsertWithWhereUniqueWithoutArticleInput>;

    @Field(() => [CommentCreateOrConnectWithoutarticleInput], {
        nullable: true,
    })
    connectOrCreate?:
        | CommentCreateOrConnectWithoutarticleInput
        | Array<CommentCreateOrConnectWithoutarticleInput>;
}
