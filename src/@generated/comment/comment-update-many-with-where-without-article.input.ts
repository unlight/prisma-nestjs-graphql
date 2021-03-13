import { Field, InputType } from '@nestjs/graphql';

import { CommentScalarWhereInput } from './comment-scalar-where.input';
import { CommentUpdateManyMutationInput } from './comment-update-many-mutation.input';

@InputType()
export class CommentUpdateManyWithWhereWithoutArticleInput {
    @Field(() => CommentScalarWhereInput, { nullable: false })
    where!: CommentScalarWhereInput;

    @Field(() => CommentUpdateManyMutationInput, { nullable: false })
    data!: CommentUpdateManyMutationInput;
}
