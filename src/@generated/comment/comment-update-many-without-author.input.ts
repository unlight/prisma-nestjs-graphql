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
    })
    create?: CommentCreateWithoutAuthorInput | Array<CommentCreateWithoutAuthorInput>;

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

    @Field(() => [CommentUpdateWithWhereUniqueWithoutAuthorInput], {
        nullable: true,
    })
    update?:
        | CommentUpdateWithWhereUniqueWithoutAuthorInput
        | Array<CommentUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [CommentUpdateManyWithWhereWithoutAuthorInput], {
        nullable: true,
    })
    updateMany?:
        | CommentUpdateManyWithWhereWithoutAuthorInput
        | Array<CommentUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [CommentScalarWhereInput], {
        nullable: true,
    })
    deleteMany?: CommentScalarWhereInput | Array<CommentScalarWhereInput>;

    @Field(() => [CommentUpsertWithWhereUniqueWithoutAuthorInput], {
        nullable: true,
    })
    upsert?:
        | CommentUpsertWithWhereUniqueWithoutAuthorInput
        | Array<CommentUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [CommentCreateOrConnectWithoutauthorInput], {
        nullable: true,
    })
    connectOrCreate?:
        | CommentCreateOrConnectWithoutauthorInput
        | Array<CommentCreateOrConnectWithoutauthorInput>;
}
