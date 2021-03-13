import { ArgsType, Field } from '@nestjs/graphql';

import { CommentCreateInput } from './comment-create.input';

@ArgsType()
export class CreateOneCommentArgs {
    @Field(() => CommentCreateInput, { nullable: false })
    data!: CommentCreateInput;
}
