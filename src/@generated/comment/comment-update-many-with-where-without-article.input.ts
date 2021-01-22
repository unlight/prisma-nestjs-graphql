import { Field, InputType } from '@nestjs/graphql';

import { CommentScalarWhereInput } from './comment-scalar-where.input';
import { CommentUncheckedUpdateManyWithoutCommentsInput } from './comment-unchecked-update-many-without-comments.input';
import { CommentUpdateManyMutationInput } from './comment-update-many-mutation.input';

@InputType()
export class CommentUpdateManyWithWhereWithoutArticleInput {
    @Field(() => CommentScalarWhereInput, {
        nullable: false,
    })
    where!: CommentScalarWhereInput;

    @Field(() => CommentUpdateManyMutationInput, {
        nullable: false,
    })
    data!:
        | CommentUpdateManyMutationInput
        | CommentUncheckedUpdateManyWithoutCommentsInput;
}
