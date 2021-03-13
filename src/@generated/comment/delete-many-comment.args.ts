import { ArgsType, Field } from '@nestjs/graphql';

import { CommentWhereInput } from './comment-where.input';

@ArgsType()
export class DeleteManyCommentArgs {
    @Field(() => CommentWhereInput, { nullable: true })
    where?: CommentWhereInput;
}
