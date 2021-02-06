import { Field, InputType } from '@nestjs/graphql';

import { CommentCreateManyAuthorEnvelopeInput } from './comment-create-many-author-envelope.input';
import { CommentCreateOrConnectWithoutauthorInput } from './comment-create-or-connect-withoutauthor.input';
import { CommentCreateWithoutAuthorInput } from './comment-create-without-author.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentCreateManyWithoutAuthorInput {
    @Field(() => [CommentCreateWithoutAuthorInput], {
        nullable: true,
    })
    create?: Array<CommentCreateWithoutAuthorInput>;

    @Field(() => [CommentCreateOrConnectWithoutauthorInput], {
        nullable: true,
    })
    connectOrCreate?: Array<CommentCreateOrConnectWithoutauthorInput>;

    @Field(() => CommentCreateManyAuthorEnvelopeInput, {
        nullable: true,
    })
    createMany?: CommentCreateManyAuthorEnvelopeInput;

    @Field(() => [CommentWhereUniqueInput], {
        nullable: true,
    })
    connect?: Array<CommentWhereUniqueInput>;
}
