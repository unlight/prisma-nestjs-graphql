import { ArgsType, Field } from '@nestjs/graphql';

import { CommentUpdateManyMutationInput } from './comment-update-many-mutation.input';
import { CommentWhereInput } from './comment-where.input';

@ArgsType()
export class UpdateManyCommentArgs {
    @Field(() => CommentUpdateManyMutationInput, { nullable: false })
    data!: CommentUpdateManyMutationInput;

    @Field(() => CommentWhereInput, { nullable: true })
    where?: CommentWhereInput;
}
