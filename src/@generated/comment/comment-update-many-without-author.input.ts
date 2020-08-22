import { Field, InputType } from '@nestjs/graphql';

import { CommentCreateWithoutAuthorInput } from './comment-create-without-author.input';
import { CommentScalarWhereInput } from './comment-scalar-where.input';
import { CommentUpdateManyWithWhereNestedInput } from './comment-update-many-with-where-nested.input';
import { CommentUpdateWithWhereUniqueWithoutAuthorInput } from './comment-update-with-where-unique-without-author.input';
import { CommentUpsertWithWhereUniqueWithoutAuthorInput } from './comment-upsert-with-where-unique-without-author.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType({})
export class CommentUpdateManyWithoutAuthorInput {
    @Field(() => [CommentCreateWithoutAuthorInput], {
        nullable: true,
        description: undefined,
    })
    create?: CommentCreateWithoutAuthorInput | CommentCreateWithoutAuthorInput[] | null;

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

    @Field(() => [CommentUpdateWithWhereUniqueWithoutAuthorInput], {
        nullable: true,
        description: undefined,
    })
    update?:
        | CommentUpdateWithWhereUniqueWithoutAuthorInput
        | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
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

    @Field(() => [CommentUpsertWithWhereUniqueWithoutAuthorInput], {
        nullable: true,
        description: undefined,
    })
    upsert?:
        | CommentUpsertWithWhereUniqueWithoutAuthorInput
        | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
        | null;
}
