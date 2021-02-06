import { Field, InputType } from '@nestjs/graphql';

import { CommentCreateManyAuthorInput } from './comment-create-many-author.input';

@InputType()
export class CommentCreateManyAuthorEnvelopeInput {
    @Field(() => [CommentCreateManyAuthorInput], {
        nullable: false,
    })
    data!: Array<CommentCreateManyAuthorInput>;

    @Field(() => Boolean, {
        nullable: true,
    })
    skipDuplicates?: boolean;
}
