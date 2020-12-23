import { Field, InputType } from '@nestjs/graphql';

import { CommentScalarWhereInput } from './comment-scalar-where.input';
import { CommentUpdateManyMutationInput } from './comment-update-many-mutation.input';

@InputType()
export class CommentUpdateManyWithWhereWithoutAuthorInput {
    @Field(() => CommentScalarWhereInput, {
        nullable: true,
    })
    where?: CommentScalarWhereInput;

    @Field(() => CommentUpdateManyMutationInput, {
        nullable: true,
    })
    data?: CommentUpdateManyMutationInput;
}
