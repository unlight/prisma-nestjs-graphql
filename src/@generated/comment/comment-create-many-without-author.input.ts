import { Field, InputType } from '@nestjs/graphql';

import { CommentCreateOrConnectWithoutauthorInput } from './comment-create-or-connect-withoutauthor.input';
import { CommentCreateWithoutAuthorInput } from './comment-create-without-author.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentCreateManyWithoutAuthorInput {
    @Field(() => [CommentCreateWithoutAuthorInput], {
        nullable: true,
    })
    create?:
        | CommentCreateWithoutAuthorInput
        | Array<CommentCreateWithoutAuthorInput>;

    @Field(() => [CommentWhereUniqueInput], {
        nullable: true,
    })
    connect?: CommentWhereUniqueInput | Array<CommentWhereUniqueInput>;

    @Field(() => [CommentCreateOrConnectWithoutauthorInput], {
        nullable: true,
    })
    connectOrCreate?:
        | CommentCreateOrConnectWithoutauthorInput
        | Array<CommentCreateOrConnectWithoutauthorInput>;
}
