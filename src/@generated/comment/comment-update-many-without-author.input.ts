import { Field, InputType } from '@nestjs/graphql';

import { CommentCreateOrConnectWithoutauthorInput } from './comment-create-or-connect-withoutauthor.input';
import { CommentCreateWithoutAuthorInput } from './comment-create-without-author.input';
import { CommentScalarWhereInput } from './comment-scalar-where.input';
import { CommentUpdateManyWithWhereWithoutAuthorInput } from './comment-update-many-with-where-without-author.input';
import { CommentUpdateWithWhereUniqueWithoutAuthorInput } from './comment-update-with-where-unique-without-author.input';
import { CommentUpsertWithWhereUniqueWithoutAuthorInput } from './comment-upsert-with-where-unique-without-author.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentUpdateManyWithoutAuthorInput {
    @Field(() => [CommentCreateWithoutAuthorInput], {
        nullable: true,
        description: undefined,
    })
    create?: CommentCreateWithoutAuthorInput | Array<CommentCreateWithoutAuthorInput>;

    @Field(() => [CommentWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    connect?: CommentWhereUniqueInput | Array<CommentWhereUniqueInput>;

    @Field(() => [CommentWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    set?: CommentWhereUniqueInput | Array<CommentWhereUniqueInput>;

    @Field(() => [CommentWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    disconnect?: CommentWhereUniqueInput | Array<CommentWhereUniqueInput>;

    @Field(() => [CommentWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    delete?: CommentWhereUniqueInput | Array<CommentWhereUniqueInput>;

    @Field(() => [CommentUpdateWithWhereUniqueWithoutAuthorInput], {
        nullable: true,
        description: undefined,
    })
    update?:
        | CommentUpdateWithWhereUniqueWithoutAuthorInput
        | Array<CommentUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [CommentUpdateManyWithWhereWithoutAuthorInput], {
        nullable: true,
        description: undefined,
    })
    updateMany?:
        | CommentUpdateManyWithWhereWithoutAuthorInput
        | Array<CommentUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [CommentScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    deleteMany?: CommentScalarWhereInput | Array<CommentScalarWhereInput>;

    @Field(() => [CommentUpsertWithWhereUniqueWithoutAuthorInput], {
        nullable: true,
        description: undefined,
    })
    upsert?:
        | CommentUpsertWithWhereUniqueWithoutAuthorInput
        | Array<CommentUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [CommentCreateOrConnectWithoutauthorInput], {
        nullable: true,
        description: undefined,
    })
    connectOrCreate?:
        | CommentCreateOrConnectWithoutauthorInput
        | Array<CommentCreateOrConnectWithoutauthorInput>;
}
