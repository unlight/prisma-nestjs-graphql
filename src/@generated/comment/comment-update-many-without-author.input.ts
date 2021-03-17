import { Field, InputType } from '@nestjs/graphql';

import { CommentCreateManyAuthorInputEnvelope } from './comment-create-many-author-input-envelope.input';
import { CommentCreateOrConnectWithoutAuthorInput } from './comment-create-or-connect-without-author.input';
import { CommentCreateWithoutAuthorInput } from './comment-create-without-author.input';
import { CommentScalarWhereInput } from './comment-scalar-where.input';
import { CommentUpdateManyWithWhereWithoutAuthorInput } from './comment-update-many-with-where-without-author.input';
import { CommentUpdateWithWhereUniqueWithoutAuthorInput } from './comment-update-with-where-unique-without-author.input';
import { CommentUpsertWithWhereUniqueWithoutAuthorInput } from './comment-upsert-with-where-unique-without-author.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentUpdateManyWithoutAuthorInput {
    @Field(() => [CommentCreateWithoutAuthorInput], { nullable: true })
    create?: Array<CommentCreateWithoutAuthorInput>;

    @Field(() => [CommentCreateOrConnectWithoutAuthorInput], { nullable: true })
    connectOrCreate?: Array<CommentCreateOrConnectWithoutAuthorInput>;

    @Field(() => [CommentUpsertWithWhereUniqueWithoutAuthorInput], { nullable: true })
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => CommentCreateManyAuthorInputEnvelope, { nullable: true })
    createMany?: CommentCreateManyAuthorInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], { nullable: true })
    connect?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentWhereUniqueInput], { nullable: true })
    set?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentWhereUniqueInput], { nullable: true })
    disconnect?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentWhereUniqueInput], { nullable: true })
    delete?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentUpdateWithWhereUniqueWithoutAuthorInput], { nullable: true })
    update?: Array<CommentUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [CommentUpdateManyWithWhereWithoutAuthorInput], { nullable: true })
    updateMany?: Array<CommentUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [CommentScalarWhereInput], { nullable: true })
    deleteMany?: Array<CommentScalarWhereInput>;
}
