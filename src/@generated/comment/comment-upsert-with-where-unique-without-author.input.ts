import { Field, InputType } from '@nestjs/graphql';

import { CommentCreateWithoutAuthorInput } from './comment-create-without-author.input';
import { CommentUpdateWithoutAuthorInput } from './comment-update-without-author.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentUpsertWithWhereUniqueWithoutAuthorInput {
    @Field(() => CommentWhereUniqueInput, {
        nullable: true,
    })
    where?: CommentWhereUniqueInput;

    @Field(() => CommentUpdateWithoutAuthorInput, {
        nullable: true,
    })
    update?: CommentUpdateWithoutAuthorInput;

    @Field(() => CommentCreateWithoutAuthorInput, {
        nullable: true,
    })
    create?: CommentCreateWithoutAuthorInput;
}
