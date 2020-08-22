import { Field, InputType } from '@nestjs/graphql';

import { CommentCreateWithoutArticleInput } from './comment-create-without-article.input';
import { CommentScalarWhereInput } from './comment-scalar-where.input';
import { CommentUpdateManyWithWhereNestedInput } from './comment-update-many-with-where-nested.input';
import { CommentUpdateWithWhereUniqueWithoutArticleInput } from './comment-update-with-where-unique-without-article.input';
import { CommentUpsertWithWhereUniqueWithoutArticleInput } from './comment-upsert-with-where-unique-without-article.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType({})
export class CommentUpdateManyWithoutArticleInput {
    @Field(() => [CommentCreateWithoutArticleInput], {
        nullable: true,
        description: undefined,
    })
    create?: CommentCreateWithoutArticleInput | CommentCreateWithoutArticleInput[] | null;

    @Field(() => [CommentWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[] | null;

    @Field(() => [CommentWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[] | null;

    @Field(() => [CommentWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[] | null;

    @Field(() => [CommentWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[] | null;

    @Field(() => [CommentUpdateWithWhereUniqueWithoutArticleInput], {
        nullable: true,
        description: undefined,
    })
    update?:
        | CommentUpdateWithWhereUniqueWithoutArticleInput
        | CommentUpdateWithWhereUniqueWithoutArticleInput[]
        | null;

    @Field(() => [CommentUpdateManyWithWhereNestedInput], {
        nullable: true,
        description: undefined,
    })
    updateMany?:
        | CommentUpdateManyWithWhereNestedInput
        | CommentUpdateManyWithWhereNestedInput[]
        | null;

    @Field(() => [CommentScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[] | null;

    @Field(() => [CommentUpsertWithWhereUniqueWithoutArticleInput], {
        nullable: true,
        description: undefined,
    })
    upsert?:
        | CommentUpsertWithWhereUniqueWithoutArticleInput
        | CommentUpsertWithWhereUniqueWithoutArticleInput[]
        | null;
}
