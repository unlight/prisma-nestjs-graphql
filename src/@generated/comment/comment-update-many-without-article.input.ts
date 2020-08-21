import { InputType, Field } from '@nestjs/graphql';
import { CommentCreateWithoutArticleInput } from './comment-create-without-article.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithWhereUniqueWithoutArticleInput } from './comment-update-with-where-unique-without-article.input';
import { CommentUpdateManyWithWhereNestedInput } from './comment-update-many-with-where-nested.input';
import { CommentScalarWhereInput } from './comment-scalar-where.input';
import { CommentUpsertWithWhereUniqueWithoutArticleInput } from './comment-upsert-with-where-unique-without-article.input';

@InputType({})
export class CommentUpdateManyWithoutArticleInput {
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

    @Field(() => [CommentWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    set?: CommentWhereUniqueInput[] | null;

    @Field(() => [CommentWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    disconnect?: CommentWhereUniqueInput[] | null;

    @Field(() => [CommentWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    delete?: CommentWhereUniqueInput[] | null;

    @Field(() => [CommentUpdateWithWhereUniqueWithoutArticleInput], {
        nullable: true,
        description: undefined,
    })
    update?: CommentUpdateWithWhereUniqueWithoutArticleInput[] | null;

    @Field(() => [CommentUpdateManyWithWhereNestedInput], {
        nullable: true,
        description: undefined,
    })
    updateMany?: CommentUpdateManyWithWhereNestedInput[] | null;

    @Field(() => [CommentScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    deleteMany?: CommentScalarWhereInput[] | null;

    @Field(() => [CommentUpsertWithWhereUniqueWithoutArticleInput], {
        nullable: true,
        description: undefined,
    })
    upsert?: CommentUpsertWithWhereUniqueWithoutArticleInput[] | null;
}
